function checkAge() {
    const ageFeild = document.getElementById("age");
    const ageText = ageFeild.value;
    const errorTeg = document.getElementById("error")
    
    try{
        console.log(bBariya)

    }catch(err){
        console.log("ERROR", err)
        errorTeg.innerHTML = `<p>sumting is wrong!</p>`
    }finally{
        console.log("all done")
    }
    console.log(11111)
};