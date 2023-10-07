const buttons = document.querySelectorAll(".sliderBlock>button");
buttons.forEach((button1, id1) => {
  button1.addEventListener("click", () => {
    if (id1 !== 0 && id1 !== 4 && id1 !== buttons.length - 1) {
      button1.classList.add("selectedSlide");
      button1.classList.remove("initColors");
      buttons.forEach((button2, id2) => {
        if (
          id1 !== id2 &&
          id2 !== 0 &&
          id2 !== 4 &&
          id2 !== buttons.length - 1
        ) {
          button2.classList.remove("selectedSlide");
          button2.classList.add("initColors", "grayBorder");
        }
      });
    }
  });
});

const forms = document.querySelectorAll("form");
forms.forEach((f) => f.addEventListener("submit", (e) => e.preventDefault()));
