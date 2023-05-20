const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      search8tn = body.querySelector(".search-box"),
      modeswtich = body.querySelector(".toggle-switch"),
      modetext = body.querySelector(".mode-text");

      function myFunction() {
        var element = document.body;
        element.classList.toggle("dark");
        }

toggle.addEventListener("click",()=>{
  sidebar.classList.toggle("close");
});

function myFunction3() {
  var x = document.getElementById("change");
  if (x.innerHTML === "Dark Mode") {
    x.innerHTML = "Light Mode";
  } else {
    x.innerHTML = "Dark Mode";
  }
}
