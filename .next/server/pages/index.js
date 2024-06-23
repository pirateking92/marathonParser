(()=>{var e={};e.id=405,e.ids=[405,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},1420:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>b,default:()=>h,getServerSideProps:()=>p,getStaticPaths:()=>m,getStaticProps:()=>x,reportWebVitals:()=>g,routeModule:()=>P,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>j,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>f});var s=r(7093),i=r(5244),n=r(1323),l=r(2899),c=r.n(l),o=r(6814),d=r(6209),u=e([d]);d=(u.then?(await u)():u)[0];let h=(0,n.l)(d,"default"),x=(0,n.l)(d,"getStaticProps"),m=(0,n.l)(d,"getStaticPaths"),p=(0,n.l)(d,"getServerSideProps"),b=(0,n.l)(d,"config"),g=(0,n.l)(d,"reportWebVitals"),f=(0,n.l)(d,"unstable_getStaticProps"),y=(0,n.l)(d,"unstable_getStaticPaths"),j=(0,n.l)(d,"unstable_getStaticParams"),v=(0,n.l)(d,"unstable_getServerProps"),w=(0,n.l)(d,"unstable_getServerSideProps"),P=new s.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:o.default,Document:c()},userland:d});a()}catch(e){a(e)}})},7933:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>c});var s=r(997);r(6689);var i=r(8595),n=r(8174),l=e([n]);n=(l.then?(await l)():l)[0];let c=({athletes:e,racename:t})=>(0,s.jsxs)("div",{className:"w-full p-6 overflow-auto",children:[s.jsx("h2",{className:"text-4xl font-bold text-center mb-4 bg-stone-200 rounded-md",children:t}),(0,s.jsxs)(n.Table,{hoverable:!0,className:"min-w-full divide-y divide-gray-300 border border-yellow-500 rounded-md",children:[s.jsx("thead",{className:"bg-gray-50",children:(0,s.jsxs)("tr",{children:[s.jsx("th",{className:"px-6 py-3 text-center text-s font-medium text-gray-500 uppercase tracking-wider",children:"Rank"}),s.jsx("th",{className:"px-6 py-3 text-center text-s font-medium text-gray-500 uppercase tracking-wider",children:"Bib Number"}),s.jsx("th",{className:"px-6 py-3 text-center text-s font-medium text-gray-500 uppercase tracking-wider",children:"Name"}),s.jsx("th",{className:"px-6 py-3 text-center text-s font-medium text-gray-500 uppercase tracking-wider",children:"Finish Time"}),s.jsx("th",{className:"px-6 py-3 text-center text-s font-medium text-gray-500 uppercase tracking-wider",children:"Country Code"})]})}),s.jsx("tbody",{className:"text-3xl tracking-wider bg-white divide-y divide-gray-200",children:e&&e.length>0?e.map(e=>s.jsx(i.Z,{athlete:e},e.rank)):s.jsx("tr",{children:s.jsx("td",{colSpan:5,children:"No athlete data available."})})})]})]});a()}catch(e){a(e)}})},8595:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(997);r(6689);let s=({athlete:e})=>(0,a.jsxs)("tr",{className:"font-arial text-center overflow-auto",children:[a.jsx("td",{children:e.rank}),a.jsx("td",{children:e.bibnumber}),a.jsx("td",{children:`${e.firstname} ${e.surname}`}),a.jsx("td",{children:e.finishtime}),a.jsx("td",{children:e.flag})]})},3498:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>o});var s=r(997);r(6689);var i=r(5813),n=r(8174),l=e([n]);n=(l.then?(await l)():l)[0];let c=e=>{if(!e||0===e.length)return"";let t=[];return t.push("Rank,Full Name,Finish Time,Country Name"),e.forEach(e=>{let r=`${e.firstname} ${e.surname}`,a=[e.rank,r,e.finishtime,e.countryname];t.push(a.join(","))}),t.join("\n")},o=({athletes:e})=>{let t=c(e);return s.jsx(n.Tooltip,{content:"Click to download CSV file in selected order",style:"light",animation:"duration-500",placement:"bottom",children:(0,s.jsxs)(i.CSVLink,{className:"bg-gray-300 hover:bg-gray-400 border border-blue-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center",data:t,filename:"race_results.csv",children:[s.jsx("svg",{className:"fill-current w-4 h-4 mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:s.jsx("path",{d:"M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"})}),"Export to CSV"]})})};a()}catch(e){a(e)}})},7091:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>l});var s=r(997);r(6689);var i=r(8174),n=e([i]);i=(n.then?(await n)():n)[0];let l=({sortByRank:e,sortByBibNumber:t})=>(0,s.jsxs)("div",{className:"flex gap-2",children:[s.jsx(i.Tooltip,{content:"Click to sort by rank",style:"light",animation:"duration-500",placement:"bottom",children:s.jsx("button",{className:"bg-gray-300 hover:bg-yellow-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4",onClick:e,children:"Sort by Rank"})}),s.jsx(i.Tooltip,{content:"Click to sort by bib number",style:"light",animation:"duration-500",placement:"bottom",children:s.jsx("button",{className:"bg-gray-300 hover:bg-yellow-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",onClick:t,children:"Sort by Bib Number"})})]});a()}catch(e){a(e)}})},6814:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(997);r(6764);let s=function({Component:e,pageProps:t}){return a.jsx(e,{...t})}},6209:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>u,getServerSideProps:()=>d});var s=r(997),i=r(6689),n=r(7933),l=r(7091),c=r(3498),o=e([n,l,c]);[n,l,c]=o.then?(await o)():o;let d=async()=>{let e=await fetch("http://localhost:3000/api/marathons");if(!e.ok)throw Error(`HTTP error! status: ${e.status}`);let{racename:t,athletes:r}=await e.json();return{props:{racename:t,athletes:r}}},u=({racename:e,athletes:t})=>{let[r,a]=(0,i.useState)(t);return(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-screen py-2 bg-[url('https://thumbs.dreamstime.com/b/giraffe-isolated-12314083.jpg')]",children:[s.jsx("nav",{className:"bg-slate-400 p-4 fixed top-0 w-full z-50",children:(0,s.jsxs)("ul",{className:"flex justify-between",children:[s.jsx("li",{children:s.jsx("a",{href:"https://girraphic.com/",className:"text-white peer-hover:",children:s.jsx("img",{src:"https://girraphic.com/wp-content/uploads/2020/02/Girraphic-Logo-2020.png",alt:"Girraphic Logo",className:"w-48"})})}),s.jsx("li",{}),s.jsx("li",{children:s.jsx("a",{href:"https://github.com/pirateking92",className:"text-white font-montserrat",children:"Matt Doyle - GitHub"})})]})}),s.jsx(n.Z,{athletes:r,racename:e}),(0,s.jsxs)("div",{className:"flex space-x-4 mb-4",children:[s.jsx(l.Z,{sortByRank:()=>{let e=[...r].sort((e,t)=>e.rank-t.rank);a(e)},sortByBibNumber:()=>{let e=[...r].sort((e,t)=>{let r=parseInt(e.bibnumber,10),a=parseInt(t.bibnumber,10);return r-a});a(e)}}),s.jsx(c.Z,{athletes:r})]})]})};a()}catch(e){a(e)}})},6764:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},5813:e=>{"use strict";e.exports=require("react-csv")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},8174:e=>{"use strict";e.exports=import("flowbite-react")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[899],()=>r(1420));module.exports=a})();