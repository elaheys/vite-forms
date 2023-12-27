import React, { useEffect, useRef, useState } from 'react';
//MUI
import { Box, Container, FormControl, FormControlLabel, FormLabel, 
    Grid, Radio, RadioGroup, TextField, Typography, Button } from '@mui/material';
//rtl in mui
import createCache from '@emotion/cache';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
//validate
import { validate4, validate5 } from '../utility/validation';
//toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ChildrenForm = ({handleNext,handleBack,step}) => {

const [ children,setChildren ] = useState("");
const [childStatus,setChildStatus ] = useState(false)

const [ under18children,setUnder18Childre ] = useState("");
const [childStatusUnder18,setChildStatusUnder18] = useState(false)

const [ quantity, setQuantity] = useState(1)
const myRef = useRef(null)

const [inputs,setInputs] = useState([])
const [ moreChildren,setMoreChildren ] = useState(false)

const clickableText = () => {
    
    setMoreChildren(true)
    if(moreChildren){

    const newInput = 
    <>
    <Grid container spacing={4} mt={5} mb={5}>
    <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
    <Grid item xs={12}>
        <Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>فرزند {quantity}</Typography>
    </Grid>
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
            value={childData.name}
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
             // error={error ? 'error' : ""}
            autoComplete="given-name"
            name="lastName"
            required
            fullWidth
            id="lastName"
            variant='outlined'
            label="نام خانوادگی"
            sx={style}
            onFocus={focusHandler}
            value={childData.lastName}
            onChange={changeHandler}
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
         // error={error ? 'error' : ""}
        autoComplete="given-name"
        name="code"
        fullWidth
        id="code"
        variant='outlined'
        label="کد ملی"
        sx={style}
        // onFocus={focusHandler}
        value={childData.code}
        onChange={changeHandler}
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
             // error={error ? 'error' : ""}
            autoComplete="given-name"
            name="mobileNumber"
            required
            fullWidth
            id="mobileNumber"
            variant='outlined'
            label="تلفن همراه"
            placeholder='*********09'
            sx={style}
            onFocus={focusHandler}
            value={childData.mobileNumber}
            onChange={changeHandler}
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
             // error={error ? 'error' : ""}
            autoComplete="given-name"
            name="phoneNumber"
            fullWidth
            id="phoneNumber"
            variant='outlined'
            label="تلفن ثابت"
            sx={style}
            // onFocus={focusHandler}
            value={childData.phoneNumber}
            onChange={changeHandler}
            InputProps={{
                sx: {
                        borderRadius: '8px',
                        fontFamily:"inherit"
                    }}}
        />
        {errors.phoneNumber && touched.phoneNumber && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.phoneNumber}</Grid>}
    </Grid>
    <Grid item xs={12} sm={6}>
        <TextField
             // error={error ? 'error' : ""}
            autoComplete="given-name"
            name="address"
            fullWidth
            id="address"
            variant='outlined'
            label="آدرس"
            placeholder='آدرس کامل...'
            sx={style}
            // onFocus={focusHandler}
            value={childData.address}
            onChange={changeHandler}
            InputProps={{
                 sx: {
                        borderRadius: '8px',
                        fontFamily:"inherit"
                    }}}
                />
                {errors.address && touched.address && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.address}</Grid>}
            </Grid>
        </ThemeProvider>
        </CacheProvider>
        </Grid>
    </>;

    setInputs([...inputs,newInput]) 
    myRef.current.disabled = true
    setQuantity(quantity => quantity + 1)                 
    }

}

const [childData,setChildData] = useState({
    name:"",
    lastName:"",
    code:"",
    phoneNumber:"",
    mobileNumber:"",
    address:""
})

const [relationshipData,setRelationshipData] = useState({
    name1:"",
    lastName1:"",
    code1:"",
    phoneNumber1:"",
    mobileNumber1:"",
    address1:"",
    relationship:"",
    describtion:""
})
const [errors,setErrors] = useState({});
const [errors1,setErrors1] = useState({});
const [touched,setTouched] = useState({});

const focusHandler = event => {
    setTouched({...touched, [event.target.name]: true})
}

const changeHandler = event => {
    setChildData({...childData, [event.target.name]: event.target.value})
}

const relationHandler = event => {
    setRelationshipData({...relationshipData, [event.target.name]: event.target.value})
}

useEffect(() => {
    setErrors(validate4(childData,children))
    setErrors1(validate5(relationshipData,under18children))
},[childData,relationshipData,touched,children,under18children])

