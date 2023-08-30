
// Задание 1.  Функция которая показывает количество четных, нечетных и ноль элементов массива
let countEven = 0;
let countOdd = 0;
let сountZero = 0;
function showQuntityArrEvenOddZeroElem (arr){
for (let i = 0; i < arr.length; i++) {
    if ((typeof (arr[i]) == "number") && !(isNaN(arr[i]))) {
        if ((arr[i] % 2 == 0) && (arr[i] !== 0)) {
            countEven++;
        } else if ((arr[i] % 2 !== 0) && (arr[i] !== 0)) {
            countOdd++;
        } else if (arr[i] == 0) {
            сountZero++;
        };
    };
};
return console.log(` четных ${countEven},  нечетных ${countOdd},  нулей ${сountZero} `);
};
let arr = [ 2,5,7,9,NaN,0,0,undefined,"arr"];
showQuntityArrEvenOddZeroElem (arr);


// Задание 2.Простое число
function primeNum (number){
    if (number > 1000 && number <= 1) return console.log("данные неверны");
    if (number == 2) return console.log("число простое");
    for (i = 2; i <= number/2; i++) {
        if (number % i == 0 ) {
        return console.log("данные неверны");
        };
    };
    return  console.log("число простое");
    };

    // Задание 3. Фукнция высшего порядка.
    function firstCitizen (number){
        return function secondCitizen(num){
            return (number + num);
        };
    };
    let arg = firstCitizen (5);
    console.log(arg(6));

  // Задание 4. setInterval.

function printNum(a,b) {
    setInterval(function() {
    let poket = "";
    for (let i = a; i <= b; i++)
    poket += i;
    console.log(poket);
    }, 1000);
    };
    printNum(5,10);

    // Задание 5. Стрелочгная функция.
    const foo = (x,n) => x ** n;
    console.log(foo(3,3))
