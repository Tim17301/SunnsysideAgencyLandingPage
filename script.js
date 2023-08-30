(function(){
    "use strict";

    $("#hamburger").on("click", function(){
        $("#hamburger").toggleClass("is-active");
        $(".mobileMenu-container").toggleClass("mobileNavClosed");
    });

    
    $(".openMobileNav ul li a").on("click", function(event){
        event.preventDefault();
        $(".mobileMenu-container").addClass("mobileNavClosed");
    });

    $(".navbar-container > a").on("click", function(){
        $(".mobileMenu-container").addClass("mobileNavClosed");
    });
    

    
    setTimeout(function(){
        $(".hero-text h1").css("transform", "translateY(3rem)");
        $(".hero-text h1").css("opacity", "1");
    }, 500);
    
    

    let windowWidth = $(window).width();
    const mobileHeaderImg = "../images/mobile/image-header.jpg";
    const desktopHeaderImg = "../images/desktop/image-header.jpg";

    if (windowWidth < 900){
        $("header").css("background-image", "url(../images/mobile/image-header.jpg)");
    } 

    $(document).ready(function(){
        $(window).resize(function(){
            if ($(window).width() < 900){
                $("header").css("background-image", "url(../images/mobile/image-header.jpg)");
            }
        });
    });

    $(document).ready(function(){
        $(window).resize(function(){
            if ($(window).width() > 900){
                $("header").css("background-image", "url(../images/desktop/image-header.jpg)");
            }
        });
    });


    const mobileDesignImage = "../images/mobile/image-graphic-design.jpg";
    const desktopDesignImage = "../images/desktop/image-graphic-design.jpg";

    if (windowWidth > 1000){
        $(".gridDesign").css("background-image", "url(../images/desktop/image-graphic-design.jpg)");
    } 

    $(document).ready(function(){
        $(window).resize(function(){
            if ($(window).width() < 1000){
                $(".gridDesign").css("background-image", "url(../images/mobile/image-graphic-design.jpg)");
            }
        });
    });

    $(document).ready(function(){
        $(window).resize(function(){
            if ($(window).width() > 1000){
                $(".gridDesign").css("background-image", "url(../images/desktop/image-graphic-design.jpg)");
            }
        });
    });



    const mobilePhotographyImage = "../images/mobile/image-photography.jpg";
    const desktopPhotographyImage = "../images/desktop/image-photography.jpg";

    if (windowWidth > 1000){
        $(".gridPhotography").css("background-image", "url(../images/desktop/image-photography.jpg)");
    } 

    $(document).ready(function(){
        $(window).resize(function(){
            if ($(window).width() < 1000){
                $(".gridPhotography").css("background-image", "url(../images/mobile/image-photography.jpg)");
            }
        });
    });

    $(document).ready(function(){
        $(window).resize(function(){
            if ($(window).width() > 1000){
                $(".gridPhotography").css("background-image", "url(../images/desktop/image-photography.jpg)");
            }
        });
    });




    //=================================Testimonials========================================START
    let counter = 0;


    // Scrolling Testimonials Mobile Version
    $(".nextBtn-mobile").on("click", function(event){
        event.preventDefault();
        
        moveTestimonialsMobile();
    });
    

    function moveTestimonialsMobile(){
        if (counter == 0){
            $(".testimonial-box-mobile .testimonial-container:first-child").css("top", "-450px");
            $(".testimonial-box-mobile .testimonial-container:nth-child(2)").css("top", "0px");
            $(".testimonial-box-mobile .testimonial-container:nth-child(3)").css("top", "450px");
            $(".testimonial-box-mobile .testimonial-container:nth-child(4)").css("top", "900px");
            $(".testimonial-box-mobile .testimonial-container:nth-child(5)").css("top", "1350px");
            counter++;
            console.log(counter);
        } else if (counter == 1){
            $(".testimonial-box-mobile .testimonial-container:first-child").css("top", "-900px");
            $(".testimonial-box-mobile .testimonial-container:nth-child(2)").css("top", "-450px");
            $(".testimonial-box-mobile .testimonial-container:nth-child(3)").css("top", "0px");
            $(".testimonial-box-mobile .testimonial-container:nth-child(4)").css("top", "450px");
            $(".testimonial-box-mobile .testimonial-container:nth-child(5)").css("top", "900px");

            cloneAndDeleteMobile();
            
            counter++;
            console.log(counter);
        } else if (counter == 2){
            $(".testimonial-box-mobile .testimonial-container:first-child").css("top", "-900px");
            $(".testimonial-box-mobile .testimonial-container:nth-child(2)").css("top", "-4500px");
            $(".testimonial-box-mobile .testimonial-container:nth-child(3)").css("top", "0px");
            $(".testimonial-box-mobile .testimonial-container:nth-child(4)").css("top", "450px");
            $(".testimonial-box-mobile .testimonial-container:nth-child(5)").css("top", "900px");
            console.log(counter);
            cloneAndDeleteMobile();
            counter = 1;
        }
    }

    function cloneAndDeleteMobile(){
        $(".testimonial-box-mobile .testimonial-container:first-child").clone().appendTo(".testimonial-box-mobile");
        $(".testimonial-box-mobile .testimonial-container:first-child").remove();
        $(".testimonial-box-mobile .testimonial-container:nth-child(5)").css("top", "1350px");
        
    }

   


    // Scrolling Testimonials Desktop Version
    $(".nextBtn-desktop").on("click", function(event){
        event.preventDefault();
        
        moveTestimonialsDesktopNext();
    });

    $(".previousBtn").on("click", function(event){
        event.preventDefault();
        
        moveTestimonialsDesktopPrevious();
    });

    function moveTestimonialsDesktopNext(){
            $(".testimonial-box-desktop .testimonial-container:first-child").css("left", "-640px");
            $(".testimonial-box-desktop .testimonial-container:nth-child(2)").css("left", "-320px");
            $(".testimonial-box-desktop .testimonial-container:nth-child(3)").css("left", "0px");
            $(".testimonial-box-desktop .testimonial-container:nth-child(4)").css("left", "320px");
            $(".testimonial-box-desktop .testimonial-container:nth-child(5)").css("left", "640px");
            cloneAndDeleteDesktopNext();  
    }

    function cloneAndDeleteDesktopNext(){
        $(".testimonial-box-desktop .testimonial-container:first-child").clone().appendTo(".testimonial-box-desktop");
        $(".testimonial-box-desktop .testimonial-container:first-child").remove();
        $(".testimonial-box-desktop .testimonial-container:nth-child(5)").css("left", "960px");
    }

    function moveTestimonialsDesktopPrevious(){
            $(".testimonial-box-desktop .testimonial-container:first-child").css("left", "0px");
            $(".testimonial-box-desktop .testimonial-container:nth-child(2)").css("left", "320px");
            $(".testimonial-box-desktop .testimonial-container:nth-child(3)").css("left", "640px");
            $(".testimonial-box-desktop .testimonial-container:nth-child(4)").css("left", "960px");
            $(".testimonial-box-desktop .testimonial-container:nth-child(5)").css("left", "1280px");
            cloneAndDeleteDesktopPrevious();
    }

    function cloneAndDeleteDesktopPrevious(){
        $(".testimonial-box-desktop .testimonial-container:last-child").clone().prependTo(".testimonial-box-desktop");
        $(".testimonial-box-desktop .testimonial-container:last-child").remove();
        $(".testimonial-box-desktop .testimonial-container:first-child").css("left", "-320px");
    }




    // Changing the Testimonial Format on Window Size
    function testimonialFormatToMobile(){
        $(".all-testimonials-desktop").addClass("all-testimonials-mobile");
        $(".all-testimonials-mobile").removeClass("all-testimonials-desktop");

        $(".testimonial-box-desktop").addClass("testimonial-box-mobile");
        $(".testimonial-box-mobile").removeClass("testimonial-box-desktop");

        $("#testimonials").css("flex-direction", "column");
        $(".previousBtn").css("display", "none");
        $(".nextBtn-desktop").css("display", "none");
        $(".nextBtn-mobile").css("display", "block");
    }

    function testimonialFormatToDesktop(){
        $(".all-testimonials-mobile").addClass("all-testimonials-desktop");
        $(".all-testimonials-desktop").removeClass("all-testimonials-mobile");

        $(".testimonial-box-mobile").addClass("testimonial-box-desktop");
        $(".testimonial-box-desktop").removeClass("testimonial-box-mobile");

        $("#testimonials").css("flex-direction", "row");
        $(".previousBtn").css("display", "block");
        $(".nextBtn-desktop").css("display", "block");
        $(".nextBtn-mobile").css("display", "none");
    }

    if ($(window).width() < 1100){
        testimonialFormatToMobile();
    } else if ($(window).width() > 1100){
        testimonialFormatToDesktop();
    }
    
    $(document).ready(function(){
        $(window).resize(function(){
            if ($(window).width() < 1100){
                testimonialFormatToMobile();
            }
        });
    });

    $(document).ready(function(){
        $(window).resize(function(){
            if ($(window).width() > 1100){
                testimonialFormatToDesktop();
            }
        });
    });

    //=================================Testimonials========================================END

    //=================================Four Image Galerie========================================START

    if ($(window).width() < 1000){
        $(".image1").attr("src", "images/mobile/image-gallery-milkbottles.jpg");
        $(".image2").attr("src", "images/mobile/image-gallery-orange.jpg");
        $(".image3").attr("src", "images/mobile/image-gallery-cone.jpg");
        $(".image4").attr("src", "images/mobile/image-gallery-sugar-cubes.jpg");
    } else if ($(window).width() > 1000){
        $(".image1").attr("src", "images/desktop/image-gallery-milkbottles.jpg");
        $(".image2").attr("src", "images/desktop/image-gallery-orange.jpg");
        $(".image3").attr("src", "images/desktop/image-gallery-cone.jpg");
        $(".image4").attr("src", "images/desktop/image-gallery-sugarcubes.jpg");
    }
    
    $(document).ready(function(){
        $(window).resize(function(){
            if ($(window).width() < 1000){
                $(".image1").attr("src", "images/mobile/image-gallery-milkbottles.jpg");
                $(".image2").attr("src", "images/mobile/image-gallery-orange.jpg");
                $(".image3").attr("src", "images/mobile/image-gallery-cone.jpg");
                $(".image4").attr("src", "images/mobile/image-gallery-sugar-cubes.jpg");
            }
        });
    });

    $(document).ready(function(){
        $(window).resize(function(){
            if ($(window).width() > 1000){
                $(".image1").attr("src", "images/desktop/image-gallery-milkbottles.jpg");
                $(".image2").attr("src", "images/desktop/image-gallery-orange.jpg");
                $(".image3").attr("src", "images/desktop/image-gallery-cone.jpg");
                $(".image4").attr("src", "images/desktop/image-gallery-sugarcubes.jpg");
            }
        });
    });

    //=================================Four Image Galerie========================================END
})();