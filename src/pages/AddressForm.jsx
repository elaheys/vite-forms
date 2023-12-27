// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// //formik
// import * as Yup from "yup";
// import { Formik,Field } from "formik";
// //provinces
// import { provinces } from '../utility/provinces';
// //style
// import styled from "styled-components";

// const Address = styled.div`
//   background-color: #ffff;
//   border-radius: 6px;
//   padding: 15px;
//   margin: 0 auto;
//   box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
//   @media (min-width: 1000px) {
//     width: 80%;
//   }
//   h3 {
//     margin: 0;
//     font-weight: 700;
//   }
//   p{
//     padding-top: 5px;

//   }
//   span {
//     color: gray;
//   }
//   .error {
//         width: fit-content;
//         height: fit-content;
//         color: red;
//         font-size: 14px;
//       }
//    .citySection{
//         display: flex;
//         justify-content: space-between;
//         flex-direction: column;
//         width: 100%;
//         gap: 25px;
//         @media (min-width: 758px) {
//           flex-direction: row;
//           flex-wrap: nowrap;
//           width: 73%;
//         }
        
//         select{
//           width: 100%; 
//           margin: 5px 0 0 10px;
//           font-size: 1.15rem;
//           font-weight: 400;
//           font-family: "IRANYekan";
//           border: 1px solid #aeaeae;
//           border-radius: 6px;
//           outline: 0;
//           padding: 10px;
//           cursor: pointer;
//           background-color: #f9fafc;
//           option{
//           font-weight: 300;
//         }
//           @media (min-width: 700px) {
//           /* width: 93%; */
//           /* margin-top: 10px;
//           margin-bottom: 15px; */
//         }
//           &:focus {
//             border: 2px solid rgb(23, 193, 232);
//           }
//           &:invalid {
//             border: 2px solid red;
//           }
//         }
//         .able{
//           cursor: default !important;
//           }
    
//         label {
//         color: gray;
//         font-weight: 500;
//         flex-wrap: wrap;

//       }
//       } 
  
//   .address-form {
//     margin-top: 25px;
//     .inputs {
//       display: flex;
//       gap: 25px;
//       flex-direction: column;
//       align-items: center;
//       .input {
//         display: flex;
//         flex-direction: column;
//         flex-grow: 1;
//         width: 100%;

//         @media (min-width: 700px) {
//           width: 33%;
//         }
//       }
//       @media (min-width: 700px) {
//         flex-direction: row;
//         flex-wrap: wrap;
//       }
//       label {
//         color: gray;
//         font-weight: 500;
//         flex-wrap: wrap;
//       }
//       input {
//         border: 1px solid #aeaeae;
//         border-radius: 6px;
//         outline: 0;
//         padding: 10px;

//         &:focus {
//           border: 2px solid rgb(23, 193, 232);
//         }
//         &:invalid {
//           border: 2px solid red;
//         }
//       }
//     }

//     .buttons {
//       display: flex;
//       justify-content: space-between;
//       margin-top: 15px;
//       button {
//       background: #173670;
//       color: #fff;
//       font-size: 18px;
//       font-family: "IRANYekan";
//       font-weight: 400;
//       border: 0;
//       padding: 5px 13px;
//       border-radius: 6px;
//       margin-top: 15px;
//       transition: all 0.2s linear;
//       cursor: pointer;
//       &:hover {
//         opacity: 90%;
//       }
//     }
//     }

//     .city-state-zip {
//       width: 100%;
//       display: flex;
//       flex-direction: column;
//       gap: 20px;
//       margin-top:13px;
//       @media (min-width: 700px) {
//         flex-direction: row;
//       }
//       ::placeholder{
//             font-weight: 300;
//             font-size: 1rem;
//           }
//       textarea{
//           width: 100%;
//           margin-top: 5px;
//           font-size: 1.15rem;
//           font-family: "IRANYekan";
//           border: 1px solid #aeaeae;
//           border-radius: 6px;
//           outline: 0;
//           padding: 5px;
//           background-color: #f9fafc;
          
