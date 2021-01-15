import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suites',
  templateUrl: './suites.component.html',
  styleUrls: ['./suites.component.css']
})
export class SuitesComponent implements OnInit {

  suiteFibo = [1,1,2,3,5,8,13,21,34,55]
  constructor() { }

  ngOnInit(): void {
  }

}
