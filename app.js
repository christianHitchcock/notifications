const readnotification = document.querySelectorAll('.firstcontainer-content');
const btns = document.querySelector(".btn");



// function for when the button is clicked 
btns.addEventListener("click", function(){
    document.getElementById("num").innerHTML = 0;
    readnotification.forEach(notification => {
        notification.classList.remove("visible");
        notification.classList.add("hidden");  
      })         
});