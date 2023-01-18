import { ReactElement } from "react"

const Logo = (): ReactElement<HTMLElement> => {
  return (
    <div className="logo">
      <div className="logo-left">Gabriel</div>
      <div className="logo-right">Copa</div>
    </div>
  )
}

export default Logo;