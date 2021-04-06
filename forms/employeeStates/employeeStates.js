let req = {}
let query = ""
let netid = "kla96587"
let pw = "Chichi101!!!"
let results = []

employeeStates.onshow=function(){
  drpEmployeeStates.clear()
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kla96587&pass=Chichi101!!!&database=kla96587&query=SELECT state FROM customer");    
    results = JSON.parse(req1.responseText)
    if (results.length == 0){
      console.log = "There are no states in the database."
    }else{
      for(i=0; i< results.length; i++)
        drpEmployeeStates.addItem(results[i])
    }
  }


drpEmployeeStates.onclick=function(s){
  if(typeof(s) == 'object'){
    return
  }else {
    lstgCustomers.addItem(s)
  }
}


