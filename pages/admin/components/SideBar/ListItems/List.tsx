import { Children, type ReactElement, type PropsWithChildren, type JSXElementConstructor } from 'react'
import Item from './Item'
import styles from "./scss/list.module.scss";
import { ItemI } from './interface/listitems.interface';

const List = ({ children }: PropsWithChildren): ReactElement => {
    return (
        <ul className={styles.list}>
            {
                Children.map(children, (child: any) => {
                    return child.type === Item && <>{child}</>;
                })
            }
        </ul>
    )
}

List.Item = Item as (props: ItemI) => ReactElement<JSXElementConstructor<HTMLElement>>;

export default List;