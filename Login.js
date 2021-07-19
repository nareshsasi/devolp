import {React, useState } from 'react'
import {  BrowserRouter as Redirect, Route} from 'react-router-dom';
import { Grid, Paper, Avatar, TextField, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputField from './InputFields';
import { FormHelperText } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import ButtonComponent from './Button'


const AddProductForm = () => {
   
    const [inputValue, setInputValue] = useState({ name: "", password: "" , });
    const { name, password,  } = inputValue;
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: 'blue' }
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setInputValue((prev) => ({
        ...prev,
        [name]: value,
      }));
      console.log(inputValue);
    }
    
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required("Required"),
        password: Yup.string().email("Enter valid password").required("Required"),
        termsAndConditions: Yup.string().oneOf(["true"], "Accept terms & conditions")
    })

    const onSubmit = (values, props) => {
        console.log(values)
        console.log(props)
        setTimeout(() => {

            props.resetForm()
            props.setSubmitting(true)
        },)
    }

    function handleAPICall(e) {
        return(
       
        
            <Redirect to ='/h'/> 
          
        
        );
        // getData(event.target.value);
       }
  
    return (
        <Grid>
            <Paper  style={paperStyle}>
            
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                
                    <h2>Sign In</h2>
                </Grid>
               
                 <Formik inputValue={inputValue} validationSchema={validationSchema} onSubmit={onSubmit}>  
                    {(props) => (
                        <Form>
                            
                        <InputField
                          type="text"
                          value={name}
                          placeholder="Your Name"
                          label="Name"
                          name="name"
                          onChange={handleChange}
                        />
                        <InputField
                          type="password"
                          value={password}
                          placeholder="enter your password"
                          label="Password"
                          name="password"
                          onChange={handleChange}
                        />
                       
                    
                       

                         <FormControlLabel
                                control={<Field as={Checkbox} name="termsAndConditions" />}
                                label="I accept the terms and conditions."
                            />
                            <FormHelperText><ErrorMessage name="termsAndConditions" /></FormHelperText>
                          <ButtonComponent handleClick={handleAPICall} label="submit" />

                        </Form>
                    )}
                </Formik>
                <Typography >
                 
                    <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Dont  have an account ?
                     <Link href="/s" onClick={()=>handleChange("event",1)} >
                        Sign Up 
                    
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}
export default AddProductForm