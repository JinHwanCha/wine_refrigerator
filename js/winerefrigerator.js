$(document).ready(function () {
    slider1();
    slider2();
    slider3();

    //  nav_bar 슬라이드 구현
    function slider1(){
        var swiper = new Swiper('.nav_bar .slider', {
            loop: false,
            slidesPerView: 'auto',        
            effect: 'slide',
            initialSlide: 4,        // initialSlide - 시작 슬라이드 바꾸기
            watchOverflow: true,    // watchOverflow - 슬라이드되기 충분하지 않는 슬라이드 수 일경우, 슬라이드 비활성화 (단, swiper 버전을 탐)
            navigation: {
                nextEl: '.nav_bar .btn_next',
                prevEl: '.nav_bar .btn_prev',
            },

        });
    };

    // 런칭 구매 혜택, 냉장고를 소개합니다 슬라이드 동시구현
    function slider2(){
        var swiper = new Swiper('.slider', {
            loop: false,
            slidesPerView: 'auto',        
            effect: 'slide',
            watchOverflow: true,    // watchOverflow - 슬라이드되기 충분하지 않는 슬라이드 수 일경우, 슬라이드 비활성화 (단, swiper 버전을 탐)
            navigation: {
                nextEl: '.btn_next',
                prevEl: '.btn_prev',
            },

        });
    };

    //나만의 와인냉장고 슬라이드 구현
    function slider3(){
        var swiper = new Swiper('.slider2', {
            loop: true,
            slidesPerView: 'auto',
            slidesPerGroup: 1,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            }, 
            effect: 'slide',
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: '.slider2 .btn_next',
                prevEl: '.slider2 .btn_prev',
            },    
            pagination: {
                el: ".slider2 .swiper-pagination",
                clickable: true,
            },
            
        });
        
        // 슬라이드 autoplay 멈춤
        var isPlay = 0;     // 초기 play시작 값
        $('.btn_pause').click(function(){
            if(isPlay==0){
                $('.btn_pause').addClass('on');
                swiper.autoplay.stop();
                isPlay = 1;
            }else{
                $('.btn_pause').removeClass('on');
                swiper.autoplay.start();
                isPlay = 0;
            }
        });
    };
    

    

    // 아코디언 박스 노출
    
    $( '.accordion_button' ).click( function() {
        $(this).toggleClass('on');
        $(this).siblings('.accordion_box').slideToggle();
    });

    $( '.sec_photo .accordion_button' ).click( function() {
        $('.sec_photo .accordion_box').slideToggle();
    });

        
});
