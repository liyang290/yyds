(function () {
  var navToggle = document.querySelector(".nav-toggle");
  var siteNav = document.querySelector(".site-nav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  var activeMap = {
    "result-detail.html": "generate.html",
    "stories.html": "story.html",
    "story-detail.html": "story.html"
  };
  var activePage = activeMap[currentPage] || currentPage;
  document.querySelectorAll(".site-nav a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href) return;
    if (href.replace("./", "") === activePage) {
      link.classList.add("is-active");
    }
  });

  document.querySelectorAll(".js-filter").forEach(function (group) {
    group.addEventListener("click", function (event) {
      var button = event.target.closest("button, a");
      if (!button || !group.contains(button)) return;
      event.preventDefault();
      group.querySelectorAll(".is-selected").forEach(function (item) {
        item.classList.remove("is-selected");
      });
      button.classList.add("is-selected");
    });
  });
})();
