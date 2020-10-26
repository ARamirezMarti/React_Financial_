import React from 'react';
import './FinComponent.css'


function ResumeComponent(props){   
   const resData = props.getdata.data
   

   return(

          <React.Fragment>
                   
                   
           
               <div className="  min  col-9 ">

               <div className="minicontainer col-12" style={{color:'rgb(1, 172, 1)',border:'1px solid rgb(1, 172, 1)'}}>
                <h3>Total income</h3>
                 <p>{resData.TOTAL_INCOME}€</p>
               </div>

               <div className="minicontainer col-12"  style={{color:'red',border:'1px solid red'}}>
                <h3>Total Expenses</h3>
                 <p>{resData.TOTAL_EXPENSES}€</p>
               </div>
               <div className="minicontainer col-12" style={{color:'rgb(14, 17, 233)',border:'1px solid rgb(14, 17, 233)'}}>
               <h3>Total Amount</h3>
                 <p>{resData.TOTAL_AMOUNT}€</p>
               </div>

                    
                  
                  
            </div>



            </React.Fragment>  
      );
  }


export default ResumeComponent;