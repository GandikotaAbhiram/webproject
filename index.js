function ValidateEmail()
{
    let username = document.getElementById('uname');
    let passwd = document.getElementById('pwd');
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var regex1 = /^\d{10}$/;
    if(!regex.test(username.value) || !regex1.test(username.value))
    {
        alert("Invalid username format");
        return false;
    }
    if(username.value.length < 10)
    {
        alert("Username should be atleast 10 characters");
        return false;
    }
    if(passwd.value.length < 8)
    {
        alert("Password should be atleast 8 characters");
        return false;
    }
    alert("Login Successfull");
    username.value = "";
    passwd.value = "";
}