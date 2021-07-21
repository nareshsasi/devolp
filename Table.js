import React, { useEffect,useState } from 'react';
import MaterialTable from 'material-table';


export const Table=()=>{
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(resp=>resp.json())
        .then(resp=>{
            console.log(resp)
            setData(resp)
        })
    },[])
       
    
    const [data, setData] = useState([])
    const columns =[
        
         {
            title:'ID',field:'id'
         },
         
         
         {
            title:'Name',field:'name'
            },
            
         {
            title:'Email',field:'email'
            },
         {
            title:'Body',field:'body'
            },
        ]

    return(<div>
        <MaterialTable title="Material Table"
        data={data}
        columns={columns}
        options={{
            search:true,
            paging:true,
        }}
        />
        
    </div>)
}