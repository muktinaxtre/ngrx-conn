import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Observer, Subscription } from 'rxjs';
import { ConnectionState } from '../store';
import { online, connectionStatus, connectionChange } from '../store/actions';
export declare var navigator: any;

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  rtt: number = 0;
  temp: any;

  connectionStatus$: any;

  connectionSubscription: Subscription | any;
  constructor(private store: Store<{ appState: ConnectionState }>) { }


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

  ngOnInit(): void {
    this.checkConnection();
    //this.checkStatus();

  }

  checkStatus() {
    // this.store.select('appState').subscribe(data => {
    //   console.log(data)
    //   this.rtt = data.rtt;
    // })
    this.connectionStatus$ = this.store.select('appState');
    this.temp = this.connectionStatus$.actionsObserver._value.rtt;
    console.log(this.temp);
  }

  ngOnDestroy() {
    if (this.connectionSubscription) {
      this.connectionSubscription.unsubscribe();
    }

  }



  checkConnection() {
    const connection = navigator.connection;

    if (!connection) {
      // if the browser doesn't support
      return;
    }
    this.connection$().subscribe((rtt: number) => {
      const val = { rtt }
      this.store.dispatch(connectionChange(val))
    });

    this.connectionStatus$ = this.store.select('appState');
    this.temp = this.connectionStatus$.actionsObserver._value.rtt;
    console.log(this.temp);
  }
}



