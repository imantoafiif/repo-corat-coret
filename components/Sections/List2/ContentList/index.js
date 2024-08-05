import classes from './ContentList.module.css';
import Image from "next/image";
import glyph from '../../../../public/images/content/glyph3d.png';

const ContentList = () => {
    const items = [
        { title: 'Mobile MM Inventory', subtitle: 'Perpetual inventory or key date inventory in the storage location on the basis of inventory documents created in advance in SAP.' },
        { title: 'Mobile WM Inventory', subtitle: 'Counting of all storage quantities in a storage bin - on the key date or spread over the year.' },
        { title: 'Mobile EWM Inventory', subtitle: 'Counting of HU in EWM-managed warehouses by handheld - storage bin or product-related.' },
        { title: 'Zero Check & Corrections', subtitle: 'Integrated mobile residual quantity check for stock removal processes and direct correction of stocks.' },
    ]

    return (
        <div className={classes['content-wrapper']}>
            {
                items.map((item, key) => (
                    <ListItem key={key} title={item.title} subtitle={item.subtitle} />
                ))
            }
        </div>
    )
}

const ListItem = ({ title, subtitle }) => {
    return (
        <div className={classes['listitem-wrapper']}>
            <Image
                src={glyph}
                width={27}
                height={27}
                alt="glyph"
                unoptimized
            />
            <div className={classes['item-wrapper']}>
                <h3>{ title }</h3>
                <p>{ subtitle }</p>
            </div>
        </div>
    )
}

export default ContentList;