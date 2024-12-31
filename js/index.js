//Напиши сценарій керування особистим кабінетом інтернет-банку.
// Є об'єкт account в якому необхідно реалізувати методи для
//  роботи з балансом та історією транзакцій.


const account = {
  owner: 'Alina',
  balance: 1000,
  transactions: [],
  getBalance() {
    return this.balance;
  },
  addTransaction(type, amount) {
    const transaction = {
      type,
      amount,
      date: new Date().toLocaleString()
    };
    this.transactions.push(transaction);
  },
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.addTransaction('deposit', amount);
      console.log(`Поповнення на ${amount} грн. Залишок на рахунку: ${this.balance} `);
    } else {
      console.log('Сума для поповнення повинна бути більше 0.');
    }
  },
  withdraw(amount) {
    if (amount <= 0) {
      console.log('Сума для зняття повинна бути більше 0.');
      return;
    }
    if (amount > this.balance) {
      console.log('Недостатньо коштів на рахунку.');
    } else {
      this.balance -= amount;
      this.addTransaction('withdrawal', amount);
        console.log(`Зняття ${amount} грн. Залишок на рахунку: ${this.balance}`);
    }
  },
  getTransactionHistory() {
    if (this.transactions.length === 0) {
      console.log('Немає транзакцій.');
      return;
    }
    console.log('Історія транзакцій:');
    this.transactions.forEach(({ type, amount, date }, index) => {
      console.log(`${index + 1}. ${type} - ${amount} (Дата: ${date})`);
    });
  }
};

