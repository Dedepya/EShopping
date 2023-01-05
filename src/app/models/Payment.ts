export interface Payment {
    Name: string,
    card: number,
    expiry: string,
    cvv: number,
    address: string,
    city: string,
    state: string,
    zip: string
}