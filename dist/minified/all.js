console.log("testing...");const dropdown=document.querySelector(".navbar__dropdown");dropdown.addEventListener("click",(function(){document.querySelector(".dropdown").classList.toggle("opened");document.querySelector(".navbar__dropdown").classList.toggle("active")}));