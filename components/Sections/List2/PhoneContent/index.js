"use client"

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import classes from './PhoneContent.module.css';
import Image from "next/image";
import { useState, useEffect } from "react";

const PhoneContent = () => {
    const [autoplayTimeout, setAutoplayTimeout] = useState(null);
    const [currentScreen, setCurrentScreen] = useState(0);
    
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        duration: 20,
        watchDrag: true,
        breakpoints: {
            "(min-width: 128px)": {
                watchDrag: true,
            },
        },
    }, [Autoplay({
        delay: 5000,
        stopOnInteraction: false, 
        stopOnMouseEnter: false, 
        rootNode: (emblaRoot) => emblaRoot.parentElement,
    })]);

    const onButtonClick = (emblaApi, page) => {
        if(!emblaApi) return
        const autoPlay = emblaApi?.plugins()?.autoplay;

        if(!autoPlay) return

        autoPlay.stop();
        emblaApi.scrollTo(page);
        setCurrentScreen(page);
        
        if(autoplayTimeout) {
            clearTimeout(autoplayTimeout);
        }

        const autoplayResumeTimeout = setTimeout(() => {
            autoPlay.play();
            emblaApi.scrollNext();
        }, 5000);
        setAutoplayTimeout(autoplayResumeTimeout);
    }

    useEffect(() => {
        if(!emblaApi) return
        emblaApi.on('select', () => setCurrentScreen(emblaApi.selectedScrollSnap()));
    }, [emblaApi])

    return (
        <div className={classes.daktau}>
            <div ref={emblaRef} className={classes['content-viewport']}>
                <div className={classes['content-container']}>
                    <div className={classes['content-slide']}>
                        <Image
                            src={`/images/list/EWM.svg`}
                            width={264}
                            height={468}
                            alt="German Team"
                            unoptimized
                        />
                    </div>
                    <div className={classes['content-slide']}>
                        <Image
                            src={`/images/list/WM.svg`}
                            width={264}
                            height={468}
                            alt="German Team"
                            unoptimized
                        />
                    </div>
                    <div className={classes['content-slide']}>
                        <Image
                            src={`/images/list/MM.svg`}
                            width={264}
                            height={468}
                            alt="German Team"
                            unoptimized
                        />
                    </div>
                </div>
            </div>
            <div className={classes['control-wrapper']}>
                {
                    [0, 1, 2].map((_, index) => (
                        <div 
                            key={index}
                            onClick={() => onButtonClick(emblaApi, index)} 
                            className={`${classes['control-item']} ${currentScreen == index ? classes['active'] : null}`}>
                        </div>
                    ))
                }
            </div>
        </div>
        
    )
}

export default PhoneContent;