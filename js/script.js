console.log("js/script.js")
document.addEventListener("DOMContentLoaded", function() {

  const submitBtn = document.getElementById("submitBtn");
  if (submitBtn) {
    submitBtn.addEventListener("click", function(event){
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;

      if (name === "" || email === ""){
        alert("Please fill in all required fields.");
      } else {
        alert("Form submitted successfully!");
      }
    });
  }

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function(){
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Toggle Light Mode";
      } else {
        themeToggle.textContent = "Toggle Dark Mode";
      }
    });
  }

  const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
  const skillsList = document.getElementById("skillsList");

  if (toggleSkillsBtn && skillsList) {
    toggleSkillsBtn.addEventListener("click", () => {
      skillsList.classList.toggle("hidden");
    });
  }

});