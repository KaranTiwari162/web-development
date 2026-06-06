// let i = 0
// for (let i = 0; i < 5; i++) {
//  console.log("* * * *")
// }


//   for (let i = 1; i <= 4; i++) {
//     let row = "";

//     for (let j = 1; j <= 4; j++) {
//         row += "* ";
//     }

//     console.log(row);
// }


// let i=0;
// for (let i = 1; i <= 5; i++) {
//     console.log("*".repeat(i));
// }


// for (let i = 1; i <= 5; i++) {
//     let row = "";

//     for (let j = 1; j <=i; j++) {
//         row += j;
//     }

//     console.log(row);
// }




// for (let i = 1; i <= 5; i++) {
//     let row = "";

//     for (let j = 1; j <=i; j++) {
//         row += i;
//     }

//     console.log(row);
// }


// let i=5;
// for (let i = 5; i > 0; i--) {
//     console.log("*".repeat(i));
// }


// for (let i = 5; i >= 1; i--) {
//     let row = "";

//     for (let j = 1; j <=i; j++) {
//         row += j;
//     }

//     console.log(row);
// }

// for (let i = 1; i <= 5; i++) {
//     let row = "";

//     for (let s = 1; s <= 5 - i; s++) {
//         row += " ";
//     }

//     for (let j = 1; j <= 2 * i - 1; j++) {
//         row += " *";
//     }

//     console.log(row);
// }


// for (let i = 5; i >= 1; i--) {
//     let row = "";

//   for (let s = 1; s <= 5 - i; s++) {
//         row += "  ";
//     }

//     for (let j = 1; j <= 2 * i - 1; j++) {
//         row += " *";
//     }

//     console.log(row);
// }



// for (let i = 1; i <= 9; i++) {

//     let row = "";
//     let stars;

//     if (i <= 5) {
//         stars = 2 * i - 1;
//     } else {
//         stars = 2 * (10 - i) - 1;
//     }

//     let spaces = (9 - stars) / 2;

//     for (let s = 1; s <= spaces; s++) {
//         row += "  ";
//     }

//     for (let j = 1; j <= stars; j++) {
//         row += " *";
//     }

//     console.log(row);
// } 


// for (let i = 1; i <= 5; i++) {

//     let row = "";

//     for (let j = 1; j <= i; j++) {
//         row += " *";
//     }

//     console.log(row);
// } 
// for (let i =4 ; i >= 1; i--) {

//     let row = "";

//     for (let j = 1; j <= i; j++) {
//         row += " *";
//     }

//     console.log(row);
// } 



// for (let i = 1; i <= 9; i++) {

//     let row = "";
//     let stars = i <= 5 ? i : 10 - i;

//     for (let j = 1; j <= stars; j++) {
//         row += " *";
//     }

//     console.log(row);
// }



for (let i = 1; i <= 5; i++) {

    let row = "";

    for (let j = 1; j <= i; j++) {

        if ((i + j) % 2 == 0) {
            row += "1 ";
        } else {
            row += "0 ";
        }
    }

    console.log(row);
}