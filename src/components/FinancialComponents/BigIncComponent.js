import React,{useState, useEffect} from 'react';
import './FinComponent.css'

function BigIncComponent(props){   
  const [getdata,setGetData] = useState({data:[]});
  const [message,setMessage] = useState('');
  const URL = 'http://localhost:3500/app/';
 
  const sendData = async(e) => {
    e.preventDefault();
    const posturl = URL+'addincome'
    const data = {
      CATEGORY:e.target.category.value,
      EXPECTED_AMOUNT:e.target.expamount.value,
      AMOUNT:e.target.amount.value
    } 
    await fetch(posturl,{     
      method:'POST',  
      headers:{'Content-Type':'Application/json'},
      body:JSON.stringify(data),
      credentials:'include',   
    })
    .then ((response)=>response.json())
    .then((data)=>{
      if(data.error){
        setMessage(data.error)               
      } 
      setMessage('Added')    
      incomeData();    
    }) 
    .catch((error)=>console.log(error))    
    
  };

  const deleteData =  async (id) => {
    const deleteURL= URL + `deleteincome/${id}`
    await fetch(`http://localhost:3500/app/deleteincome/${id}`,{
      method:'DELETE',
      headers:{'Content-Type':'Application/json'},
      credentials:'include',  
    })
    .then ((response)=>response.json())
    .then((data)=>{ incomeData();  setMessage(`Item ${id} deleted`)})

  }  

   const incomeData =  async () => {
    const geturl = URL+'getincome'
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
                <h2 style={{color:'black'}}>Incomes</h2>

                <div >
                
                  <form className="form"  onSubmit={sendData} >
                    <div className="form-group">
                      <label htmlFor="category">Category</label>
                      <input type="text" name="category" className="form-control"  placeholder="Category"></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="expamount"> Expect amount </label>
                      <input type="number" name="expamount" className="form-control"  placeholder=" Expected amount" d></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="amount"> Amount</label>
                      <input type="number" name="amount" className="form-control"  placeholder="Amount"></input>
                    </div>

                  <button className="btn btn-outline-success">Add income</button>        
                            
                </form>
              </div>
              <p>{message}</p>
              <table className="table">
              
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
                {getdata.data.map(item=>{
                  
                  (() => { 
                    const dbDate = new Date(item.DATE_IN)
                    item.DATE_IN_FORMATED= new Intl.DateTimeFormat('es-ES').format(dbDate);

                  })();
                  
               
                  return (
                  <tr key={item.INCOME_ID}>
                      <th>{item.INCOME_ID}</th>
                      <td>{item.CATEGORY}</td>
                      <td>{item.EXPECTED_AMOUNT}€ </td>
                      <td>{item.AMOUNT}€ </td>
                      <td>{item.DATE_IN_FORMATED}</td>                      
                      <td><button onClick={()=>{deleteData(item.INCOME_ID)} } className="btn  btn-success btn-sm">Update</button> </td>
                      <td><button onClick={()=>{deleteData(item.INCOME_ID)} } className="btn  btn-danger btn-sm">Delete</button></td>
                      
                  </tr>
                  )
                })}
                 
                </tbody>
              </table>
              
                   
           
          </div>
         
        </div>
    
        );
 }



export default BigIncComponent;