let userModel={

    firstName:"Kishor",
    lastName:"Naik"

};

function onClick(){

    let userModelJsonObj=JSON.stringify(userModel);
    console.log(userModelJsonObj);

    sessionStorage.setItem("userModel",userModelJsonObj);

    window.location.pathname='./page1.html';
}