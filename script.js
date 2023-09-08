const parentContainer = document.querySelector(".card__holder");

parentContainer.addEventListener("click", (e) => {
  const current = e.target;

  const isReadMoreBtn = current.className.includes("read-more-btn");

  if (!isReadMoreBtn) return;

  const currentText = e.target.parentNode.querySelector(".read-more-contents");
  currentText.classList.toggle("show");

  current.textContent = current.textContent.includes("Read More")
    ? "Read Less..."
    : "Read More...";
});
