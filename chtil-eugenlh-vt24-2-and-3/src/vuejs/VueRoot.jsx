import { Sidebar } from "./sidebarPresenter.jsx";
import { Summary }  from "./summaryPresenter.jsx";
import { Search } from "./searchPresenter.jsx";
import { Details} from "./detailsPresenter.jsx";
import styles from "./style.css"
import { createRouter, createWebHashHistory, RouterView} from "vue-router";

function makeRouter(model){
    return createRouter({
        history: createWebHashHistory(),
        routes:[
            {path: "/",
            component: <Search model={model} /> ,},
            {path: "/search",
            component: <Search model={model} /> ,},
            {path: "/summary",
            component: <Summary model={model} /> ,},
            {path: "/details",
            component: <Details model={model} /> ,}
        ]
    })
}

function VueRoot(props){
    const { model } = props

    if (!model.ready) {
        return <img src={"https://brfenergi.se/iprog/loading.gif"}></img>
    }

    return (<div className = "flexParent">
                <div className = "sidebar"><Sidebar model={model} /></div>
                <div className = "mainContent">
                    <RouterView/>
                </div>
            </div>
           );
}

export { VueRoot, makeRouter}

