const c=window.fetch,e=[{time:Date.now()}],o=`fetch() will stop working now, because the last 10 fetches were made in less than 15 miliseconds.
The code is still in an infinite re-render/infinite loop, and that will heat up your CPU.
To stop that, open Developer Tools and Reload ASAP. Then the code will pause. Check the Call Stack!
Look for useEffect() with no second parameter, or for state changes during render, since that triggers re-render.
`;window.fetch=function(n,s){if(e.push({url:n,time:Date.now()}),e.length>20&&e.slice(-1)[0].time-e.slice(-20)[0].time<30){const t=e.slice(-20).map(i=>i.url+`
`).join("");console.warn(`Execution will now pause because the last 20 fetches were made in less than 30 miliseconds. URLs below. 
Check the **Call Stack** to see where the offending call comes from!
 `+t);debugger;throw document.body.innerText=o+t,new Error(o+t)}return c(n,s)};console.log("DH2642 fetch() infinite re-render protection installed");
