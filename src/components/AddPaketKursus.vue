<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5">
        <h2 class="text-center">FORM INPUT DATA</h2>
        <form @submit.prevent="AddPaketKursus">
          <div class="title text-left">
            <label for="title">Paket Title</label>
            <input
              type="text"
              name="title"
              v-model="title"
              class="form-control"
              placeholder="Silahkan isi Title Paket"
            />
          </div>
          <div class="text-left" v-for="(ing ,index) in ingredients" :key="index">
            <label for="data-paket">Data Paket</label>
            <input type="text" name="ingredients" class="form-control" v-model="ingredients[index]" />
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
            <button type="submit" class="btn btn-primary mt-4">Simpan</button>
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
  name: "AddPaketKursus",
  data() {
    return {
      title: null,
      another: null,
      ingredients: [],
      feedback: null,
      slug: null,
    };
  },
  methods: {
    AddPaketKursus() {
      if (this.title) {
        this.feedback = null;
        //create slug
        this.slug = slugify(this.title, {
          replacement: "-",
          remove: /[$*_+`.()'"!\-:@]/g,
          lower: true,
        });

        db.collection("codingku")
          .add({
            title: this.title,
            ingredients: this.ingredients,
            slug: this.slug,
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
        this.ingredients.push(this.another);
        console.log(this.ingredients);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "Mohon isi data terlebih dahulu";
      }
    },
    deleteIng(ing) {
      this.ingredients = this.ingredients.filter((ingredients) => {
        return ingredients != ing;
      });
    },
  },
};
</script>

<style>
</style>
