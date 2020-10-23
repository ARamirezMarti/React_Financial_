import React from 'react';
import './FinComponent.css'


function ResumeComponent(props){   
   const dataprep2= props.dataprep.data
   console.log(dataprep2);
    return(

          <React.Fragment>
                   
           
               <div className="  min  col-10 ">
                <table className="col-12">
                <thead>
                    <tr>
                      <th></th>
                      <th>Actual</th>
                      <th>Budget</th>
                      <th>Diference</th>
                      <th>% of budget</th>
                      
                    </tr>

                    </thead>
                    <tbody>
                    <tr>
                      <td>Total income</td>
                      <td id="actualIncome">{dataprep2.TOTAL_INCOME}</td>
                      <td id="budgetIncome">x</td>
                      <td id="diferenceIncome" >12</td>
                      <td id="percbudIncome" >x</td>
                     
                    </tr>
                    <tr>
                      <td>Total Expenses</td>
                      <td id="actualExpenses">{dataprep2.TOTAL_EXPENSES}</td>
                      <td id="budgedExpenses">21</td>
                      <td id="diferenceExpense">x</td>
                      <td id="percbudExpense">x</td>
                     
                    </tr>
                    <tr>
                      <td>TotalBalance</td>
                      <td id="incomeBalance">{dataprep2.TOTAL_AMOUNT}</td>
                      <td id="budgedBalance">21</td>
                      <td id="diferenceBalance">x</td>
                      <td id="percbudBalance">x</td>
                     
                    </tr>
                    </tbody>


                </table>
                    
                  <div className="res col-12">
                    <label htmlFor="net"> Net money: {dataprep2.TOTAL_AMOUNT}€</label>
                    
                  </div>
                  
            </div>



            </React.Fragment>  
      );
  }


export default ResumeComponent;