//           &:focus {
//             border: 2px solid rgb(23, 193, 232);
//           }
//         &:invalid {
//           border: 2px solid red;
//         }
//         }
//       }
//       .state-zip {
//         width: 100%;
//         display: flex;
//         flex-direction: column;
//         gap: 20px;
//         @media (min-width: 700px) {
//         flex-direction: row;
//         /* flex-wrap: wrap; */
//         }
//         input {
//           /* width: 88%; */
//           margin-top: 5px;
//           background-color: #f9fafc;

//         }
//       }
//     }
  
// `;



// const AddressForm = () => {

// const [selectedProvince, setSelectedProvince] = useState('');
// const [selectedCity, setSelectedCity] = useState('');
// const[number,setNumber] = useState('')

// const handleChange = (event) => {
//     const newNum = event.target.value
//     if(newNum.lenght){
//       setNumber(newNum)
//     }
// }

// const handleProvinceChange = (event) => {
//   setSelectedProvince(event.target.value);
//   setSelectedCity(''); 
// };

// const handleCityChange = (event) => {
//   setSelectedCity(event.target.value);
// };

// const cities = selectedProvince ? provinces[selectedProvince] : [];

// const navigate = useNavigate()

// const validationSchema= Yup.object().shape({
//   address: Yup.string().required(" وارد کردن آدرس  ضروری است"),
//   province: Yup.string().required("وارد کردن استان ضروری است"),
//   city: Yup.string().required("وارد کردن شهر ضروری است"),
//   zip: Yup.string()
//     .required("وارد کردن کدپستی ضروری است")
//     .max(10,"کدپستی باید 10 رقم باشد"),
// })

//   return (
//     <Address>
//       <h3>آدرس محل سکونت</h3>
//       <p>قسمت های * دار اجباری هستند.</p>

//       <Formik
//         initialValues={{
//           address: "",
//           province:"",
//           city: "",
//           zip: "",
//           unit:"",
//           plate:"",
//         }}
       
//         validationSchema={validationSchema}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             setSubmitting(false);
//           }, 4000);
//           navigate("/relationform");
//         }}
//       >
//         {(formik) => (
//           <form className="address-form" onSubmit={formik.handleSubmit}>
//             <div className='citySection'>
//               <div className="input">
//                 <label htmlFor='province'>استان* :</label>
//                 <Field as="select" id="province" name="province" value={selectedProvince} onChange={handleProvinceChange}>
//                     <option value="" >استان خود را انتخاب کنید</option>
//                     {Object.keys(provinces).map((province,index) => (
//                       <option key={index} value={province} >
//                         {province}
//                       </option>
//                     ))}
//                     {/* <option value="option1">استان* :</option> */}
//                 </Field>
//                   {/* <select value={selectedProvince} onChange={handleProvinceChange}>
//                     <option value="" {...formik.getFieldProps("province")}>استان خود را انتخاب کنید</option>
//                     {Object.keys(provinces).map((province) => (
//                       <option key={province} value={province}>
//                         {province}
//                       </option>
//                     ))}
//                   </select> */}
//                 {formik.touched.province && formik.errors.province ? (
//                   <span className="error">{formik.errors.province}</span>
//                 ) : null}
//                 </div>  

//                 <div className="input">
//                   <label htmlFor='city'> شهر* :</label>
//                   <Field as="select" id="city" name="city" className={`${!selectedProvince ? 'able' : null}`} value={selectedCity} onChange={handleCityChange} disabled={!selectedProvince}>
//                     <option value="" >شهر خود را انتخاب کنید</option>
//                     {cities.map((city,index) => (
//                         <option key={index} value={city} >
//                           {city}
//                         </option>
//                       ))}
//                     {/* <option value="option2">شهر* :</option> */}
//                   </Field>
//                     {/* <select className={`${!selectedProvince ? 'able' : null}`} value={selectedCity} onChange={handleCityChange} disabled={!selectedProvince}>
//                       <option value="" {...formik.getFieldProps("city")}>شهر خود را انتخاب کنید</option>
//                       {cities.map((city) => (
//                         <option key={city} value={city}>
//                           {city}
//                         </option>
//                       ))}
//                   </select> */}
//                 {formik.touched.city && formik.errors.city ? (
//                   <span className="error">{formik.errors.city}</span>
//                 ) : null}
//                 </div>
//                 </div>   

