function showBar() {
    const sideBar = document.querySelector('.sidemenu');
    sideBar.style.display = 'block';
}

function hidesidebar() {
    const sideBar = document.querySelector('.sidemenu');
    sideBar.style.display = 'none';
}


function tablebook(){
    var name =  document.querySelector("#name").value;
    var email =  document.querySelector("#email").value;
    var phone =  document.querySelector("#phone").value;
    var date =  document.querySelector("#date").value;
    var time =  document.querySelector("#time").value;

    if(name == "") {
        alert("name is empty");
    }else if(email == ""){
        alert("email is empty");
    }else if(phone == ""){
        alert("phone is empty");
    }else if(date == ""){
        alert("date is empty");
    }else if(time == ""){
        alert("time is empty");
    }else{
        alert("Table Reserved Successfully");
    }
    
}