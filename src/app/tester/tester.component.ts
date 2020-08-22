import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss']
})
export class TesterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sayHello() {
    console.log('Hello');
  }
  sayBye() {
    console.log('Hello');
  }
}
