<template>
  <div class="admin">
    <div class="header-text">
      <h1>Admin DashBoard</h1>
    </div>

    <link
      href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
      rel="stylesheet"
    />

    <!---SIDEBAR START-->
    <div class="container">
      <div class="navigation">
        <ul>
          <li class="nav-item active">
            <a class="nav-link">
              <span class="icon"><i class="fa fa-user"></i></span>
              <span class="title"><h2>Admin Panel</h2></span>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link">
              <router-link to="/admin">
                <span class="icon"><i class="fa fa-home"></i></span>
                <span class="title">Dashboard</span>
              </router-link>
            </a>
          </li>

          <li class="nav-item active">
            <a class="nav-link">
              <router-link to="/admin/user">
                <!-- <router-link to="/admin/users"></router-link> -->
                <span class="icon"><i class="fas fa-eye"></i></span>
                <span class="title">Users</span>
              </router-link>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link">
              <router-link to="/admin/products">
                <span class="icon"><i class="fa fa-shopping-cart"></i></span>
                <span class="title">Products</span>
              </router-link>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!----SIDEBAR END-->

    <div class="main">
      <div class="cardBox">
        <div class="card">
          <div v-for="item in items">
            <div class="numbers">{{ item.count }}</div>
            <div class="cardName">USERS</div>
          </div>
          <div class="iconBox">
            <i class="fas fa-user" aria-hidden="true"></i>
          </div>
        </div>
        <div class="card">
          <div v-for="file in files">
            <div class="numbers">{{ file.count }}</div>
            <div class="cardName">PRODUCTS</div>
          </div>
          <div class="iconBox">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <router-view />
    </div>
  </div>
  <FooterView />
</template>

<script>
import axios from "axios";
import FooterView from "../views/FooterView.vue";
import SlideShowView from "../views/SlideShowView.vue";
import NavView from "../views/NavView.vue";

