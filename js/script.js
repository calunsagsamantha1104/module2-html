console.log("js/script.js")

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click",function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if (name===""||email===""){
    alert("please fill in all required fields.");
    } else{
    alert("form submitted successfully!");
    }
});

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click",function(){
document.body.classList.toggle("dark-mode");
    if
        (document.body.classList.contains("dark-mode")) { themeToggle.textContent = "Toggle Light Mode";
    }
    else 
        { themeToggle.textContent = "Toggle Dark Mode";
        
    }
});

const toggleSkills = document.getElementById("toggleSkills");
const skillsList = document.getElementById("skillsList");

toggleSkills.addEventListener("click", function(){
skillsList.classList.toggle("hidden");
});