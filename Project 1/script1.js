document.getElementById('expenses-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let input = document.getElementById('expenses-input');
    let totalExpenses = document.getElementById('total-expenses').querySelector('span');
    let currentTotal = parseFloat(totalExpenses.textContent.replace('$', ''));
    if (!isNaN(currentTotal)) {
        currentTotal += parseFloat(input.value);
    } else {
        currentTotal = parseFloat(input.value);
    }
    totalExpenses.textContent = '$' + currentTotal.toFixed(2);
    input.value = '';
});