document.getElementById('expensesForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const product = document.getElementById('product').value;
    const price = parseFloat(document.getElementById('price').value);

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${product}</td>
        <td>$${price.toFixed(2)}</td>
    `;

    document.getElementById('expensesTable').appendChild(row);

    const total = parseFloat(document.getElementById('total').textContent) + price;
    document.getElementById('total').textContent = total.toFixed(2);

    document.getElementById('product').value = '';
    document.getElementById('price').value = '';
});