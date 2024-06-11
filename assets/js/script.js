// tippy.js
tippy("[data-tippy-content]");

// aos.js
AOS.init({
  duration: 700,
  once: true
});

function handleResponse(data) {
  console.log(data);
  document.getElementById('servers').innerText = JSON.parse(JSON.stringify(data)).count;
}
function handleResponseCmds(data) {
  console.log(data);
  document.getElementById('commands').innerText = JSON.parse(JSON.stringify(data)).count;
}

function invite() {
  window.location.href = 'https://discord.com/oauth2/authorize?client_id=983262600613736478&permissions=397321497712&integration_type=0&scope=bot+applications.commands'
}

// navbar burger
document.addEventListener('DOMContentLoaded', () => {

  var script = document.createElement('script');
  script.src = 'http://ro05.pylex.xyz:10451/api/counts?callback=handleResponse';
  document.body.appendChild(script);
  var script_cmds = document.createElement('script');
  script_cmds.src = 'http://ro05.pylex.xyz:10451/api/cmds?callback=handleResponseCmds';
  document.body.appendChild(script_cmds);
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

$(document).ready(function() {
  $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });
});

// navbar on scroll
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 700) {
      $("nav").addClass("nav-w");
      $(".navbar-menu").addClass("nav-w");
      $(".navbar-item").addClass("nav-dark");
      $(".navbar-link").addClass("nav-dark");
      $(".navbar-burger").removeClass("has-text-white");
      $(".navbar-burger").addClass("has-text-dark");
    } else {
      $("nav").removeClass("nav-w");
      $(".navbar-menu").removeClass("nav-w");
      $(".navbar-item").removeClass("nav-dark");
      $(".navbar-link").removeClass("nav-dark");
      $(".navbar-burger").removeClass("has-text-dark");
      $(".navbar-burger").addClass("has-text-white");
    }
  });
});

// back to top
var btn = $("#backtotop");

$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// copyright year
document.getElementById("cp-year").innerHTML = new Date().getFullYear()
