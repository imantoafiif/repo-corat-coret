"use client"

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import classes from './PhoneContent.module.css';
import Image from "next/image";

const PhoneContent = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        duration: 40,
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
                <div className={`${classes['control-item']} ${classes['active']}`}></div>
                <div className={classes['control-item']}></div>
                <div className={classes['control-item']}></div>
                <div className={classes['control-item']}></div>
            </div>
        </div>
        
    )
}

export default PhoneContent;