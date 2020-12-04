import { URL } from "../FinComponent";

export const sendData = async (jsonData,setMessage,incomeData,callback) => {
    
  const postDataURL = URL+'addincome'
    await fetch( postDataURL,{     
      method:'POST',  
      headers:{'Content-Type':'Application/json'},
      body:jsonData,
      credentials:'include',   
    })
    .then ((response)=>response.json())
    .then(async (data)=>{
      if(data.error){
        setMessage(data.error)               
      } 
      setMessage('Added')    
     
      await callback(); 
      await incomeData();  
    }) 
    .catch((error)=>console.log(error))    
    
  };
  export const deleteData =  async (id,setMessage,callback) => {
    const deleteURL= URL + `deleteincome/${id}`
    await fetch(deleteURL,{
      method:'DELETE',
      headers:{'Content-Type':'Application/json'},
      credentials:'include',  
    })
    .then ((response)=>response.json())
    .then(()=>{       
       setMessage(`Item ${id} deleted`)
       callback();
    })

  }  