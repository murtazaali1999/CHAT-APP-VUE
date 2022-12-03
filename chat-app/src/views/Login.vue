<template>
  <div class="login-wrapper peach-background">
    <LoginCard />
  </div>
</template>

<script>
import LoginCard from "../components/LoginCard.vue";
export default {
  setup() {},
  components: {
    LoginCard,
  },
};
</script>

<style lang="scss" scoped>
.login-wrapper {
  width: 100%;
  height: 700px;
}

.peach-background {
  background-color: #ea526f;
}
</style>
