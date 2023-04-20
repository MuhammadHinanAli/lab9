import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage-angular'; //import
//import { NavController} from '@ionic/angular'; //import for navigating
@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  myStatus:string =""; //varuable to store the status such as sad , happy.

  constructor(private storage:Storage){ } //private navCtrl:NavController //navigating

  async onSave(){  //method with async
    await this.storage.create();  //built in function //created a databse
    await this.storage.set("status", this.myStatus); //built in function //will not run till the first prompt runs// set it adn pass the key
    //await this.navCtrl.navigateBack('/home'); //to navigate after the second prompt to the home page
  }

  ngOnInit() {
  }

}
