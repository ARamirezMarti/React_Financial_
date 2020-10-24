import React,{useEffect,useState} from 'react';
import './FinComponent.css'




function BigExpComponent(props){
    const [getdata,setGetData] = useState({data:[]})
    const URL = 'http://localhost:3500/app/getexpenses'
 
  useEffect(()=>{
            fetch(URL,{
                credentials:'include'
                  })
                  .then((Response)=>Response.json())
                  .then((data)=>{ 
                    setGetData({data:data.data})
                    
                    });               
        },[]);     
      
    
        return(
            <div>
           <div  className=" max col-8" style={props.viewExpenses ? {display:'inline'}:{display:'none'}}>
                <h2 style={{color:'black'}}>Expenses</h2>
                <div >
                  <form className="form" >
                    <div className=" form-group ">
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
              <p></p>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Nº</th>
                    <th scope="col">CATEGORY</th>
                    <th scope="col">EXPECTED AMOUNT</th>
                    <th scope="col">AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                {getdata.data.map(item=>{
                  return (
                    <tr key={item.EXPENSES_ID}>
                      <th>{item.EXPENSES_ID} </th>
                      <td>{item.CATEGORY}</td>
                      <td>{item.EXPECTED_AMOUNT}€ </td>
                      <td>{item.AMOUNT}€ <button>Delete</button></td>
                  </tr>
                  )
                })}
                 
                </tbody>
              </table>
                 






            </div>
             
        </div>
    
        );
    }



export default BigExpComponent;