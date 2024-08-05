import classes from './Decorator.module.css';

const Decorator = ({ isStatic = false, dynamicContents = null, currentScreen = null }) => {
    return (
        <div data-static={isStatic} className={classes['deco-wrapper']}>
            {
                isStatic ? 
                <Content content={<Warehouse/>} /> :
                dynamicContents.map((content, index) => <Content key={index} content={content} display={index == currentScreen}/>)
            }
        </div>
    )
}

const Content = ({content, display = null}) => {
    return (
        <div 
            data-active={display} 
            className={classes['deco-content']}>
            { content }
        </div>
    )
}

const Warehouse = () => {
    return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M28.9473 7.20111C28.344 6.93296 27.6553 6.93296 27.052 7.20111L6.05202 16.5344C5.20938 16.9089 4.66634 17.7446 4.66634 18.6667V49C4.66634 50.2887 5.71101 51.3333 6.99968 51.3333C8.28834 51.3333 9.33301 50.2887 9.33301 49V20.183L27.9997 11.8867L46.6663 20.183V49C46.6663 50.2887 47.711 51.3333 48.9997 51.3333C50.2883 51.3333 51.333 50.2887 51.333 49V18.6667C51.333 17.7446 50.79 16.9089 49.9473 16.5344L28.9473 7.20111ZM35.9662 24.7002C35.091 23.825 33.904 23.3333 32.6663 23.3333H27.9997C26.762 23.3333 25.575 23.825 24.6998 24.7002C23.8247 25.5753 23.333 26.7623 23.333 28H16.333C15.0443 28 13.9997 29.0447 13.9997 30.3333V49C13.9997 50.2887 15.0443 51.3333 16.333 51.3333H39.6663C40.955 51.3333 41.9997 50.2887 41.9997 49V35C41.9997 33.7113 40.955 32.6667 39.6663 32.6667H37.333V28C37.333 26.7623 36.8413 25.5753 35.9662 24.7002ZM37.333 37.3333H27.9997V46.6667H37.333V37.3333ZM23.333 46.6667H18.6663V32.6667H23.333V46.6667ZM27.9997 28H32.6663V32.6667H27.9997V28Z" fill="#2A2E34"/>
        </svg>
    )
}

export default Decorator;