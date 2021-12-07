import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conntest',
  templateUrl: './conntest.component.html',
  styleUrls: ['./conntest.component.css']
})
export class ConntestComponent implements OnInit {
  connStatus: any
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    setInterval(() => {
      this.checkSped()
    }, 5000)
  }

  checkSped() {
    const startTime = Date.now()
    this.http.get("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg").subscribe((data) => {
      this.connStatus = data
      console.log(data)
    }, (error) => {
      console.log(error)
      this.connStatus = error
    })
  }

}
