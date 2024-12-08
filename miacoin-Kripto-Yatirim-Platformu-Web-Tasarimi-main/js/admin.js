(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // Chart Global Color
    Chart.defaults.color = "#6C7293";
    Chart.defaults.borderColor = "#000000";


    // Worldwide Sales Chart
    var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["13.12.2023", "14.12.2023", "15.12.2023", "16.12.2023", "17.12.2023", "18.12.2023", "19.12.2023"],
            datasets: [{
                    label: "Google AdSense",
                    data: [3516, 3089, 4578, 3461, 3915, 4742, 3821],
                    backgroundColor: "rgba(235, 22, 22, .7)"
                },
                {
                    label: "Instagram",
                    data: [2416, 2845, 2571, 2961, 2210, 2597, 2678],
                    backgroundColor: "rgba(235, 22, 22, .5)"
                },
                {
                    label: "Billboardlar",
                    data: [11552, 12425, 11644, 13555, 11717, 14575, 13460],
                    backgroundColor: "rgba(235, 22, 22, .3)"
                }
            ]
            },
        options: {
            responsive: true
        }
    });


    // Salse & Revenue Chart
    var ctx2 = $("#salse-revenue").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2, {
        type: "line",
        data: {
            labels: ["13.12.2023", "14.12.2023", "15.12.2023", "16.12.2023", "17.12.2023", "18.12.2023", "19.12.2023"],
            datasets: [{
                    label: "Coin Adedi",
                    data: [1161, 1400, 1718, 1997, 2211, 2038, 2316],
                    backgroundColor: "rgba(235, 22, 22, .7)",
                    fill: true
                },
                {
                    label: "Günlük Kazanç ₺ Cinsinden",
                    data: [5805, 7000, 8590, 9985, 11055, 10190, 11580],
                    backgroundColor: "rgba(235, 22, 22, .5)",
                    fill: true
                }
            ]
            },
        options: {
            responsive: true
        }
    });
    


    // Single Line Chart
    var ctx3 = $("#line-chart").get(0).getContext("2d");
    var myChart3 = new Chart(ctx3, {
        type: "line",
        data: {
            labels: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
            datasets: [{
                label: "Gün Kapanışlarının Olduğu Değerler",
                fill: false,
                backgroundColor: "rgba(235, 22, 22, .7)",
                data: [5, 5.1, 5.1, 5.2, 5.6, 5.5, 5.7, 5.4, 5.7, 5.7, 5.8],
            }]
        },
        options: {
            responsive: true
        }
    });


    // Single Bar Chart
    var ctx4 = $("#bar-chart").get(0).getContext("2d");
    var myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: ["13.12.2023", "14.12.2023", "15.12.2023", "16.12.2023", "17.12.2023"],
            datasets: [{
                backgroundColor: [
                    "rgba(235, 22, 22, .7)",
                    "rgba(235, 22, 22, .6)",
                    "rgba(235, 22, 22, .5)",
                    "rgba(235, 22, 22, .4)",
                    "rgba(235, 22, 22, .3)"
                ],
                data: [4397985, 4417985, 4437115, 4477016, 4501812],
                label: "Kazanç ₺ Cinsinden",
            }]
        },
        options: {
            responsive: true
        }
    });


    // Pie Chart
    var ctx5 = $("#pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "pie",
        data: {
            labels: ["Türkiye", "Azerbaycan", "Amerika", "Almanya", "İtalya"],
            datasets: [{
                backgroundColor: [
                    "rgba(235, 22, 22, .7)",
                    "rgba(235, 22, 22, .6)",
                    "rgba(235, 22, 22, .5)",
                    "rgba(235, 22, 22, .4)",
                    "rgba(235, 22, 22, .3)"
                ],
                data: [116, 24, 11, 8, 5]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Doughnut Chart
    var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "doughnut",
        data: {
            labels: ["Türkiye", "Azerbaycan", "Amerika", "Almanya", "İtalya"],
            datasets: [{
                backgroundColor: [
                    "rgba(235, 22, 22, .7)",
                    "rgba(235, 22, 22, .6)",
                    "rgba(235, 22, 22, .5)",
                    "rgba(235, 22, 22, .4)",
                    "rgba(235, 22, 22, .3)"
                ],
                data: [30718, 2000, 950, 450, 500]
            }]
        },
        options: {
            responsive: true
        }
    });

    
})(jQuery);

