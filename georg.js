TweenMax.to(".overlay h1", 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
  })

  TweenMax.to(".overlay span", 2, {
    delay: .3,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
  })

  TweenMax.to(".overlay", 2, {
    delay: 1.5,
    top: "-105%",
    ease: Expo.ease
  })
  let btnItems = document.querySelectorAll(".item .btn-item");

  for (let i = 0; i < btnItems.length; i++) {
      
      btnItems[i].addEventListener("click", function(e){
          console.log(e.target)
  
          let btn = e.target;
  
          if (btn.className == "btn-item active") {
              removerClase();
          } else{
              removerClase();
              btn.classList.add("active")
          }
      })
      
  }
  
  function removerClase(){
      for (let i = 0; i < btnItems.length; i++) {
          btnItems[i].classList.remove("active")
          
      }
  }
  