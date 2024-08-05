import MobileContent from "../MobileContent";
import classes from '../List2.module.css';
import ContentList from "../ContentList";

const Content = () => {
    return (
        <div className={classes['content-wrapper']}>
            <MobileContent/>
            <ContentList/>
        </div>
    )
}

export default Content;