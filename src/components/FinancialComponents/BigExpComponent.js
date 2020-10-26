import React,{useEffect,useState} from 'react';
import './FinComponent.css'




function BigExpComponent(props){
  const [getdata,setGetData] = useState({data:[]});
  const [message,setMessage] = useState('');
  const URL = 'http://localhost:3500/app/';
 
  const sendData = async(e) => {
    e.preventDefault();
    const posturl = URL+'addexpenses'
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
      expnsesData();    
    }) 
    .catch((error)=>console.log(error))    
    
  };

  const deleteData =  async (id) => {
    console.log(id);
    const deleteURL= URL + `deleteexpenses/${id}`
    await fetch(deleteURL,{
      method:'DELETE',
      headers:{'Content-Type':'Application/json'},
      credentials:'include',  
    })
    .then ((response)=>response.json())
    .then((data)=>{ expnsesData();  setMessage(`Item ${id} deleted`)})

  }  

   const expnsesData =  async () => {
    const geturl = URL+'getexpenses'
    await fetch(geturl,{
      credentials:'include'
        })
        .then((Response)=>Response.json())
        .then((data)=>{ 
          setGetData({data:data.data})            
          });
  }
 

 
  useEffect(()=>{
    
    expnsesData();
         
             

  },[]);
      
    
        return(
            <div>
           <div  className=" max col-8" style={props.viewExpenses ? {display:'inline'}:{display:'none'}}>
                <h2 style={{color:'black'}}>Expenses</h2>
                <div >
                <form className="form"  onSubmit={sendData} >
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
                    <button   className="btn btn-outline-success">Add income</button>        
                            
                </form>
              </div >
             
              <table className="table" style={{marginTop:'5%'}}>
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Nº</th>
                    <th scope="col">CATEGORY</th>
                    <th scope="col">EXPECTED AMOUNT</th>
                    <th scope="col">AMOUNT</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                {getdata.data.map(item=>{
                  return (
                    
                    <tr key={item.EXPENSES_ID}>
                      <th>{item.EXPENSES_ID} </th>
                      <td>{item.CATEGORY}</td>
                      <td>{item.EXPECTED_AMOUNT}€ </td>
                      <td>{item.AMOUNT}€ </td>
                      <td><button  className="btn  btn-success btn-sm">Update</button> </td>
                      <td><button  onClick={()=>{deleteData(item.EXPENSES_ID)} } className="btn  btn-danger btn-sm">Delete</button></td>
                      
                  </tr>
                  )
                
                })}
               
                </tbody>
                
              </table>
                 
              <p style={{fontWeight:'bolder'}}>{message}</p>





            </div>
             
        </div>
    
        );
    }



export default BigExpComponent;