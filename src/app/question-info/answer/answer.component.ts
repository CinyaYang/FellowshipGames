import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() answer:any;
  answerString:String = "";

  constructor() { }

  ngOnInit(): void {
    this.answerString = this.answer;
  }

}
