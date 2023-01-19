

$(document).ready(function() {
    new WOW().init();
    	$('.corona').funnyText({
    		speed: 1000,
    		borderColor: 'black',
    		activeColor: 'white',
    		color: 'black',
    		fontSize: '7em',
    		direction: 'both'
    	});


        $('.coronav').funnyText({
    		speed: 1000,
    		borderColor: 'black',
    		activeColor: 'white',
    		color: 'black',
    		fontSize: '7em',
    		direction: 'both'
    	});



          const typing = new AutoTyping('#autowrite', [
    'The coronavirus (COVID-19) was first reported',
    'by the World Health organization(WHO)on 11 march 2020',
    'in Wuhan,hubei, china in december 2019'
], {
    typeSpeed: 50,
    deleteSpeed: 50,
    waitBeforeDelete: 2000,
    waitBetweenWords: 500,
});

typing.start();



$('.head2').slideDown(1000,function(){
    $('.head3').slideDown(1000,function()
    {
        $('.head4').slideDown(1000,function(){
            $('.par').eq(0).slideDown(1000,function(){
                $('.par').eq(1).slideDown(1000)
            })
        })
    })
});





$(window).scroll(function(){
    let s=$(window).scrollTop();
    console.log(s);
    if(s>200){
        $('.navbar').css('background','white')

        $('.arrow').fadeIn(1000);
    }
    else{
        $('.navbar').css('background','#e3ebf1')

        $('.arrow').fadeOut(1000);
    }

});

$('.arrow').click(function(){
 $('html,body').animate({scrollTop:0},2000)


});


    });




var scroll = new SmoothScroll('a[href*="#"]',{
    speed:3000
});

  

// $(document).ready(function(){

//     // new WOW().init();
//     $('.owl-carousel').owlCarousel({
//       loop:true,
//       center:true,
//       margin:10,
//       responsiveClass:true,
//       responsive:{
//           0:{
//               items:1,
//               nav:true
//           },
//           600:{
//               items:3,
//               nav:false
//           },
//           1000:{
//               items:5,
//               nav:true,
//               loop:false
//           }
//       }
//   });
//   });

// jQuery(".fit").fitText();

// var scroll = new SmoothScroll('a[href*="#"]',{
//     speed:3000
// });

// $("body").niceScroll({
//     cursorcolor: "red",
//     cursorwidth: "15px",
// });

// $('.your-class').slick({
   



//     dots: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]


//   });



//   const typing = new AutoTyping('#example', [
//     'array of',
//     'text',
//     'lorem ipusm'
// ], {
//     typeSpeed: 50,
//     deleteSpeed: 50,
//     waitBeforeDelete: 2000,
//     waitBetweenWords: 500,
// });

// typing.start();




// $(document).ready(function() {
// 	$('.mySelector').funnyText({
// 		speed: 1000,
// 		borderColor: 'black',
// 		activeColor: 'white',
// 		color: 'black',
// 		fontSize: '7em',
// 		direction: 'both'
// 	});
// });