(window.webpackJsonp=window.webpackJsonp||[]).push([[8,9],{179:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c});var s=a(0);function c(e,t){var a=Object(s.useRef)();Object(s.useEffect)(function(){a.current=e},[e]),Object(s.useEffect)(function(){if(null!==t){var e=setInterval(function(){a.current&&a.current()},t);return function(){return clearInterval(e)}}},[t])}},180:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return i});var s=a(0),c=a.n(s),l=a(179);a(181);function i(){var e=["stage-1","stage-2","stage-3","stage-2"],t=["stage-3","stage-2","stage-1","stage-2"],a=["stage-4","stage-6","stage-4","stage-6"],i=["stage-5","stage-7","stage-5","stage-7"],r=["cubic-bezier(.87,.57,1,.68)","cubic-bezier(0,.06,0,1.16)","cubic-bezier(.87,.57,1,.68)","cubic-bezier(0,.06,0,1.16)"],n=Object(s.useState)(0),o=n[0],g=n[1],m=Object(s.useState)(0),u=m[0],d=m[1],f=Object(s.useState)(1),v=f[0],E=f[1],h=Object(s.useState)(0),b=h[0],p=h[1],L=Object(s.useState)(""),N=L[0],j=L[1],O=Object(s.useState)(0),w=O[0],y=O[1],S=Object(s.useState)(!1),k=S[0],C=S[1],x=Object(s.useState)(700),z=x[0],I=x[1],B=Object(s.useState)(.7),R=B[0],T=B[1],J=Object(s.useCallback)(function(e){null!==e&&d(e.getBoundingClientRect().right)});Object(s.useEffect)(function(){j(r[b])},[b,r]),Object(s.useEffect)(function(){W()&&(T(0),g(0))});var W=function(){return u<=0};return Object(l.default)(function(){T(.7);var s=document.getElementById("left-leg"),c=document.getElementById("right-leg");if(0===w){var l=e[v],r=t[v];[].slice.call(s.children).forEach(function(e){e.classList.remove("stage-1"),e.classList.remove("stage-2"),e.classList.remove("stage-3"),e.classList.remove("stage-4"),e.classList.remove("stage-6"),e.classList.add(l)}),[].slice.call(c.children).forEach(function(e){e.classList.remove("stage-1"),e.classList.remove("stage-2"),e.classList.remove("stage-3"),e.classList.remove("stage-5"),e.classList.remove("stage-7"),e.classList.add(r)}),g(o+60)}else 1===w&&(l=a[v],r=i[v],[].slice.call(s.children).forEach(function(e){e.classList.remove("stage-1"),e.classList.remove("stage-2"),e.classList.remove("stage-3"),e.classList.remove("stage-4"),e.classList.remove("stage-6"),e.classList.add(l)}),[].slice.call(c.children).forEach(function(e){e.classList.remove("stage-1"),e.classList.remove("stage-2"),e.classList.remove("stage-3"),e.classList.remove("stage-5"),e.classList.remove("stage-7"),e.classList.add(r)}),g(o+60));E((v+1)%4),p((b+1)%4)},k?z:null),c.a.createElement("div",{className:"playground"},c.a.createElement("div",{className:"ceiling"}),c.a.createElement("div",{className:"dancer-space"},c.a.createElement("div",{className:"micheal-jackson",id:"micheal-jackson",ref:J,style:{right:o,transition:"right "+R+"s "+N,transform:1===w?"scale(-1,1)":""}},c.a.createElement("div",{className:"head"},c.a.createElement("div",{className:"hat"},c.a.createElement("div",{className:"hat-top"}),c.a.createElement("div",{className:"hat-bottom"})),c.a.createElement("div",{className:"face"})),c.a.createElement("div",{className:"body"},c.a.createElement("div",{className:"left-arm"}),c.a.createElement("div",{className:"right-arm"})),c.a.createElement("div",{className:"legs"},c.a.createElement("div",{className:"left-leg",id:"left-leg"},c.a.createElement("div",{className:"left-leg-upper leg-upper  stage-1",id:"left-leg-upper"}),c.a.createElement("div",{className:"left-leg-lower leg-lower stage-1",id:"left-leg-lower"}),c.a.createElement("div",{className:"left-foot foot stage-1",id:"left-foot"})),c.a.createElement("div",{className:"right-leg",id:"right-leg"},c.a.createElement("div",{className:"right-leg-upper leg-upper stage-3",id:"right-leg-upper"}),c.a.createElement("div",{className:"right-leg-lower leg-lower stage-3",id:"right-leg-lower"}),c.a.createElement("div",{className:"right-foot foot stage-3",id:"right-foot"}))))),c.a.createElement("div",{className:"stage"},c.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},c.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"larger",background:"white",padding:"0 20px",fontWeight:"700",color:k?"red":"green"},onClick:function(){C(!k)}},k?"STOP":"START"),c.a.createElement("form",null,c.a.createElement("input",{type:"number",value:z,onChange:function(e){I(e.target.value)},style:{height:"100px",fontSize:"30px"}})),c.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"larger",background:"white",padding:"0 20px",fontWeight:"700"},onClick:function(){y(1^w)}},0===w?"Moon walk":"Duck walk"))))}}}]);
//# sourceMappingURL=component---src-pages-moonwalker-jackson-js-3a3ef7bf96b1c81d1d57.js.map