//             <div className="inputs">

//               <div className="city-state-zip">
//                 <div className="input">
//                   <label htmlFor="address">آدرس کامل* :</label>
//                     <textarea id="address" 
//                     rows="4" cols="50" 
//                     placeholder='آدرس...' {...formik.getFieldProps("address")}>
                      
//                     </textarea>
//                   {formik.touched.address && formik.errors.address ? (
//                     <div className="error">{formik.errors.address}</div>
//                   ) : null}
//                 </div>
//               </div>

//             <div className="state-zip">
//                   <div className="input">
//                     <label htmlFor="zip">کد پستی* :</label>
//                     <input
//                     value={number}
//                     onChange={handleChange}
//                       maxLength='10'
//                       id="zip"
//                       type="number"
//                       {...formik.getFieldProps("zip")}
//                     />
//                   {formik.touched.zip && formik.errors.zip ? (
//                   <div className="error">{formik.errors.zip}</div>
//                   ) : null}
//                   </div>  

//                   <div className="input">
//                     <label htmlFor="state">واحد:</label>
//                     <input
//                       max='10'
//                       id="state"
//                       type="number"
//                     />
//                   </div>

//                   <div className="input">
//                     <label htmlFor="state">پلاک:</label>
//                     <input
//                       max='10'
//                       id="state"
//                       type="number"
//                     />
//                   </div>
//               </div>
//             </div>

//             <div className="buttons">
//               <button type="submit">ادامه...</button>
//               <button onClick={() => navigate(-1)} type="button">
//                 صفحه قبل
//               </button>
//             </div>
//           </form>
//         )}
//       </Formik>
//     </Address>
//   );
// };

// export default AddressForm;

import React, { useEffect, useState } from 'react';
//MUI
import { Container,Box, Grid, TextField, FormControl, InputLabel, Select, MenuItem,Button } from '@mui/material';
//rtl in mui
import createCache from '@emotion/cache';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
//data
import { provinces } from '../utility/provinces';
//toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
//validate
import { validate2 } from '../utility/validation';

