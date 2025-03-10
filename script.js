

function animation(){
    gsap.from(".navbar",{
        opacity:0,
        x:-20,
        duration:0.8,
        delay:0.5,
        
    })
}

function scrollTrigger(){
    gsap.from("#img-container img",{
        opacity:0,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#img-container img",
            scroller:"body",
            start:"top 90%",
        }
    })
    
    gsap.from(".page-4-img-container img",{
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:".page-4-img-container img",
            scroller:"body",
            start:"top 65%",
        }
    })
    
    
    gsap.from(".page-5-img-container-left-container, .page-5-img-container-right-container",{
        opacity:0,
        duration:1.3,
        scrollTrigger:{
            trigger:".page-5-img-container-left-container, .page-5-img-container-right-container",
            scroller:"body",
            start:"top 62%",
        }
    })
    
    
    gsap.from(".footer-header-links",{
        opacity:0,
        y:30,
        stagger:0.1,
        duration:1.2,
        scrollTrigger:{
            trigger:".footer-header-links",
            scroller:"body",
            start:"top 85%",
        }
    })
}

function sideBar(){
    let openMenubar = document.querySelector(".ri-menu-5-line")
    let crossMenubar = document.querySelector(".ri-close-large-fill")
      
    let tl = gsap.timeline()
    tl.to(".navbar-center",{
          left:0,
          duration:0.5,
    })
    tl.from(".navbar-center ul li",{
        opacity:0,
        x:15,
        delay:-0.3,
        duration:0.1,
        stagger:0.1
    })
    
    tl.pause()
    
    openMenubar.addEventListener("click",function(){
      tl.play()
    })
    crossMenubar.addEventListener("click",function(){
      tl.reverse()
    })
}


animation();
scrollTrigger();
sideBar();