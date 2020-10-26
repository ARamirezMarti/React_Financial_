

  function compareDates(dbdate,props){
    var startDate = props.dates.startDate; 

    var startDateSplitted= startDate.toString().split(' ');    
    var spliteddate = dbdate.toString().split(' ');

    if (startDateSplitted[1]===spliteddate[1]) {
      return true
    }else{
      return false
    }

  }


export default compareDates;