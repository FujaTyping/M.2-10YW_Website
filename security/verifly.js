/**
 * Nice Try Hacker
 * I don't put username and password here!
 * :P
 */

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "HackerOnlyCCanopenThis" && password === "Hacker555lolNooB!") {
        alert("ล็อกอินเรียบร้อยแล้ว!");
        location.reload();
    } else {
        alert("ชื่อผู้ใช้ หรือ รหัสผ่าน \nไม่ถูกต้อง!")
    }
})