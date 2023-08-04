import { type IItems } from "./interface/listitems.interface";

export const items: IItems[] = [
    {
        name: "Dashboard",
        icon: "dashboard",
        path: "/admin/dashboard",
        active: true
    },
    {
        name: "Usuarios",
        icon: "users",
        path: "/admin/users",
        active: false
    },
    {
        name: "Productos",
        icon: "products",
        path: "/admin/products",
        active: false
    }
]