import{e as i}from"./index-6400038e.js";import{w as f,a as p}from"./mockFetch-ba9030b0.js";import{r as d}from"./index-93c19621.js";import{c as v}from"./runtime-dom.esm-bundler-9a021e8b.js";import{g as c}from"./filesToTest-e54ca7e1.js";import{a as P}from"./client-eba7b630.js";import{c as j,o as g}from"./mobx.esm-c867959f.js";import{r as S}from"./reactivity.esm-bundler-91732a87.js";import{h as w}from"./runtime-core.esm-bundler-8a2f4052.js";j({enforceActions:"never"});const l="";async function h(t){return{search:(await c(`/src/${t}/${l}searchPresenter.jsx`))?.Search,sidebar:(await c(`/src/${t}/${l}sidebarPresenter.jsx`))?.Sidebar,details:(await c(`/src/${t}/${l}detailsPresenter.jsx`))?.Details,summary:(await c(`/src/${t}/${l}summaryPresenter.jsx`))?.Summary}}const $=await h("vuejs"),x=await h("reactjs"),E={vuejs:$,reactjs:x};let y;function R(t,e){const r=[];function a(s){return r.push({...s}),e("span",{},"dummy "+s.type)}return{replacePresenters:function(s,n,...o){s.name==="RouterProvider"&&(y=!0);const u=["search","summary","sidebar","details"].find(function(m){return s==E[t][m]});return u?e(a,{...n,type:u}):s=="img"?e(a,{...n,type:"imgLoader"}):s=="div"&&o&&o[0]&&(""+o[0]).toLowerCase()=="no data"?e(a,{...n,type:"no data"}):e(s,n,...o)},propsHistory:r}}async function G(t){const{replacePresenters:e,propsHistory:r}=R("vuejs",w);window.React={createElement:e};const a=await c(`/src/vuejs/${l}VueRoot.jsx`);if(!(a?.VueRoot||a?.default)||!a?.makeRouter)return!1;const s=a?.VueRoot||a?.default,n=document.createElement("div");window.location.hash="pursposefully_wrong_route";const o=S({ready:!0}),u=v(w(s,{model:o}));await f(p,function(){u.use(a.makeRouter(o)),u.mount(n)});try{return await t(r,o)!==!1}finally{u.unmount()}}async function M(t){const{replacePresenters:e,propsHistory:r}=R("reactjs",d.createElement);window.React={createElement:e};const a=(await c(`/src/reactjs/${l}ReactRoot.jsx`))?.ReactRoot;if(!a)return!1;const s=g({ready:!0});let n;function o(){const[m,b]=d.useState(!0);return n=function(){b(!1)},m&&e(a,{model:s})}const u=document.createElement("div");if(await f(p,function(){window.React={createElement:e},window.location.hash="pursposefully_wrong_route",P(u).render(e(o))}),!y)return!1;try{return await t(r,s)!==!1}finally{n()}}async function k(t){i(t.length,"Root should render other components").to.be.ok,i(t.slice(-1)[0]?.type,"Sidebar was supposed to be rendered").to.equal("sidebar"),window.location.hash="/",await new Promise(e=>setTimeout(e)),i(t.slice(-1)[0]?.type,"Search was supposed to also be rendered, but only Sidebar was").to.equal("search"),window.location.hash="/details",await new Promise(e=>setTimeout(e)),i(t.slice(-1)[0]?.type,"Details was supposed to be rendered").to.equal("details"),window.location.hash="/summary",await new Promise(e=>setTimeout(e)),i(t.slice(-1)[0]?.type,"Summary was supposed to be rendered").to.equal("summary"),window.location.hash="/search",await new Promise(e=>setTimeout(e)),i(t.slice(-1)[0]?.type,"Search was supposed to be rendered at /search").to.equal("search")}async function O(t,e){e.ready=!1,await new Promise(r=>setTimeout(r)),e.ready=!0,await new Promise(r=>setTimeout(r)),i(t.length,"Root should render the initial promise: first an image based on model.ready, then the app").to.be.gte(3),i(t[1].type,"the root component will render a loading image (suspense) while the persistence promise is resolved").to.equal("imgLoader"),i(t[2].model,"the model passed to the presenters is the model prop").to.equal(e)}export{k as a,G as b,O as c,M as t};