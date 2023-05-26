import { Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Table1 = () => {
    const [values,setVal] = useState([])

    useEffect(() =>{

        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) =>{
            setVal(response.data)

            console.log(values)
            
        })
        .catch((e) =>{
            console.log(e)
        })





    })







  return (
    <div style={{background:'lightsteelblue'}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'red',fontSize:'20px'}}>ID</TableCell>
                        
                        <TableCell style={{color:'red',fontSize:'20px'}}>TITLE</TableCell>


                    </TableRow>


                </TableHead>

                <TableBody>
                    {values.map((val,index)=>{
                        return(
                            <TableRow key={index}>

                            <TableCell>{val.id}</TableCell>
                            <TableCell>{val.title}</TableCell>
                           
                           
                        
                        </TableRow>



                        )

                    })}


                </TableBody>











            </Table>





        </TableContainer>
        
    </div>
  )
}

export default Table1