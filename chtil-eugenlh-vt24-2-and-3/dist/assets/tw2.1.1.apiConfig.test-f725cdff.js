import{e as o}from"./index-6400038e.js";import{g as e}from"./filesToTest-e54ca7e1.js";import"./shim-7e3475d3.js";import"./util-004fc0f1.js";const _="",t=await e(`/src/${_}apiConfig.js`);describe("TW2.1.1 API config",function(){before(function(){t||this.skip()}),it("apiConfig exports BASE_URL and API_KEY",function(){o(t.BASE_URL,"BASE_URL not found in src/apiConfig.js").to.not.be.undefined,o(t.API_KEY,"API_key not found in src/apiConfig.js").to.not.be.undefined,o(t.BASE_URL,"BASE_URL is not a string").to.be.a("string"),o(t.API_KEY,"API_KEY is not a string").to.be.a("string")});let n=/^https\:\/\/brfenergi\.se\/iprog\/group\/[0-9]/;it("Check BASE_URL is correct",function(){o(t.BASE_URL,"BASE_URL does not follow the format indicated").to.match(n)}),it("Check length of API_KEY",function(){o(t.API_KEY,"API_KEY does not have a length of 50. Verify the API_Key is correct").to.have.lengthOf(50)})});