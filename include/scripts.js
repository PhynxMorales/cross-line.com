/*!
 * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 72,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 74,
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

// jquery ready start
$(document).ready(function () {
  // jQuery code

  $(document).on("click", ".dropdown-item", function (e) {
    e.stopPropagation();
  });

  if ($(window).width() < 992) {
    $(".dropdown-item a").click(function (e) {
      e.preventDefault();
      if ($(this).next(".submenu").length) {
        $(this).next(".submenu").toggle();
      }
      $(".dropdown").on("hide.bs.dropdown", function () {
        $(this).find(".submenu").hide();
      });
    });
  }
}); // jquery end

$(document).ready(function () {
  $("#youtubeVideo").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $("#html5Video").on("hidden.bs.modal", function () {
    var html5Video = document.getElementById("htmlVideo");
  });
});

$(document).ready(function () {
  $("#youtubeVideo2").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $("#html5Video").on("hidden.bs.modal", function () {
    var html5Video = document.getElementById("htmlVideo");
  });
});

$(document).ready(function () {
  $("#youtubeVideo3").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $("#html5Video").on("hidden.bs.modal", function () {
    var html5Video = document.getElementById("htmlVideo");
  });
});

$(document).ready(function () {
  $("#youtubeVideo4").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $("#html5Video").on("hidden.bs.modal", function () {
    var html5Video = document.getElementById("htmlVideo");
  });
});

$(document).ready(function () {
  $("#youtubeVideo5").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $("#html5Video").on("hidden.bs.modal", function () {
    var html5Video = document.getElementById("htmlVideo");
  });
});

$(document).ready(function () {
  $("#youtubeVideo6").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $("#html5Video").on("hidden.bs.modal", function () {
    var html5Video = document.getElementById("htmlVideo");
  });
});

$(document).ready(function () {
  $("#boton1").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $("#html5Video").on("hidden.bs.modal", function () {
    var html5Video = document.getElementById("htmlVideo");
  });
});
$(document).ready(function () {
  $("#boton2").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $("#html5Video").on("hidden.bs.modal", function () {
    var html5Video = document.getElementById("htmlVideo");
  });
});
$(document).ready(function () {
  $("#boton3").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $("#html5Video").on("hidden.bs.modal", function () {
    var html5Video = document.getElementById("htmlVideo");
  });
});
$(document).ready(function () {
  $("#boton4").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $("#html5Video").on("hidden.bs.modal", function () {
    var html5Video = document.getElementById("htmlVideo");
  });
});
$(document).ready(function () {
  $("#boton5").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $("#html5Video").on("hidden.bs.modal", function () {
    var html5Video = document.getElementById("htmlVideo");
  });
});
