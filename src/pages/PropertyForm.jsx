import React, { useEffect, useRef, useState } from 'react';
//MUI
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
//components
import Inputs from '../utility/Inputs';
import { validate6, validate7 } from '../utility/validation';
import { provinces } from '../utility/provinces';

const PropertyForm = ({handleNext,handleBack,step}) => {

    const myRef = useRef(null)
    // const valueRef = useRef()

    const [property,setProperty] = useState(false);
    const [status,setStatus] = useState(false);

    const [errors,setErrors] = useState({});
    const [touched,setTouched] = useState({});

    const [errors1,setErrors1] = useState({});
    const [touched1,setTouched1] = useState({});

    const [quantity,setQuantity] = useState(1)

    const [inputs,setInputs] = useState([]);
    const [infoInputs,setInfoInputs] = useState([])
   
    const [propertyStatus,setPropertyStatus] = useState("")

    // console.log(infoInputs[0].props.data);
    console.log(infoInputs);

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

    const clickHandler = () => {
        setProperty(true)
        setStatus(true)
        
        if(status){
            if(myRef.current.disabled) return;

            const infoNewInputs = <Inputs quantity={quantity} data={data} 
            setData={setData} errors1={errors1} />;
            
            setInfoInputs([...infoInputs,infoNewInputs])
            // setStatus(false)
            // event.target.disabled = true
            myRef.current.disabled = true
            console.log('clicked');
            setQuantity(quantity => quantity + 1)
            // console.log(quantity);
        }
    }

    const changeHandler = (event) => {
        setPropertyStatus({[event.target.name]:event.target.value})
    }

    const clickableText = () => {
        if(property){
            
            const newInput = 
            <FormControl component="fieldset" row={true ? 1 : 0}>
                <FormLabel id="demo-controlled-radio-buttons-group" 
                className='radioGrouop'
                required
                >نوع ملک</FormLabel>
                <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                sx={{fontFamily:'IRANYekan',fontWeight:'500'}}
                >
                <FormControlLabel ref={myRef} name="residential" onChange={changeHandler} value="residential" onClick={clickHandler} control={<Radio />} label={<Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>مسکونی</Typography>} />
                <FormControlLabel ref={myRef} name='official' onChange={changeHandler} value='official' onClick={clickHandler} control={<Radio />} label={<Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>اداری تجاری</Typography>} />
                <FormControlLabel ref={myRef} name="construction" onChange={changeHandler} value='construction' onClick={clickHandler} control={<Radio />} label={<Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>پروژه ساخت و ساز</Typography>} />
                </RadioGroup>
            {errors.propertyStatus && touched.propertyStatus && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.propertyStatus}</Grid>}
            </FormControl>;
    
        setInputs([...inputs,newInput])
        setProperty(false)
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
            console.log('eyval');
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

    return (
        <Container component='main' maxWidth='md' className='container'>
            <Box component="form" sx={{ mt: 3 }}>
                <Grid container spacing={4} >
                    <Grid item xs={12} >
                    <FormControl component="fieldset" >
                      <FormLabel id="demo-controlled-radio-buttons-group" 
                        className='radioGrouop'
                        required
                        >نوع ملک</FormLabel>
                        <RadioGroup
                        row
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        // value={relation}
                        // onChange={(e) => setRelation(e.target.value)}
                        // sx={{fontFamily:'IRANYekan',fontWeight:'500'}}
                        >
                            <FormControlLabel ref={myRef} name="residential" onChange={changeHandler} value="residential" onClick={clickHandler} control={<Radio />} label={<Typography >مسکونی</Typography>} />
                            <FormControlLabel ref={myRef} name='official' onChange={changeHandler} value='official' onClick={clickHandler} control={<Radio />} label={<Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>اداری تجاری</Typography>} />
                            <FormControlLabel ref={myRef} name="construction" onChange={changeHandler} value='construction' onClick={clickHandler} control={<Radio />} label={<Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>پروژه ساخت و ساز</Typography>} />
                        </RadioGroup>
                    {errors?.propertyStatus && touched?.propertyStatus && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.propertyStatus}</Grid>}
                    </FormControl>
                </Grid>
                <Grid item xs={12} >
                    {
                        inputs.map((input,index) => {
                        return  <div key={index}>
                                    {input}
                                </div>
                        })
                    }
                </Grid> 
                {status && infoInputs}
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
                
                <Grid item xs={12} >
                    <Typography style={{cursor:"default"}} >آیا املاک بیشتری دارید؟  < span onClick={clickableText} className={property ? 'clickable' : 'disable'}>کلیک کنید.</span> </Typography>
                </Grid>
                <Grid item xs={12}  mt={5}>
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
              <Grid item xs={12} sm={6} sx={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",marginLeft:"10px"}}>
                {step !== 0 && (
                    <Button onClick={handleBack} sx={{ color:"black"}}>
                            صفحه قبل
                    </Button>
                    )} 
              </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default PropertyForm;