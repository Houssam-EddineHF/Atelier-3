

//ex1 
// function filternbs(numbers) {
//     const filteredNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] % 2 === 0) {
//         filteredNumbers.push(numbers[i]);
//       }
//     }
//     return filteredNumbers.sort((a, b) => a - b);
//   }
  
//   const numbers = [1, 7, 10, 9, 8 , 2];
//   const filteredNumbers = filternbs(numbers);
//   console.log(filteredNumbers); // Output: [2, 8, 10]


//   //ex2 
//   function transformNbrs(numbers) {
//     const product = numbers.reduce((acc, curr) => acc * curr, 1);
//     return numbers.map(number => product / number);
//   }
  
//   const numbers = [1, 3, 4];
//   const transformedNumbers = transformNbrs(numbers);
//   console.log(transformedNumbers); // Output: [1, 6, 24]


//   //ex3
//   function containingI(text) {
//     const lines = text.split('\n');
//     for (const line of lines) {
//       const uppercaseLine = line.toUpperCase();
//       if (uppercaseLine.includes('I')) {
//         console.log(uppercaseLine);
//       }
//     }
//   }
  
//   const text = `Devops est une methode agIle  `;
//   containingI(text);
  
// //ex4 
// const numbers = [1, 7, 10, 9, 8];
// const maxNumber = numbers.reduce((max, current) => {
//   return current > max ? current : max;
// }, numbers[0]);

// console.log(maxNumber); // Output: 10
// //ex5
// function calculeTotal(products) {
//     const total = products.reduce((acc, product) => {
//       return acc + (product.price * 1.25); // 25% TVA
//     }, 0);
//     return total;
//   }
  
//   const products = [
//     { name: "Shirt", price: 20 },
//     { name: "Shoes", price: 50 },
//     { name: "Hat", price: 15 }
//   ];
  
//   const totalPrice = calculeTotal(products);
//   console.log("Prix total TTC:", totalPrice);

  //ex6

