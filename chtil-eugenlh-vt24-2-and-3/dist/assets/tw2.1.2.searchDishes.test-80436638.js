import{e as u}from"./index-6400038e.js";import{w as _,m as r,c as m,s as f}from"./mockFetch-ba9030b0.js";import{g as p}from"./filesToTest-e54ca7e1.js";import"./shim-7e3475d3.js";import"./util-004fc0f1.js";const w="",i=await p(`/src/${w}dishSource.js`);let t;i?.searchDishes&&(t=i.searchDishes);describe("TW2.1.2 API call: search [test](/tw2.1.2.html)",function(){this.timeout(2e5),before(function(){t||this.skip()});function s(e,c,o,a=!0,n=!0){it(e,async function(){const h=await _(r,c);m(r.lastFetch,r.lastParam,[-281827937],n&&o),a&&u(h,"searchDishes returns the correct array").to.equal(f)}).timeout(4e3)}s("searchDishes uses the correct proxy, API endpoint and HTTP headers",function(){return t({})},[],!1,!1),s("searchDishes keeps only one of the API result properties: an array of dishes",function(){return t({})},[],!0,!1),s("searchDishes sends the correct query string: testing with type 'main course'",function(){return t({type:"main course"})},[1758563338]),s("searchDishes sends the correct query string: testing with pizza as main course",function(){return t({query:"pizza",type:"main course"})},[-1894851277,1758563338]),s("searchDishes strawberry pie as dessert",function(){return t({query:"strawberry pie",type:"dessert"})},[1496539523,-1015451899]),s("searchDishes strawberry pie",function(){return t({query:"strawberry pie"})},[-1015451899]),s("searchDishes with no search criteria (empty object)",function(){return t({})},[])});