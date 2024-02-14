document.addEventListener('DOMContentLoaded', () => {
    const addExpenseButton = document.getElementById('add-expense-button');
    const expenseInput = document.getElementById('expense-input');
    const expensesList = document.getElementById('expenses-list');
    const totalExpensesElement = document.getElementById('total-expenses');

    addExpenseButton.addEventListener('click', () => {
        const expenseValue = expenseInput.value;

        if (!expenseValue || expenseValue === '') return;

        const newExpenseItem = Expenses.createExpenseItem(expenseValue);
        Expenses.addExpense(newExpenseItem);
        Expenses.renderExpensesList(expensesList);
        Expenses.calculateTotalExpenses(totalExpensesElement);

        expenseInput.value = '';
    });
});