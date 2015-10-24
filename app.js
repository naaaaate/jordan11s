var $header = $(".main-header");
var $main_nav = $(".toggle");
var $logo = $("#logo");
var $hamburger = $("#hamburger");
var $mail = $("#mail");
var $contact_form = $("#contact-form");
var $main_content = $(".main-content");

// var $line = $("<div></div>");
// $line.addClass('line');



// hide the navigation bar
$main_nav.hide();

// hide the contact form
$contact_form.hide();

$logo.mouseover(function() {
  $main_nav.toggle("slow", "linear");

  // here we add a line to top of navigation menu..
  $main_nav.addClass("line");
  // $main_content.css("padding-top","50px");
  // $main_content.css("transition","1s");
});


// $logo.on("mouseenter", function() {
//   $main_content.css("padding-top","50px");
//   $main_content.css("transition","1s");
// });

// $logo.on("mouseleave", function() {
//   $main_content.css("padding-top","10px");
// });



$hamburger.mouseover(function() {
  $main_nav.toggle("slow", "linear");

  // here we add a line to top of navigation menu..
  $main_nav.addClass("line");
});

$mail.on("click", function() {
  $contact_form.slideToggle("slow", "linear");
});



