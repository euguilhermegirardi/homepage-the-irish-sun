const dropdown=document.querySelector(".navbar__dropdown");dropdown.addEventListener("click",(function(){document.querySelector(".dropdown").classList.toggle("opened");document.querySelector(".navbar__dropdown").classList.toggle("active")}));const sliders=document.querySelectorAll(".most-read__slider");function slider(){tns({controls:!1,container:".slider",slideBy:"page",items:6,mouseDrag:!0,swipeAngle:!1,speed:400,preventScrollOnTouch:"force",gutter:30,autoWidth:!0})}sliders.forEach(e=>{tns({controls:!1,container:e,slideBy:"page",items:2,mouseDrag:!0,swipeAngle:!1,speed:300,preventScrollOnTouch:"force"})}),slider();