"use client"

import classes from './PhoneContent.module.css';
import Image from "next/image";
import { useCarouselControl } from '@/hooks/useCarouselControl';

import EWM from '../../../../public/images/list/EWM.svg';
import WM from '../../../../public/images/list/WM.svg';
import MM from '../../../../public/images/list/MM.svg';

const PhoneContent = () => {
    const screens = [EWM, WM, MM];
    const interval = 1000;
    const { onButtonClick, currentScreen, emblaRef } = useCarouselControl(interval);

    return (
        <div className={classes['content-wrapper']}>
            <div ref={emblaRef} className={classes['content-viewport']}>
                <div className={classes['content-container']}>
                    {
                        screens.map((item, key) => (
                            <div
                                key={key} 
                                className={classes['content-slide']}>
                                <Image
                                    src={item}
                                    width={264}
                                    height={468}
                                    alt={`screen-${key}`}
                                    unoptimized
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={classes['control-wrapper']}>
                {
                    [0, 1, 2].map((_, index) => (
                        <div 
                            key={index}
                            onClick={() => onButtonClick(index)} 
                            className={`${classes['control-item']} ${currentScreen == index ? classes['active'] : null}`}>
                        </div>
                    ))
                }
            </div>
        </div>
        
    )
}

export default PhoneContent;