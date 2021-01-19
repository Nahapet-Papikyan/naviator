<template>
  <div class="header">
    <div class="headder_content">
      <div class="icon">
        <b>  Naviator </b>
      </div>

      <div class="balance_continer">
        <div class="balance">
          {{balance}} $
        </div>
        <div class="config">
          <button @click="clearGamer">Կրկին</button>
          <button @click="openChat" v-if="!isAvtiveChat">ՉԱԹ</button>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex';


export default {

  props: ['balance', 'isAvtiveChat'],

  name: 'Header',

  inject: ['openChat'],
  
  methods: {
    ...mapActions(['setGamer']),

    clearGamer() {
      this.setGamer(null);
      window.location.reload()
    }
  }
}
</script>

<style>
.header {
  width: 100%;
  padding: 4px;
  background-image: url(../assets/bg.png);
  border-bottom: 1px solid rgb(68, 68, 68);
  height: 40px;
  box-shadow: 0 0 3px 3px  black;
  z-index: 8888888;
}

.headder_content {
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.icon{
  color: brown;
  font-family: cursive;
  font-size: 23px;
  padding-left: 30px;
}

.balance_continer {
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  align-items: center;
  justify-items: baseline;
}

.balance {
  text-align: right;
  padding: 2px 12px;
  margin-right: 25px;
  min-width: 100px;
  border: solid 1px rgb(68, 68, 68);
  border-radius: 20px;
  background-color: rgba(70, 70, 70, 0.192);
  color: rgb(167, 167, 167);
  font-size: 14px;
}

.config button {
  padding: 2px 6px !important;
  font-size: 13px;
  background: rgb(138, 138, 138);
  color: aliceblue;
  margin: 0;
  cursor: pointer;
  margin-right: 6px;
}

@media only screen and (max-width: 400px) {
  .icon {
    padding: 0;
    font-size: 20px;
  }
  .balance_continer {
    padding: 0;
  }
  .balance {
    margin: 0;
    margin-right: 5px;
  }

}


</style>