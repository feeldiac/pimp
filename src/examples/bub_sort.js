let numbers = [6, 5, 1, 2, 4, 3, 8, 7];

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
        if (numbers[j] > numbers[j + 1]) {
            [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]]
        }
        // console.log(`Iteracion ${i} N-actual: ${numbers[j]}, N-siguiente: ${numbers[j+1]}`);
    }
}