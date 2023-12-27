// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// //formik
// import * as Yup from "yup";
// import { Field, Formik } from "formik";
// //style
// import styled from "styled-components";

// const Rel = styled.div`
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
//   }
//   p{
//     padding-top: 5px;
//   }

//   .show{
//     display: flex;
//   }

//   .disable{
//     display: none;
//   }
//   .wife{
//     display: flex;
//     flex-direction: row;
//     margin-top:-40px;
//     margin-right: -30px;
//     color: #808080c5;
//     font-weight: 500;
//     @media (max-width:700px) {
//       position: absolute;
//       top: 25px;
//       margin-top:-60px;
//       margin-right: 5px;
//     }
//   }

//   .error-rell{
//     width: fit-content;
//     height: fit-content;
//     margin-right: 50px;
//     color: red;
//   }
//   .marital{
//     display: flex;
//     flex-direction: row;
//     width: 100% !important;
//     margin-bottom: 15px;
//     border-bottom: ${(props) => props.$married ? '1px solid #d9dad7' : null } ;

//     input{
//         width: auto !important;
//         margin-bottom: 5px;
//     }
//     @media (max-width: 400px) {
//         width: 33%;
//         flex-direction: column;
//         lex-wrap: wrap;
//         input{
//             margin-top: -15px;
//         }
//         } 
//   }

//   .about-form {
//     margin-top: 25px;
//     .inputs {
//       display: flex;
//       gap: 25px;
//       flex-direction: column;
//       align-items: center;
//       .input {
//         position: relative;
//         display: flex;
//         flex-wrap: wrap;
//         flex-direction: column;
//         flex-grow: 1;
//         width: 100%;
//         @media (min-width: 700px) {
//         width: 33%;
//           flex-direction: row;
//           flex-wrap: wrap;
//         } 
//       }
//       @media (min-width: 700px) {
//         flex-direction: row;
//         flex-wrap: wrap;
//       }
//       .error {
//         color: red;
//       }
//       label {
//         color: gray;
//         font-weight: 500;
//         margin-bottom: 8px;
//       }
//       input {
//         width: 100%;
//         border: 1px solid #aeaeae;
//         border-radius: 6px;
//         outline: 0;
//         padding: 10px;
//         background-color: #f9fafc;

//         &:focus {
//           border: 2px solid rgb(23, 193, 232);
//         }
//         &:invalid {
//           border: 2px solid red;
//         }
//       }
//     }
//     .buttons{
//         display: flex;
//         justify-content: space-between;
//     }
//     button {
//       background: #173670;
//       color: #fff;
//       font-size: 20px;
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
//   }
// `

// const RelationForm = () => {

//     const navigate = useNavigate();
//     const [married,setMarried] = useState(false);

//     return (
//         <Rel $married={married}>
//             <h3>وضعیت تاهل</h3>
//             <p>قسمت های * دار اجباری هستند.</p>

//             <Formik
//             initialValues={{
//             firstName: "",
//             lastName: "",
//             code: "",
//             phoneNumber: "",
//             mobileNumber: "",
//             fatherName: "",
//             address: "",
//             relation: "",
//             }}

//         validationSchema={Yup.object({
//           firstName: Yup.string()
//             .max(15, " نام شما باید کمتر از 15 کاراکتر باشد")
//             .required(" وارد کردن نام ضروری است")
//             .trim(),
//           lastName: Yup.string().trim()
//             .max(20, "نام شما باید کمتر از 20 کاراکتر باشد")
//             .required("وارد کردن نام خانوادگی ضروری است"),
//           code: Yup.string()
//             .min(10, "کد ملی شما باید 10 رقم باشد")
//             .required("وارد کردن  کد پستی ضروری است"),
//           phoneNumber: Yup.string()
//             .required("  وارد کردن تلفن ثابت ضروری است")
//             .min(8, " شماره تماس شما باید 8 رقم باشد"),
//           mobileNumber: Yup.string()
//             .required("  وارد کردن تلفن همراه ضروری است")
//             .min(11, " شماره تماس شما باید 11 رقم باشد"),  
//           fatherName: Yup.string()
//             .max(15, " نام شما باید کمتر از 15 کاراکتر باشد")
//             .required(" وارد کردن نام پدر ضروری است")
//             .trim(),
//           relation:Yup.string()
//                 .required("یک گزینه را انتخاب کنید"),
//           address:Yup.string()
//                 .required(" آدرس خود را وارد کنید"),
//         })}
        
//         onSubmit={(values,  { setSubmitting }) => {
//           setTimeout(() => {
//             setSubmitting(false);
//           }, 4000);
          
//         }}
        
