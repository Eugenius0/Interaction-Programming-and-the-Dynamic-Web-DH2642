import { Summary }  from "./summaryPresenter.jsx";


function VueRoot(props){
    const { model } = props

    return (<div>
                {/* TODO TW1.5 Sidebar will be added here, inside a DIV, like Summary below */}
                <div><SidebarPresenter model={model} /></div>
                <div><Summary model={model} /></div>
            </div>
           );
}

export { VueRoot }

