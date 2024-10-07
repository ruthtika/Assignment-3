// Nama : Ruth Tika Sarwanti

// Fungsi untuk memeriksa apakah terdapat karakter 'a' dan 'b' yang terpisah oleh 3 karakter
function threeStepsAB(text) {
    // Mengubah string menjadi array karakter
    let characters = text.split(""); 
    console.log(characters); // Menampilkan array karakter untuk debugging

    // Loop untuk memeriksa setiap karakter dalam array
    for (let i = 0; i < characters.length; i++) {
        // Memeriksa jika karakter saat ini adalah 'a'
        if (characters[i] === "a") {
            // Memeriksa apakah 'b' ada 4 posisi setelah 'a'
            if (characters[i + 4] === "b") {
                return true; // Mengembalikan true jika ada 'b' di posisi yang tepat
            }
        }

        // Memeriksa jika karakter saat ini adalah 'b'
        if (characters[i] === "b") {
            // Memeriksa apakah 'a' ada 4 posisi setelah 'b'
            if (characters[i + 4] === "a") {
                return true; // Mengembalikan true jika ada 'a' di posisi yang tepat
            }
        }
    }
    return false; // Mengembalikan false jika tidak ditemukan pasangan 'a' dan 'b' yang terpisah 3 karakter
}

// Contoh penggunaan fungsi
console.log(threeStepsAB('lane borrowed')); // true
console.log(threeStepsAB('bacon and meat')); // false
console.log(threeStepsAB('you are boring')); // true
console.log(threeStepsAB('barbarian'));     // true
console.log(threeStepsAB('bacon and meat')); // false
