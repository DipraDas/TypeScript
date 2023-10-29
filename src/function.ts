const person: {
    name: string,
    balance: number,
    addBalance(money: number): string;
} = {
    name: 'Dip',
    balance: 20,
    addBalance(money: number) {
        return `My new balance : ${this.balance + money}`
    }
}