import Content from './Content';
import classes from './List2.module.css';
import ListTitle from './ListTitle';

const List2 = () => {
    return (
        <section className={classes['list-wrapper']}>
            <div className='container'>
                <ListTitle/>
                <Content/>
            </div>
        </section>
    )
}

export default List2;