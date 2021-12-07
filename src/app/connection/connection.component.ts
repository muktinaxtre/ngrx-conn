import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Observer, Subscription } from 'rxjs';
import { ConnectionState } from '../store';
import { online, connectionStatus, connectionChange } from '../store/actions';
import { selectConnectivity } from '../store/selectors'
export declare var navigator: any;

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit, OnChanges {
  rtt: number = 0;
  rtt1: number = 0;
  temp: any;
  textfield: any

  connectionStatus$: any;
  connectionState$ = this.store.select(selectConnectivity)


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
    // this.checkStatus();
    // this.store.select(selectConnectivity).toPromise().then((data) => {
    //   console.log(data)
    // })
    // setInterval(() => {
    //   this.checkStatus();
    // }, 1000);

  }
  ngOnChanges(): void {
    // const x = this.store.select(selectConnectivity).subscribe(data => {
    //   // console.log(data)
    //   const data1 = JSON.parse(JSON.stringify(data))
    //   this.rtt = data1['rtt'];

    //   console.log('RTT: ', this.rtt)
    // })
    // console.log(x)
  }
  ngDoCheck() {
    console.log('okkk')
    this.rtt1 = this.rtt
  }

  checkStatus() {
    // this.store.select('appState').subscribe(data => {
    //   console.log(data)
    //   this.rtt = data.rtt;
    // })
    // this.connectionStatus$ = this.store.select('appState');
    // this.temp = this.connectionStatus$.actionsObserver._value.rtt;
    // console.log(this.temp);

    this.store.select(selectConnectivity).subscribe(data => {
      console.log(data)
      const data1 = JSON.parse(JSON.stringify(data))
      // this.rtt = data1['rtt'];
      this.changeRtt(data1.rtt)
      // console.log('RTT: ', this.rtt)
    })
  }
  changeRtt(rtt: any) {
    console.log(rtt)
    this.rtt = rtt
    // alert(rtt)
  }

  // ngOnDestroy() {
  //   if (this.connectionSubscription) {
  //     this.connectionSubscription.unsubscribe();
  //   }

  // }

  btnClick() {
    const val = { rtt: this.textfield }
    this.store.dispatch(connectionChange(val))
  }


  checkConnection() {
    const connection = navigator.connection;

    if (!connection) {
      // if the browser doesn't support
      return;
    }
    this.connection$().subscribe((rtt: number) => {
      console.log('connection changed')
      const val = { rtt }
      this.store.dispatch(connectionChange(val))
    });

    // this.connectionStatus$ = this.store.select('appState');
    // this.temp = this.connectionStatus$.actionsObserver._value.rtt;
    // console.log(this.temp);
  }
}



