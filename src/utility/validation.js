export const validate1 = (data,gender) => {

    const errors = {};


    if(data.email){
        if(!/\S+@\S+\.\S+/.test(data.email)){
            errors.email = "ایمیل نامعتبر است"
        }else{
            delete errors.email
        }
    }

    if(!gender){
        errors.gender = "لطفا یک گزینه را انتخاب کنید"
    }else {
        delete errors.gender
    }

    // if(!data.birthday){
    //     errors.birthday = "وارد کردن  تاریخ تولد است"
    // }else {
    //    delete errors.birthday
    // }
        
    if(!data.name?.trim()){
        errors.name = "وارد کردن نام ضروری است"
    }else {
       delete errors.name
    }

    if(!data.lastName?.trim()){
        errors.lastName = "وارد کردن نام خانوادگی ضروری است"
    }else {
       delete errors.lastName
    }

    if(!data.fatherName?.trim()){
        errors.fatherName = "وارد کردن نام پدر ضروری است"
    }else {
       delete errors.fatherName
    }

    if(!data.code?.trim()){
        errors.code = "وارد کردن کد ملی ضروری است"
    }else if(!/^\d{10}$/.test(data.code)){
        errors.code = " کد ملی نامعتبر است"
    }
    else {
       delete errors.code
    }

    if(!data.mobileNumber?.trim()){
        errors.mobileNumber = "وارد کردن تلفن همراه ضروری است"
    }else if(!/^(\+98?)?{?(0?9[0-9]{9,9}}?)$/.test(data.mobileNumber)){
        errors.mobileNumber = "   تلفن همراه نامعتبر است"
    }
    else {
       delete errors.mobileNumber
    } 


    return errors;
}

export const validate2 = (data) => {

    const errors = {}

 

    if(!data.address?.trim()){
        errors.address = "وارد کردن آدرس ضروری است"
    }else if(data.address.length <= 15){
        errors.address = " آدرس نامعتبر است"
    }
    else {
       delete errors.address
    }

    if(!data.code?.trim()){
        errors.code = "وارد کردن کد پستی ضروری است"
    }else if(!/^\d{10}$/.test(data.code)){
        errors.code = " کد پستی نامعتبر است"
    }
    else {
       delete errors.code
    }


    if(!data.selectedProvince){
        errors.selectedProvince = "لطفا یک گزینه را انتخاب کنید"
    }else {
        delete errors.selectedProvince
    }

    if(!data.selectedCity){
        errors.selectedCity = "لطفا یک گزینه را انتخاب کنید"
    }else {
        delete errors.selectedCity
    }



return errors;
}

export const validate3 = (data,relation) => {

    const errors = {}


    if(!data.name?.trim()){
        errors.name = "وارد کردن نام ضروری است"
    }else {
        delete errors.name
    }
    
    if(!data.lastName?.trim()){
        errors.lastName = "وارد کردن نام خانوادگی ضروری است"
    }else {
        delete errors.lastName
    }    

    if(!data.address?.trim()){
        errors.address = "وارد کردن آدرس ضروری است"
    }else if(data.address.length <= 15){
        errors.address = " آدرس نامعتبر است"
    }
    else {
       delete errors.address
    }

    if(!data.code?.trim()){
        errors.code = "وارد کردن کد ملی ضروری است"
    }else if(!/^\d{10}$/.test(data.code)){
        errors.code = " کد ملی نامعتبر است"
    }
    else {
       delete errors.code
    }

    if(!data.mobileNumber?.trim()){
        errors.mobileNumber = "وارد کردن تلفن همراه ضروری است"
    }else if(!/^(\+98?)?{?(0?9[0-9]{9,9}}?)$/.test(data.mobileNumber)){
        errors.mobileNumber = "   تلفن همراه نامعتبر است"
    }
    else {
       delete errors.mobileNumber
    }

    if(!data.phoneNumber?.trim()){
        errors.phoneNumber = "وارد کردن شماره ثابت ضروری است"
    }else if(!/^\d{4}\d{4}$/.test(data.phoneNumber)){
        errors.phoneNumber = " شماره ثابت نامعتبر است"
    }
    else {
       delete errors.phoneNumber
    }
    
    if(!data.fatherName?.trim()){
        errors.fatherName = "وارد کردن نام پدر ضروری است"
    }else {
       delete errors.fatherName
    }

    if(!relation){
        errors.relation = "لطفا یک گزینه را انتخاب کنید"
    }else {
        delete errors.relation
    }




return errors;
}

