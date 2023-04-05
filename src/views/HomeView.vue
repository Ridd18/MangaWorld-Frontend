<template>
  <NavView />
  <SlideShowView />

  <link
      href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
  <!-- Page Content -->
  <section class="py-5">
    <div class="container">
      <h1 class="fw-light">Anime Web</h1>
      <p class="lead">
        Inspirational designs, illustrations, and graphic elements from the
        world’s best designers. Want more inspiration? Browse our search
        results...
      </p>
    </div>
  </section>

  <FooterView />
</template>

<script>
import FooterView from "../views/FooterView.vue";
import SlideShowView from "../views/SlideShowView.vue";
import NavView from "../views/NavView.vue";

export default {
  name: "HomeView",
  components: {
    FooterView,
    SlideShowView,
    NavView,
  },
};
</script>

<style scoped>
.container {
  font-family:fantasy;
}
</style>
