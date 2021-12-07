import { Action, createReducer, on } from "@ngrx/store";
import { initialState } from ".";
import { connectionStatus, offline, online, slow, connectionChange, goodConnection } from "./actions";

const _connectionReducer = createReducer(initialState,
    on(connectionStatus, (state) => {
        return {
            ...state
        }
    }),
    on(connectionChange, (state, data) => {
        return {
            ...state,
            rtt: data.rtt
        }
    }),
    on(goodConnection, (state, data) => {
        return {
            ...state,
            rtt: data.rtt,
            status: "Good Internet connection"
        }
    })
)

export function connectionReducer(state: any, action: Action) {
    return _connectionReducer(state, action)
}