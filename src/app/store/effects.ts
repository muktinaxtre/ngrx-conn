import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { connectionChange, goodConnection } from "./actions";
import { switchMap } from 'rxjs/operators'

@Injectable()
export class ConnectivityEffects {
    constructor(private actions$: Actions) { }

    connectionChange$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(connectionChange),
            switchMap(async ({ rtt }) => {
                try {
                    return goodConnection({
                        rtt
                    })
                } catch (error) {
                    return goodConnection({
                        rtt
                    })
                }
            })
        )
    })
}