//       >
//             {(formik) => (
//                 <form className="about-form" onSubmit={formik.handleSubmit}>
//                     <div className="inputs">
//                         <div className='marital'>
//                             <label style={{whiteSpace:'nowrap'}}>وضعیت تاهل* :</label>
//                             <Field type="radio" name="relation" value="option1" onClick={() => setMarried(false)} style={{marginRight:'35px',marginLeft:'10px',cursor:'pointer'}}/>
//                             مجرد
//                             <Field type="radio" name="relation" value="option2" onClick={() => setMarried(!married)} style={{marginRight:'15px',marginLeft:'10px',cursor:'pointer'}}/>
//                             متاهل
//                             <Field type="radio" name="relation" value="option3" onClick={() => setMarried(false)} style={{marginRight:'15px',marginLeft:'10px',cursor:'pointer'}}/>
//                             متارکه
//                           {/* <div className="error-rell">
//                             {
//                               formik.errors.relation && formik.touched.relation ? (
//                                 <span >{formik.errors.relation}</span>
//                               ) : null}

//                           </div> */}

//                             {/* <label htmlFor="single" style={{marginRight:'15px',marginLeft:'10px'}}>مجرد</label>
//                             <input
//                                 onClick={() => setMarried(false)}
//                                 style={{cursor:'pointer'}}
//                                 id="single"
//                                 name="relation"
//                                 type="radio"
//                                 {...formik.getFieldProps("relation")}
//                             /> */}

//                             {/* <label htmlFor="married" style={{marginRight:'15px',marginLeft:'10px'}}>متاهل</label>
//                             <input
//                                 onClick={() => setMarried(!married)}
//                                 style={{cursor:'pointer'}}
//                                 id="married"
//                                 name="relation"
//                                 type="radio"
//                                 {...formik.getFieldProps("relation")}
//                             /> */}

//                             {/* <label htmlFor="seprated" style={{marginRight:'15px',marginLeft:'10px'}}>متارکه</label>
//                             <input
//                                 onClick={() => setMarried(false)}
//                                 style={{cursor:'pointer'}}
//                                 id="seprated"
//                                 name="relation"
//                                 type="radio"
//                                 {...formik.getFieldProps("relation")}
//                             /> */}
//                         <div className="error-rell">
//                             {
//                               formik.errors.relation && formik.touched.relation ? (
//                                 <span >{formik.errors.relation}</span>
//                               ) : null}

//                           </div>
//                         </div>
                        
//                             {/* {married ? <h4 style={{display:'flex',flexDirection:'column',marginTop:'-110px'}}>مشخصات همسر:</h4> : null} */}
//                             {
//                                 married ? (<>
//                                     <div className="input">
//                                     <label htmlFor="firstName" >نام<span>*</span> :</label>
//                                     <div className='wife'>مشخصات همسر:</div>

//                                     <input
//                                         id="firstName"
//                                         type="text"
//                                         {...formik.getFieldProps("firstName")}
//                                     />
//                                     {formik.touched.firstName && formik.errors.firstName ? (
//                                         <div className="error">{formik.errors.firstName}</div>
//                                     ) : null}
//                                 </div>
        
//                                 <div className="input">
//                                     <label htmlFor="lastName">نام خانوادگی <span>*</span> :</label>
//                                     <input
//                                     id="lastName"
//                                     type="text"
//                                     {...formik.getFieldProps("lastName")}
//                                     />
//                                     {formik.touched.lastName && formik.errors.lastName ? (
//                                     <div className="error">{formik.errors.lastName}</div>
//                                     ) : null}
//                                 </div>
        
//                                 <div className="input">
//                                     <label htmlFor="fatherName">نام پدر <span>*</span> :</label>
//                                     <input
//                                     id="fatherName"
//                                     type="text"
//                                     {...formik.getFieldProps("fatherName")}
//                                     />
//                                     {formik.touched.fatherName && formik.errors.fatherName ? (
//                                     <div className="error">{formik.errors.fatherName}</div>
//                                     ) : null}
//                                 </div>
        
//                                 <div className="input">
//                                     <label htmlFor="code">کد ملی <span>*</span> :</label>
//                                     <input
//                                     id="code"
//                                     type="number"
//                                     {...formik.getFieldProps("code")}
//                                     />
//                                     {formik.touched.code && formik.errors.code ? (
//                                     <div className="error">{formik.errors.code}</div>
//                                     ) : null}
//                                 </div>
        
//                                 <div className="input">
//                                     <label htmlFor="mobileNumber">تلفن همراه <span>*</span> :</label>
//                                     <input
//                                     id="mobileNumber"
//                                     type="number"
//                                     {...formik.getFieldProps("mobileNumber")}
//                                     />
//                                     {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
//                                     <div className="error">{formik.errors.mobileNumber}</div>
//                                     ) : null}
//                                 </div>
        
//                                 <div className="input">
//                                     <label htmlFor="phoneNumber">تلفن ثابت <span>*</span> :</label>
//                                     <input
//                                     id="phoneNumber"
//                                     type="number"
//                                     {...formik.getFieldProps("phoneNumber")}
//                                     />
//                                     {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
//                                     <div className="error">{formik.errors.phoneNumber}</div>
//                                     ) : null}
//                                 </div>
        
//                                 <div className="input">
//                                     <label htmlFor="address">آدرس<span>*</span> :</label>
//                                     <input
//                                     id="address"
//                                     type="text"
//                                     {...formik.getFieldProps("address")}
//                                     />
//                                     {formik.touched.address && formik.errors.address ? (
//                                     <div className="error">{formik.errors.address}</div>
//                                     ) : null}
//                                 </div> </>
//                                 ) : null
//                             }
                         
