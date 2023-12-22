var crsr = document.querySelector(".circle-pointer")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.pageX+"px";
    crsr.style.top = dets.pageY+"px";
})

function firstAnim(){
    var t1 = gsap.timeline();
    t1.from(".nav",{
        y:-10,
        opacity:0,
        duaration:1.5,
        ease: Expo.easeInOut,
    })
    .to(".boundingelem",{
        y:0,
        duaration:1.5,
        stagger:0.2,
        ease: Expo.easeInOut,
    },1)
    .from(".about, .hero-down",{
        y:-10,
        opacity:0,
        duaration:1.5,
        stagger:0.2,
        ease: Expo.easeInOut,
    },1)
}
firstAnim()

document.querySelectorAll(".elem").forEach(function (elem){
    var rotate =0;
    var diffrot = 0;
    elem.addEventListener("mousemove",function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX-rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            top:diff,
            left:dets.clientX,
            rotate: gsap.utils.clamp(-20,20,diffrot)
        })
    })

    elem.addEventListener("mouseleave", function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity:0,
        })
    })
})