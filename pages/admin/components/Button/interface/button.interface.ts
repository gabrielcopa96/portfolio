

export interface ButtonI {
    type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
    children: string;
    onClick?: () => void;
    disabled?: boolean;
}