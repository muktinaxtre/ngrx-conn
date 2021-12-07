import { createAction, props } from "@ngrx/store";

export const offline = createAction('connection-offline')
export const online = createAction('connection-online')
export const slow = createAction('connection-slow')
export const connectionStatus = createAction(
    '[Connectivity] Check'
);

export const connectionChange = createAction(
    '[Connectivity] Connection',
    props<{ rtt: number }>()
)

export const goodConnection = createAction(
    '[Connectivity] Connection Good',
    props<{ rtt: number }>()
)