import React, { PropsWithChildren, ReactElement } from 'react'

interface propsBackground extends PropsWithChildren {
   title: string
}

const Background = ({ title, children }: propsBackground): ReactElement<HTMLElement> => {
   return (
      <div className="background">
         <div className="background__title">
            <h1>{title}</h1>
         </div>
         <div>{children}</div>
      </div>
   )
}

export default Background