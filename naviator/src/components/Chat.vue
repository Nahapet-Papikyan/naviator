<template>
  <div class="chat_content">
    <div class="chat_header">
      <div class="online_users">
        Օնլայն։
        <div class="_s" />
        <span>{{ onlineUsers }}</span>
      </div>
      <div class="chat_head_text">ՉԱԹ</div>
      <div class="close_chat" @click="() => closeChat()">
        <b>X</b>
      </div>
    </div>
    <div class="chat_continer">

      <div class="chat_cont">
        <div class="chat_ms_item" v-for="msg of msgs" :key="msgs.indexOf(msg)">
          <div class="name">
            <div class="user_icon" :style="{ 'background-color': msg.color }">
              {{ msg.from[0] }}
            </div>
            {{ msg.from }}
          </div>
          <div class="mass">
            {{ msg.msg }}
          </div>
        </div>
      </div>

      <div class="new_mass">
        <input type="text" v-model="massege" />
        <button
          @click="
            () => {
              sendMassege(massege);
              massege = '';
            }
          "
        >
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "chat",

  inject: ["sendMassege", 'closeChat'],

  computed: {
    ...mapState(["color"]),
  },

  props: ["msgs", "onlineUsers"],


  data() {
    return {
      massege: "",
    };
  },
};
</script>

<style>
.chat_content {
  border: solid 1px rgb(56, 56, 56);
  width: 100%;
  height: 100%;
}

.chat_header {
  width: 100%;
  height: 40px;
  border-bottom: solid 1px rgb(56, 56, 56);
  box-shadow: 0 0 3px 3px black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  font-size: 13px;
}

.online_users {
  color: dimgray;
  height: 100%;
  display: flex;
  align-items: center;
}

.online_users span {
  color: white;
  margin-left: 4px;
}

.online_users ._s {
  background-color: rgb(0, 226, 0);
  box-shadow: 0 0 2px 2px green;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  margin-left: 4px;
}
.close_chat {
  cursor: pointer;
}
.close_chat :hover {
  font-size: 14px;
}

.chat_continer {
  width: 100%;
  height: 100%;
  display: block;
  max-height: 100%;
}

.chat_cont {
  width: 100%;
  height: calc(100% - 100px);
  height: calc(100% - 100px);
  overflow: auto;
}

.chat_ms_item {
  display: block;
  text-align: center;
  margin-top: 10px;
  padding: 5px;
  color: rgb(152, 155, 155);
}
.chat_ms_item .name {
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 13px;
  color: rgb(197, 201, 201);
}
.chat_ms_item .mass {
  padding-left: 7px;
  text-align: left;
  font-size: 11px;
}
.new_mass {
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  border-top: solid 1px rgb(56, 56, 56);
}
.new_mass input {
  width: 60% !important;
  padding: 2px;
  margin-left: 3%;
}
.new_mass button {
  margin-left: 3%;
  width: 20%!important;
  padding: 0;
}
</style>