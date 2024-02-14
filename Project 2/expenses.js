class ExpenseItem {
    constructor(value) {
        this.value = value;
    }
}

class Expenses {
    static expenses = [];

    static createExpenseItem(value) {
        return new ExpenseItem(value);
    }

    static addExpense(expense) {
        this.expenses.push(expense);
    }

    static renderExpensesList(expensesList) {
        expensesList.innerHTML = '';
        this.expenses.forEach(expense => {
            const li = document.createElement('li');
            li.textContent = expense.value;
            expensesList.appendChild(li);
        });
    }

    static calculateTotalExpenses(totalExpensesElement) {
        const totalExpenses = this.expenses.reduce((acc, expense) => acc + parseFloat(expense.value), 0);
        totalExpensesElement.textContent = `Total Expenses: $${totalExpenses.toFixed(2)}`;
    }
}