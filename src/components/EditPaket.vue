<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mt-5 mb-5" v-if="smoothie">
        <h2 class="text-left">Edit Data Paket {{smoothie.title}}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="EditPaketKursus">
          <div class="title text-left">
            <label for="title">Paket Title</label>
            <input
              type="text"
              name="title"
              v-model="smoothie.title"
              class="form-control"
              placeholder="Silahkan isi Title Paket"
            />
          </div>
          <div class="text-left" v-for="(ing ,index) in smoothie.ingredients" :key="index">
            <label for="data-paket">Data Paket</label>
            <i class="fas fa-trash-alt text-danger float-right mt-2 mb-2" @click="deleteIng(ing)"></i>
            <input
              type="text"
              name="ingredients"
              class="form-control"
              v-model="smoothie.ingredients[index]"
            />
          </div>
          <div class="title text-left mt-4">
            <label for="data">Add Data Paket</label>
            <input
              type="text"
              name="another"
              v-model="another"
              class="form-control"
              placeholder="Silahkan isi Data Paket"
              @keydown.tab.prevent="addIng"
            />
          </div>
          <div class="title text-left">
            <p v-if="feedback" class="alert alert-danger mt-2" role="alert">{{ feedback }}</p>
            <button type="submit" class="btn btn-warning mt-4">Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import slugify from "slugify";
export default {
  name: "EditPaket",
  data() {
    return {
      smoothie: null,
      another: null,
      feedback: null,
    };
  },
  methods: {
    EditPaketKursus() {
      if (this.smoothie.title) {
        this.feedback = null;
        //create slug
        this.slug = slugify(this.smoothie.title, {
          replacement: "-",
          remove: /[$*_+`.()'"!\-:@]/g,
          lower: true,
        });

        db.collection("codingku")
          .doc(this.smoothie.id)
          .update({
            title: this.smoothie.title,
            ingredients: this.smoothie.ingredients,
            slug: this.smoothie.slug,
          })
          .then(() => {
            this.$router.push({ name: index });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.feedback = "Mohon isi data terlebih dahulu";
      }
    },
    addIng() {
      if (this.another) {
        this.smoothie.ingredients.push(this.another);
        console.log(this.ingredients);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "Mohon isi data terlebih dahulu";
      }
    },
    deleteIng(ing) {
      this.smoothie.ingredients = this.smoothie.ingredients.filter(
        (ingredients) => {
          return ingredients != ing;
        }
      );
    },
  },
  created() {
    let ref = db
      .collection("codingku")
      .where("slug", "==", this.$route.params.paket_slug);
    ref.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        // console.log(doc.data(), doc.id);
        this.smoothie = doc.data();
        this.smoothie.id = doc.id;
      });
    });
  },
};
</script>
<style>
.deleteicondata {
  cursor: pointer;
}
</style>
