export default function burger() {
  const burger = document.querySelector("#burger");
  const burgerOpen = document.querySelector("#burger-open");
  const burgerClose = document.querySelector("#burger-close");

  if (burger) {
    burgerOpen.addEventListener("click", (e) => {
      e.stopPropagation();

      burger.classList.toggle("open");
      burger.addEventListener("click", (e) => e.stopPropagation());

      document.body.classList.add("body-hidden");
      document.body.addEventListener("click", handleClose);
    });

    burgerClose.addEventListener("click", handleClose);

    function handleClose() {
      burger.classList.remove("open");
      document.body.classList.remove("body-hidden");

      return document.body.removeEventListener("click", handleClose);
    }
  }
}