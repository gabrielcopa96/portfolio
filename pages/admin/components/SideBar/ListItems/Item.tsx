import React, { JSXElementConstructor, ReactElement } from 'react'

const Item = (): ReactElement<JSXElementConstructor<HTMLElement>> => {
  return (
    <li>Item</li>
  )
}

export default Item;