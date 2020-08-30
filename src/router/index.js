import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddPaketKursus from '@/components/AddPaketKursus'
import EditPaket from '@/components/EditPaket'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-kursus',
      name: 'AddPaketKursus',
      component: AddPaketKursus
    },
    {
      path: '/edit-paket/:paket_slug',
      name: 'EditPaket',
      component: EditPaket
    }
  ]
})
