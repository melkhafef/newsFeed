import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newsFeed';
  viewCom=false;
  viewRep=false;
  detectPost;
  detectComm;
  constructor(private httpService:HttpClient){}
  posts : string [];
  ngOnInit(){
    this.httpService.get('./assets/data.json').subscribe(res=>{
      this.posts = res as string[];
      console.log(this.posts);
    } ,(err : HttpErrorResponse)=>{
      console.log(err.message);
    })
  }
  viewComments(e){
    this.detectPost=e.path[5].id;
    console.log(this.viewCom);
    if(this.viewCom==true){
      this.viewCom = false;
    }
    else{
      this.viewCom = true;

    }
  }
  veiwReply(e){
    console.log(e);
    this.detectComm=e.path[4].id;
    console.log(this.viewCom);
    if (this.viewRep==true){
      this.viewRep = false;
    }
    else{
      this.viewRep = true;

    }
  }
}