//                         </div>    
//                         <div className="buttons">
//                             <button type="submit" >ادامه...</button>
//                             <button onClick={() => navigate(-1)} type="button">
//                                 صفحه قبل
//                             </button>
//                         </div>
//                 </form>
//             )}
//       </Formik>
//     </Rel>
//     );
// };

// export default RelationForm;



import React, { Children, useEffect, useState } from 'react';
//MUI
import { Box, Container, FormControl, FormControlLabel, 
  FormLabel, Grid, Radio, RadioGroup, TextField, Typography, Button } from '@mui/material';
//validate
import { validate3 } from '../utility/validation';
//rtl in mui
import createCache from '@emotion/cache';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
//toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const RelationForm = (props) => {
  const {handleNext,handleBack,step} = props;

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
  phoneNumber:"",
  fatherName:"",
  address:"",
})

const [ relation,setRelation ] = useState("")
const [errors,setErrors] = useState({});
const [touched,setTouched] = useState({});
const [married,setMarried] = useState(false);

const focusHandler = event => {
  setTouched({...touched, [event.target.name]: true})
}

const changeHandler = event => {
  setData({...data, [event.target.name]: event.target.value})

}

useEffect(() => {
setErrors(validate3(data,relation))
},[data,touched,relation]);

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

if(relation === "single" || relation === "separated"){
emptyError(errors)
handleNext()
}

if(!Object.keys(errors).length){
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
    code:true,
    mobileNumber:true,
    phoneNumber:true,
    fatherName:true,
    address:true,
    relation:true
  })
}
setErrors(validate3(data));
setErrors(validate3(relation));
}

  return (
    <Container component='main' maxWidth='md' sx={{backgroundColor:'#fff',borderRadius:'16px',
    mt: 2,padding:'24px',boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px'}}
     >
      <Box component="form" sx={{ mt: 3 }}>
        <Grid container  >
        <Grid item xs={12} >
          <FormControl component="fieldset" >
            <FormLabel id="demo-controlled-radio-buttons-group" 
            className='radioGrouop'
            required
            >وضعیت تاهل</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={relation}
              onChange={(e) => setRelation(e.target.value)}
              sx={{fontFamily:'IRANYekan',fontWeight:'500'}}
              >
              <FormControlLabel name="single" value="single" onClick={() => setMarried(false)} control={<Radio />} label={<Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>مجرد</Typography>} />
              <FormControlLabel value='married' onClick={() => setMarried(true)} control={<Radio />} label={<Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>متاهل</Typography>} />
              <FormControlLabel name="separated" value='separated' onClick={() => setMarried(false)} control={<Radio />} label={<Typography sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>متارکه</Typography>} />
            </RadioGroup>
          {errors.relation && touched.relation && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.relation}</Grid>}
          </FormControl>
          </Grid>
            {
              married ? <>
              <Grid container spacing={4} mt={5}>
                <CacheProvider value={cacheRtl}>
                  <ThemeProvider theme={theme}>
                    <Grid item xs={12}>
                      <Typography component='p' variant='h6' sx={{fontFamily:'IRANYekan',fontWeight:'500'}}>مشخصات همسر:</Typography>
                    </Grid>
                <Grid item xs={12} sm={6} >
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
                  value={data.lastName}
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
                  name="fatherName"
                  required
                  fullWidth
                  id="fatherName"
                  variant='outlined'
                  label="نام پدر"
                  sx={style}
                  onFocus={focusHandler}
                  value={data.fatherName}
                  onChange={changeHandler}
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
                  // error={error ? 'error' : ""}
                  autoComplete="given-name"
                  name="code"
                  required
                  fullWidth
                  id="code"
                  variant='outlined'
                  label="کد ملی"
                  sx={style}
                  onFocus={focusHandler}
                  value={data.code}
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
                  placeholder='*********09'
                  required
                  fullWidth
                  id="mobileNumber"
                  variant='outlined'
                  label="تلفن همراه"
                  sx={style}
                  onFocus={focusHandler}
                  value={data.mobileNumber}
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
                  required
                  fullWidth
                  id="phoneNumber"
                  variant='outlined'
                  label="تلفن ثابت"
                  sx={style}
                  onFocus={focusHandler}
                  value={data.phoneNumber}
                  onChange={changeHandler}
                  InputProps={{
                    sx: {
                            borderRadius: '8px',
                            fontFamily:"inherit"
                          }}}
                    />
                    {errors.phoneNumber && touched.phoneNumber && <Grid item color='red' sx={{fontSize:"0.8rem",width:"auto",height:"auto"}}>{errors.phoneNumber}</Grid>}
                </Grid>
                <Grid item xs={12} >
                <TextField
                  // error={error ? 'error' : ""}
                  autoComplete="given-name"
                  name="address"
                  placeholder='آدرس کامل...'
                  required
                  fullWidth
                  id="address"
                  variant='outlined'
                  label="آدرس"
                  sx={style}
                  onFocus={focusHandler}
                  value={data.address}
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
              </> : null
            }
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
      <ToastContainer/>
    </Container>
  );
};

export default RelationForm;