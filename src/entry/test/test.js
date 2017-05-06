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
        if (data.testCase) {
          var datas = [];
          for (var i = 0; i < data.testCase.length; i++) {
            var caseItem = data.testCase[i];
            datas.push({title:caseItem.desc,payload:caseItem});
          };
          Hero.out({datas:{name:'table',data:[{sectionTitle:'test case',rows:datas}]}});
        };
        var define = {};
        Utils.merge(define,data);
        define.testCase = '';
        Hero.out({datas:{name:'define',text:JSON.stringify(define,null,4)}});
        define.parent = 'parent';
        define.name = 'testing';
        Hero.out({datas:[{name:'parent',subViews:[define]}]});

    }

    @Message('true')
    payload(data){
        if (data.payload) {
          data.payload.desc = undefined;
          Hero.out({datas:{name:'test',text:JSON.stringify(data.payload,null,4)}});
          data.payload.name = 'testing';
          Hero.out({datas:[data.payload]});
        }else if (data.click || 'value' in data){
          Hero.out({datas:{name:'test',text:JSON.stringify(data,null,4)}});
        }
        if(data.appInfo){
         Hero.out({datas:{name:'test',text:JSON.stringify(data,null,4)}});
       }
       if(data.channel){
         Hero.out({datas:{name:'test',text:JSON.stringify(data,null,4)}});
       }
       if (data.get === 'location') {
        if (data.la && data.lo) {
          Hero.out({datas:{name:'testing',coordinate:{la:data.la,lo:data.lo}}});
        }
      }
    }
}
