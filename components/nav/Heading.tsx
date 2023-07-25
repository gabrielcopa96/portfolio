import type { JSXElementConstructor, ReactElement } from "react";
import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = (): ReactElement<JSXElementConstructor<HTMLElement>> => {
  return (
    <header className={styles.heading}>
      <MyLinks />
        <OutlineButton onClick={() => window.open("/GABRIELCOPA.pdf")}>
          Resume CV
        </OutlineButton>
    </header>
  );
};
