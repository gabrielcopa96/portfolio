import { useState, type JSXElementConstructor, type ReactElement, Children, cloneElement } from 'react';
import styles from "./select.module.scss";
import type { SelectI } from './interface/select.interface';
import { motion } from "framer-motion"

const Select = (props: SelectI): ReactElement<JSXElementConstructor<HTMLElement>> => {

  const { value, onChange, children } = props;

  const [openSelect, setOpenSelect] = useState(false);

  const extendedProps = (child: any) => {
    const newProps = {
      ...child.props,
      valueSelected: value ? value : "Seleccione una opcion",
      setValueOption: onChange,
      setCloseOptions: setOpenSelect,
    }
    return cloneElement(child, newProps)
  }


  return (
    <>
      <div className={`${styles.select} ${openSelect && styles.active}`} onClick={() => setOpenSelect(!openSelect)}>
        <span id="value-span" className={styles.value}>{value ? value : "Seleccione una opcion"}</span>
      </div>
      {openSelect && Children.map(children, (child: any) => extendedProps(child))}
    </>
  )
}

export const Options = (props: { options: Array<any>, valueSelected?: string; setValueOption?: any; setCloseOptions?: any; }): ReactElement<JSXElementConstructor<HTMLElement>> => {

  const { options, valueSelected, setValueOption, setCloseOptions } = props

  return (
    <motion.div
      className={styles.options}
      initial={{
        opacity: 0,
        height: 0
      }}
      animate={{
        opacity: 1,
        height: "120px",
        transition: {
          duration: 0.2
        }
      }}
    >
      {
        options.map((option, index) => (
          <motion.span
            key={index}
            className={`${styles.option} ${option === valueSelected && styles.optionSelected}`}
            onClick={() => {
              setValueOption(option)
              setCloseOptions(false)
            }}
          >
            {option}
          </motion.span>
        ))
      }
    </motion.div>
  )
}

Select.Options = Options;

export default Select;