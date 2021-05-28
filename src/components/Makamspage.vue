<template>
  <div class="container">
    <div class="logo-group">
      <a class="go-home" @click="goHome()">
        <img src="@/assets/home-icon.svg" alt="" class="home-icon" />
      </a>
      <img class="logo" src="@/assets/logo.svg" alt="" />
    </div>
    <p class="subheader">{{ $store.state.chosen_category.name }}</p>
    <div class="input-group">
      <input v-model="search" type="text" />
      <button>Search</button>
    </div>
    <hr />
    <div class="items">
      <div
        class="item makam"
        v-for="(makam, index) in filteredList"
        :key="makam.name"
        @click="route(index, makam)"
      >
        <p>{{ makam.name }}</p>
        <img src="@/assets/note-icon.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "makams",
  data() {
    return {
      search: "",
      makams: [],
    };
  },
  methods: {
    route(index, makam) {
      this.$store.state.chosen_makam = this.$store.state.makams.filter(
        (makam) => makam.category === this.$store.state.chosen_category.category
      )[index];
      router.push({ name: "Makam-detail", params: { url: makam.name } });
    },
    goHome() {
      router.push({
        name: "Home",
      });
    },
  },
  mounted() {
    this.makams = this.$store.state.makams.filter(
      (makam) => makam.category === this.$store.state.chosen_category.category
    );
  },

  computed: {
    filteredList() {
      return this.makams.filter((post) => {
        return post.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style scoped lang="scss">
.subheader {
  color: $subtext-color;
  font-size: 30px;
}
.input-group {
  display: flex;
  gap: 1em;

  input {
    flex: 1;
    background: $secondary-color;
    border: none;
    outline: none;
    color: $text-color;
    padding: 0.5em;
    border-radius: 10px;
    font-size: 25px;
    padding-left: 2.5em;
    background-image: url("../assets/search-icon.svg");
    background-size: 40px 40px;
    background-repeat: no-repeat;
    background-position: 10px 1rem;
  }

  button {
    background-color: $bg-color;
    border: 3px solid $primary-color;
    color: $primary-color;
    border-radius: 10px;
    font-size: 25px;
    padding: 0.5em;
  }
}
hr {
  border: 1px solid $primary-color;
  background-color: $primary-color;
  margin-top: 4em;
  margin-bottom: 2em;
}
.go-home {
  cursor: pointer;
}
</style>
