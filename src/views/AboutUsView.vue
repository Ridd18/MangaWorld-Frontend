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
      <h1 class="fw-light">About Us</h1>
      <p class="lead">
        There are many reasons you should read Manga online, and if you are a
        fan of this unique storytelling style then learning about them is a
        must. One of the biggest reasons why you should read Manga online is the
        money it can save you. While there's nothing like actually holding a
        book in your hands, there's also no denying that the cost of those books
        can add up quickly. So why not join the digital age and read Manga
        online? Another big reason to read Manga online is the huge amount of
        material that is available. When you go to a comic store or other book
        store their shelves are limited by the space that they have. When you go
        to an online site to read Manga those limitations don't exist. So if you
        want the best selection and you also want to save money then reading
        Manga online should be an obvious choice for you.
      </p>
    </div>
  </section>

  <FooterView />
</template>

<script>
import FooterView from "./FooterView.vue";
import SlideShowView from "./SlideShowView.vue";
import NavView from "./NavView.vue";

export default {
  name: "AboutUsView",
  components: {
    FooterView,
    SlideShowView,
    NavView,
  },
};
</script>

<style scoped>
.container {
  font-family: fantasy;
}
</style>
