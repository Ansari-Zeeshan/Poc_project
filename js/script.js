const allProd = document.querySelectorAll('.section2 .img_div .card img');
const closeProd = document.querySelector('.section2 .img_div .card .div2');
const owlCar = document.querySelector('.section2 .img_div .owl-carousel');

allProd.forEach((prod)=>
{
    prod.addEventListener('click',(e)=>
    {
        let carousDiv = e.target.closest('.owl-carousel');
        let imgsrc = e.target.parentNode.querySelector('img').src;
        let inside = e.target.closest('.img_div').querySelector('.insideDetail');
        let insideImg = inside.querySelector('img');
        let insideCon = inside.querySelector('.maincon');
        if(!inside.classList.contains('active'))
        {
            carousDiv.style.display="none";
            inside.classList.add('active');
            insideCon.classList.add('active');
            insideImg.src = imgsrc;
        }
        else
        {
            carousDiv.style.display="block";
            inside.classList.remove('active');
            insideCon.classList.remove('active');
            insideImg.src = "";
        }
    })
})
closeProd.addEventListener('click',(e)=>
{
    let insideCon = e.target.closest('.insideDetail').querySelector('.maincon');
    let insideImg = e.target.closest('.insideDetail').querySelector('img');
    if(insideCon.classList.contains('active'))
    {
        owlCar.style.display="block";
        insideCon.classList.remove('active');
        insideImg.src = "";
    }
})

gsap.to('#banner',{
    scrollTrigger: 
    {
        scrub: 1
    },
    height: 70,
    width: 0 
})

gsap.to('.text-div',{
    scrollTrigger: 
    {
        scrub: 1
    },
    height: 0,
    width: 0 
})

gsap.to('.section2',{
    scrollTrigger: 
    {
        scrub: 1
    },
    y: -300, 
})

gsap.from('.logo h2',{duration: 1, delay: 0.5, y:-45, ease: 'bounce',});
gsap.from('.nav-item',{duration: 1, delay: 1, opacity: 0, stagger: 0.5, ease: 'back'});
gsap.from('.text-div',{ duration: 1, delay: 1, skewX: 65, opacity: 0, x: '-50vw', ease: 'circ'});
gsap.from('.section2 .text_div',{duration: 1, opacity: 0, y: 100, ease: 'power1.in'});

var $owl = $('.owl-carousel');

$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
    center: true,
    loop: true,
    autplay: true,
    items: 5,

    responsive:
    {
        0:
        {
            items:1,
            dots:false
        },
        485:
        {
            items:3,
            dots:false
        },
        728:
        {
            items:3,
            dots:false
        },
        960:
        {
            items:4,
            dots:false,
            autoplay: true,

        },
        1200:
        {
            items:5,
            margin: 0,
            dots:false,
            autoplay: true
        },
    }
});

$(document).on('click', '.owl-item>div', function() {
  // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
  var $speed = 300;  // in ms
  $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
});