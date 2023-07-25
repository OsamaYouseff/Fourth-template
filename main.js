///////////////////////////////////////////// dark mode /////////////////////////////////////////////

let toggle = document.getElementById("slider");
// console.log(input);

window.onload = function () {
  let input = document.querySelector(".switch input");
  if (window.localStorage.getItem("temp-4-theme") === "dark") {
    changeThemeToDark();
    document.body.classList.add("dark-mode");
    input.removeAttribute("checked");
  } else {
    changeThemeToLight();
    document.body.classList.remove("dark-mode");
    input.setAttribute("checked", "");
  }
};

let darkModeColors = {
  darkPageColor: "#121315",
  blackColor: "#1a1a1e",
  whiteColor: "#fff",
  insteadOFEEE: "#121315",
  insteadOFgrey: "#eee",
  insteadOF6f6f6: "#202226",
  insteadOFDDD: "transparent",
};

let lightModeColors = {
  lightPageColor: "#f1f5f9",
  blackColor: "#000",
  whiteColor: "#fff",
  eee: "#eee",
  grey: "#888",
  f6f6f6: "#f6f6f6",
  ddd: "#ddd",
};

function changeProp(first, second) {
  document.documentElement.style.setProperty(first, second);
}

function changeThemeToDark() {
  changeProp("--eee-color", darkModeColors.insteadOFEEE);
  changeProp("--page-color", darkModeColors.darkPageColor);
  changeProp("--white-color", darkModeColors.blackColor);
  changeProp("--black-color", darkModeColors.whiteColor);
  changeProp("--grey-color", darkModeColors.insteadOFgrey);
  changeProp("--f6f6f6-color", darkModeColors.insteadOF6f6f6);
  changeProp("--ddd-color", darkModeColors.insteadOFDDD);
  document.body.style.cssText = `color : white !important ;box-shadow : none !important `;
  window.localStorage.setItem("temp-4-theme", "dark");
}
function changeThemeToLight() {
  changeProp("--eee-color", lightModeColors.eee);
  changeProp("--page-color", lightModeColors.lightPageColor);
  changeProp("--white-color", lightModeColors.whiteColor);
  changeProp("--black-color", lightModeColors.blackColor);
  changeProp("--grey-color", lightModeColors.grey);
  changeProp("--f6f6f6-color", lightModeColors.f6f6f6);
  changeProp("--ddd-color", lightModeColors.ddd);
  document.body.style.cssText = `color : black !important ; `;
  window.localStorage.setItem("temp-4-theme", "light");
}

toggle.addEventListener("click", function () {
  if (window.localStorage.getItem("temp-4-theme") === "light") {
    // toggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    changeThemeToDark();
    document.body.classList.toggle("dark-mode");
  } else {
    // toggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    changeThemeToLight();
    document.body.classList.toggle("dark-mode");
  }
});

///////////////////////////////////////////// dark mode /////////////////////////////////////////////

///////////////////////////////////////////// animation with scroll/////////////////////////////////////////////

let progSkills = document.querySelectorAll(".progress-bar");
let YearlyTargets = document.querySelector(".yearly-targets");

let tickets = document.querySelector(".tickets");
let ticketsBox = document.querySelectorAll(".tickets span");
let counterStatus = false;

function increaseNumber(ele) {
  let finalValue = ele.getAttribute("data-count");
  let counter = setInterval(() => {
    ele.innerHTML++;
    ele.innerHTML++;
    if (ele.innerHTML == finalValue) {
      clearInterval(counter);
    }
  }, 8000 / finalValue);
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= YearlyTargets.offsetTop - 300) {
    progSkills.forEach((prog) => {
      let span = prog.children[0];
      let childSpan = prog.children[0].children[0];
      span.setAttribute("style", `width:${prog.getAttribute("data-width")};`);
      childSpan.textContent = prog.getAttribute("data-width");
    });
  }
  if (window.scrollY >= tickets.offsetTop - 400 && !counterStatus) {
    ticketsBox.forEach((span) => {
      increaseNumber(span);
    });
    counterStatus = true;
  }
});

///////////////////////////////////////////// animation with scroll /////////////////////////////////////////////
