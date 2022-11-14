"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={},o="TableKit",l={unversionedId:"intro",id:"intro",title:"TableKit",description:"TableKit is a kit of functions to help manipulate & utilize tables more effectively. It contains various functions that have",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/TableKit/docs/intro",draft:!1,editUrl:"https://github.com/ffrostflame/TableKit/edit/master/docs/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar"},s={},u=[{value:"Why?",id:"why",level:2},{value:"Advantages",id:"advantages",level:2},{value:"Disadvantages",id:"disadvantages",level:2},{value:"Prior Art / Inspiration",id:"prior-art--inspiration",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tablekit"},"TableKit"),(0,a.kt)("p",null,"TableKit is a ",(0,a.kt)("em",{parentName:"p"},"kit")," of functions to help manipulate & utilize tables more effectively. It contains various functions that have\nreal-world use cases such as .Reconcile(), .DeepCopy(), .Unshift(), etc."),(0,a.kt)("h2",{id:"why"},"Why?"),(0,a.kt)("p",null,"I made this project primarily because there were no up-to-date & high quality table manipulation libraries out there. None suited my needs-\nI wanted something I could plug in with Wally, something fully typed, and using modern-day Luau functions. This doesn't exist."),(0,a.kt)("h2",{id:"advantages"},"Advantages"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This is mainly for my personal usage- which means that it will be updated any time I need a new feature."),(0,a.kt)("li",{parentName:"ul"},"I use it in my open source packages (at the moment, 2 unreleased) as well."),(0,a.kt)("li",{parentName:"ul"},"It's up-to-date with Luau features. This means it uses generic iteration, all of the built-in ",(0,a.kt)("inlineCode",{parentName:"li"},"table")," functions, etc."),(0,a.kt)("li",{parentName:"ul"},"It's fully typed.")),(0,a.kt)("h2",{id:"disadvantages"},"Disadvantages"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It's another dependency for your project. However, if you're going to do these yourself, you might as well use this.")),(0,a.kt)("h2",{id:"prior-art--inspiration"},"Prior Art / Inspiration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TableUtils by sleitnick"),(0,a.kt)("li",{parentName:"ul"},"Javascript Array objects- you'll see a few things taken from there such as .Unshift().")))}p.isMDXComponent=!0}}]);