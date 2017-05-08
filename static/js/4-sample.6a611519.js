!function(e){function o(t){if(r[t])return r[t].exports;var n=r[t]={exports:{},id:t,loaded:!1};return e[t].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}var r={};return o.m=e,o.c=r,o.p="/hero-define/",o(0)}({0:function(e,o,r){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function i(e,o,r,t,n){var i={};return Object.keys(t).forEach(function(e){i[e]=t[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce(function(r,t){return t(e,o,r)||r},i),n&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(n):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,o,i),i=null),i}Object.defineProperty(o,"__esModule",{value:!0}),o.DecoratePage=void 0;var a,l,u,c,s=function(){function e(e,o){for(var r=0;r<o.length;r++){var t=o[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(o,r,t){return r&&e(o.prototype,r),t&&e(o,t),o}}(),f=r(8),p=r(7),d=r(115),_=t(d),b=(0,_.default)();o.DecoratePage=(a=(0,p.Entry)(),l=(0,f.Component)({view:b}),a(u=l((c=function(){function e(){n(this,e)}return s(e,[{key:"boot",value:function(){f.Hero.out({globle:{key:"finishLoading"}})}}]),e}(),i(c.prototype,"boot",[f.Boot],Object.getOwnPropertyDescriptor(c.prototype,"boot"),c.prototype),u=c))||u)||u)},7:function(e,o){function r(e,o,r){Object.defineProperty(e,o,{enumerable:!1,configurable:!1,writable:!0,value:r})}function t(e){return function(o){r(o,"__entryConfig",e)}}e.exports={Entry:t}},8:function(module,exports){function _mergeAttributes(e,o){var r,t=Object.keys(o);for(r=0;r<t.length;r++)e[t[r]]=o[t[r]];return e}function view2Data(e){var o;if(e instanceof Array)for(o=0;o<e.length;o++)view2Data(e[o]);else e.subViews&&view2Data(e.subViews);e.name&&(window.ui2Data["_"+e.name]="",window.ui2Data.__defineSetter__(e.name,function(o){window.ui2Data["_"+e.name]=o;var r={name:e.name};"string"==typeof o?r.text=o:(_mergeAttributes(r,o),Object.keys(o).forEach(function(e){r[e]=o[e]})),Hero.out({datas:r})}),window.ui2Data.__defineGetter__(e.name,function(){return window.ui2Data["_"+e.name]}))}function sendMessage(e){var o;"IOS"===_deviceType?(_outObjects=e,o=document.createElement("iframe"),o.setAttribute("src","hero://ready"),document.documentElement.appendChild(o),o.parentNode.removeChild(o),o=null):"IOS8"===_deviceType?window.webkit.messageHandlers.native.postMessage(e):"ANDROID"===_deviceType?("object"==typeof e&&(e=JSON.stringify(e)),window.native.on(e)):window.Hero.page.on(e)}function loop(){}function outObjects(){var e="";return _outObjects&&(e="string"==typeof _outObjects?_outObjects:JSON.stringify(_outObjects),_outObjects=""),e}function __executeExpression(expression,data,page){return function(expression,__data,__page,window,Hero){var value=eval("expression");return value=eval(value)}(expression,data,page,null,null)}function onMessage(e){"string"==typeof e&&(e=JSON.parse(e)),e.name&&e.value&&(window.ui2Data["_"+e.name]=e.value),Hero.__beforeMessage.call(_currentPage,e),Hero.__messageList.forEach(function(o){var r=!1;"function"==typeof o.condition?r=o.condition.call(_currentPage,e):"boolean"==typeof o.condition&&(r=o.condition),r&&o.callback.call(_currentPage,e)}),Hero.__afterMessage.call(_currentPage,e)}function BeforeMessage(e,o,r){return Hero.__beforeMessage=e[o],r.writable=!1,r}function AfterMessage(e,o,r){return Hero.__afterMessage=e[o],r.writable=!1,r}function definePublicFreezeProp(e,o,r){Object.defineProperty(e,o,{enumerable:!0,configurable:!1,writable:!1,value:r})}function defineProp(e,o,r,t){Object.defineProperty(e,o,{enumerable:!!t,configurable:!1,writable:!0,value:r})}function defineReadOnlyProp(e,o,r){Object.defineProperty(e,o,{enumerable:!1,configurable:!1,writable:!1,value:r})}function resetUI(e){window.ui=e}function bootstrap(){"blank"!==window.ui&&sendMessage({ui:window.ui}),window.ui&&window.ui.views&&view2Data(window.ui.views),Hero.__boot.call(_currentPage)}function getDeviceType(){return _deviceType}function Component(e){return function(o){e||(e=emptyObject),e.view&&(defineProp(o,"__defaultViews",e.view),resetUI(e.view)),_currentPage=new o,"PC"!==getDeviceType()&&bootstrap(),"object"==typeof e?defineReadOnlyProp(Hero,"__heroConfig",e):console.warn("Invalid Parameters: Parameters in @Component should be Object")}}function ViewWillAppear(e,o,r){return Hero.__viewWillAppear=e[o],r.writable=!1,r}function ViewWillDisappear(e,o,r){return Hero.__viewWillDisppear=e[o],r.writable=!1,r}function Boot(e,o,r){return Hero.__boot=e[o],r.writable=!1,r}function Message(e){var o=!0;return"function"!=typeof e&&"undefined"!=typeof e&&(console.warn("Invalid Usage of @Message("+e+")"),o=!1),function(r,t,n){return o&&Hero.__messageList.push({condition:!e||e,callback:r[t]}),n}}function getUI(){return window.ui}function getState(){return window.ui2Data}function setState(e){e&&"object"==typeof e&&Object.keys(e).forEach(function(o){window.ui2Data[o]=e[o]})}function __viewWillDisppearCallback(){Hero.__viewWillDisppear.call(_currentPage)}function __viewWillAppearCallback(){Hero.__viewWillDisppear.call(_currentPage)}var Hero=window.Hero={},_outObjects="",_currentPage=null;window.ui={},window.ui2Data={};var _deviceType="PC",emptyObject={};!function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("hero-ios")!==-1?_deviceType="IOS":e.indexOf("hero-android")!==-1?_deviceType="ANDROID":e.indexOf("micromessenger")!==-1&&(_deviceType="WECHAT"),_deviceType}(),defineProp(Hero,"__heroConfig",{}),defineProp(Hero,"__boot",loop),defineProp(Hero,"__viewWillDisppear",loop),defineProp(Hero,"__viewWillAppear",loop),definePublicFreezeProp(Hero,"__viewWillDisppearCallback",__viewWillDisppearCallback),definePublicFreezeProp(Hero,"__viewWillAppearCallback",__viewWillAppearCallback),defineProp(Hero,"__beforeMessage",loop),defineProp(Hero,"__afterMessage",loop),defineReadOnlyProp(Hero,"__messageList",[]),definePublicFreezeProp(Hero,"boot",bootstrap),definePublicFreezeProp(Hero,"getState",getState),definePublicFreezeProp(Hero,"getUI",getUI),definePublicFreezeProp(Hero,"in",onMessage),definePublicFreezeProp(Hero,"out",sendMessage),definePublicFreezeProp(Hero,"outObjects",outObjects),definePublicFreezeProp(Hero,"resetUI",resetUI),definePublicFreezeProp(Hero,"setState",setState),definePublicFreezeProp(Hero,"updateView",view2Data),definePublicFreezeProp(Hero,"getDeviceType",getDeviceType),module.exports={Component:Component,Boot:Boot,Message:Message,ViewWillAppear:ViewWillAppear,ViewWillDisappear:ViewWillDisappear,BeforeMessage:BeforeMessage,AfterMessage:AfterMessage,Hero:Hero}},115:function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=window.location.origin,t=function(){return{backgroundColor:"4dd0e1",tintColor:"303e53",nav:{title:"Welecome to Hero",navigationBarHidden:!0},views:[{class:"HeroLabel",name:"name",textColor:"43a047",text:"Hello Hero!",size:36,frame:{w:"1x",h:"80"},alignment:"center"},{class:"HeroButton",titleColor:"ffffff",title:"探索更多",backgroundColor:"388e3c",cornerRadius:10,size:16,frame:{w:"0.5x",h:"44"},center:{x:"0.5x",y:"0.9x"},click:{command:"goto:"+r+"/hero_define/hero_defines.html"}},{class:"HeroButton",titleColor:"ffffff",title:"第一次交互",name:"btnFirstTry",backgroundColor:"43a047",cornerRadius:150,borderWidth:2,borderColor:"22ff22",size:24,frame:{w:"260",h:"260"},center:{x:"0.5x",y:"0.5x"},click:{datas:[{name:"name",text:"You are a hero !",size:36,textColor:"f57f17"},{name:"btnFirstTry",title:"Bingo!"}]}}]}};o.default=t}});