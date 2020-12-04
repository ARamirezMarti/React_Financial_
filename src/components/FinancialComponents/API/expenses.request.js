import { URL } from "../FinComponent";

export const sendData = async (jsonData,setMessage,expensesData,callback) => {
    const posturl = URL+'addexpenses';
   
    await fetch(posturl,{     
        method:'POST',  
        headers:{'Content-Type':'Application/json'},
        body:jsonData,
        credentials:'include',   
      })
      .then ((response)=>response.json())
      .then((data)=>{
        if(data.error){
          setMessage(data.error)               
        } 
        setMessage('Added')    
        expensesData(); 
        callback();   
      }) 
      .catch((error)=>console.log(error)) 
  };

  export const deleteData =  async (id,setMessage,callback) => {
    
    const deleteURL= URL + `deleteexpenses/${id}`
    await fetch(deleteURL,{
      method:'DELETE',
      headers:{'Content-Type':'Application/json'},
      credentials:'include',  
    })
    .then ((response)=>response.json())
    .then(()=>{
      callback();
       setMessage(`Item ${id} deleted`)})

  }  
  