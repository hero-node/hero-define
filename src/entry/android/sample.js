import { Component, Boot, Hero } from 'hero-js';
import { Entry } from 'hero-cli/decorator';
import getDefaultUIViews from './view';

var defaultUIViews = getDefaultUIViews();

@Entry()
@Component({
  view: defaultUIViews
})
export class DecoratePage {

    @Boot
    boot(data){
      Hero.out({globle:{key:'finishLoading'}});
    }
}
