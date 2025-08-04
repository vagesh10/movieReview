let movieReviewContainer = document.getElementById("reviewsContainer");
let titleinputEl = document.getElementById("titleInput");
let reviewEl = document.getElementById("reviewTextarea");
let buttonEl = document.getElementById("addBtn");

function reviewGive() {
    let heading = document.createElement("h1");
    let movieName = titleinputEl.value;
    heading.classList.add("movie-title");
    heading.textContent = "Movie Title:" + movieName;
    movieReviewContainer.appendChild(heading);
    let para = document.createElement("p");
    let movieReview = reviewEl.value;
    para.textContent = "Your Review:" + movieReview;
    movieReviewContainer.appendChild(para);
    if (movieName === "") {
    alert("Please enter a movie title");
    return;
  }
  if (movieReview === "") {
    alert("Please enter a movie review");
    return;
  }

}
buttonEl.onclick = function() {
    reviewGive();
    titleinputEl.value = "";
    reviewEl.value = "";
}