import{r as s,a as m}from"./teacherRender-7b65909b.js";import{d as c}from"./dishesConst-c8e864fd.js";import{g as n}from"./filesToTest-e54ca7e1.js";import"./shim-7e3475d3.js";import"./teacherFetch-a8835856.js";import"./mobx.esm-c867959f.js";import"./reactivity.esm-bundler-91732a87.js";const o="",d=m,e=(await n(`/src/${o}DinnerModel.js`))?.model;function t(i){return c.find(function(a){return a.id===i})}e.addToMenu(t(200));e.addToMenu(t(2));e.addToMenu(t(100));e.addToMenu(t(1));e.setNumberOfGuests(5);const r=(await n(`/src/${d}js/${o}sidebarPresenter.jsx`))?.Sidebar;r||s(React.createElement("div",null,"Please define /src/",d,"js/sidebarPresenter.jsx"),document.getElementById("root"));r&&s(React.createElement("div",null,"TW1.5 Passing props from Presenters to Views. This is a non-interactive test of the Sidebar presenter. It should show the sidebar view based on a model with 5 guests and 4 dishes.",React.createElement("hr",null),React.createElement(r,{model:e})),document.getElementById("root"));
