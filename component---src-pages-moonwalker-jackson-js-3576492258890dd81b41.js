(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{180:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c});var s=a(0),l=a.n(s);a(182);function c(){var e=["stage-1","stage-2","stage-3","stage-2"],t=["stage-3","stage-2","stage-1","stage-2"],a=["stage-4","stage-6","stage-4","stage-6"],c=["stage-5","stage-7","stage-5","stage-7"],i=["cubic-bezier(.87,.57,1,.68)","cubic-bezier(0,.06,0,1.16)","cubic-bezier(.87,.57,1,.68)","cubic-bezier(0,.06,0,1.16)"],r=Object(s.useState)(0),n=r[0],o=r[1],g=Object(s.useState)(0),m=g[0],u=g[1],d=Object(s.useState)(1),f=d[0],v=d[1],E=Object(s.useState)(0),h=E[0],p=E[1],b=Object(s.useState)(""),L=b[0],N=b[1],j=Object(s.useState)(0),w=j[0],y=j[1],O=Object(s.useState)(!1),S=O[0],k=O[1],C=Object(s.useState)(700),x=C[0],z=C[1],I=Object(s.useState)(.7),B=I[0],R=I[1],T=Object(s.useCallback)(function(e){null!==e&&u(e.getBoundingClientRect().right)});Object(s.useEffect)(function(){N(i[h])},[h,i]),Object(s.useEffect)(function(){m<=0&&(R(0),o(0))});return function(e,t){var a=Object(s.useRef)();Object(s.useEffect)(function(){a.current=e},[e]),Object(s.useEffect)(function(){if(null!==t){var e=setInterval(function(){a.current&&a.current()},t);return function(){return clearInterval(e)}}},[t])}(function(){R(.7);var s=document.getElementById("left-leg"),l=document.getElementById("right-leg");if(0===w){var i=e[f],r=t[f];[].slice.call(s.children).forEach(function(e){e.classList.remove("stage-1"),e.classList.remove("stage-2"),e.classList.remove("stage-3"),e.classList.remove("stage-4"),e.classList.remove("stage-6"),e.classList.add(i)}),[].slice.call(l.children).forEach(function(e){e.classList.remove("stage-1"),e.classList.remove("stage-2"),e.classList.remove("stage-3"),e.classList.remove("stage-5"),e.classList.remove("stage-7"),e.classList.add(r)}),o(n+60)}else 1===w&&(i=a[f],r=c[f],[].slice.call(s.children).forEach(function(e){e.classList.remove("stage-1"),e.classList.remove("stage-2"),e.classList.remove("stage-3"),e.classList.remove("stage-4"),e.classList.remove("stage-6"),e.classList.add(i)}),[].slice.call(l.children).forEach(function(e){e.classList.remove("stage-1"),e.classList.remove("stage-2"),e.classList.remove("stage-3"),e.classList.remove("stage-5"),e.classList.remove("stage-7"),e.classList.add(r)}),o(n+60));v((f+1)%4),p((h+1)%4)},S?x:null),l.a.createElement("div",{className:"playground-moonwalk"},l.a.createElement("div",{className:"ceiling"}),l.a.createElement("div",{className:"dancer-space"},l.a.createElement("div",{className:"micheal-jackson",id:"micheal-jackson",ref:T,style:{right:n,transition:"right "+B+"s "+L,transform:1===w?"scale(-1,1)":""}},l.a.createElement("div",{className:"head"},l.a.createElement("div",{className:"hat"},l.a.createElement("div",{className:"hat-top"}),l.a.createElement("div",{className:"hat-bottom"})),l.a.createElement("div",{className:"face"})),l.a.createElement("div",{className:"body"},l.a.createElement("div",{className:"left-arm"}),l.a.createElement("div",{className:"right-arm"})),l.a.createElement("div",{className:"legs"},l.a.createElement("div",{className:"left-leg",id:"left-leg"},l.a.createElement("div",{className:"left-leg-upper leg-upper  stage-1",id:"left-leg-upper"}),l.a.createElement("div",{className:"left-leg-lower leg-lower stage-1",id:"left-leg-lower"}),l.a.createElement("div",{className:"left-foot foot stage-1",id:"left-foot"})),l.a.createElement("div",{className:"right-leg",id:"right-leg"},l.a.createElement("div",{className:"right-leg-upper leg-upper stage-3",id:"right-leg-upper"}),l.a.createElement("div",{className:"right-leg-lower leg-lower stage-3",id:"right-leg-lower"}),l.a.createElement("div",{className:"right-foot foot stage-3",id:"right-foot"}))))),l.a.createElement("div",{className:"stage"},l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"larger",background:"white",padding:"0 20px",fontWeight:"700",color:S?"red":"green"},onClick:function(){return k(!S)}},S?"STOP":"START"),l.a.createElement("form",null,l.a.createElement("input",{type:"number",value:x,onChange:function(e){return z(e.target.value)},style:{height:"100px",fontSize:"30px"}})),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"larger",background:"white",padding:"0 20px",fontWeight:"700"},onClick:function(){return y(1^w)}},0===w?"Moon walk":"Duck walk"))))}}}]);
//# sourceMappingURL=component---src-pages-moonwalker-jackson-js-3576492258890dd81b41.js.map