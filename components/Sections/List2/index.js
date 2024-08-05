import classes from './List2.module.css';
import ListTitle from './ListTitle';
import PhoneContent from './MobileContent';

const List2 = () => {
    return (
        <section className={classes['list-wrapper']}>
            <div className='container'>
                <ListTitle/>
                <PhoneContent/>
            </div>
        </section>
    )
}

export default List2;