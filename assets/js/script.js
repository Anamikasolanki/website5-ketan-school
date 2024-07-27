function form(){
    var form_name = document.getElementById('name').value;
    if(form_name==""){
        document.getElementById('err_name').innerHTML="*Please enter your name";
        return false;
    }
    if(!form_name.match(/^[a-zA-Z]/)){
        document.getElementById('err_name').innerHTML="*Please enter your name";
        return false;
    }

    var form_email=document.getElementById('email').value;
    if(form_email==""){
        document.getElementById('err_email').innerHTML="*Please enter your email";
        return false;
    }
    if(form_email.indexOf('@')<=0){
        document.getElementById('err_email').innerHTML="*Please enter valid email";
        return false;
    }
    if((form_email.charAt(form_email.length-4)!=".") && (form_email.charAt(form_email.length-3)!=".")){
        document.getElementById('err_email').innerHTML="*Please enter valid email";
        return false;
    }

    var form_study=document.getElementById('study').value;
    if(form_study==""){
        document.getElementById('err_study').innerHTML="*Please enter your class";
        return false;
    }

    var form_req=document.getElementById('req').value;
    if(form_req==""){
        document.getElementById('err_req').innerHTML="*Please enter your requirement";
        return false;
    }
    
}