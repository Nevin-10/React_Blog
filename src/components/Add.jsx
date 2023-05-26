import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div style={{paddingTop:"60px",textAlign:'center',background:'lightsteelblue',color:'',height:'100vh'}}>

      {/* First Text Field */}
      <Typography variant='h3' style={{textDecoration:'underline',textDecorationStyle:'wavy',color:'blue',marginLeft:'50px'}}>Blog Form</Typography><br />
       <Typography variant='h6' >Blog Name: <TextField label="Enter Blogname" variant='filled' 
       style={{width:"300px"}}>
        </TextField></Typography>
       <br />
       {/* Second Text Field */}
       <Typography variant='h6' >Description: <TextField label="Enter Description" variant='filled' multiline maxRows={5} 
       style={{width:"300px"}} size='large' ></TextField></Typography>
       <br />

       {/* Third Text Field */}
       <Typography variant='h6'  >
        Author Name: 
        <TextField label="Enter Author name" variant='filled'
       style={{width:"300px",marginRight:'14px'}}>
        </TextField></Typography><br />

        {/* Button */}
       <Button variant='contained' style={{borderRadius:'50px',marginLeft:'70px'}}>Submit</Button>
    </div>
  )
}

export default Add