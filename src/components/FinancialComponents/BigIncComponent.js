import React,{useState, useEffect} from 'react';
import './FinComponent.css'
import compareDates from './common/common'
import {sendData ,deleteData} from './API/income.request'
import {URL } from './FinComponent'


function BigIncComponent(props){   

  const [getdata,setGetData] = useState({data:[]});
  const [message,setMessage] = useState('');

  const getEntry = async (e)=>{
    e.preventDefault();
    const data = {
      CATEGORY:e.target.category.value,
      EXPECTED_AMOUNT:e.target.expamount.value,
      AMOUNT:e.target.amount.value
    }     
    sendData(JSON.stringify(data),setMessage,incomeData,props.getDataFunction);
  }

  const deleteEntry = async (id) =>{
   await deleteData(id,setMessage,props.getDataFunction);
   await incomeData();
  }  

  const incomeData =  async () => {
    const geturl = URL+'getincome';
    await fetch(geturl,{
      credentials:'include'
        })
        .then((Response)=>Response.json())
        .then((data)=>{ 
          setGetData({data:data.data})            
          });
  }
 
  useEffect(()=>{
    
    incomeData();
                   

  },[]);
    
        return(
            <div>
           
                <div  className=" max  col-8" style={props.viewIncome ? {display:'inline'}:{display:'none'}}  >
                <h3 style={{color:'black'}}>Incomes</h3>

                <div >
                
                  <form className="form"  onSubmit={getEntry} >
                    <div className="form-group">
                      <label htmlFor="category">Category</label>
                      <input type="text" name="category" className="form-control"  placeholder="Category"></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="expamount"> Expect amount </label>
                      <input type="number" name="expamount" className="form-control"  placeholder=" Expected amount" ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="amount"> Amount</label>
                      <input type="number" name="amount" className="form-control"  placeholder="Amount"></input>
                    </div>

                    <button className="btn btn-outline-success" id="sendButton">Add income</button>     
                            
                </form>
                
              </div>
              
              <table className="table" style={{marginTop:'5%'}}>
              
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Nº</th>
                    <th scope="col">Category</th>
                    <th scope="col">Expected amount</th>
                    <th scope="col">Amount</th>
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
                          <th>{item.INCOME_ID}</th>
                          <td>{item.CATEGORY}</td>
                          <td>{item.EXPECTED_AMOUNT}€ </td>
                          <td>{item.AMOUNT}€ </td>
                          <td>{item.DATE_IN_FORMATED}</td>                      
                          <td><button onClick={()=>{deleteData(item.INCOME_ID)} } className="btn  btn-success btn-sm">Update</button> </td>
                          <td><button onClick={()=>{deleteEntry(item.INCOME_ID)} } className="btn  btn-danger btn-sm">Delete</button></td>
                          
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



export default BigIncComponent;