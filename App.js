import React, { useState,  useEffect} from 'react';

import MaterialTable from 'material-table'


  function App( ) {
const [data, setData] = useState([])
const columns = [
  {title: "ID", field: "id"},
  {title: "Name", field: "name"},
  {title: "Email", field: "email"},
  
]



useEffect(()=> {
  fetch("https://jsonplaceholder.typicode.com/users")


  .then(response=>response.json())
  .then(response=>{

    console.log(response)

    setData(response)})
  
},[])
    return (
      <div className="App">
 <h1>Welcome all</h1>
 <MaterialTable title="Employee Details"
 data={data}
 columns={columns}
 />
 

      </div>
    )
  }



export default App 
