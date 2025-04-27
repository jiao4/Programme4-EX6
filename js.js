document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("Description").style.display = "block";
    document.getElementById("Cast").style.display = "none";
    document.getElementById("Trivia").style.display = "none";
  

    const descriptionButton = document.querySelector("button.btn-primary");
    const castButton = document.querySelector("button.btn-success");
    const triviaButton = document.querySelector("button.btn-warning");
  
    function showContent(contentId) {
      document.getElementById("Description").style.display = "none";
      document.getElementById("Cast").style.display = "none";
      document.getElementById("Trivia").style.display = "none";
  
      document.getElementById(contentId).style.display = "block";
    }
  
    descriptionButton.addEventListener("click", function () {
      showContent("Description");
    });
  
    castButton.addEventListener("click", function () {
      showContent("Cast");
    });
  
    triviaButton.addEventListener("click", function () {
      showContent("Trivia");
    });
  });