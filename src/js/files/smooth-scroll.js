export default function smoothScroll() {
  document.querySelectorAll(".anchor").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      let href = this.getAttribute("href").substring(1);

      const scrollTarget = document.getElementById(href);

      if (scrollTarget) {
        const heightHeader = document.querySelector(".header").clientHeight;
        const offsetPosition = scrollTarget.getBoundingClientRect().top - heightHeader;

        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        });

        document.querySelector("#burger").classList.remove("open");
        document.body.classList.remove("body-hidden");
      }
    });
  });
}
