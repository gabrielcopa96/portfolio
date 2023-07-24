import { type JSXElementConstructor, type ReactElement } from 'react';

const Loader = (): ReactElement<JSXElementConstructor<HTMLElement>> => {
    return (
        <div>loader</div>
    )
}

export default Loader;