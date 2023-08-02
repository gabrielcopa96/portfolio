import { ChangeEvent } from "react";

export interface InputI {
    type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'phone' | 'url';
    placeholder?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}