import React, { useEffect, useRef, useState } from 'react';
//MUI
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
//components
import Inputs from '../utility/Inputs';
import { validate6, validate7 } from '../utility/validation';
import { provinces } from '../utility/provinces';
//rtl in mui
import createCache from '@emotion/cache';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';

const PropertyForm = ({handleNext,handleBack,step}) => {

    const theme = createTheme({
        direction: 'rtl', 
      });
    
      const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
      });

    const myRef = useRef(null)
    // const valueRef = useRef()

    const [property,setProperty] = useState(false);
    const [propertyStatus,setPropertyStatus] = useState('')

    const [status,setStatus] = useState(false);

    const [errors,setErrors] = useState({});
    const [touched,setTouched] = useState({});
    const [errors1,setErrors1] = useState({});
    const [touched1,setTouched1] = useState({});

    const [quantity,setQuantity] = useState(1)

    const [inputs,setInputs] = useState([]);
    const [infoInputs,setInfoInputs] = useState([])
    const [yesno,setYesNo] = useState(false)
   
    // console.log(propertyStatus);
    // console.log(property);

    // console.log(infoInputs[0].props.data);
    // console.log(infoInputs);

    const [data,setData] = useState({
        selectedProvince:"",
        selectedCity:"",
        code:"",
        address:"",
        documentNumber:"",
        email:"",
        describe:"",
        price:"",
      })


    // const cities = data.selectedProvince ? provinces[data.selectedProvince] : [];

    const clickHandler = (e) => {
        setProperty(true)
        setStatus(true)
        
        if(e.target?.name === e.target?.value){
            if(myRef.current.disabled) return;

            const infoNewInputs = <Inputs quantity={quantity} data={data} 
            setData={setData} errors1={errors1} />;
            
            setInfoInputs([...infoInputs,infoNewInputs])
            // setStatus(false)
            // event.target.disabled = true
            myRef.current.disabled = true
            console.log('clicked');
            // setQuantity(quantity => quantity + 1)
            // console.log(quantity);
        }
        // if(status){
        //     if(myRef.current.disabled) return;

        //     const infoNewInputs = <Inputs quantity={quantity} data={data} 
        //     setData={setData} errors1={errors1} />;
            
        //     setInfoInputs([...infoInputs,infoNewInputs])
        //     // setStatus(false)
        //     // event.target.disabled = true
        //     myRef.current.disabled = true
        //     console.log('clicked');
        //     setQuantity(quantity => quantity + 1)
        //     // console.log(quantity);
        // }
    }

    console.log(inputs);
    const changeHandler = (event) => {
        setPropertyStatus({[event.target.name]:event.target.value})
        // console.log(event.target.value);
        // console.log(data);
    }

    const clickableText = () => {
        if(property){
            
            const newInput = 
            <FormControl component="fieldset" row={true ? 1 : 0}>
                <FormLabel id="demo-controlled-radio-buttons-group" 
                className='radioGrouop'
                required
                >نوع ملک {quantity} </FormLabel>
                <RadioGroup
                row
                // value={propertyStatus}
                // onChange={changeHandler} 
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                sx={{fontFamily:'IRANYekan',fontWeight:'500'}}
                >
                <FormControlLabel ref={myRef} name="residential" onChange={changeHandler} value="residential" onClick={clickHandler} control={<Radio />} label={<Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>مسکونی</Typography>} />
                <FormControlLabel ref={myRef} name='official' onChange={changeHandler}  value='official' onClick={clickHandler} control={<Radio />} label={<Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>اداری تجاری</Typography>} />
                <FormControlLabel ref={myRef} name="construction" onChange={changeHandler} value='construction' onClick={clickHandler} control={<Radio />} label={<Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>پروژه ساخت و ساز</Typography>} />
                </RadioGroup>
            {errors.propertyStatus && touched.propertyStatus && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.propertyStatus}</Grid>}
            </FormControl>;
    
        setInputs([...inputs,newInput])
        setProperty(false)
        setQuantity(quantity => quantity +1)
        // setStatus(false)
        } 

    }

    useEffect(() => {
        setErrors(validate6(propertyStatus))
    },[propertyStatus])

    useEffect(() => {
        setErrors1(validate7(data))
    },[data])

   
    const submitHandler = (event) => {
       
        event.preventDefault();

        if(!Object.keys(errors).length && !Object.keys(errors1).length){
            
        }else{
            setTouched({
                propertyStatus:true,
                selectedProvince:true,
                selectedCity:true,
                address:true,
                price:true,
            })
            // setTouched1({
            //     selectedProvince:true,
            //     selectedCity:true,
            //     address:true,
            //     price:true,
            // })
        }
        setErrors(validate6(propertyStatus))
        setErrors1(validate7(data))
     
    }

    const yesnoHandler = (e) => {
        if(e.target.value === 'yes'){
            console.log('yes');
            setYesNo(true)

        }else if(e.target.value === 'no'){
            console.log('no');
            setYesNo(false)
            setPropertyStatus('')
            setStatus(false)
            setInfoInputs([])
            setInputs([])
        }
    }

    return (
        <Container component='main' maxWidth='md' className='container'>
            <Box component="form" sx={{ mt: 3 }}>
                <Grid container spacing={4} >
                    <Grid item xs={12}>
                    <FormControl component="fieldset" >
                    <FormLabel id="demo-controlled-radio-buttons-group" 
                    className='radioGrouop'
                    required
                    >آیا ملکی به نام خود دارید؟</FormLabel>
                    <RadioGroup
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    // value={yesno}
                    // onChange={(e) => setYesNo(e.target.value)}
                    sx={{fontFamily:'IRANYekan',fontWeight:'500'}}
                    >
                    <FormControlLabel onClick={yesnoHandler} onChange={() => setYesNo(true)} value="yes" control={<Radio />} label={<Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>بله</Typography>} />
                    <FormControlLabel onClick={yesnoHandler} onChange={() => setYesNo(false)} value='no' control={<Radio />} label={<Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>خیر</Typography>} />
                    </RadioGroup>
                    {/* {errors.gender && touched.gender && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.gender}</Grid>} */}
                    </FormControl>
                    </Grid>
                    {yesno &&  <>
                        <Grid item xs={12} >
                    <FormControl component="fieldset" >
                      <FormLabel id="demo-controlled-radio-buttons-group" 
                        className='radioGrouop'
                        required
                        >نوع ملک {quantity} </FormLabel>
                        <RadioGroup
                        // defaultValue='residential'
                        row
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        // value={propertyStatus}
                        // onChange={changeHandler}
                        // sx={{fontFamily:'IRANYekan',fontWeight:'500'}}
                        >
                            <FormControlLabel ref={myRef} name="residential" onChange={changeHandler} value="residential" onClick={clickHandler} control={<Radio />} label={<Typography >مسکونی</Typography>} />
                            <FormControlLabel ref={myRef} name='official' onChange={changeHandler} value='official' onClick={clickHandler} control={<Radio />} label={<Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>اداری تجاری</Typography>} />
                            <FormControlLabel ref={myRef} name="construction" onChange={changeHandler} value='construction' onClick={clickHandler} control={<Radio />} label={<Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>پروژه ساخت و ساز</Typography>} />
                        </RadioGroup>
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField/>
                    </Grid>
                    <Grid item xs={12} >
                        <Typography style={{cursor:"default"}} >آیا املاک بیشتری دارید؟  < span onClick={clickableText} className={property ? 'clickable' : 'disable'}>کلیک کنید.</span> </Typography>
                    </Grid>
                    </> }
                    
                {/* <Grid item xs={12} > */}
                    {
                      yesno &&  inputs.map((input,index) => {
                        return <> <Grid item xs={12} key={index}>
                                    {input}
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField/>
                                </Grid>
                                <Grid item xs={12} >
                                <Typography style={{cursor:"default"}} >آیا املاک بیشتری دارید؟  < span onClick={clickableText} className={property ? 'clickable' : 'disable'}>کلیک کنید.</span> </Typography>
                                </Grid>
                            </>
                        })
                    }
                {/* </Grid>  */}
                {/* {status && infoInputs} */}
                {/* {status && infoInputs.map((input,index) => (
                        <Inputs key={index} quantity={quantity} data={data} 
                        setData={setData} errors1={errors1} />
                ))} */}

                {/* {status && <Inputs quantity={quantity} data={data} 
                                    setData={setData} errors1={errors1}/> } */}

                {/* {status && infoInputs.map((input,index) => (
                    <input
                    key={index}
                    value={input.value}
                    type={input.type}
                    />
                ))} */}
                
               
                <Grid item xs={12}  mt={5}>
                    <Box sx={{display:"flex",flexDirection:"row-reverse",justifyContent:"space-between"}}>

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
              {/* </Grid> */}
              {/* <Grid item xs={12} sm={6} sx={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",marginLeft:"10px"}}> */}
                    {step !== 0 && (
                        <Button onClick={handleBack} sx={{ color:"black"}}>
                            صفحه قبل
                        </Button>
                    )} 
                    </Box>
                </Grid>
            </Grid>
            </Box>
        </Container>
    );
};

export default PropertyForm;