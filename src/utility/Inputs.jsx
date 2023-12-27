import React, { useEffect, useState } from 'react';
//rtl in mui
import createCache from '@emotion/cache';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
//province
import { provinces } from './provinces';
import { Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { validate7 } from './validation';

const Inputs = ({quantity,data,setData,errors1}) => {

  // const {selectedCity,selectedProvince,code} = data

  // console.log(code);
  
    const theme = createTheme({
        direction: 'rtl', 
      });
    
      const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
      });

      // const [data,setData] = useState({
      //   selectedProvince:"",
      //   selectedCity:"",
      //   code:"",
      //   address:"",
      //   documentNumber:"",
      //   email:"",
      //   describe:"",
      //   price:"",
      // })
      // const [errors,setErrors] = useState({});
      // const [touched,setTouched] = useState({});

      // useEffect(() => {
      //   setErrors(validate7(data))
      // },[data])

    const cities = data?.selectedProvince ? provinces[data?.selectedProvince] : [];


const changeHandler = event => {
  const name = event.target.name
  const value = event.target.value
  setData({...data, [name] : value})
  // console.log(value)
}

    return (
        <>
        <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
        <Grid item xs={12}><Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>مشخصات ملک {quantity}</Typography></Grid>
        <Grid item xs={12} sm={4}>
                    <FormControl sx={{  width: "100%" }} required>
                        <InputLabel id="demo-controlled-open-select-label">استان</InputLabel>
                        <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        value={data?.selectedProvince} 
                        onChange={changeHandler}
                        sx={{borderRadius:"8px",borderColor:"black",}}
                        name='selectedProvince'
                        // open={open}
                        // onClose={handleClose}
                        // onOpen={handleOpen}
                        // value={age}
                        label="استان"
                        // onChange={handleChange}
                        >
                        <MenuItem value="" sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>
                          <em>استان خود را انتخاب کنید</em>
                        </MenuItem>
                        {
                          Object.keys(provinces).map((province,index) => (
                            <MenuItem key={index} value={province} sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>
                              {province}
                            </MenuItem>
                          ))
                        }
                        </Select>
                        {errors1?.selectedProvince && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors1?.selectedProvince}</Grid>}
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl sx={{ width: "100%" }} required >
                        <InputLabel id="demo-controlled-open-select-label">شهر</InputLabel>
                        <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        value={data?.selectedCity} 
                        onChange={changeHandler} 
                        disabled={!data?.selectedProvince}
                        name='selectedCity'
                        sx={{borderRadius:"8px"}}
                        // open={open}
                        // onClose={handleClose}
                        // onOpen={handleOpen}
                        // value={age}
                        label="شهر"
                        // onChange={handleChange}
                        >
                        <MenuItem value="" sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>
                          <em>شهر خود را انتخاب کنید</em>
                        </MenuItem>
                        {
                          cities.map((city,index) => (
                            <MenuItem key={index} value={city} sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>
                              {city}
                            </MenuItem>
                          ))
                        }

                        </Select>
                        {/* {errors1?.selectedCity &&  <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors1.selectedCity}</Grid>} */}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                  <TextField
                  sx={{fontFamily:'IRANYekan',fontWeight:'500'}}
                  label='کد پستی'
                  fullWidth
                  name='code'
                  value={data?.code}
                  onChange={changeHandler}
                  
                  />
                  </Grid>
                  <Grid item xs={12} >
                  <TextField
                  sx={{fontFamily:'IRANYekan',fontWeight:'500'}}
                  label='آدرس'
                  required
                  fullWidth
                  />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                  sx={{fontFamily:'IRANYekan',fontWeight:'500'}}
                  label='شماره سند'
                  fullWidth
                  />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                  sx={{fontFamily:'IRANYekan',fontWeight:'500'}}
                  label='قیمت حدودی'
                  required
                  fullWidth
                  />
                  </Grid>
                  <Grid item xs={12} >
                  <TextField
                  sx={{fontFamily:'IRANYekan',fontWeight:'500'}}
                  label='توضیحات'
                  fullWidth
                  />
                  </Grid>
                  <Grid item xs={12} >
                  <Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>اگر در این مال با کسی شریک هستید سهم خود را مشخص کنید.</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                  sx={{fontFamily:'IRANYekan',fontWeight:'500'}}
                  label='سهم من'
                  fullWidth
                  // value={share}
                  onChange={e => setShare(e.target.value)}
                  placeholder='مثال 25%'
                  />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                  sx={{fontFamily:'IRANYekan',fontWeight:'500'}}
                  label='سهم شریک یا شرکا'
                  fullWidth
                  // value={'%'}
                  />
                  </Grid>
                </ThemeProvider>
                </CacheProvider>
            </>
    );
};

export default Inputs;