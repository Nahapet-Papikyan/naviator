<template>
  <div class="naviator_continer">
    <div class="naviator">
      <div class="kfc" v-if="kfc" :class="{ redKfc: isFly }">
        <h1>{{ kfc }} X</h1>
        <h1 class="redKfc" v-if="isFly">Թռավ ~</h1>
      </div>
      <div class="start_bets">
        <div class="loading" v-if="betStarts">
          <h1>Նոր Փուլը Սկսվում Է</h1>
        </div>
      </div>
      <div class="gif" :class="{ passive: !startGame, fly: isFly }"></div>
    </div>
    <div class="_bet">
      <div class="_bet_item">
        <p class="err_msg">{{ msg ? msg : ''}} </p>
        <input type="number" v-model="bet0.bet" :disabled="startGame || bet0.isBet" />
        <button @click="() => bet_(0)" v-if="!startGame || !bet0.isBet" :disabled="!betStarts  || bet0.isBet">
          Դնել
        </button>
        <button @click="() => _getBet(0)" v-if="bet0.isBet && startGame" >
          Հանել!
        </button>
      </div>
      <div class="_bet_item">
        <p class="err_msg">{{ msg ? msg : ''}} </p>
        <input type="number" v-model="bet1.bet" :disabled="startGame || bet1.isBet" />
        <button @click="() => bet_(1)" v-if="!startGame || !bet1.isBet" :disabled="!betStarts  || bet1.isBet">
          Դնել
        </button>
        <button @click="() => _getBet(1)" v-if="bet1.isBet && startGame" >
          Հանել!
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import { Bet } from "../js/classes";
import { mapState, mapActions } from "vuex";

export default {
  name: "Aviator",

  props: ["startGame", "betStarts", "kfc", "isFly" ],

  inject: ["bet", 'getBet'],


  watch: {
    betStarts(newVal, _) {
      // watch it
      if (newVal) {
        this.bet0.isBet = false;
        this.bet1.isBet = false;
      }
      _;
    },
    kfc(newVal, _) {
      // watch it
      if(this.bet0.isBet) {
        this.bet0.bet =  Math.round(this.bet0._bet * newVal * 100)/100 ;
      }
      if(this.bet1.isBet) {
        this.bet1.bet =  Math.round(this.bet1._bet * newVal * 100)/100 ;
      }
      _;
    },

    isFly(newV, oldV) {
      if(newV) {
        this.lose();
      }
      oldV;
    }
  },


  data() {
    return {
      bet0: {
        isBet: false,
        bet: '',
        _bet: '',
      },
      bet1: {
        isBet: false,
        bet: '',
        _bet: '',

      },
      msg: false
    };
  },

  computed: {
    ...mapState(["gamer"]),
  },

  methods: {
    ...mapActions(['setGamer']),
    

    bet_(betId) {
      if(+this[`bet${betId}`].bet > 60000 )  {
        return this.alertMessage('Մաքսիմալ խաղադրույքի չափը 60000');
      }

      if(+this[`bet${betId}`].bet < 20 )  {
        return this.alertMessage('Մինիմալ խաղադրույքի չափը 20');
      }
      if(+this[`bet${betId}`].bet > +this.gamer.balance) {
        return this.alertMessage('Անբավարար միջոցներ');
      }

      if (!this[`bet${betId}`].isBet) {
        let bet = new Bet(this.gamer.name, this[`bet${betId}`].bet, this.gamer.id, betId);
        this[`bet${betId}`].isBet = true;
        this[`bet${betId}`]._bet = +this[`bet${betId}`].bet;
        this[`bet${betId}`].bet = +this[`bet${betId}`].bet;
        this.bet(bet);

      }
    },

    alertMessage(msg) {
      this.msg = msg;
      setTimeout(() => {
        this.msg = false;
      }, 3000)
    },

    _getBet(betId) {
      if(this[`bet${betId}`].isBet && this.kfc) {
        this.getBet(this.gamer.id + betId, this.kfc, this[`bet${betId}`].bet);
        this.setGamer({...this.gamer, balance: (Math.round((+this.gamer.balance + +this[`bet${betId}`].bet) * 100) / 100) })
        this[`bet${betId}`].bet = '';
        this[`bet${betId}`]._bet = '';
        this[`bet${betId}`].isBet = false
      }
    },
    lose() {
      let balance = this.gamer.balance;
      if(this.bet0.isBet) {
        balance -= this.bet0._bet;
      }
      if(this.bet1.isBet) {
        balance -= this.bet1._bet;
      }
      this.bet0.isBet = false;
      this.bet0.bet = '';
      this.bet0._bet = '';
      this.bet1.isBet = false;
      this.bet1.bet = '';
      this.bet1._bet = '';
      this.setGamer({...this.gamer, balance: (Math.round(balance * 100) / 100)})
    }
  },
};
</script>

<style>
.naviator_continer {
  width: 100%;
  height: 100%;
  padding: 1rem;
}

.naviator {
  width: 100%;
  height: 70%;
  border: solid 1px rgb(56, 56, 56);
  border-radius: 20px;
  background-color: #cceaf7;
  position: relative;
  transition: all 0.5s;
  overflow: hidden;
}

.gif {
  width: 100%;
  height: 100%;
  background-image: url(../assets/aviator.gif);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  transition: all 1.2s;
  bottom: 0%;
  left: 0%;
}
.passive {
  transition: all 1s;
  height: 130px;
  width: 50%;
  bottom: 38%;
  box-shadow: inset 0px 0px 20px 20px #c8eaf8;
  left: -100%;
}

.fly {
  transition: all 2s;
  height: 50px;
  width: 10%;
  background-size: 150%;
  bottom: 180%;
  box-shadow: inset 0px 0px 20px 20px #c8eaf8;
  left: 80%;
}

._bet {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 5px;
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
}

._bet_item {
  width: 50%;
  background-image: url(../assets/bg.png);
  padding: .5rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

._bet_item input {
  width: 90%;
  -webkit-appearance: none;
}

input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

._bet_item button {
  cursor: pointer;
  background-color: green;
}

._bet_item button:disabled {
  cursor: default;
  background-color: rgb(28, 90, 28);
  color: rgb(102, 102, 102);
}

.kfc {
  width: 100%;
  position: absolute;
  height: 60px;
  z-index: 555;
  top: 20%;
  text-align: center;
  font-size: 30px;
  color: rgb(87, 87, 87);
}

.redKfc {
  color: red;
}

.start_bets {
  position: absolute;
  width: 100%;
  height: auto;
  z-index: 999999;
  text-align: center;
  top: 20%;
}

.loading {
  width: 100%;
  height: 200px;
  background-image: url(../assets/loading.gif);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 25px;
  color: rgb(158, 161, 163);
}

.err_msg {
  color: crimson;
  margin: 0;
  min-height: 40px;
  font-size: 12px;
}

@media only screen and (max-width: 400px) {
  ._bet_item button {
    padding: 3px 7px;
    font-size: 15px;
  }

  ._bet_item {
    padding: 1rem 0.3rem;
  }

  .loading {
    font-size: 13px;
  }
}
</style>
