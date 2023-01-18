import { Dispatch, SetStateAction } from "react";

export type typePropsHome = {
   theme: string;
   setTheme: Dispatch<SetStateAction<string>>
}