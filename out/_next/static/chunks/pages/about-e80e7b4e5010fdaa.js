(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{2730:function(e,r,n){!function(e,r){"use strict";function n(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,t)}return n}function t(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach(function(r){var n;n=t[r],r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function i(e,r){if(e){if("string"==typeof e)return s(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,r):void 0}}function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=Array(r);n<r;n++)t[n]=e[n];return t}function c(e){var r,n,c,o,d,u,h,f,j,p,x,m,g,v,b,w,y,A,O,I,M,S,k,E,L,_,N,P,C,z,q,D,X,T,W=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},V="data-keen-slider-moves",F="data-keen-slider-v",Y=[],$=null,B=!1,H=!1,R=0,J=[];function K(e,r,n){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e.addEventListener(r,n,t),Y.push([e,r,n,t])}function Z(e){if(A&&O===U(e)&&ec()){var n=er(e).x;if(!en(e)&&E)return Q(e);E&&(J=[],I=n,E=!1),e.cancelable&&e.preventDefault();var t=I-n;L+=Math.abs(t),!_&&L>5&&(_=!0,r.setAttribute(V,!0)),eb(k(t,eM)*(w.rtl?-1:1),e.timeStamp),I=n}}function G(e){A||!ec()||e.target.hasAttribute(w.preventEvent)||(A=!0,E=!0,O=U(e),_=!1,L=0,en(e),eu(),y=p,I=er(e).x,eb(0,e.timeStamp),ei("dragStart"))}function Q(e){A&&O===U(e,!0)&&ec()&&(r.removeAttribute(V),A=!1,function(){switch(ei("beforeChange"),w.mode){case"free":(function(){if(0===g)return!(!ew(0)||eo())&&ef(p);var e=w.friction/Math.pow(Math.abs(g),-.5);ej(Math.pow(g,2)/e*Math.sign(g),6*Math.abs(g/e),function(e){return 1-Math.pow(1-e,5)})})();break;case"free-snap":(function(){if(0===g)return ef(p);var e=w.friction/Math.pow(Math.abs(g),-.5),r=(R+Math.pow(g,2)/e*Math.sign(g))/(u/h);ej((-1===x?Math.floor(r):Math.ceil(r))*(u/h)-R,6*Math.abs(g/e),function(e){return 1-Math.pow(1-e,5)})})();break;default:ef((1===h&&0!==x?y:p)+Math.sign(x))}}(),ei("dragEnd"))}function U(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=r?e.changedTouches:ee(e);return n?n[0]?n[0].identifier:"error":"default"}function ee(e){return e.targetTouches}function er(e){var r=ee(e);return{x:ea()?r?r[0].screenY:e.pageY:r?r[0].screenX:e.pageX,timestamp:e.timeStamp}}function en(e){var r=ee(e);if(!r)return!0;var n=r[0],t=ea()?n.clientY:n.clientX,i=ea()?n.clientX:n.clientY,s=void 0!==M&&void 0!==S&&Math.abs(S-i)<=Math.abs(M-t);return M=t,S=i,s}function et(e){ec()&&A&&e.preventDefault()}function ei(e){w[e]&&w[e](eM)}function es(){return w.centered}function ec(){return void 0!==n?n:w.controls}function eo(){return w.loop&&c>1}function el(){return!w.loop&&w.rubberband}function ea(){return!!w.vertical}function ed(){N=window.requestAnimationFrame(eh)}function eu(){N&&(window.cancelAnimationFrame(N),N=null),P=null}function eh(e){P||(P=e);var r=e-P,n=C*q(r/z)-D;if(r>=z)return eb(C-D,!1),T?T():void ei("afterChange");var t=ew(n);if(0===t||eo()||el()||X){if(0!==t&&el()&&!X)return function(){if(eu(),0===g)return ef(p,!0);var e=.04/Math.pow(Math.abs(g),-.5),r=function(e){return--e*e*e+1};ej(Math.pow(g,2)/e*Math.sign(g),3*Math.abs(g/e),r,!0,function(){ej(eO(eA(p)),500,r,!0)})}();D+=n,eb(n,!1),ed()}else eb(n-t,!1)}function ef(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w.duration,t=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];ej(eO(e=eA(e,t,i)),n,function(e){return 1+--e*e*e*e*e},r)}function ej(e,r,n,t,i){eu(),C=e,D=0,z=r,q=n,X=t,T=i,P=null,ed()}function ep(){var e,r=W.breakpoints||[];for(var n in r)window.matchMedia(n).matches&&(e=n);if(e===$)return!0;var i=($=e)?r[$]:W;i.breakpoints&&$&&delete i.breakpoints,w=t(t(t({},eI),W),i),B=!0,j=null,ei("optionsChanged"),ex()}function ex(n,t){var i;n&&(W=n),t&&($=null),ev(),(i=l(e)).length&&(r=i[0],em(t),K(window,"orientationchange",eg),K(window,"resize",function(){return em()}),K(r,"dragstart",function(e){ec()&&e.preventDefault()}),K(r,"mousedown",G),K(w.cancelOnLeave?r:window,"mousemove",Z),w.cancelOnLeave&&K(r,"mouseleave",Q),K(window,"mouseup",Q),K(r,"touchstart",G,{passive:!0}),K(r,"touchmove",Z,{passive:!1}),K(r,"touchend",Q,{passive:!0}),K(r,"touchcancel",Q,{passive:!0}),K(window,"wheel",et,{passive:!1}),ei("mounted"))}function em(e){var n=window.innerWidth;if(ep()&&(n!==j||e)){j=n;var t,i=w.slides;"number"==typeof i?(d=null,c=i):c=(d=l(i,r))?d.length:0;var s=w.dragSpeed;k="function"==typeof s?s:function(e){return e*s},u=ea()?r.offsetHeight:r.offsetWidth,h=function(e){if("function"==typeof e)return e();var r=w.autoAdjustSlidesPerView;r||(c=Math.max(e,c));var n=eo()&&r?c-1:c;return a(e,1,Math.max(n,1))}(w.slidesPerView),f=a(w.spacing,0,u/(h-1)-1),u+=f,o=es()?(u/2-u/h/2)/u:0,d&&d.forEach(function(e){var r="calc(".concat(100/h,"% - ").concat(f/h*(h-1),"px)");ea()?(e.style["min-height"]=r,e.style["max-height"]=r):(e.style["min-width"]=r,e.style["max-width"]=r)});var x=!H||B&&w.resetSlide?w.initial:p;t=eo()?x:ey(x),ei("beforeChange"),eb(eO(t),!1),ei("afterChange"),ea()&&r.setAttribute(F,!0),B=!1}}function eg(e){em(),setTimeout(em,500),setTimeout(em,2e3)}function ev(){Y.forEach(function(e){e[0].removeEventListener(e[1],e[2],e[3])}),Y=[],function(){if(d){var e,r=["transform","-webkit-transform"];r=[].concat(function(e){if(Array.isArray(e))return s(e)}(e=r)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||i(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),ea?["min-height","max-height"]:["min-width","max-width"]),d.forEach(function(e){r.forEach(function(r){e.style.removeProperty(r)})})}}(),r&&r.hasAttribute(F)&&r.removeAttribute(F),ei("destroyed")}function eb(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now();(function(e,r){clearTimeout(m);var n=Math.sign(e);if(n!==x&&(J=[]),x=n,J.push({distance:e,time:r}),m=setTimeout(function(){J=[],g=0},50),(J=J.slice(-6)).length<=1||0===x)return g=0;g=a(J.slice(0,-1).reduce(function(e,r){return e+r.distance},0)/(J[J.length-1].time-J[0].time),-10,10)})(e,n),r&&(e=function(e){if(eo())return e;var r,n=ew(e);return el()?0===n?e:e*((1-Math.abs(r=n/u))*(1-Math.abs(r))):e-n}(e)),R+=e,function(){var e;b=eo()?R%(u*c/h)/(u*c/h):R/(u*c/h),(e=Math.round(R/(u/h)))!==p&&(!eo()&&(e<0||e>c-1)||(p=e,ei("slideChanged")));for(var r=[],n=0;n<c;n++){var t=(1/c*n-(b<0&&eo()?b+1:b))*c/h+o;eo()&&(t+=t>(c-1)/h?-c/h:t<-c/h+1?c/h:0);var i=1/h,s=t+i,l=s<i?s/i:s>1?1-(s-1)*h/1:1;r.push({portion:l<0||l>1?0:l,distance:w.rtl?-1*t+1-i:t})}v=r,d&&d.forEach(function(e,r){var n=v[r].distance*u-r*(u/h-f/h-f/h*(h-1)),t=ea()?0:n,i=ea()?n:0,s="translate3d(".concat(t,"px, ").concat(i,"px, 0)");e.style.transform=s,e.style["-webkit-transform"]=s}),ei("move")}()}function ew(e){var r=u*(c-1*(es()?1:h))/h,n=R+e;return n>r?n-r:n<0?n:0}function ey(e){return a(e,0,c-1-(es()?0:h-1))}function eA(e){var r,n,t,i,s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return eo()?s?(r=e,t=(n=(p%c+c)%c)<(r=(r%c+c)%c)?-n-c+r:-(n-r),i=n>r?c-n+r:r-n,p+(o?Math.abs(t)<=i?t:i:r<n?t:i)):e:ey(e)}function eO(e){return-(-u/h*e+R)}var eI={autoAdjustSlidesPerView:!0,centered:!1,breakpoints:null,controls:!0,dragSpeed:1,friction:.0025,loop:!1,initial:0,duration:500,preventEvent:"data-keen-slider-pe",slides:".keen-slider__slide",vertical:!1,resetSlide:!1,slidesPerView:1,spacing:0,mode:"snap",rtl:!1,rubberband:!0,cancelOnLeave:!0},eM={controls:function(e){n=e},destroy:ev,refresh:function(e){ex(e,!0)},next:function(){ef(p+1,!0)},prev:function(){ef(p-1,!0)},moveToSlide:function(e,r){ef(e,!0,r)},moveToSlideRelative:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0;ef(e,!0,n,!0,r)},resize:function(){em(!0)},details:function(){var e,r;return e=Math.abs(b),{direction:x,progressTrack:r=R<0?1-e:e,progressSlides:r*c/(c-1),positions:v,position:R,speed:g,relativeSlide:(p%c+c)%c,absoluteSlide:p,size:c,slidesPerView:h,widthOrHeight:u}},options:function(){var e=t({},w);return delete e.breakpoints,e}};return ep(),H=!0,ei("created"),eM}function o(e){return Array.prototype.slice.call(e)}function l(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"function"==typeof e?o(e()):"string"==typeof e?o(r.querySelectorAll(e)):e instanceof HTMLElement!=!1?[e]:e instanceof NodeList!=!1?e:[]}function a(e,r,n){return Math.min(Math.max(e,r),n)}Math.sign||(Math.sign=function(e){return(e>0)-(e<0)||+e});var d=function e(r,n){var t=Object.prototype.toString.call(r);if(t!==Object.prototype.toString.call(n)||0>["[object Array]","[object Object]"].indexOf(t))return!1;var i="[object Array]"===t?r.length:Object.keys(r).length;if(i!==("[object Array]"===t?n.length:Object.keys(n).length))return!1;var s=function(r,n){var t=Object.prototype.toString.call(r);if(["[object Array]","[object Object]"].indexOf(t)>=0){if(!e(r,n))return!1}else{if(t!==Object.prototype.toString.call(n))return!1;if("[object Function]"===t){if(r.toString()!==n.toString())return!1}else if(r!==n)return!1}};if("[object Array]"===t){for(var c=0;c<i;c++)if(!1===s(r[c],n[c]))return!1}else for(var o in r)if(r.hasOwnProperty(o)&&!1===s(r[o],n[o]))return!1;return!0};e.default=c,e.useKeenSlider=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.useRef(),s=r.useRef(),o=function(e){if(Array.isArray(e))return e}(e=r.useState(null))||function(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],t=!0,i=!1,s=void 0;try{for(var c,o=e[Symbol.iterator]();!(t=(c=o.next()).done)&&(n.push(c.value),!r||n.length!==r);t=!0);}catch(e){i=!0,s=e}finally{try{t||null==o.return||o.return()}finally{if(i)throw s}}return n}}(e,2)||i(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),l=o[0],a=o[1];return r.useEffect(function(){var e=new c(t.current,s.current);return a(e),function(){e.destroy()}},[(d(s.current,n)||(s.current=n),s.current)]),[t,l]},Object.defineProperty(e,"__esModule",{value:!0})}(r,n(7294))},512:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(2557)}])},2960:function(e,r,n){"use strict";n.d(r,{Z:function(){return j}});var t=n(5893),i=n(5675),s=n.n(i),c=n(9004),o=n(9008),l=n.n(o);function a(){return(0,t.jsxs)(l(),{children:[(0,t.jsx)("title",{children:"수색신경외과"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})}var d=n(7294),u=n(1664),h=n.n(u);function f(){let[e,r]=d.useState(!1);return(0,t.jsxs)(c.wp,{active:e,children:[(0,t.jsxs)(c.wp.Brand,{children:[(0,t.jsxs)(c.wp.Item,{href:"/",renderAs:h(),children:[(0,t.jsx)("img",{src:"/logo.jpeg"}),(0,t.jsx)("div",{style:{marginLeft:8},children:"수색신경외과"})]}),(0,t.jsx)(c.wp.Burger,{onClick:()=>r(e=>!e)})]}),(0,t.jsx)(c.wp.Menu,{children:(0,t.jsxs)(c.wp.Container,{children:[(0,t.jsxs)(c.wp.Item,{hoverable:!0,children:[(0,t.jsx)(c.wp.Link,{href:"/about",renderAs:h(),children:"병원소개"}),(0,t.jsxs)(c.wp.Dropdown,{children:[(0,t.jsx)(c.wp.Item,{href:"/about#greeting",renderAs:h(),children:"인사말"}),(0,t.jsx)(c.wp.Item,{href:"/about#guide",renderAs:h(),children:"진료안내"}),(0,t.jsx)(c.wp.Item,{href:"/about#map",renderAs:h(),children:"오시는 길"}),(0,t.jsx)(c.wp.Item,{href:"/about#equipment",renderAs:h(),children:"시설 및 장비"})]})]}),(0,t.jsxs)(c.wp.Item,{hoverable:!0,children:[(0,t.jsx)(c.wp.Link,{href:"/spine",renderAs:h(),children:"척추질환"}),(0,t.jsxs)(c.wp.Dropdown,{children:[(0,t.jsx)(c.wp.Item,{href:"/spine#cervical",renderAs:h(),children:"경추질환"}),(0,t.jsx)(c.wp.Item,{href:"/spine#lumbar",renderAs:h(),children:"요추질환"})]})]}),(0,t.jsxs)(c.wp.Item,{hoverable:!0,children:[(0,t.jsx)(c.wp.Link,{href:"/joint",renderAs:h(),children:"관절질환"}),(0,t.jsxs)(c.wp.Dropdown,{children:[(0,t.jsx)(c.wp.Item,{href:"/joint#shoulder",renderAs:h(),children:"어깨"}),(0,t.jsx)(c.wp.Item,{href:"/joint#elbow-wrist",renderAs:h(),children:"팔꿈치 및 손목"}),(0,t.jsx)(c.wp.Item,{href:"/joint#knee-foot",renderAs:h(),children:"무릎 및 족부"})]})]}),(0,t.jsxs)(c.wp.Item,{hoverable:!0,children:[(0,t.jsx)(c.wp.Link,{href:"/cerebrovascular",renderAs:h(),children:"뇌혈관질환"}),(0,t.jsxs)(c.wp.Dropdown,{children:[(0,t.jsx)(c.wp.Item,{href:"/cerebrovascular#headache",renderAs:h(),children:"두통"}),(0,t.jsx)(c.wp.Item,{href:"/cerebrovascular#dizziness",renderAs:h(),children:"어지럼증"}),(0,t.jsx)(c.wp.Item,{href:"/cerebrovascular#dementia",renderAs:h(),children:"치매"}),(0,t.jsx)(c.wp.Item,{href:"/cerebrovascular#stroke",renderAs:h(),children:"뇌졸증"})]})]}),(0,t.jsxs)(c.wp.Item,{hoverable:!0,children:[(0,t.jsx)(c.wp.Link,{href:"/nonsurgical",renderAs:h(),children:"비수술적치료"}),(0,t.jsxs)(c.wp.Dropdown,{children:[(0,t.jsx)(c.wp.Item,{href:"/nonsurgical#manual",renderAs:h(),children:"도수치료"}),(0,t.jsx)(c.wp.Item,{href:"/nonsurgical#carm",renderAs:h(),children:"C-arm 유도 척추중재 시술"}),(0,t.jsx)(c.wp.Item,{href:"/nonsurgical#prp",renderAs:h(),children:"PRP 자가혈 주사치료"}),(0,t.jsx)(c.wp.Item,{href:"/nonsurgical#supersonic",renderAs:h(),children:"근골격 초음파 유도시술"}),(0,t.jsx)(c.wp.Item,{href:"/nonsurgical#prolo",renderAs:h(),children:"프롤로 치료"}),(0,t.jsx)(c.wp.Item,{href:"/nonsurgical#dna",renderAs:h(),children:"DNA 인대증식 치료"}),(0,t.jsx)(c.wp.Item,{href:"/nonsurgical#shockwave",renderAs:h(),children:"체외충격파 치료"})]})]}),(0,t.jsxs)(c.wp.Item,{hoverable:!0,children:[(0,t.jsx)(c.wp.Link,{href:"/notice",renderAs:h(),children:"공지사항"}),(0,t.jsx)(c.wp.Dropdown,{children:(0,t.jsx)(c.wp.Item,{href:"/notice#",renderAs:h(),children:"비급여진료"})})]}),(0,t.jsx)(c.wp.Item,{href:"https://blog.naver.com/susaekns",renderAs:h(),children:"⎋ 병원 블로그"})]})})]})}function j(e){let{header:r,children:n}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{}),(0,t.jsx)("header",{children:(0,t.jsxs)(c.VM,{children:[(0,t.jsx)(c.VM.Header,{children:(0,t.jsx)(f,{})}),(0,t.jsx)(c.VM.Body,{children:r||(0,t.jsxs)(c.W_,{display:"relative",style:{height:0,paddingBottom:"20%"},children:[(0,t.jsx)(s(),{src:"/images/banner0.jpg",fill:!0,style:{objectFit:"cover"},alt:""}),(0,t.jsx)(c.W_,{display:"flex",justifyContent:"center",alignItems:"center",style:{position:"absolute",inset:0,backgroundColor:"rgba(0, 0, 0, 0.3)"},children:(0,t.jsxs)(c.W_,{textColor:"light",children:[(0,t.jsx)(c.W_,{textSize:3,textWeight:"semibold",children:"통증없는 세상을 위한 수색신경외과"}),"차별화된 진료로 내원하신 환자 여러분의 건강만을",(0,t.jsx)("br",{}),"최우선으로 하는 수색신경외과의원이 되겠습니다."]})})]})})]})}),(0,t.jsx)("main",{children:(0,t.jsx)(c.W2,{children:n})}),(0,t.jsx)("footer",{children:(0,t.jsx)(c.$_,{children:(0,t.jsx)(c.W2,{children:(0,t.jsxs)(c.VY,{style:{textAlign:"center"},children:[(0,t.jsx)("strong",{children:"수색신경외과의원"})," 서울특별시 은평구 수색로 256, 3층 (수색동 106-1)",(0,t.jsx)("br",{}),(0,t.jsx)("strong",{children:"TEL."})," 02-305-4463 ",(0,t.jsx)("strong",{children:"사업자번호."})," 110-91-59844"]})})})})]})}},2557:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return j}});var t=n(5893),i=n(7294),s=n(1664),c=n.n(s),o=n(5675),l=n.n(o),a=n(9004),d=n(2730),u=n(2960);function h(e){let{children:r}=e;return(0,t.jsx)("div",{className:"keen-slider__slide is-relative",style:{height:0,paddingBottom:"40%"},children:r})}function f(e){let{children:r}=e,[n,s]=(0,i.useState)(!1),c=(0,i.useRef)(),[o,l]=(0,d.useKeenSlider)({loop:!0,duration:1e3,slidesPerView:3,spacing:16,dragStart:()=>{s(!0)},dragEnd:()=>{s(!1)}});return(0,i.useEffect)(()=>{o.current.addEventListener("mouseover",()=>{s(!0)}),o.current.addEventListener("mouseout",()=>{s(!1)})},[o]),(0,i.useEffect)(()=>(c.current=setInterval(()=>{!n&&l&&l.next()},2e3),()=>{clearInterval(c.current)}),[n,l]),(0,t.jsx)("div",{ref:o,className:"keen-slider",children:r})}function j(){return(0,t.jsx)(u.Z,{children:(0,t.jsxs)(a.oe,{children:[(0,t.jsx)(a.oe.Column,{size:2,responsive:{touch:{hide:{value:!0}}},children:(0,t.jsx)(a.xu,{children:(0,t.jsx)(a.v2,{children:(0,t.jsxs)(a.v2.List,{title:"병원소개",children:[(0,t.jsx)(a.v2.List.Item,{href:"#greeting",renderAs:c(),children:"인사말"}),(0,t.jsx)(a.v2.List.Item,{href:"#guide",renderAs:c(),children:"진료안내"}),(0,t.jsx)(a.v2.List.Item,{href:"#intro",renderAs:c(),children:"의료진 소개"}),(0,t.jsx)(a.v2.List.Item,{href:"#map",renderAs:c(),children:"오시는 길"}),(0,t.jsx)(a.v2.List.Item,{href:"#equipment",renderAs:c(),children:"시설 및 장비"})]})})})}),(0,t.jsxs)(a.oe.Column,{children:[(0,t.jsx)(a.$0,{id:"greeting",children:(0,t.jsxs)(a.W2,{children:[(0,t.jsx)(a.gO,{children:(0,t.jsx)(a.X6,{size:3,children:"인사말"})}),(0,t.jsx)(a.gO,{children:(0,t.jsx)(a.X6,{size:4,subtitle:!0,renderAs:"h2",children:"통증없는 세상을 위한 수색신경외과"})}),(0,t.jsx)(a.gO,{children:(0,t.jsx)("p",{children:"신경외과 전문으로서 다년간 수술 및 비수술적 치료를 경험하면서 어떤 치료가 환자에게 적합한 방법인지를 항상 고민해 왔습니다. 경추나 요추 및 기타 관절들이 따로 치료해야 할 대상이 아닌 유기적 복합체로써 인식하고 체계적인 치료시스템을 구축하여 통증조절, 재활, 및 운동치료 등으로 환자의 완전한 회복을 위해 노력하겠습니다."})}),(0,t.jsx)(a.gO,{children:(0,t.jsx)("p",{children:"차별화된 진료로 내원하신 환자 여러분의 건강만을 최우선으로 하는 수색신경외과의원이 되겠습니다."})})]})}),(0,t.jsxs)(a.$0,{id:"guide",children:[(0,t.jsx)(a.gO,{children:(0,t.jsx)(a.X6,{size:3,children:"진료안내"})}),(0,t.jsxs)(a.oe,{variableGap:{desktop:8},children:[(0,t.jsx)(a.oe.Column,{narrow:!0,children:(0,t.jsxs)(a.gO,{children:[(0,t.jsx)(a.X6,{size:4,subtitle:!0,renderAs:"h2",children:"진료과목"}),(0,t.jsxs)("ul",{style:{listStyle:"circle inside"},children:[(0,t.jsx)("li",{children:"정형외과"}),(0,t.jsx)("li",{children:"신경외과"}),(0,t.jsx)("li",{children:"통증의학과"}),(0,t.jsx)("li",{children:"재활의학과"}),(0,t.jsx)("li",{children:"신경과"})]})]})}),(0,t.jsx)(a.oe.Column,{narrow:!0,children:(0,t.jsxs)(a.gO,{children:[(0,t.jsx)(a.X6,{size:4,subtitle:!0,renderAs:"h2",children:"진료시간"}),(0,t.jsxs)("p",{children:["평일 오전9시 – 오후 6시",(0,t.jsx)("br",{}),"토요일 오전 9시 – 오후 2시",(0,t.jsx)("br",{}),"일요일 / 공휴일 휴진",(0,t.jsx)("br",{}),"점심시간은 오후 12시 30분 – 1시30분",(0,t.jsx)("br",{}),"(토요일은 점심시간없이 진료합니다)"]})]})}),(0,t.jsx)(a.oe.Column,{narrow:!0,children:(0,t.jsxs)(a.gO,{children:[(0,t.jsx)(a.X6,{size:4,subtitle:!0,renderAs:"h2",children:"진료예약 및 상담"}),(0,t.jsxs)("p",{children:["전화: 02-305-4463",(0,t.jsx)("br",{}),"Fax: 02-305-4465"]})]})})]})]}),(0,t.jsxs)(a.$0,{id:"intro",children:[(0,t.jsx)(a.gO,{children:(0,t.jsx)(a.X6,{size:3,children:"의료진 소개"})}),(0,t.jsxs)(a.gO,{children:[(0,t.jsx)(a.X6,{size:4,subtitle:!0,renderAs:"h2",children:"원장 조재영"}),(0,t.jsxs)("ul",{style:{listStyle:"circle inside"},children:[(0,t.jsx)("li",{children:"중앙대학교 의과대학 졸업"}),(0,t.jsx)("li",{children:"신경외과 전문의"}),(0,t.jsx)("li",{children:"중앙대학교 신경외과 박사수료"}),(0,t.jsx)("li",{children:"성애병원 신경외과 과장"}),(0,t.jsx)("li",{children:"중앙대학교 신경외과 외래교수"}),(0,t.jsx)("li",{children:"대한 신경외과학회 정회원"}),(0,t.jsx)("li",{children:"대한 척추신경외과학회 정회원"}),(0,t.jsx)("li",{children:"대한 노인신경외과학회 정회원"}),(0,t.jsx)("li",{children:"대한 신경손상학회 정회원"})]})]})]}),(0,t.jsxs)(a.$0,{id:"map",children:[(0,t.jsx)(a.X6,{size:3,children:"오시는 길"}),(0,t.jsxs)(a.gO,{clearfix:!0,children:[(0,t.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.8489450268016!2d126.89376061526329!3d37.582174530990024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c990eb3f22a03%3A0xf7aabf6ce1f91e14!2z7IiY7IOJ7Iug6rK97Jm46rO87J2Y7JuQ!5e0!3m2!1sko!2skr!4v1612951793894!5m2!1sko!2skr",style:{minWidth:400,minHeight:300},allowFullScreen:!0,"aria-hidden":"false",tabIndex:"0",className:"is-pulled-right"}),(0,t.jsxs)("p",{children:["수색신경외과의원",(0,t.jsx)("br",{}),"서울특별시 은평구 수색로 256 (수색동 106-1) 3층",(0,t.jsx)("br",{}),"주변 지하철역: 경인국철 수색역, DMC역",(0,t.jsx)("br",{}),"주변 버스정류장:"]})]})]}),(0,t.jsxs)(a.$0,{id:"equipment",children:[(0,t.jsx)(a.gO,{children:(0,t.jsx)(a.X6,{size:3,children:"시설 및 장비"})}),(0,t.jsx)(a.gO,{children:(0,t.jsxs)(f,{children:[(0,t.jsx)(h,{children:(0,t.jsx)(l(),{src:"/images/equipment01.jpg",fill:!0,alt:"",className:"object-contain"})}),(0,t.jsx)(h,{children:(0,t.jsx)(l(),{src:"/images/equipment02.jpg",fill:!0,alt:"",className:"object-contain"})}),(0,t.jsx)(h,{children:(0,t.jsx)(l(),{src:"/images/equipment03.jpg",fill:!0,alt:"",className:"object-contain"})}),(0,t.jsx)(h,{children:(0,t.jsx)(l(),{src:"/images/equipment04.jpg",fill:!0,alt:"",className:"object-contain"})}),(0,t.jsx)(h,{children:(0,t.jsx)(l(),{src:"/images/equipment05.jpg",fill:!0,alt:"",className:"object-contain"})}),(0,t.jsx)(h,{children:(0,t.jsx)(l(),{src:"/images/equipment06.jpg",fill:!0,alt:"",className:"object-contain"})}),(0,t.jsx)(h,{children:(0,t.jsx)(l(),{src:"/images/equipment07.jpg",fill:!0,alt:"",className:"object-contain"})}),(0,t.jsx)(h,{children:(0,t.jsx)(l(),{src:"/images/equipment08.jpg",fill:!0,alt:"",className:"object-contain"})}),(0,t.jsx)(h,{children:(0,t.jsx)(l(),{src:"/images/equipment09.jpg",fill:!0,alt:"",className:"object-contain"})}),(0,t.jsx)(h,{children:(0,t.jsx)(l(),{src:"/images/equipment10.jpg",fill:!0,alt:"",className:"object-contain"})}),(0,t.jsx)(h,{children:(0,t.jsx)(l(),{src:"/images/equipment11.jpg",fill:!0,alt:"",className:"object-contain"})}),(0,t.jsx)(h,{children:(0,t.jsx)(l(),{src:"/images/equipment12.jpg",fill:!0,alt:"",className:"object-contain"})})]})})]})]})]})})}}},function(e){e.O(0,[247,774,888,179],function(){return e(e.s=512)}),_N_E=e.O()}]);