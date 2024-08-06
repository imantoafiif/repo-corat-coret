"use client";

import Card from "@/components/Card";
import classes from './Content.module.css';
import Arrow from "@/components/Arrow";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Content = () => {
    const ref = useRef(null);
    const inView = useInView(ref, {
        once: true,
        amount: 1,
    });

    useEffect(() => {
        console.log("inview", inView)
    }, [inView])

    return (
        <div
            ref={ref} 
            className={classes['content-wrapper']}>
            <ArrowWrapper type={'top'} delay={0.5} />
            <CardWrapper order={1} />
            <CardWrapper order={2}/>
            <CardWrapper order={3}/>
            <ArrowWrapper type={'bottom'} />
        </div>
    )
}

const CardWrapper = ({ order }) => {
    return (
        <div className={classes[`card-${order}`]}>
            <Card 
                title='Efficient MDE Introduction' 
                subtitle='Use the Ontego method to learn how to introduce and use a mobile warehouse solution in 90 days.'    
            />
        </div>
    )
}

const ArrowWrapper = ({ type, delay = 0 }) => {
    return (    
        <div className={classes[`arrow-${type}`]}>
            <Arrow type={type} delay={delay} />
        </div>
    )
    
}

export default Content;