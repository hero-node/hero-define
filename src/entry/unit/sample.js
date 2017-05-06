import { Component, Boot, Hero, Message } from 'hero-js';
import { Entry } from 'hero-cli/decorator';
import getDefaultUIViews from './view';
import Utils from '../../utils/index';

var defaultUIViews = getDefaultUIViews();

@Entry()
@Component({
  view: defaultUIViews
})
export class DecoratePage {

    @Boot
    boot(){
      var data = Utils.getInitData();
      if (data.samples) {
      	Hero.out({datas:[{name:'parent',subViews:[data]}]});
      };
    }

    @Message('true')
    payload(data){

        if (data.payload) {
          data.payload.desc = undefined;
          Hero.out({datas:{name:'test',text:JSON.stringify(data.payload,null,4)}});
          data.payload.name = 'testing';
          Hero.out({datas:[data.payload]});
        }else if (data.click || 'value' in data || data.name){
          Hero.out({datas:{name:'test',text:JSON.stringify(data,null,4)}});
        }
        if(data.appInfo){
         Hero.out({datas:{name:'test',text:JSON.stringify(data,null,4)}});
       }
       if (data.click == 'first') {
                Hero.out({datas:[{name:'toast',text:'first'}]});
            }
            if (data.click == 'second') {
                Hero.out({datas:[{name:'toast',text:'second'}]});
            }
       if(data.channel){
         Hero.out({datas:{name:'test',text:JSON.stringify(data,null,4)}});
       }
       if (data.get == 'location') {
        if (data.la && data.lo) {
          Hero.out({datas:{name:'testing',coordinate:{la:data.la,lo:data.lo}}});
        }
      }

    }
}
