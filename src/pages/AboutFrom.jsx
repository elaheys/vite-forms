import React, { useEffect, useRef, useState } from 'react';
//MUI
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography, } from '@mui/material';
import { DatePicker} from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali'

//rtl in mui
import createCache from '@emotion/cache';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
//validation
import { validate1 } from '../utility/validation';
//toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { parseISO } from 'date-fns-jalali';

const AboutForm = ({handleNext}) => {

  const theme = createTheme({
    direction: 'rtl', 
  });

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const p2e = (s) =>
  s.toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

  const [ data,setData ] = useState({
      name:"",
      lastName:"",
      code:"",
      mobileNumber:p2e(""),
      fatherName:"",
      email:"",
      // birthday:parseISO(new Date()),
  })
  const[date,setDate] = useState(null || new Date())



  const [gender,setGender] = useState('')
  const [errors,setErrors] = useState({});
  const [touched,setTouched] = useState({});
  // const [error,setError] = useState(false)


const focusHandler = event => {
    setTouched({...touched, [event.target.name]: true})
}

const changeHandler = event => {
  setData({...data, [event.target.name]: event.target.value})
}

useEffect(() => {
  setErrors(validate1(data,gender))
},[data,gender]);

const submitHandler = (event) => {
  event.preventDefault();
  
  if(!Object.keys(errors).length){
    toast.success("تمام فیلد هارا به درستی پر کردید",{
      position:'top-center'
    })

// setError(false)
console.log(data);
console.log(date);
handleNext()
}else{
  setTouched({
    name:true,
    lastName:true,
    code:true,
    mobileNumber:true,
    fatherName:true,
    email:true,
    gender:true,
    // birthday:true,
  })

  toast.warn('لطفا همه فیلدهارو پر کن',{
    position:'top-center'
})
// setError(true)
}
setErrors(validate1(data));
setErrors(validate1(gender));
}

  const style = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "black"
      },
      "& label.Mui-focused": {
        color: "black"
      },
    }
  }

  console.log(data.mobileNumber);
 

  return (
    
      <Container component='main' maxWidth='md' 
      sx={{backgroundColor:'#fff',borderRadius:'16px',
      mt: 2,padding:'24px',boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px'}}
      >
         <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={4}>
              <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>

                  {/* {
                    Object.keys(data).map( obj => (
                      <> */}
                      
                      {/* <Grid item xs={12} sm={6} >
                          <TextField
                            value={data[obj]}
                            name={obj}
                            required
                            fullWidth
                            id={obj}
                            variant='outlined'
                            label={obj}
                            sx={style}
                            onFocus={focusHandler}
                            // value={data.name}
                            onChange={changeHandler}
                            InputProps={{
                            sx: {
                              borderRadius: '8px',
                              fontFamily:"inherit"
                              }}}
                          />
                      {/* </Grid> */}
                      {/* </>
                    ))
                  } */}

                  <Grid item xs={12} sm={6}>
                  <TextField
                      // ref={nameRef}
                      // error={error ? 'error' : ""}
                      autoComplete="given-name"
                      name="name"
                      required
                      fullWidth
                      // id="name"
                      variant='outlined'
                      label="نام"
                      sx={style}
                      // onFocus={focusHandler}
                      value={data.name}
                      onChange={changeHandler}
                      InputProps={{
                        sx: {
                            borderRadius: '8px',
                            fontFamily:"inherit"
                          }}}
                    />
                    {errors.name && touched.name && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.name}</Grid>}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                      autoComplete="given-name"
                      name="lastName"
                      required
                      fullWidth
                      // id="lastName"
                      value={data.lastName}
                      onChange={changeHandler}
                      // ref={lastnameRef}
                      // onChange={lastnameChange}
                      // onFocus={focusHandler}
                      label="  نام خانوادگی"
                      sx={style} 
                      InputProps={{
                        sx: {
                            borderRadius: '8px',
                            fontFamily:"inherit"
                          }}}
                    />
                    {errors.lastName && touched.lastName && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.lastName}</Grid>}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                      autoComplete="given-name"
                      name="fatherName"
                      required
                      fullWidth
                      // ref={fathernameRef}
                      // onChange={fathernameChange}
                      // id="fatherName"
                      value={data.fatherName}
                      onChange={changeHandler}
                      // onFocus={focusHandler}
                      label="  نام پدر"  
                      sx={style}
                      InputProps={{
                        sx: {
                            borderRadius: '8px',
                            fontFamily:"inherit"
                          }}}
                    />
                    {errors.fatherName && touched.fatherName && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.fatherName}</Grid>}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                      autoComplete="given-name"
                      name="code"
                      required
                      fullWidth
                      type='number'
                      // ref={codeRef}
                      // onChange={codeChange}
                      // id="code"
                      value={data.code}
                      onChange={changeHandler}
                      // onFocus={focusHandler}
                      label="کد ملی"  
                      sx={style}
                      InputProps={{
                        sx: {
                            borderRadius: '8px',
                            fontFamily:"inherit"
                          }}}
                    />
                    {errors.code && touched.code && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.code}</Grid>}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                      autoComplete="given-name"
                      name="mobileNumber"
                      placeholder='*********09'
                      required
                      fullWidth
                      type='number'
                      // id="mobileNumber"
                      value={p2e(data.mobileNumber)}
                      onChange={changeHandler}
                      // onFocus={focusHandler}
                      // ref={mobileRef}
                      // onChange={mobileChange}
                      label="تلفن همراه" 
                      sx={style} 
                      InputProps={{
                        sx: {
                            borderRadius: '8px',
                            fontFamily:"inherit"
                          }}}
                    />
                    {errors.mobileNumber && touched.mobileNumber && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.mobileNumber}</Grid>}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                      autoComplete="given-name"
                      name="email"
                      placeholder='مثال:admin@gmail.com'
                      fullWidth
                      // id="email"
                      value={data.email}
                      onChange={changeHandler}
                      // onFocus={focusHandler}
                      // ref={emailRef}
                      // onChange={emailChange}
                      label="ایمیل"
                      sx={style}
                      InputProps={{
                        sx: {
                            borderRadius: '8px',
                            fontFamily:"inherit"
                          }}}
                    />
                    {errors.email && touched.email && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.email}</Grid>}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFnsJalali} sx={style}>
                        <DatePicker label='تاریخ تولد' 
                        // defaultValue={new Date()}
                        slotProps={{ textField: { sx:{width:'100%'}}}}
                        name="birthday"
                        required
                        containerClassName="custom-container"
                        // value={data.birthday}
                        // onChange={changeHandler}
                        value={date}
                        onChange={newValue => setDate(newValue)}
                        />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} sm={6}>

                    <FormControl  component="fieldset" >
                      <FormLabel id="demo-controlled-radio-buttons-group" 
                      className='radioGrouop'
                      required
                      >جنسیت</FormLabel>
                      <RadioGroup
                      row
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      // onChange={changeHandler}
                      // onFocus={focusHandler}
                      sx={{fontFamily:'IRANYekan',fontWeight:'500'}}
                      >
                        <FormControlLabel value="female"  control={<Radio />} label={<Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>خانم</Typography>} />
                        <FormControlLabel value='male'  control={<Radio />} label={<Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>آقا</Typography>} />
                      </RadioGroup>
                    {errors.gender && touched.gender && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.gender}</Grid>}
                    </FormControl>
                  </Grid>
                </ThemeProvider>
              </CacheProvider>
              <Grid item xs={12} sm={6}>
                <Button variant='contained' 
                sx={{borderRadius:'8px',padding:"6px 12px",}}
                style={{
                  backgroundColor: "rgb(33, 43, 54)",
                  fontSize: "15px",
                  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
              }}
              onClick={submitHandler}
                >
                          ادامه...
                </Button>
              </Grid>
            </Grid>
        </Box>
        <ToastContainer/>
    </Container>
  );
};

export default React.memo(AboutForm);