import classes from '../MobileContent.module.css';

const Pagination = ({ contents, onClick, currentScreen }) => {
    return (
        <div className={classes['control-wrapper']}>
            {contents.map((_, index) => (
                <div 
                    key={index}
                    onClick={() => onClick(index)} 
                    className={`${classes['control-item']} ${currentScreen == index ? classes['active'] : null}`}>
                </div>
            ))}
        </div>
    )
}

export default Pagination;