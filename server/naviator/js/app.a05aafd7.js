(function(t){function e(e){for(var a,c,o=e[0],r=e[1],l=e[2],b=0,f=[];b<o.length;b++)c=o[b],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var r=s[o];0!==n[r]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},n={app:0},i=[];function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=r;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"0ea0":function(t,e,s){},1:function(t,e){},"1e3e":function(t,e,s){},"3c47":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t.gamer?s("Game"):t._e(),t.gamer?t._e():s("Register")],1)},i=[],c=s("5530"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"game"},[a("div",{staticClass:"continer"},[a("audio",{ref:"betNotify",staticStyle:{display:"none"},attrs:{src:s("907b")}}),a("div",{staticClass:"_aviator_"},[a("div",{staticClass:"header_"},[a("Header",{attrs:{balance:t.gamer.balance,isAvtiveChat:t.activeChat}})],1),a("div",{staticClass:"bets_"},[a("Bets",{ref:"Bets",attrs:{bets:t.bets}})],1),a("div",{staticClass:"aviator_"},[a("Aviator",{attrs:{startGame:t.startGame,betStart:t.betStart,kfc:t.kfc,betStarts:t.activeBet,isFly:t.isFly}})],1)]),t.activeChat?a("div",{staticClass:"chat_"},[a("Chat",{attrs:{msgs:t.msgs,onlineUsers:t.onlineUsers}})],1):t._e()])])},r=[],l=(s("99af"),s("7db0"),s("c975"),s("b0c0"),s("96cf"),s("1da1")),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bets_container"},[s("div",{staticClass:"bet_connt"},[s("div",{staticClass:"bet_head"},[t._v(" Ընդհամենը ։ "),s("span",[t._v(t._s(t.bets.length))])]),t._m(0),s("div",{staticClass:"bets_content"},t._l(t.bets,(function(e){return s("div",{key:e.userId+Math.floor(20*Math.random()),staticClass:"bet",class:{win:"win"===e.status}},[s("div",{staticClass:"bet_overner_name bet_item"},[t._v(" "+t._s(e.name)+" ")]),s("div",{staticClass:"bet_overner_name bet_item"},[t._v(" "+t._s(e.bet)+" ")]),s("div",{staticClass:"bet_overner_name bet_item"},[t._v(" "+t._s(e.interest)+" ")]),s("div",{staticClass:"bet_overner_name bet_item"},[t._v(" "+t._s(e.winCount)+" ")])])})),0)])])},b=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bet_title"},[s("div",{staticClass:"bet_overner_name bet_item"},[t._v(" Խազացող ")]),s("div",{staticClass:"bet_overner_name bet_item"},[t._v(" Խազադրույք ")]),s("div",{staticClass:"bet_overner_name bet_item"},[t._v(" Գործակից ")]),s("div",{staticClass:"bet_overner_name bet_item"},[t._v(" Շահում ")])])}],f={name:"Bets",props:["bets"],watch:{bets:function(){this.$forceUpdate(),console.log("update")}}},m=f,h=(s("f0e6"),s("2877")),v=Object(h["a"])(m,u,b,!1,null,null,null),d=v.exports,_=s("2f62"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chat_content"},[a("audio",{ref:"notify",staticStyle:{display:"none"},attrs:{src:s("d1c7")}}),a("div",{staticClass:"chat_header"},[a("div",{staticClass:"online_users"},[t._v(" Օնլայն։ "),a("div",{staticClass:"_s"}),a("span",[t._v(t._s(t.onlineUsers))])]),a("div",{staticClass:"chat_head_text"},[t._v(" ՉԱԹ ")]),a("div",{staticClass:"notify_icon",class:{avtiveNotify:t.isNotify,inactiveNotify:!t.isNotify},on:{click:t.changeNotifycations}}),a("div",{staticClass:"close_chat",on:{click:function(){return t.closeChat()}}},[a("b",[t._v("X")])])]),a("div",{staticClass:"chat_continer"},[a("div",{ref:"chatBody",staticClass:"chat_cont"},t._l(t.msgs,(function(e){return a("div",{key:t.msgs.indexOf(e),staticClass:"chat_ms_item"},[a("div",{staticClass:"name"},[a("div",{staticClass:"user_icon",style:{"background-color":e.color}},[t._v(" "+t._s(e.from[0])+" ")]),t._v(" "+t._s(e.from)+" ")]),a("div",{staticClass:"mass"},[t._v(" "+t._s(e.msg)+" ")])])})),0),a("div",{staticClass:"new_mass"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.massege,expression:"massege"}],attrs:{type:"text"},domProps:{value:t.massege},on:{input:function(e){e.target.composing||(t.massege=e.target.value)}}}),a("button",{on:{click:function(){t.massege&&t.massege.length&&(t.sendMassege(t.massege),t.massege="")}}},[t._v(" Send ")])])])])},p=[],C={name:"chat",inject:["sendMassege","closeChat"],computed:Object(c["a"])({},Object(_["c"])(["gamer","isNotify"])),props:["msgs","onlineUsers"],watch:{msgs:function(t,e){var s=this;t.length&&this.gamer.name!==t[t.length-1].from&&this.isNotify&&this.$refs.notify.play(),setTimeout((function(){s.$refs.chatBody.scrollTop=s.$refs.chatBody.scrollHeight}),100)}},data:function(){return{massege:""}},methods:Object(c["a"])(Object(c["a"])({},Object(_["b"])(["set"])),{},{changeNotifycations:function(){this.set({key:"isNotify",value:!this.isNotify})}})},y=C,k=(s("f196"),Object(h["a"])(y,g,p,!1,null,null,null)),O=k.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"headder_content"},[t._m(0),s("div",{staticClass:"balance_continer"},[s("div",{staticClass:"balance"},[t._v(" "+t._s(t.balance)+" $ ")]),s("div",{staticClass:"config"},[s("button",{on:{click:t.clearGamer}},[t._v("Կրկին")]),t.isAvtiveChat?t._e():s("button",{on:{click:t.openChat}},[t._v("ՉԱԹ")])])])])])},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"icon"},[s("b",[t._v(" Naviator ")])])}],B={props:["balance","isAvtiveChat"],name:"Header",inject:["openChat"],methods:Object(c["a"])(Object(c["a"])({},Object(_["b"])(["setGamer"])),{},{clearGamer:function(){this.setGamer(null),window.location.reload()}})},G=B,x=(s("8baf"),Object(h["a"])(G,j,w,!1,null,null,null)),S=x.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"naviator_continer"},[s("div",{staticClass:"naviator"},[t.kfc?s("div",{staticClass:"kfc",class:{redKfc:t.isFly}},[s("h1",[t._v(t._s(t.kfc)+" X")]),t.isFly?s("h1",{staticClass:"redKfc"},[t._v("Թռավ ~")]):t._e()]):t._e(),s("div",{staticClass:"start_bets"},[t.betStarts?s("div",{staticClass:"loading"},[s("h1",[t._v("Նոր Փուլը Սկսվում Է")])]):t._e()]),s("div",{staticClass:"gif",class:{passive:!t.startGame,fly:t.isFly}})]),s("div",{staticClass:"_bet"},[s("div",{staticClass:"_bet_item"},[s("p",{staticClass:"err_msg"},[t._v(t._s(t.msg?t.msg:"")+" ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.bet0.bet,expression:"bet0.bet"}],attrs:{type:"number",disabled:t.startGame||t.bet0.isBet},domProps:{value:t.bet0.bet},on:{input:function(e){e.target.composing||t.$set(t.bet0,"bet",e.target.value)}}}),t.startGame&&t.bet0.isBet?t._e():s("button",{attrs:{disabled:!t.betStarts||t.bet0.isBet},on:{click:function(){return t.bet_(0)}}},[t._v(" Դնել ")]),t.bet0.isBet&&t.startGame?s("button",{on:{click:function(){return t._getBet(0)}}},[t._v(" Հանել! ")]):t._e()]),s("div",{staticClass:"_bet_item"},[s("p",{staticClass:"err_msg"},[t._v(t._s(t.msg?t.msg:"")+" ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.bet1.bet,expression:"bet1.bet"}],attrs:{type:"number",disabled:t.startGame||t.bet1.isBet},domProps:{value:t.bet1.bet},on:{input:function(e){e.target.composing||t.$set(t.bet1,"bet",e.target.value)}}}),t.startGame&&t.bet1.isBet?t._e():s("button",{attrs:{disabled:!t.betStarts||t.bet1.isBet},on:{click:function(){return t.bet_(1)}}},[t._v(" Դնել ")]),t.bet1.isBet&&t.startGame?s("button",{on:{click:function(){return t._getBet(1)}}},[t._v(" Հանել! ")]):t._e()])])])},M=[],$=s("d4ec"),A=s("bee2"),P=function(){function t(e,s,a,n){Object($["a"])(this,t),this.userId=a,this.betId=a+n,this.name=e,this.bet=s,this.status="wait",this.interest="-",this.winCount="-"}return Object(A["a"])(t,[{key:"win",value:function(t){this.interest=t,this.winCount=this.bet*this.interest}},{key:"lose",value:function(){}}]),t}(),U={name:"Aviator",props:["startGame","betStarts","kfc","isFly"],inject:["bet","getBet"],watch:{betStarts:function(t,e){t&&(this.bet0.isBet=!1,this.bet1.isBet=!1)},kfc:function(t,e){this.bet0.isBet&&(this.bet0.bet=Math.round(this.bet0._bet*t*100)/100),this.bet1.isBet&&(this.bet1.bet=Math.round(this.bet1._bet*t*100)/100)},isFly:function(t,e){t&&this.lose()}},data:function(){return{bet0:{isBet:!1,bet:"",_bet:""},bet1:{isBet:!1,bet:"",_bet:""},msg:!1}},computed:Object(c["a"])({},Object(_["c"])(["gamer"])),methods:Object(c["a"])(Object(c["a"])({},Object(_["b"])(["setGamer"])),{},{bet_:function(t){if(+this["bet".concat(t)].bet>6e4)return this.alertMessage("Մաքսիմալ խաղադրույքի չափը 60000");if(+this["bet".concat(t)].bet<20)return this.alertMessage("Մինիմալ խաղադրույքի չափը 20");if(+this["bet".concat(t)].bet>+this.gamer.balance)return this.alertMessage("Անբավարար միջոցներ");if(!this["bet".concat(t)].isBet){var e=new P(this.gamer.name,this["bet".concat(t)].bet,this.gamer.id,t);this["bet".concat(t)].isBet=!0,this["bet".concat(t)]._bet=+this["bet".concat(t)].bet,this["bet".concat(t)].bet=+this["bet".concat(t)].bet,this.bet(e)}},alertMessage:function(t){var e=this;this.msg=t,setTimeout((function(){e.msg=!1}),3e3)},_getBet:function(t){this["bet".concat(t)].isBet&&this.kfc&&(this.getBet(this.gamer.id+t,this.kfc,this["bet".concat(t)].bet),this.setGamer(Object(c["a"])(Object(c["a"])({},this.gamer),{},{balance:Math.round(100*(+this.gamer.balance+ +this["bet".concat(t)].bet))/100})),this["bet".concat(t)].bet="",this["bet".concat(t)]._bet="",this["bet".concat(t)].isBet=!1)},lose:function(){var t=this.gamer.balance;this.bet0.isBet&&(t-=this.bet0._bet),this.bet1.isBet&&(t-=this.bet1._bet),this.bet0.isBet=!1,this.bet0.bet="",this.bet0._bet="",this.bet1.isBet=!1,this.bet1.bet="",this.bet1._bet="",this.setGamer(Object(c["a"])(Object(c["a"])({},this.gamer),{},{balance:Math.round(100*t)/100}))}})},E=U,F=(s("af4f"),Object(h["a"])(E,N,M,!1,null,null,null)),T=F.exports,I=s("8055"),R=s.n(I),H={name:"Game",provide:function(){var t=this;return{sendMassege:this.sendMassege,bet:this.bet,closeChat:function(){t.activeChat=!1},openChat:function(){t.activeChat=!0},getBet:this.getBet}},computed:Object(c["a"])({},Object(_["c"])(["gamer","isNotify"])),components:{Header:S,Bets:d,Aviator:T,Chat:O},data:function(){return{bets:[],betStart:!1,msgs:[],socket:null,activeBet:!1,startGame:!1,kfc:!1,onlineUsers:0,activeChat:!0,isFly:!1}},created:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s=window.location.origin,t.socket=R.a.connect(s,{query:"id=".concat(t.gamer.id,"&name=").concat(t.gamer.name,"&balance=").concat(t.gamer.balance,"&color=").concat(t.gamer.color)}),t.setSocketLisstenets();case 3:case"end":return e.stop()}}),e)})))()},methods:{sendMassege:function(t){this.socket.emit("new-massege",{from:this.gamer.name,msg:t,like:0,color:this.gamer.color}),console.log("new-message"),this.activeChat=!0},setSocketLisstenets:function(){var t=this,e=this;this.socket.on("successful-connection",(function(e){var s=e.msgs,a=e.bets,n=e.users;console.log("successful-connection"),t.msgs=s,t.bets=a,t.onlineUsers=n})),this.socket.on("online-users",(function(t){var s=t.users;e.onlineUsers=s})),this.socket.on("one-bet",(function(s){var a=s.bet;console.log(a),e.bets.push(a),e.$refs.Bets.$forceUpdate(),t.isNotify&&t.$refs.betNotify.play()})),this.socket.on("new-massege",(function(t){e.msgs.push(t),e.activeChat=!0,console.log("new-message")})),this.socket.on("start-bets",(function(){console.log("startBets"),e.activeBet=!0,e.isFly=!1})),this.socket.on("end-bets",(function(){console.log("endBets"),e.activeBet=!1})),this.socket.on("start-show-game",(function(){console.log("start-show-game"),e.startGame=!0})),this.socket.on("show-kalficent",(function(t){var s=t.kfc;e.kfc=s})),this.socket.on("flew-away",(function(t){var s=t.kfc;e.kfc=s,e.isFly=!0,console.log("fly")})),this.socket.on("end-one-game",(function(){console.log("end-one-game"),e.kfc=!1,e.startGame=!1,e.bets=[]})),this.socket.on("geted-bet",(function(s){console.log(s);var a=t.bets.find((function(t){return t.betId===s.betId}));console.log(a),t.bets[t.bets.indexOf(a)]=s;var n=t.bets;t.bets=[],t.bets=n,console.log(t.bets),e.$refs.Bets.$forceUpdate()}))},bet:function(t){this.socket.emit("bet",t),console.log(t)},getBet:function(t,e,s){this.socket.emit("get-bet",{betId:t,int:e,winC:s})},startBetting:function(){},endBetting:function(){}}},J=H,K=(s("886f"),Object(h["a"])(J,o,r,!1,null,null,null)),L=K.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register",class:{hide:t.isSendet}},[s("div",{staticClass:"popup"},[s("p",[t._v("Your Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"Enter Name"},domProps:{value:t.name},on:{input:[function(e){e.target.composing||(t.name=e.target.value)},t.check],change:t.check,click:t.check,keydown:t.check}}),s("p",[t._v("Balance")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.balance,expression:"balance"}],attrs:{type:"text",placeholder:"Enter Your start Balance"},domProps:{value:t.balance},on:{input:[function(e){e.target.composing||(t.balance=e.target.value)},t.check],change:t.check,click:t.check,keydown:t.check}}),s("div",{staticClass:"button_cont"},[s("button",{class:[t.isActive?"active":"disable"],attrs:{disabled:!t.isActive},on:{click:t.setUser}},[t._v("Start !")])])])])},Y=[],q=(s("d3b7"),s("25f0"),s("ec26")),z={name:"Register",data:function(){return{name:"",balance:"",isActive:!1,isSendet:!1}},methods:Object(c["a"])(Object(c["a"])({},Object(_["b"])(["setGamer","set"])),{},{check:function(){this.name&&this.balance?this.isActive=!0:this.isActive=!1},setUser:function(){var t=this,e={name:this.name,balance:this.balance,id:Object(q["a"])(),color:"#".concat(Math.floor(16777216*Math.random()).toString(16))};setTimeout((function(){t.setGamer(e)}),1e3),this.isSendet=!0}})},D=z,Q=(s("f30e"),Object(h["a"])(D,X,Y,!1,null,null,null)),V=Q.exports,W={name:"App",computed:Object(c["a"])({},Object(_["c"])(["gamer"])),components:{Game:L,Register:V},data:function(){return{socket:null}},methods:Object(c["a"])({},Object(_["b"])(["setGamer"]))},Z=W,tt=(s("034f"),Object(h["a"])(Z,n,i,!1,null,null,null)),et=tt.exports,st=s("0e44");a["a"].use(_["a"]);var at=new _["a"].Store({plugins:[Object(st["a"])()],state:{gamer:null,isNotify:!0},mutations:{setGamer:function(t,e){t.gamer=e},set:function(t,e){var s=e.key,a=e.value;t[s]=a}},actions:{setGamer:function(t,e){var s=t.commit;s("setGamer",e)},set:function(t,e){var s=t.commit;s("set",e)}}});a["a"].config.productionTip=!1,new a["a"]({store:at,render:function(t){return t(et)}}).$mount("#app")},6860:function(t,e,s){},"6f6c":function(t,e,s){},"814e":function(t,e,s){},"85ec":function(t,e,s){},"886f":function(t,e,s){"use strict";s("814e")},"8baf":function(t,e,s){"use strict";s("6860")},"907b":function(t,e,s){t.exports=s.p+"media/soft_notification.9817d55f.mp3"},af4f:function(t,e,s){"use strict";s("3c47")},d1c7:function(t,e,s){t.exports=s.p+"media/newMess.aaf11eb9.mp3"},f0e6:function(t,e,s){"use strict";s("6f6c")},f196:function(t,e,s){"use strict";s("1e3e")},f30e:function(t,e,s){"use strict";s("0ea0")}});
//# sourceMappingURL=app.a05aafd7.js.map