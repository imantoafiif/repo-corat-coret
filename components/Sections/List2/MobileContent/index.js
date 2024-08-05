"use client"

import classes from './MobileContent.module.css';
import Image from "next/image";
import { useCarouselControl } from '@/hooks/useCarouselControl';

import EWM from '../../../../public/images/content/EWM.svg';
import WM from '../../../../public/images/content/WM.svg';
import MM from '../../../../public/images/content/MM.svg';
import chasis from '../../../../public/images/content/chasis.png';
import Content from './Content';
import Pagination from './Pagination';

const MobileContent = () => {
    const contents = [EWM, WM, MM];
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
            </div>
            <Content emblaRef={emblaRef} contents={contents} />
            <Pagination contents={contents} onClick={onButtonClick} currentScreen={currentScreen} />
        </div>
    )
}



export default MobileContent;