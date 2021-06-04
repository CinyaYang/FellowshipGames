import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private service: SharedService) {
    
   }

  @Input() name:any;
  @Input() id:any;

  categoryName:string="";
  categoryId:number=0;
  questionList:any = [];

  ngOnInit(): void {
    this.categoryName = this.name;
    this.categoryId = this.id;
    this.refreshQuestionList();
  }

  refreshQuestionList(){
    this.service.getQuestionsByCategory(this.categoryId).subscribe(data=>{
      this.questionList=data;
      // this.DepartmentListWithoutFilter=data;
    });
  }

  updateQuestionStatus(question:any){
    question.Answered = true;
    this.service.updateQuestionStatus(question).subscribe(res=>{
      // alert(res.toString());
    });
  }

}
