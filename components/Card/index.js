import PropTypes from "prop-types";
import classes from './Card.module.css';

const Card = ({
    title = null,
    subtitle = null,
    variant = 'blue',
    type = 'solid'
}) => {
    return (
        <div className={`${classes['border-wrapper']} ${classes[`${variant.toLocaleLowerCase()}-border`]}`}>
            <div className={`${classes['card-wrapper']} ${classes[`${type.toLocaleLowerCase()}`]}  ${classes[`${type.toLocaleLowerCase()}-${variant.toLocaleLowerCase()}-bg`]}`}>
                { type === 'glass' && <CardGlyph/> }
                <div className={classes['content-wrapper']}>
                    <h3>{ title }</h3>
                    <p>{ subtitle }</p>
                </div>
            </div>
        </div>
    )
}

const CardGlyph = () => {
    return (
        <svg 
            width="48" 
            height="48" 
            viewBox="0 0 48 48" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M43.0515 6.2987C43.6411 6.66311 44 7.30685 44 8V34C44 34.7575 43.572 35.4501 42.8944 35.7889L30.8944 41.7889C30.3314 42.0704 29.6686 42.0704 29.1056 41.7889L18 36.2361L6.89443 41.7889C6.27445 42.0988 5.53817 42.0657 4.94854 41.7013C4.3589 41.3369 4 40.6932 4 40V14C4 13.2425 4.428 12.5499 5.10557 12.2111L17.1056 6.21115C17.6686 5.92962 18.3314 5.92962 18.8944 6.21115L30 11.7639L41.1056 6.21115C41.7255 5.90116 42.4618 5.93429 43.0515 6.2987ZM28 15.2361L20 11.2361V32.7639L28 36.7639V15.2361ZM32 36.7639L40 32.7639V11.2361L32 15.2361V36.7639ZM16 32.7639V11.2361L8 15.2361V36.7639L16 32.7639Z" 
                fill="white"
            />
        </svg>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    variant: PropTypes.oneOf(['blue', 'dark']),
    type: PropTypes.oneOf(['solid', 'glass'])
}

export default Card;