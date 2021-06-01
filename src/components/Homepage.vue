<template>
  <div class="container">
    <img class="logo" src="@/assets/logo.svg" alt="" />
    <p class="subtext">
      Turkish Makams is a library of simple and transposed makams in Turkish
      music, it’s meant to be a database for the people who are in need of a
      guide while learning.
    </p>
    <div class="items categories">
      <div
        class="item"
        v-for="(category, index) in categories"
        :key="category.name"
        @click="route(index, category.url)"
      >
        <p>{{ index + 1 }}. {{ category.name }}</p>
        <img src="@/assets/scale-icon.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Homepage",
  data() {
    return {
      categories: [
        { name: "Simple Makams", url: "simple" },
        { name: "Transposed Makams", url: "transposed" },
      ],
    };
  },
  methods: {
    route(index, url) {
      this.$store.state.chosen_category = this.$store.state.categories[index];
      router.push({ name: "Makams", params: { url: url } });
    },
  },
};
</script>

<style lang="scss">
.container {
  width: 80%;
  margin-inline: auto;
  padding-block: 2em;
}
.logo-group {
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 7em;
  @media (max-width: 900px) {
    margin-bottom: 4em;
  }
  .logo {
    width: 10em;
  }
}
.items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
  gap: 1em;
  .item {
    flex: 1;
    background-color: $secondary-color;
    display: flex;
    justify-content: space-between;
    padding: 0.8em;
    font-size: 22px;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
  }
}
</style>
<style scoped lang="scss">
.logo {
  margin-inline: auto;
  margin-bottom: 5em;
  width: 15em;
}
.subtext {
  color: $subtext-color;
  font-size: 22px;
}
.categories {
  margin-top: 10em;
  @media (max-width: 900px) {
    margin-top: 5em;
  }
}
</style>
