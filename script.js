function main(){



let growMe = document.getElementById("grow-me");
    growMe.classList.add("big");

let shrinkMe = document.getElementById("shrink-me");
    shrinkMe.classList.remove("big");

let liFinder = document.querySelectorAll("li");
for (let i = 0; i < liFinder.length; i++){
    console.log(liFinder[i]);
}

let linkFix = document.querySelector("a");
    linkFix.setAttribute("href", "https://www.example.com");
    linkFix.innerText = "somewhere";

let hideMe = document.getElementById("hide-me");
    hideMe.style.display = "none";

let showMe = document.getElementById("show-me");
    showMe.style.display = "block";

let name = document.getElementById("name").value;

let newName = document.querySelector("h1");
    newName.innerText = `Hello ` + name;
   
}
