if (document.title === "Home Page") {
    alert("Welcome to my website! Click 'OK' to continue.");
}
document.getElementById("myBtn").addEventListener("click", function() {
    var modal = document.getElementById("myModal");
    modal.style.display = modal.style.display === "none" ? "block" : "none";
});

if (document.getElementById("questionForm")) {
    document.getElementById("questionForm").onsubmit = function(event) {
        event.preventDefault(); 
        var userAnswer = document.getElementById("animalTerms").value.toLowerCase();
        var responseText = '';

        if (userAnswer === "cheetah") {
            responseText = "Correct!";
        } else {
            responseText = "Incorrect, try again.";
        }

        document.getElementById("response").textContent = responseText;
    };
}
