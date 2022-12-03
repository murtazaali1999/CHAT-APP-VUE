<template>
  <!-- if the state is null then show login card -->
  <div
    class="login-card"
    v-if="state.username === '' || state.username === null"
  >
    <div class="login-card-l background-color">
      <h1>Login to FireChat</h1>
      <form @submit.prevent="login()">
        <label for="username" class="username">Username</label>
        <input v-model="userName" type="text" placeholder="Enter Username" />
        <input type="submit" value="Login" />
      </form>
    </div>
  </div>
  <div v-else v-on="openChat()" />
</template>

<script>
import { reactive, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import firebase from "../firebase";

import Chat from "../views/Chat.vue";

export default {
  setup() {
    const router = useRouter();

    const userName = ref("");
    const state = reactive({
      username: "",
      messages: [],
    });

    const login = () => {
      if (userName.value != undefined || userName.value != null) {
        state.userName = userName.value;
        userName.value = "";

        openChat();
      }
    };

    const openChat = () => {
      router.push("/chat");
    };

    return { userName, state, login, openChat };
  },
  component: { Chat },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, Helvetica, sans-serif;
}

.login-card {
  width: 100%;
  height: 300px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.login-card-l {
  margin-top: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 330px;
  width: 390px;

  border-radius: 8%;
}

.background-color {
  background-color: white;
}

.peach-background {
  background-color: #ea526f;
}

.white-color {
  color: white;
}

h1 {
  margin-right: 55px;
  margin-bottom: 30px;
  color: rgb(158, 158, 158);
}

input[type="text"] {
  display: block;
  width: 300px;
  height: 45px;
}

label {
  color: grey;
  font-size: 15px;
  font-weight: 600;
}

input[type="submit"] {
  display: block;

  width: 100%;
  height: 45px;

  margin: auto;
  margin-top: 15px;

  background-color: #ea526f;
  color: white;
  font-size: 20px;
  font-weight: 700;

  border: none;

  border-radius: 10px;
}
</style>
