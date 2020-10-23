import React,{useState,useEffect} from 'react';
import ResumeComponent from './ResumeComponent'
import BigIncComponent from './BigIncComponent'
import BigExpComponent from './BigExpComponent'

import './FinComponent.css'



function  FinComponent(){
    const URL= 'http://localhost:3500/app/getdata';

    const [dataprep,setDataPrep] = useState({data:[]})
    
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
                   setDataPrep({data:data.data[0]})
                 
                })
               

    },[]);              



    
        return(
            
            <div>
                <div className=" container col-9 ">
                
                    <nav className=" center navcontainer col-2 ">
                        <div className="userinfo ">
                            <h4> {dataprep.data.ACCOUNT_NAME}</h4>
                            <h4>Date From</h4>
                            <h4>Date to</h4>
                        

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="accounts" data-toggle="dropdown" >
                                Account
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">Account 1</a>
                                    <a className="dropdown-item" href="#">Account 2</a>
                                
                                </div>
                            </li>
                            <hr></hr>
                  

                            <div className="navbuttons">
                                <button   id="sumBtn" className="col-12 btn " >Summary</button>
                                <button onClick={showingIncome} className="col-12 btn " >Incomes</button>
                                <button onClick={showingExp} id="expBtn" className="col-12 btn " >Expenses</button>

                            </div>

                        </div> 
                       
                        

                    
                    </nav>
                    <ResumeComponent dataprep={dataprep}  />
                    <BigIncComponent viewIncome={viewIncome} />
                    <BigExpComponent viewExpenses={viewExpenses} />



                </div>

          


            </div>

        );

} 

    


export default FinComponent;