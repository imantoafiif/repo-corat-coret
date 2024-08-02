import Image from 'next/image';
import classes from './ListIllustration1.module.css';
import ListItems from './ListItems';

const ListIllustration1 = () => {
    return (
        <div className={classes.wrapper}>
            <ListItems/>
        </div>
    )
}

export default ListIllustration1;