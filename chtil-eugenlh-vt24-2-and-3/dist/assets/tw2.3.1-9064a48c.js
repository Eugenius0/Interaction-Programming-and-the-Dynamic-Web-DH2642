import{r as l}from"./teacherRender-7b65909b.js";import{g as u}from"./filesToTest-e54ca7e1.js";import{r as d}from"./reactivity.esm-bundler-91732a87.js";import"./shim-7e3475d3.js";import"./teacherFetch-a8835856.js";import"./mobx.esm-c867959f.js";const p="",i=(await u(`/src/${p}resolvePromise.js`))?.resolvePromise;function t(e){return new Promise(function(r,n){setTimeout(r,e)})}if(!i)l(React.createElement("div",null,"Please define /src/resolvePromise.js"),document.getElementById("root"));else{let e=function(o){function c(){return"resolved after "+o}function m(){const s=t(2e3).then(c);s.name="promiseToResolveAfter_"+o,i(s,n)}return m};const r=React.createElement("div",null,React.createElement("p",null," This is the TW2.3.1 resolvePromise test. Timing:"),React.createElement("p",null,"second 1: initiates a promise that takes 2000 miliseconds to resolve"),React.createElement("p",null,"second 5: initiates a promise that takes 1000 miliseconds to resolve"),React.createElement("p",null,"second 8: initiates a promise that takes 3000 miliseconds to resolve"),React.createElement("p",null,"second 10: initiates a promise that takes 500 miliseconds to resolve"),React.createElement("p",null,"Note that the last-but-one promise will overwrite the result of the last promise. This simulates a ",React.createElement("b",null,"race condition"),"."),React.createElement("p",null,"If your resolvePromise does not check for a race condition, you will see 3000 at the end (after briefly seeing 500). If your resolvePromise does check for a race condition, you will see 500 at the end, and never see 3000."),React.createElement("p",null,"You can edit tw/tw2.3.1.js to play with different time sequences."),React.createElement("hr",null)),n=d({});t(1e3).then(e(2e3)),t(5e3).then(e(1e3)),t(8e3).then(e(3e3)),t(1e4).then(e(500));const a={render(){return React.createElement("div",null,"current promise state : ",JSON.stringify(n))}};l(React.createElement("div",null,r," ",React.createElement(a,null)," "),document.getElementById("root"))}