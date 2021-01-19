export class Bet {
  constructor(name, bet, id) {
    this.userId = id;
    this.name = name;
    this.bet = bet;
    this.interest = '-';
    this.winCount = '-';
  }
  win(interest) {
    this.interest = interest;
    this.winCount = this.bet * this.interest
  }

  lose() {

  }
 }