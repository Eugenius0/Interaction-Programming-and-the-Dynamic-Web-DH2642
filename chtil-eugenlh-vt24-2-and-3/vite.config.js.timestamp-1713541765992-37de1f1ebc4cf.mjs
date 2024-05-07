// vite.config.js
import fs2 from "fs";
import path2 from "path";
import { defineConfig } from "file:///Users/eugenius/Documents/KTH/IPROGD/chtil-eugenlh-vt24-2-and-3/node_modules/vite/dist/node/index.js";
import { nodePolyfills } from "file:///Users/eugenius/Documents/KTH/IPROGD/chtil-eugenlh-vt24-2-and-3/node_modules/vite-plugin-node-polyfills/dist/index.js";
import solidPlugin from "file:///Users/eugenius/Documents/KTH/IPROGD/chtil-eugenlh-vt24-2-and-3/node_modules/vite-plugin-solid/dist/esm/index.mjs";
import virtualHtml from "file:///Users/eugenius/Documents/KTH/IPROGD/chtil-eugenlh-vt24-2-and-3/node_modules/vite-plugin-virtual-html/dist/index.mjs";
import vuePlugin from "file:///Users/eugenius/Documents/KTH/IPROGD/chtil-eugenlh-vt24-2-and-3/node_modules/@vitejs/plugin-vue/dist/index.mjs";

// test/telemetryConfig.js
import fs from "fs";
import path from "path";
import parseGitConfig from "file:///Users/eugenius/Documents/KTH/IPROGD/chtil-eugenlh-vt24-2-and-3/node_modules/parse-git-config/index.js";
var __vite_injected_original_dirname = "/Users/eugenius/Documents/KTH/IPROGD/chtil-eugenlh-vt24-2-and-3/test";
var telemetryConfig = fs.readFileSync("./telemetry.config.json");
var telemetryUserInfo;
try {
  telemetryUserInfo = JSON.parse(telemetryConfig)["userInformation"];
  telemetryUserInfo = ["full", "anonymous", "none"].find((x) => x === telemetryUserInfo) ? telemetryUserInfo : "full";
} catch (e) {
  telemetryUserInfo = "full";
}
var currentDirectory;
try {
  const gitConfig = parseGitConfig.sync();
  currentDirectory = gitConfig['remote "origin"'].url.split("/").slice(-1)[0].replace(".git", "");
} catch (e) {
  try {
    currentDirectory = path.basename(__vite_injected_original_dirname);
  } catch (e2) {
    currentDirectory = "unknown";
  }
}
if (currentDirectory === "npm-tutorial") {
  telemetryUserInfo = "none";
}
var username;
var semester;
if (currentDirectory !== "unknown") {
  const semesterMatch = /-[vh]t[0-9]{2}-/.exec(currentDirectory);
  if (!semesterMatch) {
    username = currentDirectory;
    semester = "unknown";
  } else {
    username = currentDirectory.substring(0, semesterMatch.index);
    semester = currentDirectory.substring(semesterMatch.index + 1);
  }
} else {
  username = "anonymous";
  semester = "unknown";
}

