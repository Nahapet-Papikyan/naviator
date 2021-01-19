const USERS = [];

const MASSEGES = [];

const BETS = [];

const BET_TIME = 5000; // on miliseconds
const SHOW_UP_CALFICENT_TIME_POW = 100; // calficent * SHOW_UP_CALFICENT_TIME_POW
const WAITING_AFTER_BET = 2000; // after bet await 
const WATTING_FOR_START_GAME = 1000;
const SHOW_KALFICENT_TIME = 4000;
const KALFICENTS = [1.1, 1.2, 1.3, 3.5, 1.1, 1.1, 1.85, 5.36, 2.3, 1, 6, 5.36, 8.5, 7, 1.12, 1.9, 1.8, 1.36, 1.87, 1.36];
// const KALFICENTS = [10, 7, 9, 15, 8, 7, 6];

function SocketInit(io) {
  io.on('connection', socket => onConnect(socket));
  gameConfig.startGame(io);
}


function onConnect(socket) {

  let requestData = socket.request;
  let { id, name, balance, color } = requestData._query;

  let user = USERS.find(item => item.id === id);

  if (id && name && balance && color && !user) {
  
    USERS.push({ id, name, balance, socket, color })
    console.log("connected user is :", name);
    console.log("users count on connect :", USERS.length);

    socket.emit('successful-connection', { ms: { id, name, balance, color }, msgs: MASSEGES, bets: BETS, users: USERS.length })
    gameConfig.io.emit('online-users', {users: USERS.length})

    setSocketListneres(socket);
  }
}

function setSocketListneres(socket) {

  socket.on('new-massege', (data) => {
    MASSEGES.push(data);
    gameConfig.io.emit('new-massege', data)
  })

  

  socket.on('disconnect', () => {

    let user = USERS.find(item => item.socket.id === socket.id);

    console.log("DISconnected user is :", user.name);

    USERS.splice(USERS.indexOf(user), 1);

    console.log("users count before disconnect:", USERS.length);

    USERS.forEach(_user => _user.socket.emit('online-users', {users: USERS.length}))

  });

  socket.on('bet', (bet) => {
    BETS.push(bet);
    console.log('bet');
    // USERS.forEach(_user => _user.socket.emit('one-bet', {bet: bet}))

    // socket.broadcast.emit('one-bet', {bet: bet});
    gameConfig.io.emit('one-bet', {bet})
  })

}



const gameConfig = {

  io: null,

  kalficents: KALFICENTS,

  kalficent: KALFICENTS[Math.floor(Math.random() * (KALFICENTS.length))],


  async startGame(io) {
    this.io = io;

    for(let i = 0; ; ){
      io.emit('online-users', {users: USERS.length})

      BETS.splice(0, BETS.length);
      io.emit('all-bets', {bets: BETS });

      io.emit('start-bets');
      console.log('start-bets');


      await wait(BET_TIME);

      io.emit('end-bets');
      console.log('end-bets');


      await wait(WAITING_AFTER_BET)

      io.emit('start-show-game');


      await wait(WATTING_FOR_START_GAME);

      let i = 100,
          j = 0,
          timer = 200,
          upKcf = 4,
          kfc = 0;
      console.log('start-show-game');

      while (i < this.kalficent * SHOW_UP_CALFICENT_TIME_POW) {
        if(j > 10 && timer > 70) {  
          timer -= 7;
          upKcf += 2
          j = 0;
        }
        io.emit('show-kalficent', {kfc: (i / 100)})
        await wait(Math.floor(Math.random() * timer) + timer / 4)
        i += Math.floor(Math.random() * upKcf)
        j++;
        kfc = this.kalficent
      }

      io.emit('flew-away', {kfc})

      console.log(this.kalficent * SHOW_UP_CALFICENT_TIME_POW + 3000);

      // await wait((this.kalficent * SHOW_UP_CALFICENT_TIME_POW) + 2000)
      await wait(SHOW_KALFICENT_TIME)

      io.emit('end-one-game')
      console.log('end-one-game');

      // for next game
      this.kalficent = this.kalficents[Math.floor(Math.random() * (this.kalficents.length))];

    }
// BET_TIME + WAITING_AFTER_BET + (this.kalficent * SHOW_UP_CALFICENT_TIME_POW) + 2000)
  }
}

  async function wait(time) {
    return await new Promise(res => {
      setTimeout(() => { res(true) }, time)
    })
  }

module.exports = SocketInit

