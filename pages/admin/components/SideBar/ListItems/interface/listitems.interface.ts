import type { Dispatch, SetStateAction } from "react";

export interface IItems {
    name: string,
    icon: string,
    path: string,
    active: boolean
}

export interface ItemI {
    active?: boolean;
    onChange?: Dispatch<SetStateAction<any>>;
    name: string;
}