// vite.config.js
var prefix = fs2.existsSync("./src/solved-utilities.js") ? "solved-" : "";
var tws = fs2.readdirSync("./tw").filter(function(file) {
  return path2.parse(file).ext === ".jsx" && path2.parse(file).name.startsWith("tw");
});
var virtualModuleId = "virtual:my-module";
var resolvedVirtualModuleId = "\0" + virtualModuleId;
var pages = {
  /*    "index": {     // only works with the solid plugin!
          entry: 'src/index.jsx',
          body: '<div id="root"></div>' ,
      },*/
  ...tws.reduce(function makeHtmlCB(acc, file) {
    return { ...acc, [path2.parse(file).name]: {
      entry: "tw/" + file,
      title: file,
      body: '<div id="root"></div>'
    } };
  }, {}),
  // map /vue.html
  "vue": {
    entry: "/src/vuejs/" + prefix + "index.jsx",
    title: "DinnerPlanner Vue",
    body: '<div id="root"></div>'
  },
  // map /react.html
  "react": {
    entry: "/src/reactjs/" + prefix + "index.jsx",
    title: "DinnerPlanner React",
    body: '<div id="root"></div>'
  },
  // map /test.html
  "test": {
    entry: "test/index.js",
    title: "DinnerPlanner tests",
    body: `<div class="container">   <div id="mocha"></div>   </div> <div id="rendering" style="display:none"></div>`
  }
};
pages.index = pages.test;
var vite_config_default = defineConfig({
  plugins: [
    //solidPlugin(),
    vuePlugin(),
    // for .vue files
    //vueJsxPlugin(),
    //reactJsxPlugin(),
    /*        {
                name: 'my-plugin', // required, will show up in warnings and errors
                resolveId(id) {
                    console.log(id);
                    if (id.startsWith("virtual:dh2642")) {
                        return "\0"+id;
                    }
                },
                load(id) {
                    if (id.startsWith("\0virtual:dh2642") ) {
                        
                        return `export const msg = "from virtual module"`;
                    }
                },
            },*/
    nodePolyfills({ protocolImports: true }),
    // needed by mocha
    virtualHtml({ pages })
    // HTML mappings
  ],
  server: {
    host: "0.0.0.0",
    port: 8080
  },
  define: {
    USERNAME: JSON.stringify(username),
    TELEMETRY: JSON.stringify(telemetryUserInfo),
    SEMESTER: JSON.stringify(semester),
    TEST_PREFIX: JSON.stringify(prefix),
    __VUE_OPTIONS_API__: JSON.stringify(true),
    __VUE_PROD_DEVTOOLS__: JSON.stringify(true)
  },
  build: {
    target: "esnext",
    // javascript version to target: latest
    chunkSizeWarningLimit: 600
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAidGVzdC90ZWxlbWV0cnlDb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZXVnZW5pdXMvRG9jdW1lbnRzL0tUSC9JUFJPR0QvY2h0aWwtZXVnZW5saC12dDI0LTItYW5kLTNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9ldWdlbml1cy9Eb2N1bWVudHMvS1RIL0lQUk9HRC9jaHRpbC1ldWdlbmxoLXZ0MjQtMi1hbmQtMy92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZXVnZW5pdXMvRG9jdW1lbnRzL0tUSC9JUFJPR0QvY2h0aWwtZXVnZW5saC12dDI0LTItYW5kLTMvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IG5vZGVQb2x5ZmlsbHMgfSBmcm9tICd2aXRlLXBsdWdpbi1ub2RlLXBvbHlmaWxscyc7XG5cbmltcG9ydCBzb2xpZFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1zb2xpZCc7XG5pbXBvcnQgdmlydHVhbEh0bWwgZnJvbSAndml0ZS1wbHVnaW4tdmlydHVhbC1odG1sJztcbmltcG9ydCB2dWVQbHVnaW4gZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbi8vaW1wb3J0IHZ1ZUpzeFBsdWdpbiBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4Jztcbi8vaW1wb3J0IHJlYWN0SnN4UGx1Z2luIGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCB7dXNlcm5hbWUsIHNlbWVzdGVyLCB0ZWxlbWV0cnlVc2VySW5mb30gZnJvbSBcIi4vdGVzdC90ZWxlbWV0cnlDb25maWcuanNcIjtcblxuLy8gaWYgc29sdmVkLVguanMgKG9yIC5qc3ggb3IgLnZ1ZSBvciAuY3NzKSBleGlzdHMsIHRoZW4gc29sdmVkLVguanMgaXMgdGVzdGVkLCBvdGhlcndpc2UgIFguanNcbmNvbnN0IHByZWZpeD0gIGZzLmV4aXN0c1N5bmMoXCIuL3NyYy9zb2x2ZWQtdXRpbGl0aWVzLmpzXCIpP1wic29sdmVkLVwiOlwiXCI7XG5cbi8vIHdlIG1hcCBldmVyeSB0dy90dyouanN4IGZpbGUgdG8gYSB2aXJ0dWFsIEhUTUwgYXZhaWxhYmxlIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6UE9SVC90dyouaHRtbFxuY29uc3QgdHdzPSBmcy5yZWFkZGlyU3luYyhcIi4vdHdcIikuZmlsdGVyKGZ1bmN0aW9uKGZpbGUpe3JldHVybiBwYXRoLnBhcnNlKGZpbGUpLmV4dD09PVwiLmpzeFwiICYmIHBhdGgucGFyc2UoZmlsZSkubmFtZS5zdGFydHNXaXRoKFwidHdcIik7fSk7XG5cbmNvbnN0IHZpcnR1YWxNb2R1bGVJZCA9ICd2aXJ0dWFsOm15LW1vZHVsZSdcbiAgY29uc3QgcmVzb2x2ZWRWaXJ0dWFsTW9kdWxlSWQgPSAnXFwwJyArIHZpcnR1YWxNb2R1bGVJZFxuY29uc3QgcGFnZXM9IHtcbi8qICAgIFwiaW5kZXhcIjogeyAgICAgLy8gb25seSB3b3JrcyB3aXRoIHRoZSBzb2xpZCBwbHVnaW4hXG4gICAgICAgIGVudHJ5OiAnc3JjL2luZGV4LmpzeCcsXG4gICAgICAgIGJvZHk6ICc8ZGl2IGlkPVwicm9vdFwiPjwvZGl2PicgLFxuICAgIH0sKi9cbiAgICAuLi4gdHdzLnJlZHVjZShmdW5jdGlvbiBtYWtlSHRtbENCKGFjYywgZmlsZSl7XG4gICAgICAgIHJldHVybiB7IC4uLiBhY2MsIFtwYXRoLnBhcnNlKGZpbGUpLm5hbWVdOiAge1xuICAgICAgICAgICAgZW50cnk6IFwidHcvXCIrZmlsZSxcbiAgICAgICAgICAgIHRpdGxlOiBmaWxlLFxuICAgICAgICAgICAgYm9keTogJzxkaXYgaWQ9XCJyb290XCI+PC9kaXY+JyAsXG4gICAgICAgIH19O1xuICAgIH0sIHt9KSxcbiAgICAvLyBtYXAgL3Z1ZS5odG1sXG4gICAgXCJ2dWVcIjp7XG4gICAgICAgIGVudHJ5OiAnL3NyYy92dWVqcy8nK3ByZWZpeCsnaW5kZXguanN4JyxcbiAgICAgICAgdGl0bGU6XCJEaW5uZXJQbGFubmVyIFZ1ZVwiLCBcbiAgICAgICAgYm9keTogJzxkaXYgaWQ9XCJyb290XCI+PC9kaXY+J1xuICAgIH0sXG4gICAgLy8gbWFwIC9yZWFjdC5odG1sXG4gICAgXCJyZWFjdFwiOntcbiAgICAgICAgZW50cnk6ICcvc3JjL3JlYWN0anMvJytwcmVmaXgrJ2luZGV4LmpzeCcsXG4gICAgICAgIHRpdGxlOlwiRGlubmVyUGxhbm5lciBSZWFjdFwiLCBcbiAgICAgICAgYm9keTogJzxkaXYgaWQ9XCJyb290XCI+PC9kaXY+J1xuICAgIH0sXG4gICAgLy8gbWFwIC90ZXN0Lmh0bWxcbiAgICBcInRlc3RcIjp7XG4gICAgICAgIGVudHJ5OiAndGVzdC9pbmRleC5qcycsXG4gICAgICAgIHRpdGxlOlwiRGlubmVyUGxhbm5lciB0ZXN0c1wiLCBcbiAgICAgICAgYm9keTogYDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj4gICA8ZGl2IGlkPVwibW9jaGFcIj48L2Rpdj4gICA8L2Rpdj4gPGRpdiBpZD1cInJlbmRlcmluZ1wiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+PC9kaXY+YCBcbiAgICB9LFxufTtcblxucGFnZXMuaW5kZXg9IHBhZ2VzLnRlc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW1xuICAgICAgICAvL3NvbGlkUGx1Z2luKCksXG4gICAgICAgIHZ1ZVBsdWdpbigpLCAgIC8vIGZvciAudnVlIGZpbGVzXG4gICAgICAgIC8vdnVlSnN4UGx1Z2luKCksXG4gICAgICAgIC8vcmVhY3RKc3hQbHVnaW4oKSxcbi8qICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbXktcGx1Z2luJywgLy8gcmVxdWlyZWQsIHdpbGwgc2hvdyB1cCBpbiB3YXJuaW5ncyBhbmQgZXJyb3JzXG4gICAgICAgICAgICByZXNvbHZlSWQoaWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgICAgICAgICAgICAgaWYgKGlkLnN0YXJ0c1dpdGgoXCJ2aXJ0dWFsOmRoMjY0MlwiKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcXDBcIitpZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9hZChpZCkge1xuICAgICAgICAgICAgICAgIGlmIChpZC5zdGFydHNXaXRoKFwiXFwwdmlydHVhbDpkaDI2NDJcIikgKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYGV4cG9ydCBjb25zdCBtc2cgPSBcImZyb20gdmlydHVhbCBtb2R1bGVcImA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSwqL1xuICAgICAgICBub2RlUG9seWZpbGxzKHsgcHJvdG9jb2xJbXBvcnRzOiB0cnVlLH0pLCAgIC8vIG5lZWRlZCBieSBtb2NoYVxuICAgICAgICB2aXJ0dWFsSHRtbCh7cGFnZXN9KSAgICAgIC8vIEhUTUwgbWFwcGluZ3NcbiAgICBdLFxuICAgIHNlcnZlcjoge1xuICAgICAgICBob3N0OiBcIjAuMC4wLjBcIixcbiAgICAgICAgcG9ydDogODA4MCxcbiAgICB9LFxuICAgIGRlZmluZToge1xuICAgICAgICBVU0VSTkFNRTogSlNPTi5zdHJpbmdpZnkodXNlcm5hbWUpLFxuICAgICAgICBURUxFTUVUUlk6IEpTT04uc3RyaW5naWZ5KHRlbGVtZXRyeVVzZXJJbmZvKSxcbiAgICAgICAgU0VNRVNURVI6IEpTT04uc3RyaW5naWZ5KHNlbWVzdGVyKSxcbiAgICAgICAgVEVTVF9QUkVGSVg6IEpTT04uc3RyaW5naWZ5KHByZWZpeCksXG4gICAgICAgIF9fVlVFX09QVElPTlNfQVBJX186SlNPTi5zdHJpbmdpZnkodHJ1ZSksXG4gICAgICAgIF9fVlVFX1BST0RfREVWVE9PTFNfXzpKU09OLnN0cmluZ2lmeSh0cnVlKSxcbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICAgIHRhcmdldDogJ2VzbmV4dCcsICAgLy8gamF2YXNjcmlwdCB2ZXJzaW9uIHRvIHRhcmdldDogbGF0ZXN0XG4gICAgICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogNjAwLFxuICAgIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2V1Z2VuaXVzL0RvY3VtZW50cy9LVEgvSVBST0dEL2NodGlsLWV1Z2VubGgtdnQyNC0yLWFuZC0zL3Rlc3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9ldWdlbml1cy9Eb2N1bWVudHMvS1RIL0lQUk9HRC9jaHRpbC1ldWdlbmxoLXZ0MjQtMi1hbmQtMy90ZXN0L3RlbGVtZXRyeUNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZXVnZW5pdXMvRG9jdW1lbnRzL0tUSC9JUFJPR0QvY2h0aWwtZXVnZW5saC12dDI0LTItYW5kLTMvdGVzdC90ZWxlbWV0cnlDb25maWcuanNcIjtpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHBhcnNlR2l0Q29uZmlnIGZyb20gJ3BhcnNlLWdpdC1jb25maWcnO1xuXG4vKlxuICpcbiAqIHRoaXMgY29kZSBpcyBydW4gc2VydmVyLXNpZGUgYXQgbnBtIHN0YXJ0dXAgdG8gZGV0ZXJtaW5lIHRoZSB0ZWxlbWV0cnkgaW5mb1xuICpcbiAqL1xuY29uc3QgdGVsZW1ldHJ5Q29uZmlnID0gZnMucmVhZEZpbGVTeW5jKFwiLi90ZWxlbWV0cnkuY29uZmlnLmpzb25cIik7XG5sZXQgdGVsZW1ldHJ5VXNlckluZm87XG50cnkge1xuICAgIHRlbGVtZXRyeVVzZXJJbmZvID0gSlNPTi5wYXJzZSh0ZWxlbWV0cnlDb25maWcpW1widXNlckluZm9ybWF0aW9uXCJdO1xuICAgIHRlbGVtZXRyeVVzZXJJbmZvID0gW1wiZnVsbFwiLCBcImFub255bW91c1wiLCBcIm5vbmVcIl0uZmluZCh4ID0+IHggPT09IHRlbGVtZXRyeVVzZXJJbmZvKSA/IHRlbGVtZXRyeVVzZXJJbmZvIDogXCJmdWxsXCI7XG59IGNhdGNoIChlKSB7XG4gICAgdGVsZW1ldHJ5VXNlckluZm8gPSBcImZ1bGxcIjtcbn1cblxuXG5sZXQgY3VycmVudERpcmVjdG9yeTtcbnRyeSB7XG4gICAgY29uc3QgZ2l0Q29uZmlnID0gcGFyc2VHaXRDb25maWcuc3luYygpO1xuICAgIGN1cnJlbnREaXJlY3RvcnkgPSBnaXRDb25maWdbJ3JlbW90ZSBcIm9yaWdpblwiJ10udXJsLnNwbGl0KCcvJykuc2xpY2UoLTEpWzBdLnJlcGxhY2UoXCIuZ2l0XCIsIFwiXCIpO1xufSBjYXRjaChlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY3VycmVudERpcmVjdG9yeSA9IHBhdGguYmFzZW5hbWUoX19kaXJuYW1lKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgY3VycmVudERpcmVjdG9yeSA9IFwidW5rbm93blwiO1xuICAgIH1cbn1cblxuaWYgKGN1cnJlbnREaXJlY3RvcnkgPT09IFwibnBtLXR1dG9yaWFsXCIpIHtcbiAgICB0ZWxlbWV0cnlVc2VySW5mbyA9IFwibm9uZVwiO1xufVxuXG5sZXQgdXNlcm5hbWUsIHNlbWVzdGVyO1xuaWYgKGN1cnJlbnREaXJlY3RvcnkgIT09IFwidW5rbm93blwiKSB7XG4gICAgY29uc3Qgc2VtZXN0ZXJNYXRjaD0gLy1bdmhddFswLTldezJ9LS8uZXhlYyhjdXJyZW50RGlyZWN0b3J5KTtcbiAgICBpZighc2VtZXN0ZXJNYXRjaCl7XG4gICAgICAgIHVzZXJuYW1lPSBjdXJyZW50RGlyZWN0b3J5O1xuICAgICAgICBzZW1lc3Rlcj0gXCJ1bmtub3duXCI7XG4gICAgfWVsc2V7XG4gICAgICAgIHVzZXJuYW1lID0gY3VycmVudERpcmVjdG9yeS5zdWJzdHJpbmcoMCwgc2VtZXN0ZXJNYXRjaC5pbmRleCk7XG4gICAgICAgIHNlbWVzdGVyPSBjdXJyZW50RGlyZWN0b3J5LnN1YnN0cmluZyhzZW1lc3Rlck1hdGNoLmluZGV4KzEpO1xuICAgIH1cbn0gZWxzZSB7XG4gICAgdXNlcm5hbWUgPSBcImFub255bW91c1wiO1xuICAgIHNlbWVzdGVyID0gXCJ1bmtub3duXCI7XG59XG5cbmV4cG9ydCB7dXNlcm5hbWUsIHNlbWVzdGVyLCB0ZWxlbWV0cnlVc2VySW5mb307XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStXLE9BQU9BLFNBQVE7QUFDOVgsT0FBT0MsV0FBVTtBQUVqQixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLHFCQUFxQjtBQUU5QixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGVBQWU7OztBQ1JnWCxPQUFPLFFBQVE7QUFDclosT0FBTyxVQUFVO0FBQ2pCLE9BQU8sb0JBQW9CO0FBRjNCLElBQU0sbUNBQW1DO0FBU3pDLElBQU0sa0JBQWtCLEdBQUcsYUFBYSx5QkFBeUI7QUFDakUsSUFBSTtBQUNKLElBQUk7QUFDQSxzQkFBb0IsS0FBSyxNQUFNLGVBQWUsRUFBRSxpQkFBaUI7QUFDakUsc0JBQW9CLENBQUMsUUFBUSxhQUFhLE1BQU0sRUFBRSxLQUFLLE9BQUssTUFBTSxpQkFBaUIsSUFBSSxvQkFBb0I7QUFDL0csU0FBUyxHQUFHO0FBQ1Isc0JBQW9CO0FBQ3hCO0FBR0EsSUFBSTtBQUNKLElBQUk7QUFDQSxRQUFNLFlBQVksZUFBZSxLQUFLO0FBQ3RDLHFCQUFtQixVQUFVLGlCQUFpQixFQUFFLElBQUksTUFBTSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVB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
