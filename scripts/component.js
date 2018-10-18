// fade up and in initialization 
AOS.init({
  duration: 1200,
})  

// off canvas menu item 
$(document).ready(function() {
  $(".menu").click(function() {
    $("body").toggleClass("open");
  });
});