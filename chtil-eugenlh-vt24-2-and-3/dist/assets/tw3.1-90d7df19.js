import{r as a}from"./teacherRender-7b65909b.js";import{g as l}from"./filesToTest-e54ca7e1.js";import{r as o}from"./reactivity.esm-bundler-91732a87.js";import"./shim-7e3475d3.js";import"./teacherFetch-a8835856.js";import"./mobx.esm-c867959f.js";const r="",c=(await l(`/src/${r}DinnerModel.js`))?.model,s=(await l(`/src/vuejs/${r}sidebarPresenter.jsx`))?.Sidebar,i=(await l(`/src/vuejs/${r}summaryPresenter.jsx`))?.Summary,m=(await l(`/src/vuejs/${r}searchPresenter.jsx`))?.Search,d=(await l(`/src/vuejs/${r}detailsPresenter.jsx`))?.Details,t=o(c),u=React.createElement("div",null,"This is the Observer interactive test. The model of the application below has two observers attached,",React.createElement("ul",null,React.createElement("li",null,React.createElement("b",null,"logObs")," will log in console.log (in black) every time it is notified"),React.createElement("li",null,React.createElement("b",null,"errorObs")," will log in console.error (in red) every time it is notified")),React.createElement("p",null,"The mmodel is made available as the global variable ",React.createElement("b",null,"myModel"),". Try the following:"),React.createElement("ul",null,React.createElement("li",null,React.createElement("pre",null,"myModel.notifyObservers()")),React.createElement("li",null,React.createElement("pre",null,'myModel.notifyObservers("example payload")')),React.createElement("li",null,"interact with the app to change the model. Then notify:"),React.createElement("li",null,React.createElement("pre",null,"myModel.notifyObservers()")),React.createElement("li",null,React.createElement("pre",null,"myModel.removeObserver(errorObs)")),React.createElement("li",null,React.createElement("pre",null,"myModel.notifyObservers()")),React.createElement("li",null,React.createElement("pre",null,"myModel.addObserver(errorObs)")),React.createElement("li",null,"call notifyObservers from setNumberOfGuests, addToMenu, removeFromMenu, setCurrentDishId!"),React.createElement("li",null,"interact with the app to change the model and see both observers in action"),React.createElement("li",null,React.createElement("pre",null,"myModel.setNumberOfGuests(5)")),React.createElement("li",null,"add your own observer:"),React.createElement("li",null,React.createElement("pre",null,"fucnction observerACB()",'{console.log("my observer!", myModel.YOUR_INTEREST_HERE);}')),React.createElement("li",null,React.createElement("pre",null,"myMode.addObserver(observerACB)"))),React.createElement("hr",null));a(React.createElement("div",null,u,React.createElement(s,{model:t}),React.createElement(i,{model:t}),React.createElement(m,{model:t}),React.createElement(d,{model:t})),document.getElementById("root"));window.myModel=t;window.errorObs=function(e){console.error("errorObs was notified"+(e?", payload is: "+e:"")+". It is only interested in dishes, ids are: "+window.myModel.dishes.map(function(n){return n.id})+(window.myModel.dishes.length?"":"(none)"))};window.logObs=function(e){console.log("logObs was notified"+(e?", payload is: "+e:"")+". guests:"+window.myModel.numberOfGuests+", "+window.myModel.dishes.length+" dishes, currentDish: "+window.myModel.currentDish)};window.myModel.addObserver(window.logObs);window.myModel.addObserver(window.errorObs);
