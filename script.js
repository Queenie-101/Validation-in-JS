function validateForm()
{
    var name=document.forms["registrationForm"]["name"].value;
    var email=document.forms["registrationForm"]["email"].value;
    var phone=document.forms["registrationForm"]["phone"].value;
    var message="";
    if(name =="")
    {
        message += "Name must be filled.\n";
    }
    if(email =="")
    {
        message += "Email must be filled.\n";
    }else if(!email.includes("@"))
        {
        message +="Please enter a valid email.\n";}
     if(phone =="")
        {
            message += "Phone number must be filled.\n";
     }else if(isNaN(phone))
        {
            message +="Phone number must be numbers ONLY.\n";
        }
     if(message)
        {
            alert(message);
            return false;
     }else{
            alert("Registration Complete!");
        } 
}