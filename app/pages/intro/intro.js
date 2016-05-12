import {Page,NavController,NavParams} from 'ionic-angular';
import {Signin} from '../signin/signin'

@Page({
  templateUrl: 'build/pages/intro/intro.html',
})

export class Intro {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
  constructor(nav,navParams){
    this.nav = nav;
    console.log(name);
  }

  skip(){
    console.log(this.nav);

    this.nav.push(Signin);
  }
}
