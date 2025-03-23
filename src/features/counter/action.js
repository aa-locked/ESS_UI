export const increment = () => {
    return { type: "increment" }
}
export const decrement = () => {
    return { type: "decrement" }
}
export const incbyamt = (num) => {
    return { type: "incbyamt", payload: num }
}
export const reset = () => {
    return { type: "reset" }
}