$(document).ready(function () {
    $('.homeSlider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 6000,
        navigation: true,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    //add function

    $(".red-icon").click(function () {
        $(this).css("color", "red");
    });
    //   $(".red-icon").click(function(){
    //     $(this).css("color", "#fff");
    //   });

    //   $(".red-icon").toggle(
    //     function(){$(".red-icon").css({"color": "red"});},
    //     function(){$(".red-icon").css({"color": "#fff"});},

    //   );



    // COUNTDOWN================
    // $('#clock').countdown('2021/03/25', function(event) {
    //     $(this).html(event.strftime('%D days %H:%M:%S'));
    //   });

    var endDate = "June 7, 2087 15:03:25";

    $('#clock').countdown({
        date: endDate,
        render: function (data) {
            $(this.el).html(
                "<div class='single-date-wraper'><div class='date-wraper'><h3 id='daysLeft'>" + this.leadingZeros(data.days, 2) + "</h3> </div><p>Days</p></div><div class='single-date-wraper'><div class='date-wraper'><h3 id='daysLeft'>" + this.leadingZeros(data.hours, 2) + " </h3> </div><p>HOURS</p></div><div class='single-date-wraper'><div class='date-wraper'><h3 id='daysLeft'>" + this.leadingZeros(data.min, 2) + " </h3> </div><p>MINS</p></div><div class='single-date-wraper'><div class='date-wraper'><h3 id='daysLeft'>" + this.leadingZeros(data.sec, 2) + " </h3> </div><p>SECONDS</p></div>");
        }
    });



    //blog post slider

    $('.blogSlider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        navigation: true,

        responsive: {
            0: {
                items: 6
            },
            600: {
                items: 6
            },
            1000: {
                items: 6
            }
        }
    })

//catagories toggle===============
    if (window.matchMedia('(max-width: 991px)').matches) {
        $(".categorie-collapse").removeClass("show");
        $(".categorie-collapse").addClass("hide");
    }





});