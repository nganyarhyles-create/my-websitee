const menuIcon = document.getElementById("menuIcon");
const navLinks =document.getElementById("navLinks");

menuIcon.addEventListener('click', () =>{
  navLinks.classList.toggle("show");

  if(navLinks.classList.contains("show")){
    menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }else{
    menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>'
  }
});


const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () =>{
  document.body.classList.toggle("dark-mode");
   if(document.body.classList.contains("dark-mode")){
    themeToggle.innerHTML =
    '<i class="fa-solid fa-sun"></i>';
   }else{
    themeToggle.innerHTML =
    '<i class="fa-solid fa-moon"></i>';
   }
})

function showForm(formId) {
   document.querySelectorAll(".form-box").forEach(form => form.classList.remove("active"));
   document.getElementById("register-form").classList.add("active");
}
