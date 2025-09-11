export type TToast = {
    id?: string,
    type: "primary" | "secondary" | "success" | "danger" | "warning",
    title?: string,
    message: string,
    delayApperance?: boolean,
}