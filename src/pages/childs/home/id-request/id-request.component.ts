import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-id-request',
  templateUrl: './id-request.component.html',
  styleUrls: ['./id-request.component.scss'],
})
export class IdRequestComponent implements OnInit {

  nextButtonVisible : boolean = false;
  backButtonVisible : boolean = false;
  @ViewChild(IonSlides) ionSlides : IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoHeight : true
  };

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    // this.ionSlides.lockSwipes(true);
  }

  async goBack(){
    if(await this.ionSlides.getActiveIndex() - 1 < 1) this.backButtonVisible = false;
    if(await this.ionSlides.getActiveIndex() - 1 <= 0) 
      {this.navController.back(); this.nextButtonVisible = false}
    else
      this.ionSlides.slidePrev();
  }

  async goNext(){
    if(await this.ionSlides.getActiveIndex() - 1 > 1) this.backButtonVisible = true;
    if(await this.ionSlides.getActiveIndex() - 1 > 0) this.nextButtonVisible = true;
      this.ionSlides.slideNext();
  }

}
