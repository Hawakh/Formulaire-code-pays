const Firstname=document.getElementById('Firstname');
const Lastname=document.getElementById('Lastname');
const email=document.getElementById('email');
var phonenumber=document.getElementById('phone');
var phoneRegEx=new RegExp(/^[0-9]g/);
const Password=document.getElementById('Password');
var PasswordRegEx=new RegExp(/"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/);


Firstname.addEventListener('change', function(){
    if(Firstname.value.length<5){
        alert("The name should be a least 5 characteres")
        Firstname.setAttribute('class','form-control is invalid')
        Firstname.focus();
    }
})
Lastname.addEventListener('change', function(){
    if(Lastname.value.length<5){
        alert("The lastname should be a least 5 characteres")
        Lastname.setAttribute('class','form-control is invalid')
        Lastnamename.focus();
    }
})
Lastname.addEventListener('change', function(){
    if(Lastname.value.length<5){
        alert("The lastname should be a least 5 characteres")
        Lastname.setAttribute('class','form-control is invalid')
        Lastnamename.focus();
    }
})
email.addEventListener('change', function(){
    if(!email.value.includes('@')){
        alert("This field should be a valid email")
        email.setAttribute('class','form-control is invalid')
        email.focus();
    }
    if(!email.value.includes('.')){
        alert("This field should be a valid email")
        email.setAttribute('class','form-control is invalid')
        email.focus();}})

phonenumber.addEventListener('change', function(){
            if(phonenumber.value.length<8){
                alert("The phonenumber should contain 8 digits")
                phonenumber.setAttribute('class','form-control is invalid')
               phonenumber.focus();}
    if(phoneRegEx.test(phonenumber.value)){
        alert("This field should contain only numbers")
        phonenumber.setAttribute('class','form-control is invalid')
        phonenumber.focus();}})

Password.addEventListener('change', function(){
            if(PasswordRegEx.test(Password.value)){
                alert("The password should contain number ,digitals, one special charactere and at least 8 characteres")
                Password.setAttribute('class','form-control is invalid')
               Password.focus();}
               if(Password.value.length<8){
                alert("The Password should contain 8 chracteres")
                Password.setAttribute('class','form-control is invalid')
               Password.focus();}
            })