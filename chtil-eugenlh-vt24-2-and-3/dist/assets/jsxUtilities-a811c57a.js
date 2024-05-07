import{e as i}from"./index-6400038e.js";function E(){const n=window.React?.createElement;return window.React={createElement:function(e,s,...u){return{tag:e,props:s,children:u}}},n}function g(n,e){n.props?.onChange||n.props?.onInput?(n.props.onChange||n.props.onInput)({type:n.props.onChange?"change":"input",bubles:!0,cancellable:!0,target:{value:e||"dummy "+(n.tag=="input"?"text":"choice")}}):n.props?.onClick&&n.props.onClick(new Event("click",{bubbles:!0,cancellable:!0}))}function x(n){return n?.type=="change"||n?.type=="input"||n?.constructor.name.indexOf("Event")!=-1?"Event{type:"+n.type+"}":n}function t(n){return n?n.constructor.name=="String"?n:n.constructor.name=="Array"?n.map(t).join(""):n.constructor.name=="Function"?n:"<"+n.tag+((n.props||"")&&Object.keys(n.props).map(e=>" "+e+"="+(JSON.stringify(n.props[e])||n.props[e])).join(""))+(n.children?.length?">"+n.children.map(t).join("")+"</"+n.tag+">":"/>"):""}function O(n){if(!n?.props)return null;if(n.tag=="input"||n.tag=="select"){if(!Object.keys(n.props).includes("onChange")&&!Object.keys(n.props).includes("onInput"))return Object.keys(n.props).includes("onchange")&&i.fail("onchange not accepted in the lab because it does not work with React. Please use onChange. In "+t(n)),Object.keys(n.props).includes("oninput")&&i.fail("oninput not accepted in the lab because it does not work with React. Please use onInput. In "+t(n)),null;if(Object.keys(n.props).includes("onChange"))return i(n.props.onChange,"expected onChange handler to be a function in tag "+t(n)).to.be.a("function"),"onChange";if(Object.keys(n.props).includes("onInput"))return i(n.props.onInput,"expected onInput handler to be a function in tag "+t(n)).to.be.a("function"),"onInput"}return Object.keys(n.props).includes("onClick")||Object.keys(n.props).includes("onclick")&&i.fail("onclick not accepted in the lab because it does not work with React. Please use onClick. In "+t(n)),n.props.onClick?(i(n.props.onClick,"expected onClick handler to be a function in tag "+t(n)).to.be.a("function"),"onClick"):null}function N(n,e,s,u,f){let a,m,v;const w=new Proxy(e,{get(p,c,l){return p[c]?p[c]:(["onabort","onafterprint","onbeforeprint","onbeforeunload","onblur","oncanplay","oncanplaythrough","onchange","onclick","oncontextmenu","oncopy","oncut","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onerror","onfocus","onhashchange","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onload","onloadeddata","onloadedmetadata","onloadstart","onmessage","onmousedown","onmouseenter","onmouseleave","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onoffline","ononline","onpagehide","onpageshow","onpaste","onpause","onplay","onplaying","onpopstate","onprogress","onratechange","onresize","onscroll","onsearch","onseeked","onseeking","onselect","onshow","onstalled","onstorage","onsubmit","onsuspend","ontimeupdate","ontoggle","onunload","onvolumechange","onwaiting","onwheel"].includes(c.toLowerCase())&&i.fail(`Custom events should have different names than the native event.
`+c+" is not allowed."),function(...b){a&&i.fail(`trying to discover custom event fired by tag gives ambigous results
both `+a+" and "+c+` . Are you using an unknown prop? 
`+t(v)),a=c,m=b})}}),C=E();try{const p=n(w),c=s(p);let l;try{l=c.map(function(o,d){const y=O(o);if(a=null,m=null,v=o,g(o,u&&u[d]),!a){if(f)return[null,null,y,t(o)];i.fail("Expected tag to fire a custom event: "+t(o))}return[a,m.map(x),y,t(o)]})}catch(r){throw r.message=n.name+": "+r.message,r}const h=l.map(([r,o])=>r),b=h.reduce(function(r,o,d){return{...r,[o]:function(){}}},{}),k=n({...e,...b});return{rendering:k,clickables:s(k),customEventNames:h,customEventParams:l.map(([r,o])=>o),nativeEventNames:l.map(([r,o,d])=>d)}}finally{window.React={createElement:C}}}function j(n,e){if(!e)return[];let s=e.children?e.children.flat().map(function(f){return j(n,f)}).flat():[];return e.tag==n&&(s=[e,...s]),s}export{j as f,E as i,N as p};
