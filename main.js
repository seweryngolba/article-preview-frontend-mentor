const shareBtn = document.querySelector(".share-button");
const linksBox = document.querySelector(".share-links");
const activeBtn = document.querySelector(".active-share");

shareBtn.addEventListener("click", () => {
  linksBox.style.display = "flex";
});

activeBtn.addEventListener("click", () => {
  linksBox.style.display = "none";
});
