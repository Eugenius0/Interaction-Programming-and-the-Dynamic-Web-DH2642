import{e}from"./index-6400038e.js";import{m as _}from"./mockModel-b7c7107c.js";import{g as a}from"./filesToTest-e54ca7e1.js";import{t as R,b as v}from"./testComponentTL-6fcfc331.js";import{f as V}from"./findCustomEvents-18f41d5f.js";import{c as P}from"./cloneModel-bb0f0793.js";import"./shim-7e3475d3.js";import"./util-004fc0f1.js";import"./vue.runtime.esm-bundler-12250fee.js";import"./runtime-dom.esm-bundler-9a021e8b.js";import"./runtime-core.esm-bundler-8a2f4052.js";import"./reactivity.esm-bundler-91732a87.js";import"./index-7ea524dd.js";import"./index-93c19621.js";import"./index-37df3fb2.js";import"./client-eba7b630.js";import"./mobx.esm-c867959f.js";import"./jsxUtilities-a811c57a.js";const n="",f=(await a(`/src/vuejs/${n}searchPresenter.jsx`))?.Search,S=(await a(`/src/reactjs/${n}searchPresenter.jsx`))?.Search,d=(await a(`/src/views/${n}searchFormView.vue`))?.SearchFormView||(await a(`/src/views/${n}searchFormView.jsx`))?.SearchFormView,w=(await a(`/src/views/${n}searchResultsView.vue`))?.SearchResultsView||(await a(`/src/views/${n}searchResultsView.jsx`))?.SearchResultsView,q=P((await a(`/src/${n}DinnerModel.js`))?.model);describe("Bonus: search params in component state, initial search using component lifecycle (remove model.searchParams to enable) [test Vue](/tw2.5.2.html)[React](/tw2.5.2-react.html)",async function(){this.timeout(2e5),before(function(){(!f||!d||!w)&&this.skip();let t=P(q);t?.searchResultsPromiseState||this.skip(),t?.searchParams&&this.skip()}),beforeEach(function(){}),R({vue:f,react:S,mock:[{component:d,dummyText:"mock searchForm view"},{component:w,dummyText:"mock searchResults view"}]},{model:new Proxy({searchResultsPromiseState:{promise:"foo"},doSearch(t){}},_("Search presenter with component state"))},"$framework stateful Search presenter passes text, type props to SearchFormView",function(o,T,s){e(o.queryByText(/mock searchForm view/),"Search presenter should always render the search form view").to.be.ok,e(o.queryByRole("img"),"When there is a promise but no data or error yet, Search presenter should render a loading image").to.be.ok;const r=s[0]?.propsHistory[0];e(r,"The SearchFormView should be sent props").to.be.ok,e(r,"prop 'text' not passed to SearchFormView").to.have.property("text"),e(r.text,"initial prop 'text' should be falsy").to.not.be.ok,e(r,"prop 'type' not passed to SearchFormView").to.have.property("text"),e(r.text,"initial prop 'type' should be falsy").to.not.be.ok,e(r,"prop 'dishTypeOptions' not passed to SearchFormView").to.have.property("dishTypeOptions"),e(JSON.stringify(r.dishTypeOptions),"the options passed should be an array containing starter, main course, dessert").to.equal(JSON.stringify(["starter","main course","dessert"]))});let c,i;beforeEach(function(){c=i=void 0}),v({vue:f,react:S,mock:[{component:d,dummyText:"mock searchForm view"},{component:w,dummyText:"mock searchResults view"}]},{model:new Proxy({searchResultsPromiseState:{},doSearch(t){c=!0,i=t}},_("Search presenter test"))},"$framework stateful Search presenter handles custom events fired by SearchFormView and changes its state",async function(o,T,s){e(o.queryByText(/mock searchForm view/),"Search presenter should always render the search form view").to.be.ok;const r=s[0]?.propsHistory[0],y=V(d,{dishTypeOptions:["starter","main course","dessert"]}),m=y.button.filter(function(F){return F.element.children.flat()[0].toLowerCase().trim().startsWith("search")})[0].customEventName,h=y.select[0].customEventName,p=y.input[0].customEventName;e(r[p],`custom event handler ${p} should be a function`).to.be.a("function"),r[p]("some test search query"),await o.findByText("mock searchForm view 2"),e(s[0].propsHistory.length,"when the custom event "+p+" fires, a presenter re-render is expected due to changing component state").to.equal(2),e(s[0].propsHistory[1].text,"custom event handler "+p+" should change search query in comoponent state and pass it to the view").to.equal("some test search query"),e(r[h],`custom event handler ${h} should be a function`).to.be.a("function"),r[h]("some test search type"),await o.findByText("mock searchForm view 3"),e(s[0].propsHistory.length,"when the custom event "+h+" fires, a presenter re-render is expected due to changing component state").to.equal(3),e(s[0].propsHistory[2].type,"custom event handler "+h+" should change search type in comoponent state and pass it to the view").to.equal("some test search type"),c=void 0,i=void 0,e(r[m],`custom event handler ${m} should be a function`).to.be.a("function"),s[0].propsHistory[2][m](),e(c,"custom event handler "+m+" should trigger search in the model").to.equal(!0),e(i,"custom event handler "+m+" should trigger search in the model with the parameters filled in by the user").to.deep.equal({query:"some test search query",type:"some test search type"}),c=i=void 0});let l,u;beforeEach(function(){l=u=void 0});async function b(t,o,T){e(t.queryByText(/mock searchForm view/),"Search presenter should always render the search form view").to.be.ok,e(t.queryByText(/no data/i),"initially, stateful Search presenter should show 'no data'").to.be.ok,e(l,"search presenter must perform a search at first render").to.be.ok,e(u,"search performed via component lifecycle has an empty object as parameter").to.deep.equal({}),l=void 0,u=void 0,t.reactiveModel.searchResultsPromiseState={promise:"bla"},await t.findByRole("img"),t.reactiveModel.searchResultsPromiseState={promise:"bla",data:"foo"},await t.findByText("mock searchResults view 1")}const x={searchResultsPromiseState:{},doSearch(t){l=!0,u=t}},k=[{component:d,dummyText:"mock searchForm view"},{component:w,dummyText:"mock searchResults view"}],g="$framework stateful Search presenter performs an initial search using component lifecycle";v({vue:f,mock:k},{model:{...x}},g,b),v({react:S,mock:k},{model:{...x}},g,b)});
