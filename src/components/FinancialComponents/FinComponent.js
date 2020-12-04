import React,{useState,useEffect} from 'react';
import ResumeComponent from './ResumeComponent'
import BigIncComponent from './BigIncComponent'
import BigExpComponent from './BigExpComponent'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './FinComponent.css'
export const URL= 'http://localhost:3500/app/';


 //TODO: Si no hay expenses, no aparece ni expenses ni amount, 
 //      Hay que encapsularlo y rellamar a la funcion cada entry que se introduzca si no, no actualiza
  

// TODO:  si añades un income antes que expenses o al reves, y actualizas, el minisumary se actualiza pero recive datos en null y no sale 0
function  FinComponent(){
   
    const [getdata,setGetData] = useState({data:[]})
    
    const[viewIncome,setVerIncome]= useState(false);    
    const[viewExpenses,setVerExp]= useState(false);
    const [startDate, setStartDate] = useState(new Date()); 
    function showingIncome(){setVerIncome(viewIncome=>!viewIncome)};
    function showingExp(){setVerExp(viewExpenses=>!viewExpenses)};
    
    const dates={
        startDate,
        
    }
    
    useEffect( ()=>{      
          
       getDataFunction();

    },[]); 

    function getDataFunction(){
            setTimeout(() => {
                fetch(URL+'getdata',{
                    credentials:'include'
                       })
                       .then((Response)=>Response.json())
                       .then((data)=>{ 
                           console.log(data);
                          setGetData({data:data.data[0]})
                        })
                
            }, 500);  

        }

        return(
            
            <div>
                <div className=" container col-10 ">
                 
                    <nav className=" center navcontainer col-3 ">
                        <div className="userinfo ">
                            <h3> {getdata.data.ACCOUNT_NAME}</h3>                            
                            <label>Select month</label>
                            <DatePicker  selected={startDate} dateFormat="MM/yyyy" showMonthYearPicker onChange={date => setStartDate(date)} />
                            
                            
                        

                            
                            <hr></hr>
                  

                            <div className="navbuttons">
                                <button   className="btn btn-success btn-lg " >Summary</button>
                                <button onClick={showingIncome} className="btn btn-success  btn-lg" >Incomes</button>
                                <button onClick={showingExp}  className="btn btn-success btn-lg" >Expenses</button>

                            </div>

                        </div> 
                       
                        

                    
                    </nav>
                      <ResumeComponent getdata={getdata}  dates={dates} /> 
                    <BigIncComponent viewIncome={viewIncome}  dates={dates} getDataFunction={getDataFunction}/>
                    <BigExpComponent viewExpenses={viewExpenses}  dates={dates} getDataFunction={getDataFunction}/>
                    
                    
                   


                </div>

          


            </div>

        );

} 

    


export default FinComponent;