(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2730:function(e,r,t){!function(e,r){"use strict";function t(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function n(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function i(e,r){if(e){if("string"==typeof e)return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,r):void 0}}function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function o(e){var r,t,o,a,d,u,h,f,p,j,x,v,m,b,g,w,y,A,k,M,S,I,O,_,C,E,P,W,N,L,z,D,T,V,B=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},X="data-keen-slider-moves",Y="data-keen-slider-v",F=[],H=null,R=!1,J=!1,$=0,q=[];function K(e,r,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e.addEventListener(r,t,n),F.push([e,r,t,n])}function Z(e){if(A&&k===G(e)&&eo()){var t=er(e).x;if(!et(e)&&_)return U(e);_&&(q=[],M=t,_=!1),e.cancelable&&e.preventDefault();var n=M-t;C+=Math.abs(n),!E&&C>5&&(E=!0,r.setAttribute(X,!0)),eg(O(n,eS)*(w.rtl?-1:1),e.timeStamp),M=t}}function Q(e){A||!eo()||e.target.hasAttribute(w.preventEvent)||(A=!0,_=!0,k=G(e),E=!1,C=0,et(e),eu(),y=j,M=er(e).x,eg(0,e.timeStamp),ei("dragStart"))}function U(e){A&&k===G(e,!0)&&eo()&&(r.removeAttribute(X),A=!1,function(){switch(ei("beforeChange"),w.mode){case"free":(function(){if(0===m)return!(!ew(0)||ea())&&ef(j);var e=w.friction/Math.pow(Math.abs(m),-.5);ep(Math.pow(m,2)/e*Math.sign(m),6*Math.abs(m/e),function(e){return 1-Math.pow(1-e,5)})})();break;case"free-snap":(function(){if(0===m)return ef(j);var e=w.friction/Math.pow(Math.abs(m),-.5),r=($+Math.pow(m,2)/e*Math.sign(m))/(u/h);ep((-1===x?Math.floor(r):Math.ceil(r))*(u/h)-$,6*Math.abs(m/e),function(e){return 1-Math.pow(1-e,5)})})();break;default:ef((1===h&&0!==x?y:j)+Math.sign(x))}}(),ei("dragEnd"))}function G(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=r?e.changedTouches:ee(e);return t?t[0]?t[0].identifier:"error":"default"}function ee(e){return e.targetTouches}function er(e){var r=ee(e);return{x:el()?r?r[0].screenY:e.pageY:r?r[0].screenX:e.pageX,timestamp:e.timeStamp}}function et(e){var r=ee(e);if(!r)return!0;var t=r[0],n=el()?t.clientY:t.clientX,i=el()?t.clientX:t.clientY,s=void 0!==S&&void 0!==I&&Math.abs(I-i)<=Math.abs(S-n);return S=n,I=i,s}function en(e){eo()&&A&&e.preventDefault()}function ei(e){w[e]&&w[e](eS)}function es(){return w.centered}function eo(){return void 0!==t?t:w.controls}function ea(){return w.loop&&o>1}function ec(){return!w.loop&&w.rubberband}function el(){return!!w.vertical}function ed(){P=window.requestAnimationFrame(eh)}function eu(){P&&(window.cancelAnimationFrame(P),P=null),W=null}function eh(e){W||(W=e);var r=e-W,t=N*z(r/L)-D;if(r>=L)return eg(N-D,!1),V?V():void ei("afterChange");var n=ew(t);if(0===n||ea()||ec()||T){if(0!==n&&ec()&&!T)return function(){if(eu(),0===m)return ef(j,!0);var e=.04/Math.pow(Math.abs(m),-.5),r=function(e){return--e*e*e+1};ep(Math.pow(m,2)/e*Math.sign(m),3*Math.abs(m/e),r,!0,function(){ep(ek(eA(j)),500,r,!0)})}();D+=t,eg(t,!1),ed()}else eg(t-n,!1)}function ef(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w.duration,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];ep(ek(e=eA(e,n,i)),t,function(e){return 1+--e*e*e*e*e},r)}function ep(e,r,t,n,i){eu(),N=e,D=0,L=r,z=t,T=n,V=i,W=null,ed()}function ej(){var e,r=B.breakpoints||[];for(var t in r)window.matchMedia(t).matches&&(e=t);if(e===H)return!0;var i=(H=e)?r[H]:B;i.breakpoints&&H&&delete i.breakpoints,w=n(n(n({},eM),B),i),R=!0,p=null,ei("optionsChanged"),ex()}function ex(t,n){var i;t&&(B=t),n&&(H=null),eb(),(i=c(e)).length&&(r=i[0],ev(n),K(window,"orientationchange",em),K(window,"resize",function(){return ev()}),K(r,"dragstart",function(e){eo()&&e.preventDefault()}),K(r,"mousedown",Q),K(w.cancelOnLeave?r:window,"mousemove",Z),w.cancelOnLeave&&K(r,"mouseleave",U),K(window,"mouseup",U),K(r,"touchstart",Q,{passive:!0}),K(r,"touchmove",Z,{passive:!1}),K(r,"touchend",U,{passive:!0}),K(r,"touchcancel",U,{passive:!0}),K(window,"wheel",en,{passive:!1}),ei("mounted"))}function ev(e){var t=window.innerWidth;if(ej()&&(t!==p||e)){p=t;var n,i=w.slides;"number"==typeof i?(d=null,o=i):o=(d=c(i,r))?d.length:0;var s=w.dragSpeed;O="function"==typeof s?s:function(e){return e*s},u=el()?r.offsetHeight:r.offsetWidth,h=function(e){if("function"==typeof e)return e();var r=w.autoAdjustSlidesPerView;r||(o=Math.max(e,o));var t=ea()&&r?o-1:o;return l(e,1,Math.max(t,1))}(w.slidesPerView),f=l(w.spacing,0,u/(h-1)-1),u+=f,a=es()?(u/2-u/h/2)/u:0,d&&d.forEach(function(e){var r="calc(".concat(100/h,"% - ").concat(f/h*(h-1),"px)");el()?(e.style["min-height"]=r,e.style["max-height"]=r):(e.style["min-width"]=r,e.style["max-width"]=r)});var x=!J||R&&w.resetSlide?w.initial:j;n=ea()?x:ey(x),ei("beforeChange"),eg(ek(n),!1),ei("afterChange"),el()&&r.setAttribute(Y,!0),R=!1}}function em(e){ev(),setTimeout(ev,500),setTimeout(ev,2e3)}function eb(){F.forEach(function(e){e[0].removeEventListener(e[1],e[2],e[3])}),F=[],function(){if(d){var e,r=["transform","-webkit-transform"];r=[].concat(function(e){if(Array.isArray(e))return s(e)}(e=r)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||i(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),el?["min-height","max-height"]:["min-width","max-width"]),d.forEach(function(e){r.forEach(function(r){e.style.removeProperty(r)})})}}(),r&&r.hasAttribute(Y)&&r.removeAttribute(Y),ei("destroyed")}function eg(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now();(function(e,r){clearTimeout(v);var t=Math.sign(e);if(t!==x&&(q=[]),x=t,q.push({distance:e,time:r}),v=setTimeout(function(){q=[],m=0},50),(q=q.slice(-6)).length<=1||0===x)return m=0;m=l(q.slice(0,-1).reduce(function(e,r){return e+r.distance},0)/(q[q.length-1].time-q[0].time),-10,10)})(e,t),r&&(e=function(e){if(ea())return e;var r,t=ew(e);return ec()?0===t?e:e*((1-Math.abs(r=t/u))*(1-Math.abs(r))):e-t}(e)),$+=e,function(){var e;g=ea()?$%(u*o/h)/(u*o/h):$/(u*o/h),(e=Math.round($/(u/h)))!==j&&(!ea()&&(e<0||e>o-1)||(j=e,ei("slideChanged")));for(var r=[],t=0;t<o;t++){var n=(1/o*t-(g<0&&ea()?g+1:g))*o/h+a;ea()&&(n+=n>(o-1)/h?-o/h:n<-o/h+1?o/h:0);var i=1/h,s=n+i,c=s<i?s/i:s>1?1-(s-1)*h/1:1;r.push({portion:c<0||c>1?0:c,distance:w.rtl?-1*n+1-i:n})}b=r,d&&d.forEach(function(e,r){var t=b[r].distance*u-r*(u/h-f/h-f/h*(h-1)),n=el()?0:t,i=el()?t:0,s="translate3d(".concat(n,"px, ").concat(i,"px, 0)");e.style.transform=s,e.style["-webkit-transform"]=s}),ei("move")}()}function ew(e){var r=u*(o-1*(es()?1:h))/h,t=$+e;return t>r?t-r:t<0?t:0}function ey(e){return l(e,0,o-1-(es()?0:h-1))}function eA(e){var r,t,n,i,s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return ea()?s?(r=e,n=(t=(j%o+o)%o)<(r=(r%o+o)%o)?-t-o+r:-(t-r),i=t>r?o-t+r:r-t,j+(a?Math.abs(n)<=i?n:i:r<t?n:i)):e:ey(e)}function ek(e){return-(-u/h*e+$)}var eM={autoAdjustSlidesPerView:!0,centered:!1,breakpoints:null,controls:!0,dragSpeed:1,friction:.0025,loop:!1,initial:0,duration:500,preventEvent:"data-keen-slider-pe",slides:".keen-slider__slide",vertical:!1,resetSlide:!1,slidesPerView:1,spacing:0,mode:"snap",rtl:!1,rubberband:!0,cancelOnLeave:!0},eS={controls:function(e){t=e},destroy:eb,refresh:function(e){ex(e,!0)},next:function(){ef(j+1,!0)},prev:function(){ef(j-1,!0)},moveToSlide:function(e,r){ef(e,!0,r)},moveToSlideRelative:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2?arguments[2]:void 0;ef(e,!0,t,!0,r)},resize:function(){ev(!0)},details:function(){var e,r;return e=Math.abs(g),{direction:x,progressTrack:r=$<0?1-e:e,progressSlides:r*o/(o-1),positions:b,position:$,speed:m,relativeSlide:(j%o+o)%o,absoluteSlide:j,size:o,slidesPerView:h,widthOrHeight:u}},options:function(){var e=n({},w);return delete e.breakpoints,e}};return ej(),J=!0,ei("created"),eS}function a(e){return Array.prototype.slice.call(e)}function c(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"function"==typeof e?a(e()):"string"==typeof e?a(r.querySelectorAll(e)):e instanceof HTMLElement!=!1?[e]:e instanceof NodeList!=!1?e:[]}function l(e,r,t){return Math.min(Math.max(e,r),t)}Math.sign||(Math.sign=function(e){return(e>0)-(e<0)||+e});var d=function e(r,t){var n=Object.prototype.toString.call(r);if(n!==Object.prototype.toString.call(t)||0>["[object Array]","[object Object]"].indexOf(n))return!1;var i="[object Array]"===n?r.length:Object.keys(r).length;if(i!==("[object Array]"===n?t.length:Object.keys(t).length))return!1;var s=function(r,t){var n=Object.prototype.toString.call(r);if(["[object Array]","[object Object]"].indexOf(n)>=0){if(!e(r,t))return!1}else{if(n!==Object.prototype.toString.call(t))return!1;if("[object Function]"===n){if(r.toString()!==t.toString())return!1}else if(r!==t)return!1}};if("[object Array]"===n){for(var o=0;o<i;o++)if(!1===s(r[o],t[o]))return!1}else for(var a in r)if(r.hasOwnProperty(a)&&!1===s(r[a],t[a]))return!1;return!0};e.default=o,e.useKeenSlider=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r.useRef(),s=r.useRef(),a=function(e){if(Array.isArray(e))return e}(e=r.useState(null))||function(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(n=(o=a.next()).done)&&(t.push(o.value),!r||t.length!==r);n=!0);}catch(e){i=!0,s=e}finally{try{n||null==a.return||a.return()}finally{if(i)throw s}}return t}}(e,2)||i(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),c=a[0],l=a[1];return r.useEffect(function(){var e=new o(n.current,s.current);return l(e),function(){e.destroy()}},[(d(s.current,t)||(s.current=t),s.current)]),[n,c]},Object.defineProperty(e,"__esModule",{value:!0})}(r,t(7294))},5557:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6616)}])},2960:function(e,r,t){"use strict";t.d(r,{Z:function(){return p}});var n=t(5893),i=t(5675),s=t.n(i),o=t(9004),a=t(9008),c=t.n(a);function l(){return(0,n.jsxs)(c(),{children:[(0,n.jsx)("title",{children:"수색신경외과"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})}var d=t(7294),u=t(1664),h=t.n(u);function f(){let[e,r]=d.useState(!1);return(0,n.jsxs)(o.wp,{active:e,children:[(0,n.jsxs)(o.wp.Brand,{children:[(0,n.jsxs)(o.wp.Item,{href:"/",renderAs:h(),children:[(0,n.jsx)("img",{src:"/logo.jpeg"}),(0,n.jsx)("div",{style:{marginLeft:8},children:"수색신경외과"})]}),(0,n.jsx)(o.wp.Burger,{onClick:()=>r(e=>!e)})]}),(0,n.jsx)(o.wp.Menu,{children:(0,n.jsxs)(o.wp.Container,{children:[(0,n.jsxs)(o.wp.Item,{hoverable:!0,children:[(0,n.jsx)(o.wp.Link,{href:"/about",renderAs:h(),children:"병원소개"}),(0,n.jsxs)(o.wp.Dropdown,{children:[(0,n.jsx)(o.wp.Item,{href:"/about#greeting",renderAs:h(),children:"인사말"}),(0,n.jsx)(o.wp.Item,{href:"/about#guide",renderAs:h(),children:"진료안내"}),(0,n.jsx)(o.wp.Item,{href:"/about#map",renderAs:h(),children:"오시는 길"}),(0,n.jsx)(o.wp.Item,{href:"/about#equipment",renderAs:h(),children:"시설 및 장비"})]})]}),(0,n.jsxs)(o.wp.Item,{hoverable:!0,children:[(0,n.jsx)(o.wp.Link,{href:"/spine",renderAs:h(),children:"척추질환"}),(0,n.jsxs)(o.wp.Dropdown,{children:[(0,n.jsx)(o.wp.Item,{href:"/spine#cervical",renderAs:h(),children:"경추질환"}),(0,n.jsx)(o.wp.Item,{href:"/spine#lumbar",renderAs:h(),children:"요추질환"})]})]}),(0,n.jsxs)(o.wp.Item,{hoverable:!0,children:[(0,n.jsx)(o.wp.Link,{href:"/joint",renderAs:h(),children:"관절질환"}),(0,n.jsxs)(o.wp.Dropdown,{children:[(0,n.jsx)(o.wp.Item,{href:"/joint#shoulder",renderAs:h(),children:"어깨"}),(0,n.jsx)(o.wp.Item,{href:"/joint#elbow-wrist",renderAs:h(),children:"팔꿈치 및 손목"}),(0,n.jsx)(o.wp.Item,{href:"/joint#knee-foot",renderAs:h(),children:"무릎 및 족부"})]})]}),(0,n.jsxs)(o.wp.Item,{hoverable:!0,children:[(0,n.jsx)(o.wp.Link,{href:"/cerebrovascular",renderAs:h(),children:"뇌혈관질환"}),(0,n.jsxs)(o.wp.Dropdown,{children:[(0,n.jsx)(o.wp.Item,{href:"/cerebrovascular#headache",renderAs:h(),children:"두통"}),(0,n.jsx)(o.wp.Item,{href:"/cerebrovascular#dizziness",renderAs:h(),children:"어지럼증"}),(0,n.jsx)(o.wp.Item,{href:"/cerebrovascular#dementia",renderAs:h(),children:"치매"}),(0,n.jsx)(o.wp.Item,{href:"/cerebrovascular#stroke",renderAs:h(),children:"뇌졸증"})]})]}),(0,n.jsxs)(o.wp.Item,{hoverable:!0,children:[(0,n.jsx)(o.wp.Link,{href:"#",renderAs:h(),children:"비수술적치료"}),(0,n.jsxs)(o.wp.Dropdown,{children:[(0,n.jsx)(o.wp.Item,{href:"#",renderAs:h(),children:"C-arm 영상유도 척추시술"}),(0,n.jsx)(o.wp.Item,{href:"#",renderAs:h(),children:"초음파유도 근골격시술"}),(0,n.jsx)(o.wp.Item,{href:"#",renderAs:h(),children:"프롤로치료"}),(0,n.jsx)(o.wp.Item,{href:"#",renderAs:h(),children:"DNA 인대증식치료"}),(0,n.jsx)(o.wp.Item,{href:"#",renderAs:h(),children:"도수치료"}),(0,n.jsx)(o.wp.Item,{href:"#",renderAs:h(),children:"자가혈장치료(PRP)"})]})]}),(0,n.jsxs)(o.wp.Item,{hoverable:!0,children:[(0,n.jsx)(o.wp.Link,{href:"#",renderAs:h(),children:"공지사항"}),(0,n.jsxs)(o.wp.Dropdown,{children:[(0,n.jsx)(o.wp.Item,{href:"#",renderAs:h(),children:"병원소식"}),(0,n.jsx)(o.wp.Item,{href:"#",renderAs:h(),children:"비급여진료"})]})]})]})})]})}function p(e){let{header:r,children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{}),(0,n.jsx)("header",{children:(0,n.jsxs)(o.VM,{children:[(0,n.jsx)(o.VM.Header,{children:(0,n.jsx)(f,{})}),(0,n.jsx)(o.VM.Body,{children:r||(0,n.jsxs)(o.W_,{display:"relative",style:{height:0,paddingBottom:"20%"},children:[(0,n.jsx)(s(),{src:"/images/banner0.jpg",fill:!0,style:{objectFit:"cover"},alt:""}),(0,n.jsx)(o.W_,{display:"flex",justifyContent:"center",alignItems:"center",style:{position:"absolute",inset:0,backgroundColor:"rgba(0, 0, 0, 0.3)"},children:(0,n.jsxs)(o.W_,{textColor:"light",children:[(0,n.jsx)(o.W_,{textSize:3,textWeight:"semibold",children:"통증없는 세상을 위한 수색신경외과"}),"차별화된 진료로 내원하신 환자 여러분의 건강만을",(0,n.jsx)("br",{}),"최우선으로 하는 수색신경외과의원이 되겠습니다."]})})]})})]})}),(0,n.jsx)("main",{children:(0,n.jsx)(o.W2,{children:t})}),(0,n.jsx)("footer",{children:(0,n.jsx)(o.$_,{children:(0,n.jsx)(o.W2,{children:(0,n.jsxs)(o.VY,{style:{textAlign:"center"},children:[(0,n.jsx)("strong",{children:"수색신경외과의원"})," 서울특별시 은평구 수색로 256, 3층 (수색동 106-1)",(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"TEL."})," 02-305-4463 ",(0,n.jsx)("strong",{children:"사업자번호."})," 110-91-59844"]})})})})]})}},6616:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return p}});var n=t(5893),i=t(7294),s=t(5675),o=t.n(s),a=t(1664),c=t.n(a),l=t(9004),d=t(2730),u=t(2960);function h(e){let{children:r}=e;return(0,n.jsx)("div",{className:"keen-slider__slide is-relative",style:{height:0,paddingBottom:"40%"},children:r})}function f(e){let{children:r}=e,[t,s]=(0,i.useState)(!1),o=(0,i.useRef)(),[a,c]=(0,d.useKeenSlider)({loop:!0,duration:1e3,dragStart:()=>{s(!0)},dragEnd:()=>{s(!1)}});return(0,i.useEffect)(()=>{a.current.addEventListener("mouseover",()=>{s(!0)}),a.current.addEventListener("mouseout",()=>{s(!1)})},[a]),(0,i.useEffect)(()=>(o.current=setInterval(()=>{!t&&c&&c.next()},2e3),()=>{clearInterval(o.current)}),[t,c]),(0,n.jsx)("div",{ref:a,className:"keen-slider",children:r})}function p(){return(0,n.jsxs)(u.Z,{header:(0,n.jsxs)(f,{children:[(0,n.jsxs)(h,{children:[(0,n.jsx)(o(),{src:"/images/banner0.jpg",fill:!0,style:{objectFit:"cover"},alt:""}),(0,n.jsx)(l.W_,{display:"flex",justifyContent:"center",alignItems:"center",style:{position:"absolute",inset:"20%",backgroundColor:"rgba(0, 0, 0, 0.3)"},children:(0,n.jsxs)(l.W_,{textColor:"light",textSize:4,textWeight:"semibold",children:["수색신경외과 의원은 풍부한 경험을 바탕으로",(0,n.jsx)("br",{}),"가족같은 마음으로 진료하겠습니다.",(0,n.jsx)("br",{}),"척추 / 관절 / 뇌혈관 / 통증 / 도수치료"]})})]}),(0,n.jsxs)(h,{children:[(0,n.jsx)(o(),{src:"/images/banner1.jpg",fill:!0,style:{objectFit:"cover"},alt:""}),(0,n.jsx)(l.W_,{display:"flex",justifyContent:"center",alignItems:"center",style:{position:"absolute",inset:"20%",backgroundColor:"rgba(0, 0, 0, 0.3)"},children:(0,n.jsxs)(l.W_,{textAlign:"center",textColor:"light",textSize:2,textWeight:"semibold",children:["숙련된 전문 도수치료사의",(0,n.jsx)("br",{}),"1:1 맞춤 치료"]})})]})]}),children:[(0,n.jsxs)(l.$0,{children:[(0,n.jsx)(l.X6,{size:4,children:"진료 내용"}),(0,n.jsxs)(l.n9,{kind:"ancestor",children:[(0,n.jsxs)(l.n9,{kind:"parent",vertical:!0,children:[(0,n.jsxs)(l.n9,{kind:"child",display:"relative",style:{height:0,paddingBottom:"50%"},className:"overflow-hidden",children:[(0,n.jsx)(c(),{href:"#",children:(0,n.jsx)(o(),{src:"/images/therapy.jpeg",fill:!0,className:"object-cover transition-transform hover:scale-125",alt:""})}),(0,n.jsx)(l.W_,{display:"flex",justifyContent:"center",alignItems:"center",overlay:!0,className:"bg-black/30 pointer-events-none",children:(0,n.jsx)(l.W_,{textColor:"light",textSize:4,children:"도수치료"})})]}),(0,n.jsxs)(l.n9,{kind:"child",display:"relative",style:{height:0,paddingBottom:"50%"},className:"overflow-hidden",children:[(0,n.jsx)(c(),{href:"#",children:(0,n.jsx)(o(),{src:"/images/shockwave.jpeg",fill:!0,className:"object-cover transition-transform hover:scale-125",alt:""})}),(0,n.jsx)(l.W_,{display:"flex",justifyContent:"center",alignItems:"center",overlay:!0,className:"bg-black/30 pointer-events-none",children:(0,n.jsx)(l.W_,{textColor:"light",textSize:4,children:"체외충격파치료"})})]})]}),(0,n.jsxs)(l.n9,{kind:"parent",vertical:!0,children:[(0,n.jsxs)(l.n9,{kind:"child",display:"relative",style:{height:0,paddingBottom:"50%"},className:"overflow-hidden",children:[(0,n.jsx)(c(),{href:"#",children:(0,n.jsx)(o(),{src:"/images/joint.jpeg",fill:!0,className:"object-cover transition-transform hover:scale-125",alt:""})}),(0,n.jsx)(l.W_,{display:"flex",justifyContent:"center",alignItems:"center",overlay:!0,className:"bg-black/30 pointer-events-none",children:(0,n.jsx)(l.W_,{textColor:"light",textSize:4,children:"관절치료"})})]}),(0,n.jsxs)(l.n9,{kind:"child",display:"relative",style:{height:0,paddingBottom:"50%"},className:"overflow-hidden",children:[(0,n.jsx)(c(),{href:"#",children:(0,n.jsx)(o(),{src:"/images/spine.jpeg",fill:!0,className:"object-cover transition-transform hover:scale-125",alt:""})}),(0,n.jsx)(l.W_,{display:"flex",justifyContent:"center",alignItems:"center",overlay:!0,className:"bg-black/30 pointer-events-none",children:(0,n.jsx)(l.W_,{textColor:"light",textSize:4,children:"척추치료"})})]})]})]})]}),(0,n.jsx)(l.$0,{children:(0,n.jsxs)(l.oe,{children:[(0,n.jsxs)(l.oe.Column,{children:[(0,n.jsx)(l.X6,{size:4,children:"진료 일정"}),(0,n.jsxs)(l.VY,{children:[(0,n.jsx)("strong",{children:"평일:"})," 09:00 AM ~ 06:00 PM",(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"토요일:"})," 09:00 AM ~ 02:00 PM",(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"일요일 / 공휴일:"})," 휴진",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"점심시간:"})," 12:30 PM ~ 01:30 PM",(0,n.jsx)("br",{}),"(토요일은 점심시간 없이 진료합니다)"]})]}),(0,n.jsxs)(l.oe.Column,{children:[(0,n.jsx)(l.X6,{size:4,children:"오시는 길"}),(0,n.jsxs)(l.VY,{children:["서울특별시 은평구 수색로 256 (수색동 106-1) 3층",(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"지하철역:"})," 경인국철 수색역, DMC역",(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"버스정류장:"}),(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"TEL."})," 02-305-4463"]}),(0,n.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.8489450268016!2d126.89376061526329!3d37.582174530990024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c990eb3f22a03%3A0xf7aabf6ce1f91e14!2z7IiY7IOJ7Iug6rK97Jm46rO87J2Y7JuQ!5e0!3m2!1sko!2skr!4v1612951793894!5m2!1sko!2skr",style:{width:"100%",minHeight:300},allowFullScreen:!0,"aria-hidden":"false",tabIndex:"0"})]})]})})]})}}},function(e){e.O(0,[247,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);