import{_ as a}from"./shim-7e3475d3.js";import{e as t}from"./index-6400038e.js";import{d as u}from"./dishesConst-c8e864fd.js";import{c as d}from"./cloneModel-bb0f0793.js";import"./util-004fc0f1.js";function s(n){return u.find(function(e){return e.id===n})}describe("TW1.1.1 Basic JavaScript",function(){this.parent.setMaxListeners(200),this.timeout(2e5);let e;beforeEach(async function(){const o=d((await a(()=>import("../src/DinnerModel.js"),[])).model);try{e=d(o)}catch(r){console.error(r)}}),it("can set current dish",function(){t(e.currentDishId,"currentDishId should initially be null").to.be.null;const o=fetch;window.fetch=function(){return Promise.resolve({ok:!0,status:200,json(){return Promise.resolve(u[0])}})};try{e.setCurrentDishId(1),t(e.currentDishId,"expected current dish id to be 1 after having set it to 1").to.equal(1),e.setCurrentDishId(3),t(e.currentDishId,"expected current dish id to be 3 after having set it to 3").to.equal(3)}finally{window.fetch=o}}),it("number of guests can only be set to a positive integer",function(){t(e,"Model could not be imported, please check the top of your Console!").to.be.ok,t(e.numberOfGuests," number of guests not properly initialized").to.equal(2),t(e.dishes,"dishes  not properly initialized to empty array").to.be.an("array"),t(e.dishes.length,"dishes  not properly initialized to empty array").to.equal(0),e.setNumberOfGuests(1),t(e.numberOfGuests,"The model numberOfGuests must be set to 1 if setNumberOfGuests(1) is called").to.equal(1),e.setNumberOfGuests(2),t(e.numberOfGuests,"The model numberOfGuests must be set to 2 if setNumberOfGuests(2) is called").to.equal(2);const o="number of guests not a positive integer";function r(){e.setNumberOfGuests(-1)}function h(){e.setNumberOfGuests(0)}function l(){e.setNumberOfGuests(3.14159265)}t(r,"The model should not allow a negative number of guests, Error must be thrown").to.throw(Error,o),t(h,"The model should not allow 0 guests, Error must be thrown").to.throw(Error,o),t(l,"The model should not allow a non-integer number of guests, Error must be thrown").to.throw(Error,o)}),it("can add dishes",function(){e.addToMenu(s(100)),t(e.dishes.length,"After adding 1 dishe to the model via addToMenu, model.dishes should have length 1").to.equal(1),e.addToMenu(s(1)),t(e.dishes.length,"After adding 2 dishe to the model via addToMenu, model.dishes should have length 2").to.equal(2),e.addToMenu(s(200)),t(e.dishes.length,"After adding 3 dishes to the model via addToMenu, the model should have 3 dishes").to.equal(3),t(e.dishes,"inserted dish with ID 1 expected to be in the menu").to.include(s(1)),t(e.dishes,"inserted dish with ID 100 expected to be in the menu").to.include(s(100)),t(e.dishes,"inserted dish with ID 200 expected to be in the menu").to.include(s(200))})});