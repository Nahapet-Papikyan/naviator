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
        <input type="number" v-model="bet0.bet" v-if="!startGame || !bet0.isBet" />
        <input type="text" disabled="disabled" v-if="startGame || bet0.isBet" v-model="bet0.winCount" />

        
        <button @click="() => bet_(0)" v-if="!startGame || !bet0.isBet" :disabled="!betStarts  || bet0.isBet">
          Խազադրույք
        </button>
        <button @click="() => getBet(0)" v-if="bet0.isBet || startGame" >
          Հանել!
        </button>
      </div>
      <div class="_bet_item">
        <input type="number" v-model="bet1.bet" v-if="!startGame || !bet1.isBet" />
        <input type="text" disabled="disabled" v-if="startGame || bet1.isBet" v-model="bet1.winCount" />

        <button @click="() => bet_(1)" v-if="!startGame || !bet1.isBet" :disabled="!startGame || !bet1.isBet">
          Խազադրույք
        </button>
        <button @click="() => getBet(1)" v-if="bet1.isBet || bet1.isBet" :disabled="startGame || bet1.isBet">
           startGame" >
          Հանել!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Bet } from "../js/classes";
import { mapState } from "vuex";

export default {
  name: "Aviator",

  props: ["startGame", "betStarts", "kfc", "isFly" ],

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
        this.bet0.winCount = this.bet1.bet * newVal;
      }
      if(this.bet1.isBet) {
        this.bet1.winCount = this.bet1.bet * newVal;
      }
      _;
    },
  },

  inject: ["bet"],

  data() {
    return {
      bet0: {
        isBet: false,
        bet: '',
        winCount: ''
      },
      bet1: {
        isBet: false,
        bet: '',
        winCount: ''
      },
    };
  },

  computed: {
    ...mapState(["gamer"]),
  },

  methods: {
    bet_(betId) {
      if (!this[`bet${betId}`].isBet) {
        let bet = new Bet(this.gamer.name, this[`bet${betId}`].bet, this.gamer.id);
        this.bet(bet);
        this[`bet${betId}`].isBet = true;
        this[`bet${betId}`].winCount = this[`bet${betId}`].bet;
      }
    },
    // getBet(betId) {

    // }
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
  padding: 1rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

._bet_item input {
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