export default {
  name: "AdminView",

  components: {
    FooterView,
    SlideShowView,
    NavView,
  },

  data() {
    return {
      items: [],
      files: [],
    };
  },

  created() {
    this.getUserCount();
    this.getFilesCount();
  },

  methods: {
    //get user count
    async getUserCount() {
      try {
        const response = await axios.get("http://localhost:5000/user/count");
        this.items = response.data;
        console.log(this.items);
      } catch (error) {}
    },

    async getFilesCount() {
      try {
        const response = await axios.get("http://localhost:5000/file/count");
        this.files = response.data;
        console.log(this.files);
      } catch (error) {}
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  font-family: "poppins", sans-serif;
  box-sizing: border-box;
  font-family: "popins", sans-serif;
}

body {
  overflow-x: hidden;
}
.container {
  position: relative;
  width: 100%;
}
.navigation.active {
  width: 60px;
}
.navigation {
  position: fixed;
  width: 250px;
  height: 100%;
  left: 0px;
  background: turquoise;
  transition: 0.5s;
  overflow: hidden;
}

.navigation ul {
  position: absolute;
  top: 20px;
  left: -40px;
  width: 100%;
}
.navigation ul li {
  position: relative;
  width: 120%;
  list-style: none;
}
.navigation ul li h2 {
  font-size: 24ox;
  margin-bottom: 20px;
}

.navigation ul li a:hover {
  background: black;
  width: 100%;
}

/* .navigation ul li:hover {
  background: black;
  color: black;
} */
.navigation ul li:nth-child(1) {
  margin-bottom: 20px;
}
/* .navigation ul li:nth-child(1):hover {
  background: transparent;
} */
.navigation ul li a {
  position: relative;
  display: black;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: white;
  margin-top: 20px;
}

.navigation ul li a .icon {
  position: relative;
  display: black;
  min-width: 60px;
  /* height: 60px; */
  /* line-height: 60px; */
  text-align: center;
}

.navigation ul li a .icon .fa {
  color: #fff;
  font-size: 24px;
}
.navigation ul li a .title {
  position: relative;
  display: block;
  padding: 0 10px;
  /* height: 60px; */
  /* line-height: 60px; */
  white-space: nowrap;

  font-size: 16px;
}
.icon1 {
  position: relative;
  display: black;
  min-width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  left: 20px;
}
.icon1 .fa {
  color: #fff;
  font-size: 24px;
}
.pre {
  position: relative;
  display: black;
  width: 100%;
  text-decoration: none;
  color: white;
  left: 45px;
}
.navigation ul li a .pre {
  position: relative;
  display: block;
  padding: 0 10px;
  height: 60px;
  line-height: 60px;
}
.dropdown-container {
  display: none;
  background-color: #003147;
  padding-left: 100px;
}
.dropdown-container a:hover {
  background: #03a9f4;
}
.active {
  /* background-color: #003147; */
  color: white;
}

.main {
  position: absolute;

  width: calc(100% - 250px);
  left: 250px;
  /* min-height: 100vh; */
  background: #f5f5f5;
  transition: 0.5s;
}
.user img {
  height: 100px;
  width: 100px;
}
.main.active {
  width: calc(100% - 60px);
  left: 60px;
}
.main .topbar {
  width: 100%;
  background: #fff;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.toggle {
  position: relative;
  width: 60px;
  height: 60px;
  cursor: pointer;
}
.toggle::before {
  content: "\f0c9";
  font-family: fontawesome;
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 60px;
  font-size: 24px;
  text-align: center;
  color: black;
  background: white;
}
.search {
  position: relative;
  width: 400px;
  margin: 0 10px;
}
.search label {
  position: relative;
  width: 100%;
}
.search label input {
  width: 100%;
  height: 40px;
  border-radius: 40px;
  padding: 5px 20px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.user {
  position: relative;
  min-width: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}
.user img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cardBox {
  position: relative;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
.cardBox .card {
  position: relative;
  background: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  cursor: pointer;
}
.cardBox .card .numbers {
  position: relative;
  font-size: 2em;
  font-weight: 500;
  color: black;
}
.cardBox .card .cardName {
  color: #999;
}
.cardBox .card .iconBox {
  font-size: 2em;
  color: #03a9f4;
}
.details {
  position: relative;
  width: 100%;
  padding: 20px;
  padding-top: 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 2fr 1fr;
}
.details .recentOrders {
  position: relative;
  min-height: 500px;
  background: white;
  padding: 20px;
}
.cardHeader {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.cardHeader h2 {
  font-weight: 600;
}
.btn {
  position: relative;
  padding: 5px 10px;
  background: #03a9f4;
  color: white;
  text-decoration: none;
  border-radius: 6px;
}
.details table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.details table thead td {
  font-weight: 600;
}

.details .recentOrders table tr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.details .recentOrders table tr:last-child {
  border-bottom: none;
}

.details .recentOrders table tbody tr:hover {
  background: #03a9f4;
  color: white;
}

.details .recentOrders table tr td {
  padding: 9px 5px;
}
.details .recentOrders table tbody tr td:last-child,
.details .recentOrders table thead tr td:last-child {
  text-align: right;
}
.details .recentOrders table tbody tr td:nth-child(2),
.details .recentOrders table thead tr td:nth-child(2) {
  text-align: right;
  padding-right: 20px;
}
.details .recentOrders table tbody tr td:nth-child(3),
.details .recentOrders table thead tr td:nth-child(3) {
  text-align: center;
}

.status {
  position: relative;
  padding: 2px 4px;
  background: #f00;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 1px;
}
.delivered {
  background: #8de02c;
}
.pending {
  background: #e60909;
}
.progress {
  background: #1795ce;
}

.details .recentCustomers {
  position: relative;
  min-height: 530px;
  background: white;
  padding: 20px;
}
.details .recentCustomers .imgBx {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

.details .recentCustomers .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.details .recentCustomers table tr td h4 span {
  font-size: 14px;
  color: #999;
}
.details .recentCustomers table tr:hover,
.details .recentCustomers table tr:hover td h4 span {
  background: #03a9f4;
  color: white;
}
.details .recentCustomers table tr td {
  padding: 7px;
}
.details .recentCustomers table tr td h4 {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2em;
}

/*responsive*/

@media (max-width: 992px) {
  .navigation {
    left: -300px;
  }
  .navigation.active {
    left: 0;
    width: 300px;
  }
  .main {
    width: 100%;
    left: 0;
  }
  .main.active {
    width: calc(100% - 300px);
    left: 300px;
  }
  .cardBox {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 780px) {
  .details {
    grid-template-columns: repeat(1, 1fr);
  }
  .cardHeader h2 {
    font-weight: 600;
    font-size: 18px;
  }
}
@media (max-width: 500px) {
  .cardBox {
    grid-template-columns: repeat(1, 1fr);
  }
  .details .recentOrders {
    overflow-x: auto;
  }
  .details .recentOrders table {
    width: 600px;
  }
  .navigation {
    width: 100%;
    left: 100%;
    z-index: 1000;
  }
  .navigation.active {
    width: 100%;
    left: 0;
  }
  .toggle.active {
    z-index: 10000;
    right: 0;
    left: initial;
    position: fixed;
  }
  .toggle.active::before {
    color: black;
  }
}
.h2,
h2 {
  font-size: 24px;
}

.header-text {
  display: flex;
  justify-content: center;
  font-family: "Dancing Script", cursive;
  font-size: 50px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), #09ded3);
  background: black;
  color: turquoise;
}

.h1,
h1 {
  font-family: "Dancing Script", cursive;
  font-size: 50px;
}
</style>
