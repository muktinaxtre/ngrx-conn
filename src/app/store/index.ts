export interface ConnectionState {
    rtt: number,
    status: string
}

export const initialState: ConnectionState = {
    rtt: 0,
    status: "Offline"
}