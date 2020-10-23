import React from 'react';
import './FinComponent.css'




 function BigIncComponent(props){   
    
        return(
            <div>
           
                <div  className=" max  col-10" style={props.viewIncome ? {display:'inline'}:{display:'none'}}  >
                <h2>Incomes</h2>

                <div >
                  <form id="incomeSubmit" className="form" >
                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input type="text" className="form-control"  placeholder="Category"></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="expamount"> Expect amount </label>
                    <input type="number" className="form-control"  placeholder=" Expected amount"></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="amount"> Amount</label>
                    <input type="number" className="form-control"  placeholder="Amount"></input>
                  </div>
                  <button type="submit"  className="btn btn-outline-success">Add income</button>        
                            
                </form>
              </div>

              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
              
                   
           
          </div>
         
        </div>
    
        );
 }



export default BigIncComponent;