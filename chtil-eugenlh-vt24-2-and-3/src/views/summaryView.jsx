// un-comment when needed:
import {sortIngredients} from "/src/utilities.js";
import styles from './styles.module.css'

/* Functional JSX component. Name must start with capital letter */
export function SummaryView(props){
  const {rightAlign, tableSummaryView, titleSummaryView} = styles

  const buttonClickACB = () =>{
    window.location.hash="#/search"
  }
  
    return (
            <div className="debug">
              <div className={titleSummaryView}>
              Summary for <span title="nr guests">{props.people}</span> persons:
              </div>

              <button onClick={buttonClickACB}>Back To Search</button>
            
              
              <table className={tableSummaryView}>
                  {  //  <---- in JSX/HTML, with this curly brace, we go back to JavaScript, and make a comment
                  //  The rest of the file is for TW1.5. If you are at TW1.2, wait!  

                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Aisle</th>
                    <th>Quantity</th>
                    <th>unit</th>
                  </tr>
                </thead>

                  }
                
                <tbody>
                  {  
                      // Here you will use Array Rendering to generate a table row for each element of the ingredients prop (an array) 
                      sortIngredients(props.ingredients).map(ingredientTableRowCB)
                  }
                </tbody>
              </table>
            </div>
    );
    /* callback for Array Rendering */
    function ingredientTableRowCB(ingr){
      const quantity = (ingr.amount * props.people).toFixed(2)
        return <tr key={ /* Reflect on what's a key in array rendering! */ ingr.id } >
                 <td>{ingr.name}</td>
                 <td>{ingr.aisle}</td>
                 <td className={rightAlign}>{quantity}</td>
                 <td> {ingr.unit} </td>
               </tr>;
    }
}

