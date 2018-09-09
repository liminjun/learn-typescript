import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typescript-for-angular-app';

  titleColor:string='red';
  withTitle:boolean=true;
  page:string="other";
  currentDate:Date=new Date();

  // name:string='';

  // setName(event){
  //   this.name=event.target.value;
  // }

  toggleTitleColor(){
    if(this.titleColor==='red'){
      this.titleColor='blue'
    }else{
      this.titleColor="red";
    }
  }
}
