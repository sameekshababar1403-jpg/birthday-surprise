function checkName() {
    let name = document.getElementById("name").value.trim().toLowerCase();

    if (name === "anushka") {
        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "block";
    } else {
        alert("Oops! This surprise is only for Anushka ❤️");
    }
}

function showPassword() {
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";
}

function unlock() {
    let password = document.getElementById("password").value;

    if (password === "Anushka0507") {
        document.getElementById("page3").style.display = "none";
        document.getElementById("page4").style.display = "block";

       let song = document.getElementById("birthdaysong");
       song.load();
       song.currentTime = 0;
       song.play().catch(function(error) {
        console.log(error);
        });
        
       
        
    } else {
        alert("❌ Wrong Password!");
    }
}
