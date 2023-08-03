import { PropsWithChildren } from "react";

export interface SelectI extends PropsWithChildren {
    value?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
}