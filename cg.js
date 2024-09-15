'use strict';


 //form validation
 var forms=document.getElementById("form")
 //giving event 
 forms.addEventListener("submit",e=>{
     e.preventDefault()
     //reading value from user
     var nm=document.getElementById("name").value
     var ml=document.getElementById("mail").value
     var cn=document.getElementById("con").value
     var ar=document.getElementById("se").value
     var pm=document.getElementById("prm").value
    //  var cps=document.getElementById("cpass").value

     //conditions
 if(nm=='' && ml==''  && pm=='' && cn=='')
 {
         alert("Please fill all the Details Correctly!")

 }
 else if(nm=='' && ml!='' && cn!='' && pm!='')
 {
   alert("Name should not empty!")
 }
else if(nm!='' && ml=='' && cn!='' && pm!=''){
 alert("Mail should not be empty!")
}
else if(nm!='' && ml!='' && cn=='' && pm!=''){
 alert("Please enter your Contact Number!")
}
else if(nm!='' && ml!='' && cn=='' && pm==''){
 alert("Please enter your Contact Number and Requirements!")
}
else if(nm!='' && ml!='' && cn!='' && pm==''){
 alert("Please Enter Requirements(If Any) Else enter NONE!")
}
// else if(nm!='' && ml!='' && ps!='' && cps==''){
//  alert("confirm-password should not be empty!")
// }
else if(nm!='' && ml=='' && cn=='' && pm==''){
 alert("Only Name field is filled please fill remaining details!")
}
else if(nm=='' && ml!='' && cn=='' && pm==''){
 alert("Only Email field is filled please fill remaining details!")
}
// else if(nm=='' && ml=='' && ar!='' && pm==''){
//  alert("Only Address field is filled please fill remaining details!")
// }
else if(nm=='' && ml=='' && cn=='' && pm!=''){
 alert("Only Requirement field is filled please fill remaining details!")
}
else if(nm=='' && ml=='' && cn!='' && pm==''){
 alert("Only Contact field is filled please fill remaining details!")
}

else {
  if(ar === 'lang')
 {
     alert("Please select language!")
 }
else{
    confirm("Thank you for Your Interest! We will contact you Soon through Email.")
    open('./home.html',"_self")
    
 
 }
}
 
 
})
