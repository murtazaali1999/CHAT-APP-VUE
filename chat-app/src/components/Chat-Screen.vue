<template>
  <div class="chat-screen">
    <div class="chat-header">
      <h1>Welcome, {{}}</h1>
      <p v-on="logOut">Logout</p>
    </div>
    <div class="screen"></div>
    <div class="chat-text">
      <form @submit.prevent="">
        <input type="text" placeholder="Write a Message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const logOut = () => {
      router.push("/login");
    };

    return { logOut };
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, Helvetica, sans-serif;
}

.chat-screen {
  width: 100%;
  height: 800px;

  background-color: #ea526f;
  color: white;
}

.chat-header {
  display: grid;
  grid-template-columns: 5fr 1fr;

  align-items: center;

  padding-top: 20px;

  h1 {
    color: white;
    justify-self: left;
    margin-left: 10px;
  }

  p {
    color: white;
    justify-self: left;
  }

  h1:hover {
    color: gray;
  }

  p:hover {
    color: gray;
  }
}

.screen {
  width: 100%;
  height: 530px;

  margin-top: 10px;

  border-radius: 20px;

  background-color: white;
}

.chat-text {
  margin: auto;
  margin-top: 10px;
  margin-left: 6px;
  height: 200px;
}

input[type="text"] {
  display: inline-block;
  width: 260px;
  height: 45px;
}

input[type="submit"] {
  display: inline-block;
  width: 80px;

  height: 45px;

  background-color: white;

  border: none;
  border-radius: 0px 10px 10px 0px;
  color: #ea526f;
}
</style>
