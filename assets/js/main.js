// $(document).ready(function () {
//   $(".navbar-toggler").click(function () {
//     $(".navbar-collapse").slideToggle();
//   });
// });
// const sidebarToggle = document.getElementById("sidebarToggle");
// const sidebar = document.getElementById("sidebar");

// sidebarToggle.addEventListener("click", function () {
//   sidebar.classList.toggle("active");
//   sidebarToggle.classList.toggle("active");
// });

$(document).ready(function () {
  $(window).scroll(function () {
    $(".content-based-scroll").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass("show");
      }
    });
  });
});
