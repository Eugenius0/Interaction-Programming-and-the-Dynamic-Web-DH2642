import{SearchFormView as i}from"./searchFormView-bd9e0fa6.js";import{SearchResultsView as h}from"./searchResultsView-b2d22835.js";import"./styles.module-705469aa.js";function d(t){const{model:r}=t;function a(e){r.setSearchQuery(e)}function n(e){r.setSearchType(e)}function c(){r.doSearch(r.searchParams)}function s(e){if(!e.promise)return React.createElement("div",null,"No data");if(e.promise){if(!e.data&&!e.error)return React.createElement("img",{src:"https://brfenergi.se/iprog/loading.gif"});if(e.error)return String(e.error)}}function o(e){r.setCurrentDishId(e.id)}return console.log(String(r.searchResultsPromiseState)),React.createElement("div",null,React.createElement(i,{dishTypeOptions:["starter","main course","dessert"],text:r.searchParams.query,onTextChange:a,type:r.searchParams.type,onTypeChange:n,onCustomEvt:c}),s(r.searchResultsPromiseState)||React.createElement(h,{searchResults:r.searchResultsPromiseState.data,onDishClick:o}))}export{d as Search};