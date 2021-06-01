<template>
  <div class="container">
    <div class="logo-group">
      <a class="go-back" @click="goBack()">
        <img src="@/assets/back-icon.svg" alt="" class="home-icon" />
      </a>
      <img class="logo" src="@/assets/logo.svg" alt="" />
    </div>
    <p class="subheader">{{ $store.state.chosen_makam.name }}</p>
    <p class="subtext">
      {{ $store.state.chosen_makam.text }}
    </p>
    <div class="scale-container">
      <img :src="getImg($store.state.chosen_makam.image_url)" alt="" />
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "detailpage",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    getImg(pic) {
      return require("../assets/Makams/" + pic);
    },
    goBack() {
      router.push({
        name: "Makams",
        params: { url: this.$store.state.chosen_category.url },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.subheader {
  font-size: 35px;
}
.subtext {
  color: $subtext-color;
  font-size: 22px;
}
.scale-container {
  margin-top: 5em;
  padding: 1em;
  border-radius: 10px;
  background-color: $secondary-color;
  margin-inline: auto;
  width: calc(min(100%, 600px));
  img {
    width: 100%;
    border-radius: 10px;
  }
}
.go-back {
  cursor: pointer;
}
</style>
