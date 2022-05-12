// Penggunaan Variabel 

// 1. Scope

// Var 
var diskon = 500 // Global Scope
function diskonscope() {
    var diskon = 300 // Local Scope
    console.log(diskon) // output = 300
}
diskonscope ()
console.log(diskon); // output = 500

// Let


// 2. Reassigned dan Redeclared

// Var
var nama; // Declaration
console.log(nama) // Output = undefined

nama = "Bot" // assignment
console.log(nama) // Output = Bot

var nama = "Bot Sabrina" // Redeclared dan Reassigned
console.log(nama) // Output = Bot Sabrina

//3. Hoisting

// Var
nama = "Mentor Sabrina" // Variabel di-assigned duluan
var nama; // Kemudian baru dideklarasikan
console.log(nama) // Output = Mentor Sabrina

/* Di belakang layar terjadi hoisting */

var nama;
nama = "Mentor Sabrina"
console.log(nama) // Output = Mentor Sabrina