const AddressForm = ({handleNext,handleBack,step}) => {

// const [selectedProvince, setSelectedProvince] = useState('');
// const [selectedCity, setSelectedCity] = useState('');
const [data,setData] = useState({
  address:"",
  code:"",
  selectedProvince:"",
  selectedCity:""
})
const [errors,setErrors] = useState({});
const [touched,setTouched] = useState({});

const focusHandler = event => {
  setTouched({...touched, [event.target.name]: true})
}

const changeHandler = event => {
  setData({...data, [event.target.name]: event.target.value})

}

const cities = data.selectedProvince ? provinces[data.selectedProvince] : [];

const handleProvinceChange = (event) => {
  // setSelectedProvince(event.target.value);
  // setSelectedCity(''); 
};

const handleCityChange = (event) => {
  // setSelectedCity(event.target.value);
};

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

useEffect(() => {
  setErrors(validate2(data))
},[data]);  

const submitHandler = (event) => {
  event.preventDefault();
  if(!Object.keys(errors).length){
    toast.success("تمام فیلد هارا به درستی پر کردید",{
      position:'top-center'
    })
handleNext()    
console.log(data);
}else{
  setTouched({
    address:true,
    code:true,
    selectedCity:true,
    selectedProvince:true
  })
  toast.warn('لطفا همه فیلدهارو پر کن',{
    position:'top-center'
})
}
setErrors(validate2(data));
// setErrors(validate2(selectedProvince,selectedCity));
}
  return (
    <Container component='main' maxWidth='md' sx={{backgroundColor:'#fff',borderRadius:'16px',
    mt: 2,padding:'24px',boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px'}}>
      <Box component="form"  sx={{ mt: 3 }}>
          <Grid container spacing={4} >
              <CacheProvider value={cacheRtl}>
              <ThemeProvider theme={theme}>
                <Grid item xs={12} sm={6}>
                    <FormControl sx={{  width: "100%" }} required>
                        <InputLabel id="demo-controlled-open-select-label">استان</InputLabel>
                        <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        value={data.selectedProvince} 
                        onChange={changeHandler}
                        sx={{borderRadius:"8px",borderColor:"black",fontFamily:'IRANYekan',fontWeight:'400'}}
                        name='selectedProvince'
                        // open={open}
                        // onClose={handleClose}
                        // onOpen={handleOpen}
                        // value={age}
                        label="Age"
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
                        {errors.selectedProvince && touched.selectedProvince && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.selectedProvince}</Grid>}
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <FormControl sx={{ width: "100%" }} required >
                        <InputLabel id="demo-controlled-open-select-label">شهر</InputLabel>
                        <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        value={data.selectedCity} 
                        onChange={changeHandler} 
                        disabled={!data.selectedProvince}
                        name='selectedCity'
                        sx={{borderRadius:"8px",fontFamily:'IRANYekan',fontWeight:'400'}}
                        
                        // open={open}
                        // onClose={handleClose}
                        // onOpen={handleOpen}
                        // value={age}
                        label="شهر"
                        // onChange={handleChange}
                        >
                        <MenuItem value="" sx={{fontFamily:'IRANYekan',fontWeight:'500'}}
                        
                        >
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
                        {errors.selectedCity && touched.selectedCity && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.selectedCity}</Grid>}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                  <TextField
                      // error={error ? 'error' : ""}
                      autoComplete="given-name"
                      name="address"
                      required
                      fullWidth
                      // id="address"
                      value={data.address}
                      onChange={changeHandler}
                      // onFocus={focusHandler}
                      variant='outlined'
                      label="آدرس"
                      placeholder='آدرس کامل...'
                      // multiline
                      // minRows={2}
                      // sx={style}
                      // onFocus={focusHandler}
                      // value={data.name}
                      // onChange={changeHandler}
                      sx={style}
                      InputProps={{
                        sx: {
                            borderRadius: '8px',
                            fontFamily:"inherit"
                            
                          }}}
                    />
                    {errors.address && touched.address && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.address}</Grid>}
                  </Grid>
                  
                  <Grid item xs={12} sm={4}>
                      <TextField
                      autoComplete="given-name"
                      type='number'
                      name="code"
                      value={data.code}
                      onChange={changeHandler}
                      // onFocus={focusHandler}
                      required
                      fullWidth
                      // id="code"
                      variant='outlined'
                      label="کد پستی"
                      sx={style}
                      InputProps={{
                        sx: {
                            borderRadius: '8px',
                            fontFamily:"inherit"
                          }}}
                      />
                      {errors.code && touched.code && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.code}</Grid>}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                      <TextField
                      autoComplete="given-name"
                      name="name"
                      fullWidth
                      // id="name"
                      variant='outlined'
                      label="واحد"
                      sx={style}
                      InputProps={{
                        sx: {
                            borderRadius: '8px',
                            fontFamily:"inherit"
                          }}}
                      />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                      <TextField
                      autoComplete="given-name"
                      name="name"
                      fullWidth
                      id="name"
                      variant='outlined'
                      label="پلاک"
                      sx={style}
                      InputProps={{
                        sx: {
                            borderRadius: '8px',
                            fontFamily:"inherit"
                          }}}
                      />
                  </Grid>
              </ThemeProvider>
              </CacheProvider>
              <Grid item xs={12} sm={6} sx={{display:"flex",justifyContent:"flex-start"}}>
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
              <Grid item xs={12} sm={6} sx={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",marginLeft:"10px"}}>

              {step !== 0 && (
                <Button onClick={handleBack} sx={{ color:"black",marginTop:'5px'}}>
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

export default AddressForm;