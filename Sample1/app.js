// main dropdown nav
const navbtn = document.querySelector('.dropbtn');
const navContent = document.querySelector('.dropdown-content');
navbtn.addEventListener("click",navOperation1);

function navOperation1(e){
    if(navContent.style.display==='block'){
        navContent.style.display="none";
        // console.log('none');
    }else{
        navContent.style.display="block";
        // console.log('block');
    }
    e.preventDefault();
}  

// sidemenu nav
const sidemenuBtn = document.querySelector('.sidemenuBtn');
const sidemenuOverlay = document.querySelector('.overlaySidemenu');
const cross = document.querySelector('.cross');
sidemenuBtn.addEventListener("click", navOperation2);
cross.addEventListener("click", navOperation3)


function navOperation2(e){
    sidemenuOverlay.style.display = "block";
    sidemenuBtn.style.display = "none";

    e.preventDefault();
}
function navOperation3(e){
    sidemenuOverlay.style.display = "none";
    sidemenuBtn.style.display = "block";
    e.preventDefault();
}




