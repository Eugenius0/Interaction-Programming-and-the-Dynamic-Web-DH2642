import{r as i}from"./teacherRender-7b65909b.js";import{g as a}from"./filesToTest-e54ca7e1.js";import{e as f}from"./index-6400038e.js";import{p as h,f as E}from"./jsxUtilities-a811c57a.js";import{d as w}from"./mockFetch-ba9030b0.js";import"./searchUtils-2cd91065.js";import{c as v}from"./cloneModel-bb0f0793.js";import"./shim-7e3475d3.js";import"./teacherFetch-a8835856.js";import"./mobx.esm-c867959f.js";import"./reactivity.esm-bundler-91732a87.js";import"./util-004fc0f1.js";const d="",g=(await a(`/src/views/${d}detailsView.jsx`))?.DetailsView;v((await a(`/src/${d}DinnerModel.js`))?.model);function D(){const{customEventNames:e}=h(g,{dishData:w,isDishInMenu:!0,guests:6},function(l){const t=E("button",l).filter(function(n){return n.props&&n.props.disabled});return f(t.length,"expected to find a disabled 'add to menu' button in Details view").to.equal(1),t});return e}const u="",s=(await a(`/src/views/${u}detailsView.jsx`))?.DetailsView,c=(await a(`/src/${u}dishSource.js`))?.getMenuDetails;(!c||!s)&&i(React.createElement("div",null,"Please write /src/dishSource.js and export getMenuDetails",React.createElement("br",null),"Please write /src/views/detailsView.jsx to define DetailsView"),document.getElementById("root"));let m;try{[m]=D()}catch{}if(c&&s){let e=function(){console.log("user wants to add the displayed dish to the menu!")};const o=React.createElement("div",null,React.createElement("p",null," This is the TW2.2.3 dish details view test"),React.createElement("p",null,"It retrieves two dishes using getMenuDetails and shows them side by side"),React.createElement("p",null,"The custom event we have detected for chosing dish is:"," ",React.createElement("code",null,m||"none yet")),React.createElement("hr",null)),l=1445969,t=1529625;i(React.createElement("div",null,o,"Wait..."),document.getElementById("root")),c([l,t]).then(function([r,p]){i(React.createElement("div",null,o,React.createElement("div",{style:{display:"flex","flex-direction":"row"}},React.createElement("div",{style:{flex:"0.5",padding:"20px"}},React.createElement(s,{dishData:r,isDishInMenu:!0,guests:7,addToMenuCustomEvent:e})),React.createElement("div",{style:{flex:"0.5",padding:"20px"}},React.createElement(s,{dishData:p,isDishInMenu:!1,guests:3,addToMenuCustomEvent:e})))),document.getElementById("root"))}).catch(function(r){i(React.createElement("div",null,r),document.getElementById("root"))})}
