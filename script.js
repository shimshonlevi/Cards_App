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

document.querySelector(".login-form > form").addEventListener("submit", (e) => {
    e.preventDefault();
    const userInputs = e.target;
//     console.log(userEmailInput);
// for (let index = 0; index < userEmailInput.length; index++) {
//     console.log(userEmailInput[index].value);
     
    
// }
    if(users.find(user=>user.email === userInputs["email"].value && user.password === userInputs["password"].value)){

        document.querySelector(".login-form").classList.toggle("display-not-active");
        document.querySelector(".cards-page").classList.toggle("display-active");
    }else{
        console.log("modal - big nono");
        
    }
});