import{r as t}from"./teacherRender-7b65909b.js";import{g as l}from"./filesToTest-e54ca7e1.js";import"./shim-7e3475d3.js";import"./teacherFetch-a8835856.js";import"./mobx.esm-c867959f.js";import"./reactivity.esm-bundler-91732a87.js";const n="";(await l(`/src/${n}DinnerModel.js`))?.model;const e=(await l(`/src/reactjs/${n}detailsPresenter.jsx`))?.Details;e||t(React.createElement("div",null,"Please write /src/reactjs/detailsPresenter.jsx"),document.getElementById("root"));if(e){const s=React.createElement("div",null,React.createElement("p",null," This is the TW3.2 React Details presenter test (component state, lifecycle, observer, side effect)"),React.createElement("p",null,"The test is similar to the ",React.createElement("a",{href:"/tw2.5.1.html"},"Vue 2.5.1")),React.createElement("p",null,'It displays the Details with a model containing no current dish initially, so you should see "no data"'),React.createElement("p",null,"After 2 seconds the current dish is set and you should see it nicely rendered with your DetailsView"),React.createElement("p",null,"After 5 seconds the current dish is set again!"),React.createElement("p",null,"Edit tw/tw3.2.3.js to see other dishes"),React.createElement("p",null,"You can access and manipulate the model from the Console using myModel. Changing the model (e.g. setNumberOfGuests, setCurrentDishId) should be visible in the user interface."),React.createElement("hr",null)),r=1445969,i=32104;window.myModel=model,t(React.createElement("div",null,s,React.createElement(e,{model:window.myModel})),document.getElementById("root")),setTimeout(function(){window.myModel.setCurrentDishId(r)},2e3),setTimeout(function(){window.myModel.setCurrentDishId(i)},5e3)}