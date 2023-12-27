import React, { useEffect, useState } from 'react';
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
// import { validate } from '../../utility/validation';
//toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const BalloonForm = ({handleNext}) => {

  const theme = createTheme({
    direction: 'rtl', 
  });

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const [ data,setData ] = useState({
      name:"",
      lastName:"",
      code:"",
      mobileNumber:"",
      fatherName:"",
      email:"",
      // gender:['female','male'],
      // gender:"",
      birthday:new Date(),
  })
  const [gender,setGender] = useState('')
  const [errors,setErrors] = useState({});
  const [touched,setTouched] = useState({});
  const [error,setError] = useState(false)

  // console.log(gender);
const focusHandler = event => {
    setTouched({...touched, [event.target.name]: true})
}

const changeHandler = event => {
    setData({...data, [event.target.name]: event.target.value})
  
}

useEffect(() => {
  setErrors(validate(data,gender,'first'))
},[data,touched,gender]);

const submitHandler = (event) => {
  event.preventDefault();
  console.log('object');
  // setErrors(validate(data,gender,'first'));
  if(!Object.keys(errors).length){
    toast.success("تمام فیلد هارا به درستی پر کردید",{
      position:'top-center'
    })
setError(false)
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
    birthday:new Date(),
  })
  // setErrors(validate(data,gender,'first'));
  toast.warn('لطفا همه فیلدهارو پر کن',{
    position:'top-center'
})
setError(true)
// handleNext()

}
setErrors(validate(data,'first'));
setErrors(validate(gender,'first'));
  
  // if(event.target.name === 'male'){
  //   console.log('male');

  // }
  // setTouched({gender:true})



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

  return (
    <Container component='main' maxWidth='md' sx={{backgroundColor:'#fff',borderRadius:'16px',
    mt: 2,padding:'24px',boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px'}}>
         <Box component="form"  sx={{ mt: 3 }}>
            <Grid container spacing={4} >
              <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                  <Grid item xs={12} sm={6}>
                  <TextField
                      // error={error ? 'error' : ""}
                      autoComplete="given-name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      variant='outlined'
                      label="نام"
                      sx={style}
                      onFocus={focusHandler}
                      value={data.name}
                      onChange={changeHandler}
                      InputProps={{
                        sx: {
                            borderRadius: '8px',
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
                      id="lastName"
                      value={data.lastName}
                      onChange={changeHandler}
                      onFocus={focusHandler}
                      label="  نام خانوادگی"
                      sx={style} 
                      InputProps={{
                        sx: {
                            borderRadius: '8px',
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
                      id="fatherName"
                      value={data.fatherName}
                      onChange={changeHandler}
                      onFocus={focusHandler}
                      label="  نام پدر"  
                      sx={style}
                      InputProps={{
                        sx: {
                            borderRadius: '8px',
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
                      id="code"
                      value={data.code}
                      onChange={changeHandler}
                      onFocus={focusHandler}
                      label="کد ملی"  
                      sx={style}
                      InputProps={{
                        sx: {
                            borderRadius: '8px',
                          }}}
                    />
                    {errors.code && touched.code && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.code}</Grid>}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                      autoComplete="given-name"
                      name="mobileNumber"
                      required
                      fullWidth
                      id="mobileNumber"
                      value={data.mobileNumber}
                      onChange={changeHandler}
                      onFocus={focusHandler}
                      label="تلفن همراه" 
                      sx={style} 
                      InputProps={{
                        sx: {
                            borderRadius: '8px',
                          }}}
                    />
                    {errors.mobileNumber && touched.mobileNumber && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.mobileNumber}</Grid>}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                      autoComplete="given-name"
                      name="email"
                      fullWidth
                      id="email"
                      value={data.email}
                      onChange={changeHandler}
                      onFocus={focusHandler}
                      label="ایمیل"
                      sx={style}
                      InputProps={{
                        sx: {
                            borderRadius: '8px',
                          }}}
                    />
                    {errors.email && touched.email && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.email}</Grid>}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFnsJalali} sx={style}>
                        <DatePicker label='تاریخ تولد' 
                        // defaultValue={new Date()}
                        slotProps={{ textField: { sx:{width:'100%'}}}}
                        name='birthday'
                        required
                        containerClassName="custom-container"
                        value={data.birthday}
                        onChange={changeHandler}
                        />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} sm={6}>

                    <FormControl row component="fieldset" >
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
                className='hoverButton'
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

export default BalloonForm;