'use strict';


 //form validation
 var forms=document.getElementById("form")
 //giving event 
 forms.addEventListener("submit",e=>{
     e.preventDefault()
     //reading value from user
     var nm=document.getElementById("name").value
     var ml=document.getElementById("mail").value
     var wb=document.getElementById("web").value
     var ar=document.getElementById("adr").value
     var pm=document.getElementById("prm").value
    //  var cps=document.getElementById("cpass").value

     //conditions
 if(nm=='' && ml=='' && ar=='' && pm=='' && wb=='')
 {
         alert("Please fill all the Details Correctly!")

 }
 else if(nm=='' && ml!='' && ar!='' && pm!='')
 {
   alert("Name should not empty!")
 }
else if(nm!='' && ml=='' && ar!='' && pm!=''){
 alert("Mail should not be empty!")
}
else if(nm!='' && ml!='' && ar=='' && pm!=''){
 alert("Please enter your Company Permanent Address!")
}
else if(nm!='' && ml!='' && ar=='' && pm==''){
 alert("Please enter your Company Permanent Address and promotion Line!")
}
else if(nm!='' && ml!='' && ar!='' && pm==''){
 alert("Please Enter Promotion Line or Business Deatils!")
}
// else if(nm!='' && ml!='' && ps!='' && cps==''){
//  alert("confirm-password should not be empty!")
// }
else if(nm!='' && ml=='' && ar=='' && pm==''){
 alert("Only Company name field is filled please fill remaining details!")
}
else if(nm=='' && ml!='' && ar=='' && pm==''){
 alert("Only Email field is filled please fill remaining details!")
}
else if(nm=='' && ml=='' && ar!='' && pm==''){
 alert("Only Address field is filled please fill remaining details!")
}
else if(nm=='' && ml=='' && ar=='' && pm!=''){
 alert("Only Promotion field is filled please fill remaining details!")
}
// else if(nm=='' && ml=='' && ps=='' && cps!=''){
//  alert("Only Cofirm password field is filled please fill remaining details!")
// }

// else{
//  if(ps!=cps)
//  {
//      alert("Password and confirm password can not matched!")
//  }
else{
    confirm("Thank you for Your Interest! We will contact you Soon through Email.")
    open('./home.html',"_self")
    
 
 }
// }
 
 
})
