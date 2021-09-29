(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{20:function(e,n,t){},21:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var i,r,s,o,c=t(2),a=t.n(c),l=t(9),d=t.n(l),u=(t(19),t(14)),h=(t(20),t(21),t(3)),p=t(4),f=t(1),m=p.a.article(i||(i=Object(h.a)(["\n  text-align: center;\n  font-size: 1.5rem;\n  font-wight: bold;\n  color: #c9d1ee;\n  padding-top: 50px;\n"]))),b=function(){return Object(f.jsx)(m,{children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("h1",{children:"pomodoro"})})})},j=p.a.article(r||(r=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  ul {\n    display: flex;\n    align-items: center;\n    list-style: none;\n    background-color: #151932;\n    border-radius: 35px;\n    padding: 10px 10px;\n    over-flow: hidden;\n    gap: 3px;\n\n    li {\n      padding: 15px 25px;\n\n      a {\n        font-size: 1rem;\n        font-weight: bold;\n        color: #5d6179;\n        text-decoration: none;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      @media screen and (max-width: 425px) {\n        padding: 10px 18px;\n\n        a {\n          font-size: 0.75rem;\n        }\n      }\n\n      @media screen and (max-width: 320px) {\n        padding: 10px 20px;\n\n        a {\n          font-size: 0.6rem;\n        }\n      }\n    }\n\n    .active {\n      background-color: #f8716f;\n      border-radius: 30px;\n\n      a {\n        color: #151932;\n      }\n    }\n  }\n"]))),x=function(){return Object(f.jsx)(j,{children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("ul",{className:"modes",children:[Object(f.jsx)("li",{className:"active",id:"work",children:Object(f.jsx)("a",{href:"#",title:"Pomodoro Timer Button",children:"pomodoro"})}),Object(f.jsx)("li",{id:"shortBreak",children:Object(f.jsx)("a",{href:"#",title:"Short Break Timer Button",children:"short break"})}),Object(f.jsx)("li",{id:"longBreak",children:Object(f.jsx)("a",{href:"#",title:"Long Break Timer Button",children:"long break"})})]})})})},g=p.a.article(s||(s=Object(h.a)(['\n  position: relative;\n  border-radius: 50%;\n\n  .pause {\n    color: #dae1ff;\n    font-size: 1rem;\n    position: absolute;\n    left: 53%;\n    transform: translateX(-50%);\n    letter-spacing: 15px;\n    bottom: 85px;\n    font-weight: 450;\n  }\n\n  .result {\n    color: #dae1ff;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 75px;\n    font-weight: 900;\n    font-family: "Josefin Sans";\n    font-size: 4.7rem;\n  }\n\n  ::after {\n    content: "";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    background-color: #151932;\n    z-index: -1;\n    border-radius: 50%;\n  }\n\n  ::before {\n    content: "";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    transform: scale(1.13);\n    left: 0;\n    background-image: linear-gradient(150deg, #151932 40%, #2c305a);\n    z-index: -1;\n    border-radius: 50%;\n\n    box-shadow: 15px 30px 130px #000000e6, -10px 0px 100px #4a54a9;\n  }\n\n  @media screen and (max-width: 320px) {\n    ::before {\n      transform: scale(1.03);\n    }\n  }\n']))),k=function(){return Object(f.jsxs)(g,{children:[Object(f.jsx)("canvas",{height:"300",width:"300",id:"counter"}),Object(f.jsx)("span",{id:"timer",children:Object(f.jsx)("span",{className:"result"})}),Object(f.jsx)("span",{className:"pause",children:"PAUSE"})]})},O=t(13),v=p.a.article(o||(o=Object(h.a)(["\n  .icon {\n    font-size: 2rem;\n    margin-top: 150px;\n    margin-bottom: 50px;\n    color: #797e9d;\n    transition: 0.5s;\n\n    :hover {\n      cursor: pointer;\n      color: #d5e1fd;\n    }\n  }\n"]))),y=function(){return Object(f.jsxs)(v,{children:[Object(f.jsx)("div",{className:"hello"}),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)(O.a,{className:"icon"})})]})},w=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(b,{}),Object(f.jsx)(x,{}),Object(f.jsx)(k,{}),Object(f.jsx)(y,{})]})};d.a.render(Object(f.jsxs)(a.a.StrictMode,{children:[Object(f.jsx)("div",{className:"overlay"}),Object(f.jsxs)("ul",{className:"sittings",children:[Object(f.jsx)(u.a,{className:"close-icon"}),Object(f.jsx)("li",{className:"reset",children:Object(f.jsx)("a",{href:"#",title:"Reset Button",children:"Reset"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"https://github.com/a7m3d000",target:"_blank",title:"Github Link",children:"Github"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100010871888286",target:"_blank",title:"Contact Me Link",children:"Contact Me"})})]}),Object(f.jsx)(w,{})]}),document.getElementById("root"));for(var S=1499,B=1499,N=document.querySelector(".modes").children,L=[N[0],N[1],N[2]],D=[],q=function(){var e=C[z];D.push(e),e.addEventListener("click",(function(){switch(this.classList.add("active"),D.filter((function(n){return n!==e})).map((function(e){return e.classList.remove("active")})),this.textContent.trim()){case"pomodoro":B=1499,S=1499;break;case"short break":B=299,S=299;break;case"long break":B=599,S=599}}))},z=0,C=L;z<C.length;z++)q();var I,E=document.getElementById("counter").getContext("2d"),M=E.canvas.width,P=E.canvas.height;setInterval((function(){I=B/S*Math.PI*2*S,E.clearRect(0,0,M,P),E.lineWidth=12,E.strokeStyle="#ff6e6c",E.beginPath(),E.arc(151,154,130,4.72,I/S+4.72),E.stroke(),0==B&&(B=1),B--}),1e3);var T={started:!1,minutes:0,seconds:0,fillerIncrement:0,interval:null,minutesDom:null,secondsDom:null,fillerDom:null,result:null,init:function(){var e=this;this.result=document.querySelector(".result"),this.interval=setInterval((function(){e.intervalCallback.apply(e)}),1e3),e.startWork.apply(e),document.querySelector("#work").addEventListener("click",(function(){e.startWork.apply(e)})),document.querySelector("#shortBreak").addEventListener("click",(function(){e.startShortBreak.apply(e)})),document.querySelector("#longBreak").addEventListener("click",(function(){e.startLongBreak.apply(e)}))},resetVariables:function(e,n,t){this.minutes=e,this.seconds=n,this.started=t,this.fillerIncrement=200/(60*this.minutes)},startWork:function(){this.resetVariables(25,0,!0)},startShortBreak:function(){this.resetVariables(5,0,!0)},startLongBreak:function(){this.resetVariables(15,0,!0)},toDoubleDigit:function(e){return e<10?"0"+parseInt(e,10):e},updateDom:function(){this.result.innerHTML=this.toDoubleDigit(this.minutes)+":"+this.toDoubleDigit(this.seconds)},intervalCallback:function(){if(!this.started)return!1;if(0==this.seconds){if(0==this.minutes)return void this.timerComplete();this.seconds=59,this.minutes--}else this.seconds--;this.updateDom()},timerComplete:function(){this.started=!1}};window.onload=function(){T.init()};var V=document.querySelector(".overlay"),W=document.querySelector(".icon"),J=document.querySelector(".sittings"),R=document.querySelector(".reset"),A=document.querySelector(".close-icon");W.onclick=function(){V.style.display="block",J.style.left="0"},R.onclick=function(){window.location.reload()},A.onclick=function(){J.style.left="-250px",V.style.display="none"}}},[[25,1,2]]]);
//# sourceMappingURL=main.bd40ca0b.chunk.js.map