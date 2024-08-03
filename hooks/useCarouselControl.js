import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useState, useEffect, useCallback } from "react";

export const useCarouselControl = (interval) => {
    const [autoplayTimeout, setAutoplayTimeout] = useState(null);
    const [currentScreen, setCurrentScreen] = useState(0);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        duration: 30,
        watchDrag: true,
        breakpoints: {
            "(min-width: 128px)": {
                watchDrag: true,
            },
        },
    }, [Autoplay({
        delay: interval,
        stopOnInteraction: false, 
        stopOnMouseEnter: false, 
        rootNode: (emblaRoot) => emblaRoot.parentElement,
    })])

    const onButtonClick = useCallback(page => {
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
        }, interval);
        setAutoplayTimeout(autoplayResumeTimeout);
    }, [emblaApi, autoplayTimeout, interval])

    useEffect(() => {
        if(!emblaApi) return
        emblaApi.on('select', () => setCurrentScreen(emblaApi.selectedScrollSnap()));
    }, [emblaApi])

    return {
        onButtonClick,
        currentScreen,
        emblaRef
    }
}