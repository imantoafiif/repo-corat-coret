import Card from '@/components/Card';
import CardTitle from './CardTitle';
import classes from './Cards.module.css';
import Arrows from '../../Arrow';
import Content from './Content';

const Cards = () => {
    return (
        <section className={classes.wrapper}>
            <div className={`container ${classes['card-wrapper']}`}>
                <CardTitle/>
                <Content/>
            </div>
        </section>
    )
}

export default Cards;