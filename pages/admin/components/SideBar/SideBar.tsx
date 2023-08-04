import { useState } from 'react';
import styles from "./sidebar.module.scss";
import Logo from '../Logo/Logo';
import List from './ListItems/List';
import { items } from './ListItems/items';

const SideBar = () => {

    const [itemList, setItemList] = useState(items)

    return (
        <nav className={styles.sidebar}>
            <Logo />
            <List>
                {
                    itemList.map((item, index) => {
                        return <List.Item key={index} active={item.active} name={item.name} onChange={setItemList} />
                    })
                }
            </List>
        </nav>
    )
}

export default SideBar;