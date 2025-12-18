let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click",()=>{
    let city = document.getElementById("cityInput").value.trim();

    if(city ===""){
        alert("please enter a city or country");
        return;
    }
    window.location.href =`destination.html?city=${city}`;

});