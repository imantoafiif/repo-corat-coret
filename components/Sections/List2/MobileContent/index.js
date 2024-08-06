"use client"

import classes from './MobileContent.module.css';
import Image from "next/image";
import { useCarouselControl } from '@/hooks/useCarouselControl';

import EWM from '../../../../public/images/content/EWM.svg';
import WM from '../../../../public/images/content/WM.svg';
import MM from '../../../../public/images/content/MM.svg';
import NK from '../../../../public/images/content/NK.svg';
import chasis from '../../../../public/images/content/chasis.png';
import Content from './Content';
import Pagination from './Pagination';
import Decorator from './Decorator';

const MobileContent = () => {
    const contents = [
        { screen: MM, decorator: <p>MM</p> },
        { screen: WM, decorator: <p>WM</p> },
        { screen: EWM, decorator: <p>EWM</p> },
        { screen: NK, decorator: <Check/> }
    ]
    const interval = 5000;
    const { onButtonClick, currentScreen, emblaRef } = useCarouselControl(interval);

    return (
        <div className={classes['content-wrapper']}>
            <div className={classes['chasis-wrapper']}>
                <Image
                    src={chasis}
                    fill
                    alt={'mobile chasis'}
                    unoptimized
                />
                <Content emblaRef={emblaRef} contents={contents.map(item => item.screen)} />
                {
                    ['active', 'passive'].map((item, index) => (
                        <div key={index} className={`${classes['decorator']} ${classes[`decorator-${item}`]}`}>
                            <Decorator isStatic={item === 'passive'} dynamicContents={contents.map(item => item.decorator)} currentScreen={currentScreen} />
                        </div>
                    ))
                }
            </div>
            <Pagination contents={contents.map(item => item.screen)} onClick={onButtonClick} currentScreen={currentScreen} />
        </div>
    )
}

const Check = () => {
    return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M48.3163 14.6834C49.2275 15.5946 49.2275 17.072 48.3163 17.9832L24.9829 41.3166C24.0717 42.2278 22.5943 42.2278 21.6831 41.3166L10.0164 29.6499C9.1052 28.7387 9.1052 27.2613 10.0164 26.3501C10.9276 25.4389 12.405 25.4389 13.3163 26.3501L23.333 36.3668L45.0164 14.6834C45.9277 13.7722 47.405 13.7722 48.3163 14.6834Z" 
                fill="#2A2E34"/>
        </svg>

    )
}

export default MobileContent;