const icon=document.querySelectorAll(".navbar__li"),dropdown=document.querySelectorAll(".dropdown-popup"),closeDropdown=document.querySelectorAll(".search-dropdown__svg");icon.forEach(e=>{e.addEventListener("click",o=>{o.preventDefault(),dropdown.forEach(e=>{e.classList.remove("open"),console.log("closing...")}),document.getElementById(e.dataset.targetId).classList.add("open")})}),closeDropdown.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),dropdown.forEach(e=>{e.classList.remove("open")})})});const sliders=document.querySelectorAll(".most-read__slider");function slider(){tns({controls:!1,container:".slider",slideBy:"page",items:6,mouseDrag:!0,swipeAngle:!1,speed:400,preventScrollOnTouch:"force",gutter:30,autoWidth:!0})}sliders.forEach(e=>{tns({controls:!1,container:e,slideBy:"page",items:2,mouseDrag:!0,swipeAngle:!1,speed:300,preventScrollOnTouch:"force",responsive:{500:{controls:!0,controlsText:["<",">"]}}})}),slider();const search=document.querySelectorAll(".navbar-desktop__search-icons"),popup=document.querySelectorAll(".popup-box"),close=document.querySelectorAll(".popup-box__svg");search.forEach(e=>{e.addEventListener("click",o=>{o.preventDefault(),popup.forEach(e=>{e.classList.remove("open")}),document.getElementById(e.dataset.targetId).classList.add("open")})}),close.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),popup.forEach(e=>{e.classList.remove("open")})})});