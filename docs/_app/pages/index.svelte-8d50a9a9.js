import{S as s,i as t,s as a,e as n,t as e,c as r,a as c,g as o,d as i,b as l,f as u,W as m,Y as h,X as f,k as $,j as d,n as p,m as x,o as g,v,r as C,w as k}from"../chunks/vendor-04284c48.js";function j(s,t,a){let{mainCount:n=0}=t;return s.$$set=s=>{"mainCount"in s&&a(0,n=s.mainCount)},[n,()=>{a(0,n+=1)}]}class E extends s{constructor(s){super(),t(this,s,j,null,a,{mainCount:0,mainIncrement:1})}get mainIncrement(){return this.$$.ctx[1]}}function I(s){let t,a,$,d,p;return{c(){t=n("button"),a=e("Clicks: "),$=e(E),this.h()},l(s){t=r(s,"BUTTON",{class:!0});var n=c(t);a=o(n,"Clicks: "),$=o(n,E),n.forEach(i),this.h()},h(){l(t,"class","svelte-2gtjl0")},m(s,n){u(s,t,n),m(t,a),m(t,$),d||(p=h(t,"click",E),d=!0)},p:f,i:f,o:f,d(s){s&&i(t),d=!1,p()}}}class M extends s{constructor(s){super(),t(this,s,null,I,a,{})}}function W(s){let t,a,l,h,j,E;return j=new M({}),{c(){t=n("main"),a=n("h1"),l=e("Welcome to Mixcore"),h=$(),d(j.$$.fragment)},l(s){t=r(s,"MAIN",{});var n=c(t);a=r(n,"H1",{});var e=c(a);l=o(e,"Welcome to Mixcore"),e.forEach(i),h=p(n),x(j.$$.fragment,n),n.forEach(i)},m(s,n){u(s,t,n),m(t,a),m(a,l),m(t,h),g(j,t,null),E=!0},p:f,i(s){E||(v(j.$$.fragment,s),E=!0)},o(s){C(j.$$.fragment,s),E=!1},d(s){s&&i(t),k(j)}}}const b=!1;export default class extends s{constructor(s){super(),t(this,s,null,W,a,{})}}export{b as ssr};
