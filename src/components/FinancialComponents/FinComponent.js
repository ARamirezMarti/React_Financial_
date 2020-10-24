import React,{useState,useEffect} from 'react';
import ResumeComponent from './ResumeComponent'
import BigIncComponent from './BigIncComponent'
import BigExpComponent from './BigExpComponent'

import './FinComponent.css'



function  FinComponent(){
    const URL= 'http://localhost:3500/app/getdata';

    const [getdata,setGetData] = useState({data:[]})
    
    const[viewIncome,setVerIncome]= useState(false);    
    const[viewExpenses,setVerExp]= useState(false); 
    function showingIncome(){setVerIncome(viewIncome=>!viewIncome)};
    function showingExp(){setVerExp(viewExpenses=>!viewExpenses)};
  
    useEffect(()=>{

        fetch(URL,{
            credentials:'include'
               })
               .then((Response)=>Response.json())
               .then((data)=>{ 
                setGetData({data:data.data[0]})
                 
                })
               

    },[]);              



    
        return(
            
            <div>
                <div className=" container col-10 ">
                 
                    <nav className=" center navcontainer col-2 ">
                        <div className="userinfo ">
                            <h2> {getdata.data.ACCOUNT_NAME}</h2>
                            <hr></hr>
                            <h4>Date From</h4>
                            <h4>Date to</h4>
                        

                            
                            <hr></hr>
                  

                            <div className="navbuttons">
                                <button   className="btn btn-outline-success btn-lg " >Summary</button>
                                <button onClick={showingIncome} className="btn btn-outline-success  btn-lg" >Incomes</button>
                                <button onClick={showingExp}  className="btn btn-outline-success btn-lg" >Expenses</button>

                            </div>

                        </div> 
                       
                        

                    
                    </nav>
                      <ResumeComponent getdata={getdata}  /> 
                    <BigIncComponent viewIncome={viewIncome} />
                    <BigExpComponent viewExpenses={viewExpenses} />
                    
                    
                   


                </div>

          


            </div>

        );

} 

    


export default FinComponent;