$.when( $.ready ).then(function() {
    floating({
      content: '<img src="img/snow.png">',
      number: 6,
      duration: 20,
      size: [1,0.8,1.5]
    });
    floating({
      content: '<img src="img/snow.png">',
      number: 8,
      duration: 30,
      size: [3,2.5,0.7]
    });
    floating({
      content: '<img src="img/snow.png">',
      number: 10,
      duration: 40,
      size: [0.1,2,0.5]
    });
    $(window).triggerHandler("resize");
});

var max_deg_y1 = -30;
var axis_y = 0;
var ps_y = 0;
var max_deg_x1 = -20;
var axis_x = 0;
var ps_x = 0;

$(window ).on("mousemove", function(eventObject) {
    var rate_y = (eventObject.pageX - axis_y) / axis_y;
    var rate_x = (eventObject.pageY - axis_x) / axis_x;
    $(".kv div").css("transform", "rotateX(" + max_deg_x1 * rate_x + "deg) rotateY(" + max_deg_y1 * rate_y + "deg)");
}).on("resize", function(eventObject) {
    var $win = $(this);
    var ps_y = $win.width();
    var ps_x = $win.height();
    axis_y = ps_y / 2;
    axis_x = ps_x / 2;
    $(".kv div").css("perspective", ps_y + "px");
});