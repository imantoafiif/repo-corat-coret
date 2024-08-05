import classes from '../MobileContent.module.css';
import Image from "next/image";

const Content = ({ emblaRef, contents }) => {
    return (
        <div ref={emblaRef} className={classes['content-viewport']}>
            <div className={classes['content-container']}>
                {contents.map((item, key) => (
                    <div
                        key={key} 
                        className={classes['content-slide']}>
                        <Image
                            src={item}
                            width={264}
                            height={468}
                            alt={`screen-${key}`}
                            unoptimized
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Content;