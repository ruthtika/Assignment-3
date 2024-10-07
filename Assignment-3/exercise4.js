// Nama : Ruth Tika Sarwanti

// Fungsi untuk menemukan subarray dengan jumlah maksimum
function arrSum(arr) {
    let maxSum = -99999; // Nilai awal untuk maxSum
    let currentSum = 0; // Nilai awal untuk currentSum
    let start_index = 0; // Indeks awal dari subarray
    let end_index = 0; // Indeks akhir dari subarray

    // Iterasi melalui setiap elemen dalam array
    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i]; // Tambahkan elemen ke currentSum

        // Jika currentSum lebih besar dari maxSum, perbarui maxSum dan indeks
        if (currentSum > maxSum) {
            maxSum = currentSum; // Update maxSum
            end_index = i; // Update endIndex
        }

        // Reset currentSum jika menjadi negatif
        if (currentSum < 0) {
            currentSum = 0; // Reset currentSum
           start_index = i + 1; // Update startIndex ke elemen berikutnya
        }
    }

    // Kembalikan subarray dengan jumlah maksimum dan nilai maxSum
    return [arr.slice(start_index, end_index + 1), maxSum];
}

// Contoh penggunaan fungsi
console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3])); // Output: [[4, -1, -2, 1, 5], 7]
console.log(arrSum([1, -2, 4, 2])); // Output: [[4, 2], 6]
console.log(arrSum([1, -2, 4])); // Output: [[4], 4]
