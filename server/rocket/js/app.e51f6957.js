(function(t){function e(e){for(var n,c,o=e[0],r=e[1],l=e[2],v=0,m=[];v<o.length;v++)c=o[v],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&m.push(a[c][0]),a[c]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,o=1;o<s.length;o++){var r=s[o];0!==a[r]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=s[0]))}return t}var n={},a={app:0},i=[];function c(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=n,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(s,n,function(e){return t[e]}.bind(null,n));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=r;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"0ea0":function(t,e,s){},1:function(t,e){},"1e3e":function(t,e,s){},"3c47":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t.gamer?s("Game"):t._e(),t.gamer?t._e():s("Register")],1)},i=[],c=s("5530"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"game"},[s("div",{staticClass:"continer"},[s("div",{staticClass:"_aviator_"},[s("div",{staticClass:"header_"},[s("Header",{attrs:{balance:t.gamer.balance,isAvtiveChat:t.activeChat}})],1),s("div",{staticClass:"bets_"},[s("Bets",{attrs:{bets:t.bets}})],1),s("div",{staticClass:"aviator_"},[s("Aviator",{ref:"naviator",attrs:{startGame:t.startGame,betStart:t.betStart,kfc:t.kfc,betStarts:t.activeBet}})],1)]),t.activeChat?s("div",{staticClass:"chat_"},[s("Chat",{attrs:{msgs:t.msgs,onlineUsers:t.onlineUsers}})],1):t._e()])])},r=[],l=(s("b0c0"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bets_container"},[s("div",{staticClass:"bet_connt"},[s("div",{staticClass:"bet_head"},[t._v(" Ընդհամենը ։ "),s("span",[t._v(t._s(t.bets.length))])]),t._m(0),s("div",{staticClass:"bets_content"},t._l(t.bets,(function(e){return s("div",{key:e.userId+Math.floor(20*Math.random()),staticClass:"bet"},[s("div",{staticClass:"bet_overner_name bet_item"},[t._v(" "+t._s(e.name)+" ")]),s("div",{staticClass:"bet_overner_name bet_item"},[t._v(" "+t._s(e.bet)+" ")]),s("div",{staticClass:"bet_overner_name bet_item"},[t._v(" "+t._s(e.interest)+" ")]),s("div",{staticClass:"bet_overner_name bet_item"},[t._v(" "+t._s(e.winCount)+" ")])])})),0)])])}),u=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bet_title"},[s("div",{staticClass:"bet_overner_name bet_item"},[t._v(" Խազացող ")]),s("div",{staticClass:"bet_overner_name bet_item"},[t._v(" Խազադրույք ")]),s("div",{staticClass:"bet_overner_name bet_item"},[t._v(" Գործակից ")]),s("div",{staticClass:"bet_overner_name bet_item"},[t._v(" Շահում ")])])}],v={name:"Bets",props:["bets"]},m=v,d=(s("f0e6"),s("2877")),f=Object(d["a"])(m,l,u,!1,null,null,null),b=f.exports,h=(s("99af"),s("8055")),_=s.n(h),p={socket:null,connect:function(t){var e=window.location.origin;return this.socket=_.a.connect(e,{query:"id=".concat(t.id,"&name=").concat(t.name,"&balance=").concat(t.balance,"&color=").concat(t.color)}),this.socket.on("successful-connection",(function(t){var e=t.ms;console.log(e)})),this.socket}},g=s("2f62"),C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat_content"},[s("div",{staticClass:"chat_header"},[s("div",{staticClass:"online_users"},[t._v(" Օնլայն։ "),s("div",{staticClass:"_s"}),s("span",[t._v(t._s(t.onlineUsers))])]),s("div",{staticClass:"chat_head_text"},[t._v("ՉԱԹ")]),s("div",{staticClass:"close_chat",on:{click:function(){return t.closeChat()}}},[s("b",[t._v("X")])])]),s("div",{staticClass:"chat_continer"},[s("div",{staticClass:"chat_cont"},t._l(t.msgs,(function(e){return s("div",{key:t.msgs.indexOf(e),staticClass:"chat_ms_item"},[s("div",{staticClass:"name"},[s("div",{staticClass:"user_icon",style:{"background-color":e.color}},[t._v(" "+t._s(e.from[0])+" ")]),t._v(" "+t._s(e.from)+" ")]),s("div",{staticClass:"mass"},[t._v(" "+t._s(e.msg)+" ")])])})),0),s("div",{staticClass:"new_mass"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.massege,expression:"massege"}],attrs:{type:"text"},domProps:{value:t.massege},on:{input:function(e){e.target.composing||(t.massege=e.target.value)}}}),s("button",{on:{click:function(){t.sendMassege(t.massege),t.massege=""}}},[t._v(" Send ")])])])])},k=[],j={name:"chat",inject:["sendMassege","closeChat"],computed:Object(c["a"])({},Object(g["c"])(["color"])),props:["msgs","onlineUsers"],data:function(){return{massege:""}}},O=j,w=(s("f196"),Object(d["a"])(O,C,k,!1,null,null,null)),y=w.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"headder_content"},[t._m(0),s("div",{staticClass:"balance_continer"},[s("div",{staticClass:"balance"},[t._v(" "+t._s(t.balance)+" $ ")]),s("div",{staticClass:"config"},[s("button",{on:{click:t.clearGamer}},[t._v("Կրկին")]),t.isAvtiveChat?t._e():s("button",{on:{click:t.openChat}},[t._v("ՉԱԹ")])])])])])},B=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"icon"},[s("b",[t._v(" Naviator ")])])}],G={props:["balance","isAvtiveChat"],name:"Header",inject:["openChat"],methods:Object(c["a"])(Object(c["a"])({},Object(g["b"])(["setGamer"])),{},{clearGamer:function(){this.setGamer(null),window.location.reload()}})},S=G,$=(s("8baf"),Object(d["a"])(S,x,B,!1,null,null,null)),M=$.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"naviator_continer"},[s("div",{staticClass:"naviator"},["1"!=t.kfc?s("div",{staticClass:"kfc"},[s("h1",[t._v(t._s(t.kfc)+" X")])]):t._e(),s("div",{staticClass:"start_bets"},[t.betStarts?s("div",{staticClass:"loading"},[s("h1",[t._v("Նոր Փուլը Սկսվում Է")])]):t._e()]),s("div",{staticClass:"gif",class:{passive:!t.startGame}})]),s("div",{staticClass:"_bet"},[s("div",{staticClass:"_bet_item"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.bets[0],expression:"bets[0]"}],attrs:{type:"number"},domProps:{value:t.bets[0]},on:{input:function(e){e.target.composing||t.$set(t.bets,0,e.target.value)}}}),s("button",{attrs:{disabled:t.isBet0},on:{click:function(){return t.bet_(0)}}},[t._v("Խազադրույք")])]),s("div",{staticClass:"_bet_item"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.bets[1],expression:"bets[1]"}],attrs:{type:"number"},domProps:{value:t.bets[1]},on:{input:function(e){e.target.composing||t.$set(t.bets,1,e.target.value)}}}),s("button",{attrs:{disabled:t.isBet1},on:{click:function(){return t.bet_(1)}}},[t._v("Խազադրույք")])])])])},P=[],E=s("d4ec"),N=s("bee2"),U=function(){function t(e,s,n){Object(E["a"])(this,t),this.userId=n,this.name=e,this.bet=s,this.interest="-",this.winCount="-"}return Object(N["a"])(t,[{key:"win",value:function(t){this.interest=t,this.winCount=this.bet*this.interest}},{key:"lose",value:function(){}}]),t}(),T={name:"Aviator",props:["startGame","betStarts","kfc"],inject:["bet"],data:function(){return{bets:["",""],isBet0:!1,isBet1:!1}},computed:Object(c["a"])({},Object(g["c"])(["gamer"])),methods:{bet_:function(t){if(this.bets[t]){var e=new U(this.gamer.name,this.bets[t],this.gamer.id);console.log(e),this.bet(e),this["isBet".concat(t)]=!0,this.bets[t]=""}},activeBets:function(){this.isBet0=!1,this.isBet1=!1}}},H=T,R=(s("af4f"),Object(d["a"])(H,A,P,!1,null,null,null)),I=R.exports,J={name:"Game",provide:function(){var t=this;return{sendMassege:this.sendMassege,bet:this.bet,closeChat:function(){t.activeChat=!1},openChat:function(){t.activeChat=!0}}},computed:Object(c["a"])({},Object(g["c"])(["gamer"])),components:{Header:M,Bets:b,Aviator:I,Chat:y},data:function(){return{bets:[],betStart:!1,msgs:[],socket:null,activeBet:!1,startGame:!1,kfc:1,onlineUsers:0,activeChat:!0}},created:function(){this.socket=p.connect(this.gamer),this.setSocketLisstenets()},methods:{sendMassege:function(t){this.socket.emit("new-massege",{from:this.gamer.name,msg:t,like:0,color:this.gamer.color}),console.log("new-message"),this.activeChat=!0},setSocketLisstenets:function(){var t=this;this.socket.on("all-messages",(function(e){t.msgs=e.msgs,t.activeChat=!0,console.log("new-message")})),this.socket.on("online-users",(function(e){var s=e.users;t.onlineUsers=s})),this.socket.on("new-massege",(function(e){t.msgs.push(e),t.activeChat=!0,console.log("new-message")})),this.socket.on("start-bets",(function(){console.log("startBets"),t.$refs.naviator.activeBets(),t.activeBet=!0})),this.socket.on("end-bets",(function(){console.log("endBets"),t.activeBet=!1})),this.socket.on("start-show-game",(function(){console.log("start-show-game"),t.startGame=!0})),this.socket.on("end-one-game",(function(){console.log("end-one-game"),t.startGame=!1,t.kfc=1})),this.socket.on("start-game",(function(){console.log("start")})),this.socket.on("all-bets",(function(e){var s=e.bets;t.bets=s,console.log(t.bets)})),this.socket.on("show-kalficent",(function(e){var s=e.kfc;t.kfc=s}))},bet:function(t){this.socket.emit("bet",t)},startBetting:function(){},endBetting:function(){}}},L=J,X=(s("886f"),Object(d["a"])(L,o,r,!1,null,null,null)),Y=X.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register",class:{hide:t.isSendet}},[s("div",{staticClass:"popup"},[s("p",[t._v("Your Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"Enter Name"},domProps:{value:t.name},on:{input:[function(e){e.target.composing||(t.name=e.target.value)},t.check],change:t.check,click:t.check,keydown:t.check}}),s("p",[t._v("Balance")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.balance,expression:"balance"}],attrs:{type:"text",placeholder:"Enter Your start Balance"},domProps:{value:t.balance},on:{input:[function(e){e.target.composing||(t.balance=e.target.value)},t.check],change:t.check,click:t.check,keydown:t.check}}),s("div",{staticClass:"button_cont"},[s("button",{class:[t.isActive?"active":"disable"],attrs:{disabled:!t.isActive},on:{click:t.setUser}},[t._v("Start !")])])])])},z=[],D=(s("d3b7"),s("25f0"),s("ec26")),F={name:"Register",data:function(){return{name:"",balance:"",isActive:!1,isSendet:!1}},methods:Object(c["a"])(Object(c["a"])({},Object(g["b"])(["setGamer","set"])),{},{check:function(){this.name&&this.balance?this.isActive=!0:this.isActive=!1},setUser:function(){var t=this,e={name:this.name,balance:this.balance,id:Object(D["a"])(),color:"#".concat(Math.floor(16777216*Math.random()).toString(16))};setTimeout((function(){t.setGamer(e)}),1e3),this.isSendet=!0}})},K=F,Q=(s("f30e"),Object(d["a"])(K,q,z,!1,null,null,null)),V=Q.exports,W={name:"App",computed:Object(c["a"])({},Object(g["c"])(["gamer"])),components:{Game:Y,Register:V},data:function(){return{socket:null}},methods:Object(c["a"])({},Object(g["b"])(["setGamer"]))},Z=W,tt=(s("034f"),Object(d["a"])(Z,a,i,!1,null,null,null)),et=tt.exports,st=s("0e44");n["a"].use(g["a"]);var nt=new g["a"].Store({plugins:[Object(st["a"])()],state:{gamer:null,color:"red"},mutations:{setGamer:function(t,e){t.gamer=e},set:function(t,e){var s=e.key,n=e.value;t[s]=n}},actions:{setGamer:function(t,e){var s=t.commit;s("setGamer",e)},set:function(t,e){var s=t.commit;s("set",e)}}});n["a"].config.productionTip=!1,new n["a"]({store:nt,render:function(t){return t(et)}}).$mount("#app")},6860:function(t,e,s){},"6f6c":function(t,e,s){},"814e":function(t,e,s){},"85ec":function(t,e,s){},"886f":function(t,e,s){"use strict";s("814e")},"8baf":function(t,e,s){"use strict";s("6860")},af4f:function(t,e,s){"use strict";s("3c47")},f0e6:function(t,e,s){"use strict";s("6f6c")},f196:function(t,e,s){"use strict";s("1e3e")},f30e:function(t,e,s){"use strict";s("0ea0")}});
//# sourceMappingURL=app.e51f6957.js.map