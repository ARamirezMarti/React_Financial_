import React from 'react';
import './FinComponent.css'




function BigExpComponent(props){   
      
    
        return(
            <div>
           <div  className=" max col-10" style={props.viewExpenses ? {display:'inline'}:{display:'none'}}>
                <h2>Expenses</h2>
            </div>
             
        </div>
    
        );
    }



export default BigExpComponent;