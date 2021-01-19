<template>
  <div class="bets_container">
    <div class="bet_connt">
      <div class="bet_head">
        Ընդհամենը ։ <span>{{bets.length}}</span>
      </div>
      <div class="bet_title" >
          <div class="bet_overner_name bet_item">
            Խազացող
          </div>
          <div class="bet_overner_name bet_item">
            Խազադրույք
          </div>
          <div class="bet_overner_name bet_item">
            Գործակից
          </div>
          <div class="bet_overner_name bet_item">
            Շահում
          </div>
        </div>
      <div class="bets_content">
        <div class="bet" v-for="bet of bets" :key="bet.userId + Math.floor(Math.random() * 20)" 
          :class="{'win': bet.status === 'win'}">
          <div class="bet_overner_name bet_item">
            {{bet.name}}
          </div>
          <div class="bet_overner_name bet_item">
            {{bet.bet}}
          </div>
          <div class="bet_overner_name bet_item">
            {{bet.interest}}
          </div>
          <div class="bet_overner_name bet_item">
            {{bet.winCount}}
          </div>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bets',

  props: ['bets'],

  watch: {
    bets() {
      this.$forceUpdate();
      console.log('update');
    }
  }

}
</script>

<style>
.bets_container {
  padding: 1rem;
  height: 100%;
  /* padding: 15px 0; */

}
.bet_connt {
  width: 100%;
  height: 100%;
  border: solid 1px rgb(56, 56, 56);
  border-radius: 15px;
  padding: 10px 0px;
  background-image: url(../assets/bg.png);
}
.bet_head {
  width: 100%;
  padding: 5px;
  padding-bottom: 8px;
  font-size: 15px;
  color: white;
}

.bet_head span {
  color: rgb(33, 175, 33);
}

.bets_content {
  width: 100%;
  display: block;
  height: 100%;
  overflow: auto;
  max-height: 97%;
  padding-left: 3px;
}
.bet {
  width: 100%;
  height: min-content;
  display: flex;
  border: solid 2px black;
  border-radius: 20px;
  padding: 7px 3px;
  margin-top: 12px;
  text-align: center;
  background-image: linear-gradient(to right, rgb(7, 7, 7) , rgb(41, 41, 41));
  color: white;
  font-family: cursive;
  font-size: 13px;
}
.bet_title {
  width: 100%;
  height: min-content;
  display: flex;
  text-align: center;
  color: white;
  font-family: cursive;
  font-size: 11px;
  padding-bottom: 7px;
 }
.win {
  border: solid 2px green;
  background-image: linear-gradient(to right, rgb(19, 95, 19) , rgba(38, 226, 0, 0.481));
  box-shadow: 0 0 3px 2px #00c400;
}

.bet_item {
  width: 24%;
}

</style>