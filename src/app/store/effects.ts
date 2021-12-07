import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { connectionChange, connectionStatus, goodConnection } from "./actions";
import { mergeMap, startWith, switchMap } from 'rxjs/operators'
import { Observable, Observer } from "rxjs";
export declare var navigator: any;

@Injectable()
export class ConnectivityEffects {
    rtt: any
    constructor(private actions$: Actions) { }

    connection$() {
        return new Observable((observer: Observer<any>) => {
            const { rtt } = navigator.connection;
            observer.next(rtt);

            const onConnectionChange = () => {
                const { rtt } = navigator.connection;
                observer.next(rtt);
            };

            navigator.connection.onchange = onConnectionChange;

            return () => {
                navigator.connection.onchange = onConnectionChange;
                observer.complete();
            };
        });
    }
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
            }),
            startWith()
        )
    })


    connectionStatus$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(connectionStatus),
            switchMap(async () => {
                this.rtt = await this.getRtt()
                console.log(this.rtt)
                return goodConnection({ rtt: this.rtt })
            })
        )
    })

    getRtt() {
        return new Promise((resolve, reject) => {
            this.connection$().subscribe((rtt: number) => {
                resolve(rtt)
            })
        })
    }
}