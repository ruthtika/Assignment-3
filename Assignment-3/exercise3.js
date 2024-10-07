// Nama : Ruth Tika Sarwanti

// Fungsi untuk menemukan pasangan elemen dalam array yang jumlahnya sama dengan integer yang diberikan
function sumArray(arr, int) {
    let hasil = []; // Array untuk menyimpan pasangan yang ditemukan

    // Loop untuk setiap elemen dalam array
    for (let i = 0; i < arr.length; i++) {
        let complement = int - arr[i]; // Menghitung nilai yang diperlukan
        // Loop untuk mencari complement
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === complement) {
                hasil.push([arr[i], arr[j]]); // Menyimpan pasangan
            }
        }
    }
    return hasil; // Mengembalikan array pasangan yang ditemukan
}

// Contoh penggunaan fungsi
console.log(sumArray([2, 1, 4, 3], 5)); // output: [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)); // output: [[1, 10], [8, 3]]
