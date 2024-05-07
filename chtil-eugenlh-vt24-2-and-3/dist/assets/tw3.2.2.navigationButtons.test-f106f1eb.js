import{e}from"./index-6400038e.js";import{i as d,f as r,p as m}from"./jsxUtilities-a811c57a.js";import{d as w,s as g}from"./mockFetch-ba9030b0.js";import{g as c}from"./filesToTest-e54ca7e1.js";import"./shim-7e3475d3.js";import"./util-004fc0f1.js";const h="",f=(await c(`/src/views/${h}searchFormView.jsx`))?.SearchFormView,_=(await c(`/src/views/${h}searchResultsView.jsx`))?.SearchResultsView,v=(await c(`/src/views/${h}sidebarView.jsx`))?.SidebarView,b=(await c(`/src/views/${h}summaryView.jsx`))?.SummaryView,p=(await c(`/src/views/${h}detailsView.jsx`))?.DetailsView;describe("TW3.2.2 Navigation buttons in views [Vue](/vue.html) [React](/react.html)",function(){this.timeout(2e5),before(function(){try{e(f).to.be.ok,e(p).to.be.ok,e(_).to.be.ok,e(b).to.be.ok,d();const o=b({people:2,ingredients:[]}),t=r("button",o);e(t.length).to.be.ok}catch{this.skip()}}),it("SummaryView should have a button leading to search (render a button in SummaryView to enable)",async function(){this._runnable.title="SummaryView should have a button leading to search";const t=b({people:2,ingredients:[]}),n=r("button",t);e(n.length,"summary view should have one button").to.equal(1),window.location.hash="/randomRoute",n[0].props.onClick(),await new Promise(i=>setTimeout(i)),e(window.location.hash,"Summary button should navigate to search").to.equal("#/search")}),it("DetaillsView should have a button leading to search without adding the dish",async function(){d();const t=p({isDishInMenu:!0,guests:2,dishData:w}),n=r("button",t).filter(function(i){return!i.props.disabled});e(n.length,"DetailsView expected to have two (navigation) buttons and only one of them is enabled when the dish is already in the menu").to.equal(1),window.location.hash="/details",n[0].props.onClick(),await new Promise(i=>setTimeout(i)),e(window.location.hash,"Details navigation button should navigate to search").to.equal("#/search")}),it("DetaillsView dish adding button should lead to search",async function(){const{clickables:t,rendering:n}=m(p,{isDishInMenu:!0,guests:2,dishData:w},function(a){const l=r("button",a).filter(function(s){return s.props.disabled});return e(l.length,"DetailsView expected to have one single disabled (add to menu) button if dish is in menu").to.equal(1),l});window.location.hash="/randomRoute",t[0].props.onClick(),await new Promise(i=>setTimeout(i)),e(window.location.hash,"Details 'add to menu' button should navigate to search").to.equal("#/search")}),it("SidebarView dish view links should open dish details",async function(){d();function t(u){return r("a",u)}const n=v({number:2,dishes:[w]});if(t(n).filter(function(u){return u.props.href!="#/details"}).length==0)return;const{clickables:a,rendering:l}=m(v,{number:2,dishes:[w]},t);e(a.length).to.equal(1),window.location.hash="/randomRoute";const s=new Event("change",{bubbles:!0,cancelable:!0});a[0].props.onClick(s),await new Promise(u=>setTimeout(u)),e(window.location.hash,"SidebarView dish links should navigate to details").to.equal("#/details"),e(s.defaultPrevented,"click on a sidebar link should prevent default behavior").to.equal(!0)}),it("SearchResultsView dish click should lead to details",async function(){const{clickables:t,rendering:n}=m(_,{searchResults:g},function(a){return r("span",a).filter(function(s){return s.props&&s.props.onClick})});e(t.length).to.equal(g.length),await Promise.all(t.map(async function(a){window.location.hash="/search",a.props.onClick(),await new Promise(l=>setTimeout(l)),e(window.location.hash,"SearchResultsView click on any result should navigate to details").to.equal("#/details")}))}),it("SearchFormView button click should lead to Summary",async function(){d();const t=f({dishTypeOptions:[]}),n=r("button",t).filter(function(i){return i?.children.toString().toLowerCase().indexOf("summary")>=0});e(n.length,"SearchFormView should have one button with a label containing the wod 'summary'").to.equal(1),window.location.hash="/randomRoute",n[0].props.onClick(),await new Promise(i=>setTimeout(i)),e(window.location.hash,"SearchFormView navigation button should navigate to summary").to.equal("#/summary")})});
