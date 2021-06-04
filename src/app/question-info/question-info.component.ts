import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-info',
  templateUrl: './question-info.component.html',
  styleUrls: ['./question-info.component.css']
})
export class QuestionInfoComponent implements OnInit {

  
  // @Input() hide:any;
  hideStatus:boolean = true;

  // @Input() id:any;
  questionInfo:any = {};
  questionId:number = 0;
  

  constructor(private service: SharedService, private actRoute: ActivatedRoute) {
   }


  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {
      this.questionId = Number(params.get('questionId'));
    });

    this.loadQuestionInfo();
  }

  loadQuestionInfo(){
    this.service.getQuestionInfoById(this.questionId).subscribe(data=>{
      this.questionInfo=data;
      // this.DepartmentListWithoutFilter=data;
    });
  }

  showAnswer(){
    this.hideStatus = false;
  }

}
