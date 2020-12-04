import React,{useEffect,useState} from 'react';
import './FinComponent.css';
import compareDates from './common/common';
import {sendData,deleteData} from './API/expenses.request';
import {URL } from './FinComponent'


function BigExpComponent(props){
  const [getdata,setGetData] = useState({data:[]});
  const [message,setMessage] = useState('');
 
 const getEntry = async (e)=>{
    e.preventDefault();
    const data = {
      CATEGORY:e.target.category.value,
      EXPECTED_AMOUNT:e.target.expamount.value,
      AMOUNT:e.target.amount.value
    }     
    await sendData(JSON.stringify(data),setMessage,expensesData,props.getDataFunction);
  };

  const deleteEntry = async (id) =>{
    await deleteData(id,setMessage,props.getDataFunction);
    await expensesData();
  };

  const expensesData =  async () => {
    const geturl = URL+'getexpenses'
    await fetch(geturl,{
      credentials:'include'
        })
        .then((Response)=>Response.json())
        .then((data)=>{ 
          setGetData({data:data.data})            
          });
  };
 
  useEffect(()=>{  
    expensesData();             
  },[]);
      
    
        return(
            <div>
           <div  className=" max col-8" style={props.viewExpenses ? {display:'inline'}:{display:'none'}}>
                <h3 style={{color:'black'}}>Expenses</h3>
                <div >
                <form className="form"  onSubmit={getEntry} >
                    <div className=" form-group ">
                      <label htmlFor="category">Category</label>
                      <input type="text" name="category" className="form-control"  placeholder="Category"></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="expamount"> Expect amount </label>
                      <input type="number" name="expamount" className="form-control"  placeholder=" Expected amount"></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="amount"> Amount</label>
                      <input type="number" name="amount" className="form-control"  placeholder="Amount"></input>
                    </div>
                    <button   className="btn btn-outline-success" id="sendButton">Add Expense</button>   
                </form>
                     

              </div >
             
              <table className="table" style={{marginTop:'5%'}}>
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Nº</th>
                    <th scope="col">CATEGORY</th>
                    <th scope="col">EXPECTED AMOUNT</th>
                    <th scope="col">AMOUNT</th>
                    <th scope="col">Added on</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                {
                  getdata.data.map((item,index)=>{

                  var resultado=false;

                    (() => { 
                      const dbDate = new Date(item.DATE_IN)
                      resultado = compareDates(dbDate,props);                    
                      item.DATE_IN_FORMATED= new Intl.DateTimeFormat('es-ES').format(dbDate);
                    })();

                    if(resultado){
                        return (
                        <tr key={index}>
                            <th>{item.EXPENSES_ID}</th>
                            <td>{item.CATEGORY}</td>
                            <td>{item.EXPECTED_AMOUNT}€ </td>
                            <td>{item.AMOUNT}€ </td>
                            <td>{item.DATE_IN_FORMATED}</td>                      
                            <td><button className="btn btn-success btn-sm">Update</button> </td>
                            <td><button onClick={()=>{deleteEntry(item.EXPENSES_ID)} } className="btn  btn-danger btn-sm">Delete</button></td>
                            
                        </tr>
                      )

                    }



                })}
               
                </tbody>
                
              </table>
                 
              <p style={{fontWeight:'bolder'}}>{message}</p>





            </div>
             
        </div>
    
        );
    }



export default BigExpComponent;