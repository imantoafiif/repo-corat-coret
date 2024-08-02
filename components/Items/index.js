import classes from './items.module.css';

const Items = ({ list = [] }) => {
    return (
        <div className={classes['list-wrapper']}>
            {
                list.map((item, index) => (
                    <div 
                        className={classes['item-wrapper']} 
                        key={index}>
                        <h3>Mobile Datenerfassung in Lager & Fertigung</h3>
                        <p>Sie möchten eine mobile SAP-Lösung in Lager oder Fertigung einführen. Dann ist der spezialisierte Ontego-Ansatz</p>
                    </div>
                ))
            }
        </div>
    )
};

export default Items;