const theme = createTheme({
    direction: 'rtl', 
});
    
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

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

const emptyError = (obj) => {
    Object.keys(obj).forEach(key => delete obj[key]);
  }

const submitHandler = (event) => {
    event.preventDefault();

    if(children === "no" && under18children === "no"){
        
        handleNext()
    }

    if(children === 'yes' && under18children === "no"){
        emptyError(errors1)
        // emptyError(errors)
        setTouched({name:true,lastName:true,mobileNumber:true,address:false,code:false,phoneNumber:false}) 
        
    }

    if(children === 'yes' && under18children === "yes"){
        toast.warning("تمام فیلد هارا پر کنید",{
            position:'top-center'
          })
        setTouched({
            name:true,
            lastName:true,
            mobileNumber:true,
            children:true,
            name1:true,
            lastName1:true,
            mobileNumber1:true,
            relationship:true,
            under18children:true,
        })
        
        console.log('what');
        // console.log(errors , errors1);
        
    }

    

    if(!children && !under18children){
        setTouched({children:true,under18children:true})
        // setErrors(validate4(children));
        // setErrors1(validate5(under18children));
        
        return
    }


    if(!Object.keys(errors).length && !Object.keys(errors1).length){
        toast.success("تمام فیلد هارا به درستی پر کردید",{
          position:'top-center'
        })
      handleNext()
      }else{
        toast.warning("تمام فیلد هارا پر کنید",{
          position:'top-center'
        })
        
        setTouched({
            name:true,
            lastName:true,
            mobileNumber:true,
            children:true,
            name1:true,
            lastName1:true,
            mobileNumber1:true,
            relationship:true,
            under18children:true
        })
      }
      setErrors(validate4(childData,children));
      setErrors1(validate5(relationshipData,under18children));
}

    return (
        <Container component='main' maxWidth='md' sx={{backgroundColor:'#fff',borderRadius:'16px',
        mt: 2,padding:'24px',boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px'}}
        >
            <Box component="form" sx={{ mt: 3 }}>
                <Grid container >
                  
                        <Grid item xs={12} sm={6}>
                        <FormControl component="fieldset" >
                        <FormLabel id="demo-controlled-radio-buttons-group" 
                        className='radioGrouop'
                        required
                        >آیا فرزندی دارید؟</FormLabel>
                            <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={children}
                            onChange={(e) => setChildren(e.target.value)}
                            sx={{fontFamily:'IRANYekan',fontWeight:'500'}}
                            >
                        <FormControlLabel value="yes" onClick={e => setChildStatus(true)} control={<Radio />} label={<Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>بله</Typography>} />
                        <FormControlLabel value='no' onClick={e => setChildStatus(false)} control={<Radio />} label={<Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>خیر</Typography>} />
                        </RadioGroup>
                        {errors.children && touched.children && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.children}</Grid>}
                        </FormControl>
                        </Grid>
                            {
                                childStatus && <>
                                    <Grid container spacing={4} mt={5} mb={5}>
                                    <CacheProvider value={cacheRtl}>
                                    <ThemeProvider theme={theme}>
                                    {/* <Grid item xs={12}>
                                        <Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>فرزند {quantity}</Typography>
                                    </Grid> */}
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
                                                value={childData.name}
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
                                                 // error={error ? 'error' : ""}
                                                autoComplete="given-name"
                                                name="lastName"
                                                required
                                                fullWidth
                                                id="lastName"
                                                variant='outlined'
                                                label="نام خانوادگی"
                                                sx={style}
                                                onFocus={focusHandler}
                                                value={childData.lastName}
                                                onChange={changeHandler}
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
                                                 // error={error ? 'error' : ""}
                                                autoComplete="given-name"
                                                name="code"
                                                fullWidth
                                                id="code"
                                                variant='outlined'
                                                label="کد ملی"
                                                sx={style}
                                                // onFocus={focusHandler}
                                                value={childData.code}
                                                onChange={changeHandler}
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
                                                 // error={error ? 'error' : ""}
                                                autoComplete="given-name"
                                                name="mobileNumber"
                                                required
                                                fullWidth
                                                id="mobileNumber"
                                                variant='outlined'
                                                label="تلفن همراه"
                                                placeholder='*********09'
                                                sx={style}
                                                onFocus={focusHandler}
                                                value={childData.mobileNumber}
                                                onChange={changeHandler}
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
                                                 // error={error ? 'error' : ""}
                                                autoComplete="given-name"
                                                name="phoneNumber"
                                                fullWidth
                                                id="phoneNumber"
                                                variant='outlined'
                                                label="تلفن ثابت"
                                                sx={style}
                                                // onFocus={focusHandler}
                                                value={childData.phoneNumber}
                                                onChange={changeHandler}
                                                InputProps={{
                                                    sx: {
                                                            borderRadius: '8px',
                                                            fontFamily:"inherit"
                                                        }}}
                                            />
                                            {errors.phoneNumber && touched.phoneNumber && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.phoneNumber}</Grid>}
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                 // error={error ? 'error' : ""}
                                                autoComplete="given-name"
                                                name="address"
                                                fullWidth
                                                id="address"
                                                variant='outlined'
                                                label="آدرس"
                                                placeholder='آدرس کامل...'
                                                sx={style}
                                                // onFocus={focusHandler}
                                                value={childData.address}
                                                onChange={changeHandler}
                                                InputProps={{
                                                    sx: {
                                                            borderRadius: '8px',
                                                            fontFamily:"inherit"
                                                        }}}
                                            />
                                            {errors.address && touched.address && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.address}</Grid>}
                                        </Grid>
                                        {/* <Grid item xs={12}>
                                            <Typography style={{cursor:"default"}}sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>آیا فرزند بیشتری دارید؟ <span onClick={clickableText} ref={myRef} className={childStatus ? 'clickable' : 'disable'}>کلیک کنید.</span></Typography>
                                        </Grid> */}
                                    </ThemeProvider>
                                    </CacheProvider>
                                    </Grid> 
                                </>  
                            } 
                            {/* {moreChildren && inputs} */}
                            <Grid item xs={12} sm={6}>
                            <FormControl component="fieldset" >
                            <FormLabel id="demo-controlled-radio-buttons-group" 
                            className='radioGrouop'
                            required
                            >آیا فرزند شما زیر 18 سال است؟</FormLabel>
                            <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={under18children}
                            onChange={(e) => setUnder18Childre(e.target.value)}
                            sx={{fontFamily:'IRANYekan',fontWeight:'500'}}
                            >
                        <FormControlLabel value="yes" onClick={e => setChildStatusUnder18(true)} control={<Radio />} label={<Typography sx={{fontFamily:'IRANYekan',fontWeight:'500',marginLeft:'0px'}}>بله</Typography>} />
                        <FormControlLabel value='no' onClick={e => setChildStatusUnder18(false)} control={<Radio />} label={<Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>خیر</Typography>} />
                        </RadioGroup>
                        {errors1.under18children && touched.under18children && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors1.under18children}</Grid>}
                        </FormControl>
                        </Grid>
                        {
                                childStatusUnder18 ? <>
                                    <Grid container spacing={4} mt={5} mb={5}>
                                    <CacheProvider value={cacheRtl}>
                                    <ThemeProvider theme={theme}>
                                        <Grid item xs={12} >
                                            <Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}> چه کسی بعد از شما از فرزندانتان مراقبت کند؟</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                 // error={error ? 'error' : ""}
                                                autoComplete="given-name"
                                                name="name1"
                                                required
                                                fullWidth
                                                id="name1"
                                                variant='outlined'
                                                label="نام"
                                                sx={style}
                                                onFocus={focusHandler}
                                                value={relationshipData.name1}
                                                onChange={relationHandler}
                                                InputProps={{
                                                    sx: {
                                                            borderRadius: '8px',
                                                            fontFamily:"inherit"
                                                        }}}
                                            />
                                            {errors1.name1 && touched.name1 && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors1.name1}</Grid>}
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                 // error={error ? 'error' : ""}
                                                autoComplete="given-name"
                                                name="lastName1"
                                                required
                                                fullWidth
                                                id="lastName1"
                                                variant='outlined'
                                                label="نام خانوادگی"
                                                sx={style}
                                                onFocus={focusHandler}
                                                value={relationshipData.lastName1}
                                                onChange={relationHandler}
                                                InputProps={{
                                                    sx: {
                                                            borderRadius: '8px',
                                                            fontFamily:"inherit"
                                                        }}}
                                            />
                                            {errors1.lastName1 && touched.lastName1 && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors1.lastName1}</Grid>}
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                 // error={error ? 'error' : ""}
                                                autoComplete="given-name"
                                                name="code1"
                                                fullWidth
                                                id="code1"
                                                variant='outlined'
                                                label="کد ملی"
                                                sx={style}
                                                // onFocus={focusHandler}
                                                value={relationshipData.code1}
                                                onChange={relationHandler}
                                                InputProps={{
                                                    sx: {
                                                            borderRadius: '8px',
                                                            fontFamily:"inherit"
                                                        }}}
                                            />
                                            {errors1.code1 && touched.code1 && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors1.code1}</Grid>}
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                 // error={error ? 'error' : ""}
                                                autoComplete="given-name"
                                                name="mobileNumber1"
                                                required
                                                fullWidth
                                                id="mobileNumber1"
                                                variant='outlined'
                                                label="تلفن همراه"
                                                placeholder='*********09'
                                                sx={style}
                                                onFocus={focusHandler}
                                                value={relationshipData.mobileNumber1}
                                                onChange={relationHandler}
                                                InputProps={{
                                                    sx: {
                                                            borderRadius: '8px',
                                                            fontFamily:"inherit"
                                                        }}}
                                            />
                                            {errors1.mobileNumber1 && touched.mobileNumber1 && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors1.mobileNumber1}</Grid>}
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                 // error={error ? 'error' : ""}
                                                autoComplete="given-name"
                                                name="phoneNumber1"
                                                fullWidth
                                                id="phoneNumber1"
                                                variant='outlined'
                                                label="تلفن ثابت"
                                                sx={style}
                                                // onFocus={focusHandler}
                                                value={relationshipData.phoneNumber1}
                                                onChange={relationHandler}
                                                InputProps={{
                                                    sx: {
                                                            borderRadius: '8px',
                                                            fontFamily:"inherit"
                                                        }}}
                                            />
                                            {errors1.phoneNumber1 && touched.phoneNumber1 && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors1.phoneNumber1}</Grid>}
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                 // error={error ? 'error' : ""}
                                                autoComplete="given-name"
                                                name="address1"
                                                fullWidth
                                                id="address1"
                                                variant='outlined'
                                                label="آدرس"
                                                placeholder='آدرس کامل...'
                                                sx={style}
                                                // onFocus={focusHandler}
                                                value={relationshipData.address1}
                                                onChange={relationHandler}
                                                InputProps={{
                                                    sx: {
                                                            borderRadius: '8px',
                                                            fontFamily:"inherit"
                                                        }}}
                                            />
                                            {errors1.address1 && touched.address1 && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors1.address1}</Grid>}
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                 // error={error ? 'error' : ""}
                                                autoComplete="given-name"
                                                name="relationship"
                                                fullWidth
                                                required
                                                id="relationship"
                                                variant='outlined'
                                                label="نسبت"
                                                sx={style}
                                                onFocus={focusHandler}
                                                value={relationshipData.relationship}
                                                onChange={relationHandler}
                                                InputProps={{
                                                    sx: {
                                                            borderRadius: '8px',
                                                            fontFamily:"inherit"
                                                        }}}
                                            />
                                            {errors1.relationship && touched.relationship && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors1.relationship}</Grid>}
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                 // error={error ? 'error' : ""}
                                                autoComplete="given-name"
                                                name="description"
                                                fullWidth
                                                id="description"
                                                variant='outlined'
                                                label="توضیحات"
                                                sx={style}
                                                // onFocus={focusHandler}
                                                value={relationshipData.describtion}
                                                onChange={relationHandler}
                                                InputProps={{
                                                    sx: {
                                                            borderRadius: '8px',
                                                            fontFamily:"inherit"
                                                        }}}
                                            />
                                            {errors1.describtion && touched.describtion && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors1.describtion}</Grid>}
                                        </Grid>
                                    </ThemeProvider>
                                    </CacheProvider>
                                    </Grid>
                                </> : null
                            }
                            <Grid item xs={12}  mt={5}>
                            <Button variant='contained' 
                            sx={{borderRadius:'8px',padding:"6px 12px"}}
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
                        <Grid item xs={12} sm={6} sx={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",marginLeft:"10px"}}>
                        {step !== 0 && (
                            <Button onClick={handleBack} sx={{ color:"black"}}>
                                    صفحه قبل
                            </Button>
                        )} 
              </Grid>
            </Grid>
            </Box>
            <ToastContainer/>
        </Container>
    );
};

export default ChildrenForm;