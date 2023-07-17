<template>
  <div>
    <NavbarView />
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Pilih Menu Makanan Yang Lezat!</strong><br />untuk Anda
                Nikmati
              </h2>
              <p>Ayo segera pesan sekarang juga</p>
              <router-link class="btn btn-modif" to="/makanan"
                >Pesan<b-icon-arrow-right class="ml-1"></b-icon-arrow-right
              ></router-link>
            </div>
          </div>
        </div>
        <div class="col">
          <img
            src="../assets/undraw_Eating_together_re_ux62.png"
            alt="gambar"
            width="100%"
          />
        </div>
      </div>

      <div class="row mt-4">
        <div class="col">
          <h2>
            Best
            <strong>Foods</strong>
          </h2>
        </div>
        <div class="col">
          <router-link to="/makanan" class="btn btn-success float-right">
            <b-icon-eye></b-icon-eye>Lihat Semua
          </router-link>
        </div>
      </div>

      <div class="row mb-4">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarView from "@/components/NavbarView.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    NavbarView,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get(
        "https://my-json-server.typicode.com/erman22/api-online-store/best-products"
      )
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
