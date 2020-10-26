import React,{useState,useEffect} from 'react';
import ResumeComponent from './ResumeComponent'
import BigIncComponent from './BigIncComponent'
import BigExpComponent from './BigExpComponent'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './FinComponent.css'



function  FinComponent(){
    const URL= 'http://localhost:3500/app/getdata';

    const [getdata,setGetData] = useState({data:[]})
    
    const[viewIncome,setVerIncome]= useState(false);    
    const[viewExpenses,setVerExp]= useState(false);
    const [startDate, setStartDate] = useState(new Date()); 
    const [endDate, setEndDate] = useState(new Date()); 
    function showingIncome(){setVerIncome(viewIncome=>!viewIncome)};
    function showingExp(){setVerExp(viewExpenses=>!viewExpenses)};
    
    const dates={
        startDate,
        endDate,
    }
  
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
                 
                    <nav className=" center navcontainer col-3 ">
                        <div className="userinfo ">
                            <h2> {getdata.data.ACCOUNT_NAME}</h2>
                            <hr></hr>
                            <label>From</label>
                            <DatePicker  selected={startDate} dateFormat="MM/yyyy" showMonthYearPicker onChange={date => setStartDate(date)} />
                            <label>TO</label>
                            <DatePicker  selected={endDate} onChange={date => setEndDate(date)} dateFormat="MM/yyyy" showMonthYearPicker />
                            
                        

                            
                            <hr></hr>
                  

                            <div className="navbuttons">
                                <button   className="btn btn-outline-success btn-lg " >Summary</button>
                                <button onClick={showingIncome} className="btn btn-outline-success  btn-lg" >Incomes</button>
                                <button onClick={showingExp}  className="btn btn-outline-success btn-lg" >Expenses</button>

                            </div>

                        </div> 
                       
                        

                    
                    </nav>
                      <ResumeComponent getdata={getdata}  dates={dates} /> 
                    <BigIncComponent viewIncome={viewIncome}  dates={dates}/>
                    <BigExpComponent viewExpenses={viewExpenses}  dates={dates}/>
                    
                    
                   


                </div>

          


            </div>

        );

} 

    


export default FinComponent;