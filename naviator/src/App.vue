<template>
  <div id="app">
    <Game v-if="gamer"/>
    <Register v-if="!gamer"/>
  </div>
</template>

<script>
import Game from './components/game.vue';
import Register from './components/Register.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',

  computed: {
    ...mapState(['gamer'])
  },

  components: {
    Game,
    Register,
  },

  data() {
    return {
      socket: null,
    }
  },

  // created() {
  //   this.setGamer(null);
  // },

  methods: {
    ...mapActions(['setGamer']),
  }
}
</script>

<style>

:root {
  --bg: #101011;
}

html {
  font-family: cursive;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: cursive;
}
#app {
  display: block;
  width: 100%;
  height: 100vh;
  background-color: var(--bg);
  overflow: hidden;
  font-family: cursive;
}

::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgba(136, 136, 136, 0);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(31, 31, 31, 0);

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(43, 43, 43);
}

.user_icon {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  color: white;
  text-align: center;
  text-align-last: center;
  font-size: 18px;

}

</style>
