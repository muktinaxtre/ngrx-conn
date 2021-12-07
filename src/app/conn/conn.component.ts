import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { connectionStatus } from '../store/actions';
import { selectConnectivity } from '../store/selectors';

@Component({
  selector: 'app-conn',
  templateUrl: './conn.component.html',
  styleUrls: ['./conn.component.css']
})
export class ConnComponent implements OnInit {
  connectionState$ = this.store.select(selectConnectivity)
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(connectionStatus())
  }

}
