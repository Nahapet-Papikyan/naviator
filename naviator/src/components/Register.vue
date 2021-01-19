<template>
  <div class="register" :class="{'hide': isSendet}">
    <div class="popup">
      <p>Your Name</p>
      <input type="text" placeholder="Enter Name" v-model="name" @input="check" @change="check" @click="check" @keydown="check">
      <p>Balance</p>
      <input type="text" placeholder="Enter Your start Balance" v-model="balance" @input="check" @change="check" @click="check" @keydown="check">

      <div class="button_cont">

        <button :class="[isActive ? 'active' : 'disable']" :disabled="!isActive" @click="setUser" >Start !</button>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { v4 as uuidv4 } from 'uuid';


export default {
  name: 'Register',

  data() {
    return {
      name: '',
      balance: '',
      isActive: false, 
      isSendet: false
    }
  },

  methods: {
    ...mapActions(['setGamer', 'set']),

    check() {     
      if(this.name && this.balance) {
        this.isActive = true;
      }
      else {
        this.isActive = false;
      }
    },

    setUser() {
      let user = {name: this.name, balance: this.balance, id: uuidv4(), color: `#${Math.floor(Math.random() * 16777216).toString(16)}` };
      setTimeout(() => { this.setGamer(user) }, 1000);
      this.isSendet = true
    }
  }
}
</script>

<style>
.register {
  transition: all 1s;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: url(../assets/bg.png);
}

.hide {
  opacity: 0;
}
.popup {
  width: 40%;
  position: relative;
  margin: 0 auto;
  margin-top: 20vh;
  background-color: rgba(31, 31, 31, 0.589);
  text-align: center;
  padding: 25px;
  color: white;
  font-size: 25px;
  min-width: 330px;
}
p {
  margin-top: 20px;
}
input {
  background-color: rgb(199, 199, 199);
  border: none;
  padding: 5px;
  font-size: 18px;
  width: 80%;
  border-radius: 8px;
  outline: none;
  padding: 10px;
  color: rgb(25 25 25);
}

.button_cont {
  width: 100%;
  text-align: center;
}
button {
  margin-top: 20px;
  font-size: 17px;
  padding: 7px 30px;
  border: none;
  border-radius: 3px;
  transition: all .4s;
}

.active {
  color: rgb(208, 208, 208);
  background-color: rgb(158, 25, 25);
  cursor: pointer;
}
.active:hover {
  color: aliceblue;
  background-color: rgb(237, 0, 0);
}

.disable {

  background-color: rgb(34, 34, 34);
}

</style>