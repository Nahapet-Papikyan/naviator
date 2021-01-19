<template>
  <div class="game">
    <div class="continer">
      <audio ref="betNotify" src="../assets/soft_notification.mp3" style="display: none" />
      <div class="_aviator_">

        <div class="header_">
          <Header :balance="gamer.balance" :isAvtiveChat="activeChat" />
        </div>
        <div class="bets_">
          <Bets :bets="bets" ref="Bets" />
        </div>
        <div class="aviator_">
          <Aviator :startGame="startGame" :betStart="betStart" :kfc="kfc" :betStarts="activeBet" :isFly="isFly" />
        </div>
      </div>


      <div class="chat_" v-if="activeChat">
        <Chat :msgs="msgs" :onlineUsers="onlineUsers"/>
      </div>
    </div>

  </div>
</template>

<script>
import Bets from './Bets.vue'
import { mapState } from 'vuex';
import Chat from './Chat.vue';
import Header from './Header.vue';
import Aviator from './Aviator';
import io from 'socket.io-client';


export default {
  name: 'Game',

  provide() {
    return {
      sendMassege: this.sendMassege,
      bet: this.bet,
      closeChat: () => {this.activeChat = false},
      openChat: () => {this.activeChat = true},
      getBet: this.getBet,

    }
  },

  computed: {
    ...mapState(['gamer', 'isNotify'])
  },

  components: {
    Header,
    Bets,
    Aviator,
    Chat
  },

  data() {
    return {
      bets: [],

      betStart: false,
      msgs: [],
      socket: null,
      activeBet: false,
      startGame: false,
      kfc: false,
      onlineUsers: 0,
      activeChat: true,
      isFly: false,
    }
  },

  async created() {

    const URL = window.location.origin;
    // this.socket = io.connect('https://naviator-app.herokuapp.com/', { query: `id=${gamer.id}&name=${gamer.name}&balance=${gamer.balance}&color=${gamer.color}` });
    this.socket = io.connect(URL, { query: `id=${this.gamer.id}&name=${this.gamer.name}&balance=${this.gamer.balance}&color=${this.gamer.color}` });

    // this.socket = io.connect('http://localhost:3000/', { query: `id=${this.gamer.id}&name=${this.gamer.name}&balance=${this.gamer.balance}&color=${this.gamer.color}` });
    this.setSocketLisstenets()
  },

  methods: {

    sendMassege(mss) {
      this.socket.emit('new-massege', {from: this.gamer.name, msg: mss, like: 0, color: this.gamer.color})
      console.log('new-message');
      this.activeChat = true
    },

    setSocketLisstenets() {
      let _this = this;

      //connect

      this.socket.on('successful-connection', ({msgs, bets, users}) => {
        console.log('successful-connection');
        this.msgs = msgs;
        this.bets = bets;
        this.onlineUsers = users;
      });

      this.socket.on('online-users', ({users}) => {
        _this.onlineUsers = users;
      })

      this.socket.on('one-bet', ({bet}) => {
        console.log(bet);
        _this.bets.push(bet);
        _this.$refs.Bets.$forceUpdate()
        if(this.isNotify) {
          this.$refs.betNotify.play()
        }
      })

      // messages 
      
      this.socket.on('new-massege', (data) => {
        _this.msgs.push(data)
        _this.activeChat = true
        console.log('new-message')
      });

      //start game loop

      this.socket.on('start-bets', () => {
        console.log('startBets');
        _this.activeBet = true
        _this.isFly = false;
      });

      this.socket.on('end-bets', () => {
        console.log('endBets');
        _this.activeBet = false
      })

      this.socket.on('start-show-game', () => {
        console.log('start-show-game');
        _this.startGame = true;
      })

        // start kalficent loop
      this.socket.on('show-kalficent', ({kfc}) => {
        _this.kfc = kfc;
      })

      this.socket.on('flew-away', ({kfc}) => {
        _this.kfc = kfc;
        _this.isFly = true;
        console.log('fly');
      })

      this.socket.on('end-one-game', () => {
        console.log('end-one-game');
        _this.kfc = false
        _this.startGame = false;
        _this.bets = [];
      })

      this.socket.on('geted-bet', (_bet) => {
        console.log(_bet);
        let currentBet = this.bets.find(bet => bet.betId === _bet.betId);
        console.log(currentBet);

        this.bets[this.bets.indexOf(currentBet)] = _bet;
        let _bets = this.bets;
        this.bets = [];
        this.bets = _bets
        console.log(this.bets);
        _this.$refs.Bets.$forceUpdate()
      })

    },

    bet(betData) {
      this.socket.emit('bet', betData);
      console.log(betData);
    },

    getBet(betId, int, winC ) {
      this.socket.emit('get-bet', {betId, int, winC});
    },

    startBetting() {
      
    },
    endBetting() {
      
    } 
  }
}
</script>

<style>

.game {
  display: block;
  width: 100%;
  height: 100%;
}

.continer {
  width: 100%;
  height: 100%;
  display: flex;
}

._aviator_ {
  width: 80%;
  height: 100%;
}

.bets_ {
  width: 30%;
  height: 95%;
  float: left;
}

.aviator_ {
  width: 70%;
  height: 100%;
  float: left;
}

.chat_ {
  width: 20%;
  height: 100%;
}
@media only screen and (max-width: 1120px) {
  .continer {
    position: relative;
  }
  .header_ {
    z-index: 99999999999999;
    position: fixed;
    width: 80%;
  }
  ._aviator_ {
    overflow: auto;
    position: relative;
  }
  .bets_ {
    position: absolute;
    width: 100%;
    top: 100%
  }
  .aviator_ {
    margin-top: 60px;
    width: 100%;
    float: right;
  }
  .chat_ {
    z-index: 99999999999;
  }
}

@media only screen and (max-width: 850px) {
  .continer {
    position: relative;
  }
  .header_ {
    position: fixed;
    width: 100%;
  }
  ._aviator_ {
    width: 100%;
  }
  .bets_ {
    position: absolute;
    width: 100%;
  }
  .chat_ {
    position: fixed;
    width: 100%;
    background-color: #101011;
  }
  .aviator_ {
    margin-top: 60px;
    width: 100%;
    float: right;
  }
}

@media only screen and (max-width: 680px) {
  .continer {
    position: relative;
    
  }
  .header_ {
    position: fixed;
    width: 100%;
  }
  ._aviator_ {
    width: 100%;
  }
  .bets_ {
    position: absolute;
    width: 100%;
    top: 100%
  }
  .chat_ {
    position: fixed;
    width: 100%;
    background-color: #101011;
  }
  .aviator_ {
    margin-top: 60px;
    width: 100%;
    float: right;
  }
}

@media only screen and (max-width: 450px) {

  .bets_ {
    top: 89%
  }
  .aviator_ {
    height: 80%;
  }

  .kfc {
    font-size: 25px;
  }

}


</style>
