function show(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function searchSite(q) {
    let r = document.getElementById("searchResult");
    if (!q) { r.innerHTML = ""; return; }
    r.innerHTML = "Searching for: " + q;
}

function toggleInfo(id) {
    document.querySelectorAll('.info-box').forEach(box => box.style.display = "none");
    document.getElementById(id).style.display = "block";
}

function randomCode() {
    return "SIT" + Math.floor(100 + Math.random() * 900);
}

function generateTimetable() {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let subjects = ["Programming", "Web Dev", "AI", "Data Structures", "Cyber Security", "Databases"];
    let tbody = document.getElementById("timetable");
    let ul = document.getElementById("units");

    tbody.innerHTML = "";
    ul.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        let code = randomCode();
        let subject = subjects[Math.floor(Math.random() * subjects.length)];
        let time = (9 + i) + ":00 AM";

        tbody.innerHTML += `
        <tr>
            <td>${days[i]}</td>
            <td>${time}</td>
            <td>${code}</td>
            <td>${subject}</td>
        </tr>`;

        ul.innerHTML += `<li>${code} - ${subject}</li>`;
    }
}

/* LOGIN + REGISTER SYSTEM */

function registerUser() {
    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let pass = document.getElementById("regPass").value;

    if (!name || !email || !pass) {
        document.getElementById("regMsg").innerHTML = "All fields required.";
        return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPass", pass);

    document.getElementById("regMsg").innerHTML = "Registration successful!";
}

function loginUser() {
    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPass").value;

    let savedEmail = localStorage.getItem("userEmail");
    let savedPass = localStorage.getItem("userPass");

    if (email === savedEmail && pass === savedPass) {
        localStorage.setItem("loggedIn", "true");
        document.getElementById("loginMsg").innerHTML = "Login successful!";
        show("home");
    } else {
        document.getElementById("loginMsg").innerHTML = "Invalid email or password.";
    }
}

function logoutUser() {
    localStorage.removeItem("loggedIn");
    show("login");
}

window.onload = () => {
    if (localStorage.getItem("loggedIn") === "true") {
        show("home");
    } else {
        show("login");
    }
};