export interface User {
    email: string,
    password: string,
}

export interface Message {
    message: string,
}

export interface Feedback {
    name: string,
    phone: number,
    text: string,
    _id?: string,
}