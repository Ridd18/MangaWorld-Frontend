<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Manga World</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/">Home</router-link>
            </a>
          </li>
          <!-- <li class="nav-item active">
            <div class="search-container">
              <form action="">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit"><i class="fa fa-search"></i></button>
              </form>
            </div>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
  <div class="products">
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>File Name</th>
          <th class="has-text-centered">Download</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.file_id">
          <td>{{ item.name }}</td>
          <td>
            <a
              target="_blank"
              :href="`http://localhost:5000/files/${item.name}`"
            >
              <button class="btn">
                <i class="fa fa-download"></i> Download
              </button>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

import axios from "axios";
export default {

  name: "ViewProductsView",
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.getFiles();
  },

  methods: {
    // Get All files
    async getFiles() {
      try {
        const response = await axios.get("http://localhost:5000/files");
        console.log(response.data);
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    //download files
    // async onClick(name) {
    //   try {
    //     const response = await axios.get(`http://localhost:5000/files/${name}`);
    //     console.log(response.data);
    //     console.log(name);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
  },
};
</script>

<style scoped>
.products {
  display: flex;
  margin-top: 100px;
}

a {
  color: turquoise;
  text-decoration: blink;
  margin-right: 10px;
}

input,
button,
select,
optgroup,
textarea {
  margin: 5px;
  font-family: "FontAwesome";
  font-size: inherit;
  line-height: inherit;
}
</style>
