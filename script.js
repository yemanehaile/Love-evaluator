//  document.getElementById("calculate").addEventListener("click", function () {

//             var name1 = document.getElementById("name1").value;
//             var name2 = document.getElementById("name2").value;

//             if (name1 === "" || name2 === "") {
//                 alert("Please enter both names.");
//                 return;
//             }

//             var score = Math.floor(Math.random() * 100) + 1;

//             alert(name1 + " and " + name2 + 
//                   " have a love score of " + score + "%!");});



//  document.getElementById("calculate").addEventListener("click", function ()) {

//             var name1 = document.getElementById("name1").value;
//             var name2 = document.getElementById("name2").value;

//             if (name1 === "" || name2 === "") {
//                 alert("Please enter both names.");
//                 return;
//             }

//             var score = Math.floor(Math.random() * 100) + 1;
//             if (score >= 70) {
//                 alert(name1 + " and " + name2 + 
//                   " have a love score of " + score + "%! ❤️ Even Cupid is jealous of you two!");
//             } else if (score >= 40) {
//                 alert(name1 + " and " + name2 + 
//                   " have a love score of " + score + "%! 😏 50/50 chance... Like pineapple on pizza! 🍍");
//             } else (score < 40) {
//                 alert(name1 + " and " + name2 + 
//                   " have a love score of " + score + "%! 😂 Even Wi-Fi has a better connection than you two!");
//             }
//         }
            // alert(name1 + " and " + name2 + 
            //       " have a love score of " + score + "%!");});
document.getElementById("calculate").addEventListener("click", function () {

    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;

    if (name1 === "" || name2 === "") {
        alert("Please enter both names.");
        return;
    }

    var score = Math.floor(Math.random() * 100) + 1;

    if (score >= 70) {

        alert(name1 + " and " + name2 +
            " have a love score of " + score +
            "%! ❤️ Even jack and rose are jealous of you two!");

    } else if (score >= 40) {

        alert(name1 + " and " + name2 +
            " have a love score of " + score +
            "%! 😏 50/50 chance... There still a chance this might work ");

    } else {

        alert(name1 + " and " + name2 +
            " have a love score of " + score +
            "%! 😂 Leave this shit it's obvious that its  not going to work out ");
    }

});







// function makeMatch() {

//     // Get the values entered by the user
//     const name1 = document.getElementById("name1").value.trim();
//     const name2 = document.getElementById("name2").value.trim();
//     const result = document.getElementById("result");

//     // Check if both names were entered
//     if (name1 === "" || name2 === "") {
//         result.innerHTML = `
//             <p>❤️ Please enter both names!</p>
//         `;
//         return;
//     }

//     // Check if both names are the same
//     if (name1.toLowerCase() === name2.toLowerCase()) {
//         result.innerHTML = `
//             <p>😂 Are you kidding? You can't match yourself!</p>
//         `;
//         return;
//     }

//     // Generate a random score between 0 and 100
//     const score = Math.floor(Math.random() * 101);

//     let message;
//     let emoji;

//     // Choose a message based on the score
//     if (score >= 70) {

//         message = "Even Cupid is jealous of you two!";
//         emoji = "💘";

//     } else if (score >= 40) {

//         message = "50/50 chance... Like pineapple on pizza! 🍍";
//         emoji = "😏";

//     } else {

//         message = "Even Wi-Fi has a better connection than you two!";
//         emoji = "😂";
//     }

//     // Display the final result
//     result.innerHTML = `
//         <div class="pop">
//             <h2>${emoji} Match Result ${emoji}</h2>

//             <p>
//                 <strong>${name1}</strong> 
//                 <strong>${name2}</strong>
//             </p>

//             <h1>${score}%</h1>

//             <p>${message}</p>
//         </div>
//     `;
// }
// document.getElementById("calculate").addEventListener("click", makeMatch);