export const validate4 = (data,children) => {

    const errors = {};

    if(!data.name?.trim()){
        errors.name = "وارد کردن نام ضروری است"
    }else {
        delete errors.name
    }
    
    if(!data.lastName?.trim()){
        errors.lastName = "وارد کردن نام خانوادگی ضروری است"
    }else {
        delete errors.lastName
    }    

    // if(data.address?.length <= 15){
    //     errors.address = " آدرس نامعتبر است"
    // }
    // else {
    //    delete errors.address
    // }

    // if(!/^\d{10}$/.test(data.code)){
    //     errors.code = " کد ملی نامعتبر است"
    // }
    // else {
    //    delete errors.code
    // }

    if(!data.mobileNumber?.trim()){
        errors.mobileNumber = "وارد کردن تلفن همراه ضروری است"
    }else if(!/^(\+98?)?{?(0?9[0-9]{9,9}}?)$/.test(data.mobileNumber)){
        errors.mobileNumber = "   تلفن همراه نامعتبر است"
    }
    else {
       delete errors.mobileNumber
    }

    // if(!/^\d{3}-\d{4}\d{4}$/.test(data.phoneNumber)){
    //     errors.phoneNumber = " شماره ثابت نامعتبر است"
    // }
    // else {
    //    delete errors.phoneNumber
    // }

    if(!children){
        errors.children = "لطفا یک گزینه را انتخاب کنید"
    }else {
       delete errors.children
    }
    

return errors;
}


export const validate5 = (data,under18children) => {

    const errors = {}


    if(!data.name1?.trim()){
        errors.name1 = "وارد کردن نام ضروری است"
    }else {
        delete errors.name1
    }
    
    if(!data.lastName1?.trim()){
        errors.lastName1 = "وارد کردن نام خانوادگی ضروری است"
    }else {
        delete errors.lastName1
    }    

    // if(data.address1?.length <= 15){
    //     errors.address1 = " آدرس نامعتبر است"
    // }
    // else {
    //    delete errors.address1
    // }

    // if(!/^\d{10}$/.test(data.code1)){
    //     errors.code1 = " کد ملی نامعتبر است"
    // }
    // else {
    //    delete errors.code1
    // }

    if(!data.mobileNumber1?.trim()){
        errors.mobileNumber1 = "وارد کردن تلفن همراه ضروری است"
    }else if(!/^(\+98?)?{?(0?9[0-9]{9,9}}?)$/.test(data.mobileNumber1)){
        errors.mobileNumber1 = "   تلفن همراه نامعتبر است"
    }
    else {
       delete errors.mobileNumber1
    }

    // if(!/^\d{3}-\d{4}\d{4}$/.test(data.phoneNumber1)){
    //     errors.phoneNumber1 = " شماره ثابت نامعتبر است"
    // }
    // else {
    //    delete errors.phoneNumber1
    // }
    
    if(!data.relationship?.trim()){
        errors.relationship = "وارد کردن نسبت ضروری است"
    }else {
       delete errors.relationship
    }

    if(!under18children){
        errors.under18children = "لطفا یک گزینه را انتخاب کنید"
    }else {
       delete errors.under18children
    }

return errors;
}

export const validate6 = (propertyStatus) => {
    const errors = {}

    if(!propertyStatus){
        errors.propertyStatus = "لطفا یک گزینه را انتخاب کنید"
    }else {
        delete errors.propertyStatus
    }


    return errors
}

export const validate7 = (data) => {

    const errors = {}

    if(!data.selectedProvince){
        errors.selectedProvince = "وارد کردن استان ضروری است"
    }else {
        delete errors.selectedProvince
    }

    if(!data.selectedCity){
        errors.selectedCity = "وارد کردن شهر ضروری است"
        delete errors.selectedCity
    }

    if(!data.price){
        errors.price = "وارد کردن قیمت ضروری است"
    }else {
        delete errors.price
    }

    if(!data.address){
        errors.address = "وارد کردن آدرس ضروری است"
    }else {
        delete errors.address
    }

    return errors
}