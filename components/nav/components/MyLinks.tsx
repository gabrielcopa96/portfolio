import type { JSXElementConstructor, ReactElement } from "react";
import styles from "./headinglinks.module.scss";
import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

export const MyLinks = (): ReactElement<JSXElementConstructor<HTMLElement>> => {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link href="https://www.linkedin.com/in/gabriel-copa-full-stack/" target="_blank" rel="nofollow">
          <AiFillLinkedin size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="https://github.com/gabrielcopa96" target="_blank" rel="nofollow">
          <AiFillGithub size="2.4rem" />
        </Link>
      </motion.span>

    </div>
  );
};
