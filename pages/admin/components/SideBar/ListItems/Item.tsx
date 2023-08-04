import React, { JSXElementConstructor, ReactElement } from 'react';
import styles from "./scss/item.module.scss";
import { ItemI } from './interface/listitems.interface';

const Item = ({ active, name, onChange }: ItemI): ReactElement<JSXElementConstructor<HTMLElement>> => {
    
    const handleClick = () => {
        onChange && onChange((prev: any) => {
            return prev.map((item: any) => {
                if (item.name === name) {
                    item.active = true;
                } else {
                    item.active = false;
                }
                return item;
            })
        })
    }
    
    return (
        <li
            className={`${styles.item} ${active ? styles.active : ""}`}
            onClick={() => handleClick()}
        >
            {name}
        </li>
    )
}

export default Item;