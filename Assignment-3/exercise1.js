// Nama : Ruth Tika Sarwanti

// Fungsi untuk memeriksa apakah array angka membentuk deret aritmatika
function isArithmeticProgression(numbers) {
    let hasil; // Variabel untuk menyimpan hasil
    let selisih = numbers[1] - numbers[0]; // Menghitung selisih antara dua angka pertama
    
    // Loop untuk memeriksa setiap pasangan angka dalam array
    for (let i = 1; i < numbers.length - 1; i++) {
        // Memeriksa apakah angka saat ini ditambah selisih sama dengan angka berikutnya
        if (numbers[i] + selisih === numbers[i + 1]) {
            hasil = true; // Jika sama, deret aritmatika
        } else {
            hasil = false; // Jika tidak, bukan deret aritmatika
        }
    }
    return hasil; // Mengembalikan hasil
}

// Contoh penggunaan fungsi
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24]));  // false
console.log(isArithmeticProgression([2, 4, 6, 8]));       // true
console.log(isArithmeticProgression([1, 3, 5, 7, 9]));    // true
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false
