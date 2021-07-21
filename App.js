import React, { useState, useEffect } from 'react';
import './App.css';
import TablePagination from '@material-ui/core/TablePagination';

import MaterialTable from 'material-table';

function App() {

  const [data, setData] = useState([])
  
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const columns = [
    { title: "ID", field: "id" },
   
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Body", field: "body" },
  
  ]
  useEffect(() => {
    
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
      })
  }, [])
  return (
    <div className="App">
      

      
   
<MaterialTable
data={data}
columns={columns}
options={{
  actionsColumnIndex: -1,
  selection: true,
  exportButton: true,
  showFirstLastPageButtons: true,
  pageSize: 5,
  onPageChange:'true',
                    padding: 'dense',
                    pageSizeOptions: [5, 20, 50]
}}

/>
<TablePagination 
      component="div"
      
      count={500}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
  />
    
    </div>
  );
}

export default App;

