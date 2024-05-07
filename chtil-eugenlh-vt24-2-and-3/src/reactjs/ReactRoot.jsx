import { Sidebar } from "./sidebarPresenter.jsx";
import { Summary } from "./summaryPresenter.jsx";
import { Search } from "./searchPresenter.jsx";
import { Details } from "./detailsPresenter.jsx";
import styles from "./style.css"
import {  createHashRouter,  RouterProvider} from "react-router-dom";
import { observer } from 'mobx-react-lite';

function makeRouter (model){
        return createHashRouter([
            {path: "/",
            element: <Search model={model} /> ,},
            {path: "/search",
            element: <Search model={model} /> ,},
            {path: "/summary",
            element: <Summary model={model} /> ,},
            {path: "/details",
            element: <Details model={model} /> ,}
        ])
    }

const ReactRoot = observer(   //  will be added in week 3
function ReactRoot(props){
    const { model } = props

    if (!model.ready) {
        return <img src={"https://brfenergi.se/iprog/loading.gif"}></img>
    }

    return (<div className = "flexParent">
                <div className = "sidebar"><Sidebar model={model} /></div>
                <div className = "mainContent">
                    <RouterProvider router={makeRouter(model)}/>
                </div>
            </div>
           );
}
)

export { ReactRoot }
