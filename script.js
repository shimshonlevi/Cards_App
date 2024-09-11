const users = [
    { email: "user1@example.com", password: "password1" },
    { email: "user2@example.com", password: "password2" },

 ];

 const cards = [
    { title: "Card 1",
    description: "This is the first card",
    img: "img1.jpg",
    alt: "Image 1"
    },
    { title: "Card 2",
    description: "This is the second card",
    img: "img2.jpg",
    alt: "Image 2"
    },

];

function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    
    // אם המשתמש מחובר, מעבר לדף הבית
    if (isLoggedIn === "true") {
        document.querySelector(".login-form").classList.add("display-not-active");
        document.querySelector(".cards-page").classList.add("display-active");
    }
}

checkLoginStatus();

document.querySelector(".login-form > form").addEventListener("submit", (e) => {
    e.preventDefault();
    const userInputs = e.target;

    // בדיקת האם המשתמש קיים ברשימת המשתמשים
    const foundUser = users.find(user => 
        user.email === userInputs["email"].value && user.password === userInputs["password"].value
    );

    if (foundUser) {
        // אם התחבר בהצלחה, נשמור את המצב ב-Local Storage
        localStorage.setItem("isLoggedIn", "true");

        // מעבר לדף הבית
        document.querySelector(".login-form").classList.add("display-not-active");
        document.querySelector(".cards-page").classList.add("display-active");
    } else {
        console.log("modal - big nono");
    }
});
document.querySelector("header > #btn_logout").addEventListener("click", () => {
    // ניקוי המידע מה-Local Storage
    localStorage.removeItem("isLoggedIn");

    // החזרה לעמוד ההתחברות
    document.querySelector(".login-form").classList.remove("display-not-active");
    document.querySelector(".cards-page").classList.remove("display-active");
});