const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDisplay = document.getElementById('result');
const errorMessage = document.getElementById('error-message');

const btnAdd = document.getElementById('add');
const btnSubtract = document.getElementById('subtract');
const btnMultiply = document.getElementById('multiply');
const btnDivide = document.getElementById('divide');

function calculate(operation) {
    // Очищаємо попередні повідомлення
    errorMessage.textContent = '';
    resultDisplay.textContent = '0';

    const val1 = num1Input.value.trim();
    const val2 = num2Input.value.trim();

    // Перевірка на пусті поля
    if (val1 === '' || val2 === '') {
        errorMessage.textContent = 'Помилка: Введіть обидва числа!';
        return;
    }

    const number1 = Number(val1);
    const number2 = Number(val2);

    // Перевірка на некоректні дані (літери замість чисел)
    if (Number.isNaN(number1) || Number.isNaN(number2)) {
        errorMessage.textContent = 'Помилка: Введено некоректні дані! Вводьте лише цифри.';
        return;
    }

    let res = 0;

    // Виконання математичних операцій
    if (operation === '+') {
        res = number1 + number2;
    } else if (operation === '-') {
        res = number1 - number2;
    } else if (operation === '*') {
        res = number1 * number2;
    } else if (operation === '/') {
        if (number2 === 0) {
            errorMessage.textContent = 'Помилка: Ділення на нуль неможливе!';
            return;
        }
        res = number1 / number2;
    }

    // Заокруглення до сотих, якщо результат не є цілим числом
    if (!Number.isInteger(res)) {
        res = Number(res.toFixed(2));
    }

    resultDisplay.textContent = res;
}

// Прив'язка подій до кнопок
btnAdd.addEventListener('click', function() { calculate('+'); });
btnSubtract.addEventListener('click', function() { calculate('-'); });
btnMultiply.addEventListener('click', function() { calculate('*'); });
btnDivide.addEventListener('click', function() { calculate('/'); });