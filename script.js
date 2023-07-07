
let tl = gsap.timeline()
tl.from('#nav h1,ul,button',{
    y:-100,
    duration:1,
    opacity:0
})
tl.from('#center #circle',{
    // y:100,
    // rotate:-10,
    // duration:1,
    opacity:0,
})
tl.from('#card-1 h1',{
   y:100,
   duration:.1,
   opacity:0,
   stagger:0.15
})
tl.from('#card-1 h1',{
    x:-5,
    duration:.1,
    // opacity:0,
    stagger:0.15
 })
.from('#card-2 h2',{
    y:100,
    duration:.1,
    opacity:0,
    stagger:0.15
})

.from('#card-2 h2',{
    x:5,
    duration:.1,
    stagger:0.15
})
.from('#center p',{
    x:-100,
    duration:1,
    opacity:0
})
gsap.from('#bottom',{
    x:100,
    scale:0,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:'#bottom',
        scroller:'body',
        start:'top 80%',
        end:'top 30%',
        // scrub:2
    }
})
tl.from('#b-letf ,#b-right',{
    y:100,
    // duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:'#b-letf ,#b-right',
        scroller:'body',
        start:'top 80%',
        end:'top 30%',
        marker:true,
        scrub:2
    },
})
// page 2
tl.from('#in-left,#in-right',{
    y:100,
    dusration:1,
    opacity:0,
    scrollTrigger:{
        trigger:'#in-left,#in-right',
        start:'top 50%',
        end:'top 30%',
        scrub:2
    }
})
// page 3
tl.from('#inner-3',{
    x:20,
    scale:1.1,
    // duration:1,
    // opacity:0,
    scrollTrigger:{
        trigger:'#inner-3',
        scroller:'body',
        start:'top 50%',
        end:'bottom 20%',
        scrub:6
    }
})
tl.from('#inner-3 img',{
    // x:10,
    duration:1,
    // scale:1,
    rotate:-28git0,
    // opacity:0,
    scrollTrigger:{
        trigger:'#inner-3',
        scroller:'body',
        start:'top 20%',
        end:'top 30%',
        scrub:4
    }
})
gsap.from('#center #card',{
    y:100,
    rotate:-10,
    duration:1,
    opacity:0,
})


// js
