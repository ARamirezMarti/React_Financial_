import React from 'react';
import './FinComponent.css'


function ResumeComponent(props){  
   const resData = props.getdata.data


   return(

          <React.Fragment>
                   
                   
           
               <div className="  min  col-9 ">

               <div className="minicontainer col-12" style={{border:'1px solid rgb(1, 172, 1)'}}>
                <h4 style={{color:'rgb(1, 172, 1)'}}>Total income</h4>
                 <p>{resData.TOTAL_INCOME ? (resData.TOTAL_INCOME):(0)}€</p>
               </div>

               <div className="minicontainer col-12"  style={{border:'1px solid red'}}>
                <h4 style={{color:'red'}}>Total Expenses</h4>
                 <p>{resData.TOTAL_EXPENSES ? (resData.TOTAL_EXPENSES):(0) }€</p>
               </div>
               <div className="minicontainer col-12" style={{border:'1px solid rgb(14, 17, 233)'}}>
               <h4 style={{color:'rgb(14, 17, 233)'}}>Total Amount</h4>
                 <p>{resData.TOTAL_AMOUNT ? (resData.TOTAL_AMOUNT ):(0) }€</p>
               </div>

                    
                  
                  
            </div>



            </React.Fragment>  
      );
  }


export default ResumeComponent;