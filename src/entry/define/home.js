import { Component, Boot, Message, Hero } from 'hero-js';
import { Entry } from 'hero-cli/decorator';
import getDefaultUIViews from './view';
import heroDefines from '../../data/hero';
import mafiaDefines from '../../data/mafia';

var host = window.location.origin;

var defaultUIViews = getDefaultUIViews();

@Entry()
@Component({
  view: defaultUIViews
})
export class DecoratePage {

    @Boot
    boot(){
        var datas = [];
        var heros = [];
        for (var i = 0; i < heroDefines.length; i++) {
          var define = heroDefines[i];
           if (define.displayName) {
            heros.push({title:define.displayName,payload:define});
          }
          else{
            heros.push({title:define.class,payload:define});
          }
        };
        datas.push({sectionTitle:'Hero定义与单元测试',rows:heros});
        var mafias = [];
        for (i = 0; i < mafiaDefines.length; i++) {
          define = mafiaDefines[i];
          if (define.displayName) {
            mafias.push({title:define.displayName,payload:define});
          }
          else{
            mafias.push({title:define.class,payload:define});
          }

        };
        datas.push({sectionTitle:'Mafia定义',rows:mafias});
        Hero.out({datas:{name:'table',data:datas}});

    }

    @Message(function(data){
      return data.payload && data.payload.testCase;
    })
    testCase(data) {
      localStorage.boot = JSON.stringify(data.payload);
      Hero.out({command:'goto:'+host+'/entry/test/test.html'});
    }
    @Message(function(data){
      return data.payload && data.payload.samples;
    })
    samples(data) {
      localStorage.boot = JSON.stringify(data.payload);
      Hero.out({command:'goto:'+host+'/entry/unit/sample.html'});
    }
}
