<template>
  <div class="container hello">
    <div class="row">
      <div class="col-md-3 mb-5 mt-4">
        <div class="card">
          <a href class="btn btn-primary btn-sm">
            <router-link :to="{name : 'AddPaketKursus'}">
              <span class="nav-link">
                <i class="fas fa-plus text-white"></i>
              </span>
            </router-link>
          </a>
          <div class="card-body">
            <h5 class="text-center">Silahkan Tambahkan Data</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 mb-5" v-for="smoothie in smoothis" :key="smoothie.id">
        <div class="card text-center">
          <div class="card-body text-center">
            <h2 class="text-center">{{ smoothie.title }}</h2>
            <ul class="ingredients">
              <li v-for="(ing,index) in smoothie.ingredients" :key="index">
                <span class="badge bg-success mr-2">{{ ing }}</span>
              </li>
            </ul>
            <i
              class="fas fa-trash-alt text-danger deleteicondata"
              @click="deleteSmothie(smoothie.id)"
            ></i>

            <a href class="btn">
              <router-link :to="{name:'EditPaket', params: {paket_slug:smoothie.slug}}">
                <i class="fas fa-edit text-warning"></i>
              </router-link>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "Index",
  data() {
    return {
      smoothis: [],
    };
  },
  methods: {
    deleteSmothie(id) {
      db.collection("codingku")
        .doc(id)
        .delete()
        .then(() => {
          this.smoothis = this.smoothis.filter((smoothie) => {
            return smoothie.id != id;
          });
        });
    },
  },
  created() {
    db.collection("codingku")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          // console.log(doc.data(), doc.id);
          let smoothie = doc.data();
          smoothie.id = doc.id;
          this.smoothis.push(smoothie);
        });
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
  color: aliceblue;
}

.hello li {
  display: inline;
}
.card {
  width: 100%;
  text-align: center;
  background-color: deepskyblue;
}
.deleteicondata {
  cursor: pointer;
}
</style>
