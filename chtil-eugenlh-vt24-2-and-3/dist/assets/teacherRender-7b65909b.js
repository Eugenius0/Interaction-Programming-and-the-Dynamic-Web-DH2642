import{_ as o}from"./shim-7e3475d3.js";import"./teacherFetch-a8835856.js";import{c as a,o as c}from"./mobx.esm-c867959f.js";import{r as d}from"./reactivity.esm-bundler-91732a87.js";let r,n,i;if(window.location.toString().includes("react")){window.React=await o(()=>import("./index-93c19621.js").then(e=>e.R),["assets/index-93c19621.js","assets/shim-7e3475d3.js"]);const t=(await o(()=>import("./client-eba7b630.js").then(e=>e.c),["assets/client-eba7b630.js","assets/index-37df3fb2.js","assets/shim-7e3475d3.js","assets/index-93c19621.js"])).createRoot;r=function(e){t(document.getElementById("root")).render(e)},console.log("rendering "+window.location.pathname+" with React"),n="react",a({enforceActions:"never"}),i=c}else{const t=await o(()=>import("./vue.runtime.esm-bundler-12250fee.js").then(e=>e.V),["assets/vue.runtime.esm-bundler-12250fee.js","assets/runtime-dom.esm-bundler-9a021e8b.js","assets/runtime-core.esm-bundler-8a2f4052.js","assets/reactivity.esm-bundler-91732a87.js","assets/shim-7e3475d3.js"]);r=t.render,window.React={createElement:t.h},console.log("rendering "+window.location.pathname+" with Vue"),n="vue",i=d}export{n as a,i as b,r};
