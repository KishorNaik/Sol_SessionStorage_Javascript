function onDisplay(){

    let sessionValue=sessionStorage.getItem("userModel");
        console.log(sessionValue);

    let userModelObj=JSON.parse(sessionValue);
        console.log(userModelObj);

    document.getElementById("firstName").innerHTML=userModelObj.firstName;
    document.getElementById("lastName").innerHTML=userModelObj.lastName;

    sessionStorage.clear();

}

onDisplay();