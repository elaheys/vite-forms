import React, { useState } from 'react';
//components
import AboutForm from '../pages/AboutFrom'
import AddressForm from '../pages/AddressForm'
import RelationForm from '../pages/RelationForm'
import ChildrenForm from '../pages/ChildrenForm'
import BalloonForm from '../components/balloon/BalloonForm'
//MUI
import { Typography,Link,Button,StepLabel,Step,
        Stepper,Paper,Toolbar,Container,Box,AppBar,CssBaseline, Grid } from '@mui/material';
import PropertyForm from '../pages/PropertyForm';



const steps = ['اطلاعات کاربر', 'آدرس محل سکونت', 'وضعیت تاهل',"فرزندان","دارایی ها(املاک)"];
const getStepContent = (step,handleNext,handleBack) => {

    switch (step) {
    case 0:
        return <AboutForm handleNext={handleNext}/>;
    case 1:
        return <AddressForm handleNext={handleNext} handleBack={handleBack} step={step}/> ;    
    case 2:
        return <RelationForm handleNext={handleNext} handleBack={handleBack} step={step}/>;
    case 3:
        return <ChildrenForm handleNext={handleNext} handleBack={handleBack} step={step}/>;
    case 4:
        return <PropertyForm handleNext={handleNext} handleBack={handleBack} step={step}/>;    
    default:
        throw new Error('Unknown step');
    }
}



const UsersSteps = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep(activeStep - 1);
      };

    return (
    <>
      {/* <CssBaseline /> */}
        {/* <AppBar
            position="absolute"
            color="default"
            elevation={0}
            sx={{
            position: 'relative',
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
            }}
        > */}
        {/* <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar> */}
        {/* </AppBar> */}

      <Container component="main" maxWidth="md" sx={{ mb: 4}}>
        {/* <Grid container> */}
        {/* <Paper  sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}> */}
          <Typography component="h1" variant="h6" align="center" mt={3}>
            فرم ثبت مشخصات
          </Typography>

          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}
              sx={{
                '& .MuiStepLabel-root .Mui-completed': {
                  color: 'green', // circle color (COMPLETED)
                },
                '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                  {
                    color: 'grey.500', // Just text label (COMPLETED)
                  },
                '& .MuiStepLabel-root .Mui-active': {
                  color: 'black', // circle color (ACTIVE)
                },
                '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                  {
                    color: 'black' ,// Just text label (ACTIVE)
                  },
                '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                  fill: '#fff', // circle's number (ACTIVE)
                },
              }}
              >
                <StepLabel > {label} </StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                
              </Typography>
            </>
          ) : (
            <>
              {getStepContent(activeStep,handleNext,handleBack)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
                {/* <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3}}
                    >
                    {activeStep === steps.length - 1 ? 'Place order' : 'ادامه...'}
                </Button> */}

                    {/* {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 , paddingRight: 5}}>
                        صفحه قبل
                </Button>
                )}  */}
              </Box>
            </>
          )}
        {/* </Paper> */}
        {/* <Copyright /> */}
        {/* </Grid> */}
      </Container>
    </>
    );
};

export default UsersSteps;