let a = parseInt(prompt("Введите первое число"));
let b = parseInt(prompt("Введите второе число"));
let sum = 0;

for(let i=a; i<=b; i++) {
    if(i % 2 === 0) {
        sum += i;
    }
}

alert(`Сумма четных чисел в диапазоне от ${a} до ${b}: ${sum}`);