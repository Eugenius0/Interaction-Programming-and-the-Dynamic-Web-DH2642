import{r as c,i as f,g as d,a as p,s as h,o as b,b as m}from"./teacherFirebase-d288d85e.js";import{getMenuDetails as T}from"./dishSource-c266b965.js";import{firebaseConfig as v}from"./firebaseConfig-f4ab32c9.js";import"./mockFirebase-8bba77fc.js";import"./index-6400038e.js";import"./shim-7e3475d3.js";import"./util-004fc0f1.js";import"./filesToTest-e54ca7e1.js";import"./apiConfig-79b6cae8.js";var C="firebase",I="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */c(C,I,"app");const A=f(v),D=d(A),g="dinnerModel14",n=p(D,g);function B(e){const{numberOfGuests:t,dishes:s,currentDishId:r}=e;function o(u){return u.id}const a=s.map(o).sort();return{numberOfGuests:t,dishIds:a,currentDishId:r}}function i(e,t){return t.setNumberOfGuests(e?.numberOfGuests||2),t.setCurrentDishId(e?.currentDishId||null),T(e?.dishIds||[]).then(function(r){t.dishes=r})}function y(e){if(e.ready){const t=B(e);h(n,t)}}function G(e){return e.ready=!1,b(n,t=>{e.ready&&i(t.val(),e)}),m(n).then(function(s){return i(s.val(),e)}).then(function(){e.ready=!0})}function N(e,t){G(e);function s(){return[e.numberOfGuests,e.currentDishId,e.dishes]}function r(){y(e)}t(s,r)}export{N as connectToFirebase,B as modelToPersistence,i as persistenceToModel,G as readFromFirebase,y as saveToFirebase};
