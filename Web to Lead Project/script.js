function beforesubmit(){
    let outputdate = document.querySelector(".outputdate")
    let inputdate = document.querySelector(".inputdate")
    console.log("inputdate.value", inputdate.value) //string --> date form en_In
    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN")
    outputdate.value = formattedDate
}