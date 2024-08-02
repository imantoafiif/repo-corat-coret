import Items from '@/components/Items';
import classes from './ListItems.module.css';
import Button from '@/components/Button';

const ListItems = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes['items-wrapper']}>
                <h2>Optimierte MDE-Lösungen für SAP</h2>
                <Items list={['abc', 'abc', 'abc']}/>
            </div>
            <Button size='medium' btnText='LEARN MORE'/>
        </div>
    )
}

export default ListItems;