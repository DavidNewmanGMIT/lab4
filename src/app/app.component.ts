import { Component } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'labFour';
  count:number =0;
  hideLabel:boolean = true;

  starClick() {
    //alert("Whats the problem?");
    console.log("Button Pressed");
    this.count++;
  }

  starClickTwo() {   
    /*
    if(this.hideLabel == true)
    {
      this.hideLabel = false;
    }
    else{
      this.hideLabel = true;
    }
    */

    this.hideLabel = !this.hideLabel;
    
  }

}

