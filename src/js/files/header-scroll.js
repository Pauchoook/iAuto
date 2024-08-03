export default function headerScroll() {
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (!header.classList.contains("active") && window.scrollY > header.clientHeight) {
      header.classList.add("active");
    }

    if (window.scrollY < 1) {
      header.classList.remove("active");
    }
  })
}