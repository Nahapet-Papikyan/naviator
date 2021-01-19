export class Bet {
  constructor(name, bet, id, betIndex) {
    this.userId = id;
    this.betId = id + betIndex;
    this.name = name;
    this.bet = bet;
    this.status = 'wait'
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