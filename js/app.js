  let toggler = document.querySelector('.toggler');
  let nav = document.querySelector("nav");
  console.log(toggler);
  let toggleState = 0;
  function showNavMenu() {
    this.children[0].classList.toggle('bar1');
    this.children[1].classList.toggle('bar2');
    this.children[2].classList.toggle('bar3');

    if (toggleState == 0){
        nav.style.display = "block";
        toggler.style.float = "none";
        document.querySelector('.toggler div').style.margintop = "4px";
        document.querySelector(".name").style.display ="none";
        document.querySelector(".side-bar").style.margintop = "2px";
        toggleState += 1;
    }
    else{
        nav.style.display = "none";
        document.querySelector(".name").style.display ="block";
        toggleState -= 1;
    }
}
toggler.addEventListener('click', showNavMenu);