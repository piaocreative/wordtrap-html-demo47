$( document ).ready( function() {

  if ( $('.products' ).length ) {
    $('.products').slick({
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<img src="./images/icons/arrow-left.png" class="slick-prev slick-arrow">',
      nextArrow: '<img src="./images/icons/arrow-right.png" class="slick-next slick-arrow">',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
          }
        }
      ]
    }); 
  }

  if ( $( '.posts' ).length ) {
    $('.posts').slick({
      arrows: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<img src="./images/icons/arrow-left.png" class="slick-prev slick-arrow">',
      nextArrow: '<img src="./images/icons/arrow-right.png" class="slick-next slick-arrow">',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
            arrows: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:false,
          }
        }
      ]
    });   
  }

  if ( $('.portfolios' ).length ) {
    $('.portfolios').slick({
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<img src="./images/icons/arrow-left.png" class="slick-prev slick-arrow">',
      nextArrow: '<img src="./images/icons/arrow-right.png" class="slick-next slick-arrow">',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
          }
        }
      ]
    }); 
  }

  if ( $('.testimonials' ).length ) {
    $('.testimonials').slick({
      arrows: true,
      speed: 300,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<img src="./images/icons/arrow-left.png" class="slick-prev testimonial-left slick-arrow">',
      nextArrow: '<img src="./images/icons/arrow-right.png" class="slick-next testimonial-right slick-arrow">',
      responsive: [
        {
          breakpoint: 1250,
          settings: {
            arrows: false,
            centerMode:false,
          }
        }
      ]
    });  
  }

  if ( $('.teams' ).length ) {
    $('.teams').slick({
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<img src="./images/icons/arrow-left.png" class="slick-prev slick-arrow">',
      nextArrow: '<img src="./images/icons/arrow-right.png" class="slick-next slick-arrow">',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
          }
        }
      ]
    });   
  }

});