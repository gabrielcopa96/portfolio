import { Children, ReactElement, type PropsWithChildren, JSXElementConstructor } from 'react'
import Item from './Item'

const List = ({ children }: PropsWithChildren): ReactElement => {
    return (
        <ul>
            {
                Children.map(children, (child: any) => {
                    return child.type === Item ? <>{child}</> : <></>;
                })
            }
        </ul>
    )
}

List.Item = Item as () => ReactElement<JSXElementConstructor<HTMLElement>>;

export default List;