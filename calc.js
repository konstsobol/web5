const selected_product = document.getElementById('product');
const selected_quantity = document.getElementById('quantity');
const confirm_button = document.getElementById('confirm_btn');
const result = document.getElementById('total');

function Calculator(){
    const price = parseInt(selected_product.value);
    const number = parseInt(selected_quantity.value);
    const total = price * number;
    if(number < 0 || isNaN(number))
        result.textContent = 'Введите корректное число продуктов!';
    else 
        result.textContent = 'Стоимость: ' + total.toString() + ' рублей';
}

confirm_button.addEventListener('click', Calculator);