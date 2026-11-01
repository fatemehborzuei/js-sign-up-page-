const form = document.querySelector("#myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.querySelector(".name");
    console.log(name.lastIndexOf("a"));

    const age = document.querySelector(".age");
    console.log(age.lastIndexOf("5"));

    const email = document.querySelector(".email");
    console.log(email.lastIndexOf("@"));
});
