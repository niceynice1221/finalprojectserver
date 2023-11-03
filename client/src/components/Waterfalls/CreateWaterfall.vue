<template>
  <div>
  <h1>Create Waterfall</h1>
  <form v-on:submit.prevent="createWaterfall">
    <p>ชื่อน้ำตก : <input type="text" v-model="waterfall.name" /></p>
      <p>อุทยาน : <input type="text" v-model="waterfall.park" /></p>
      <p>จังหวัด : <input type="text" v-model="waterfall.province" /></p>
      <p>ฤดูกาล : <input type="text" v-model="waterfall.season" /></p>
      <p>รายละเอียด : <input type="text" v-model="waterfall.detail" /></p>
      <p>ที่อยู่ : <input type="text" v-model="waterfall.address" /></p>
      <p>เบอร์โทรศัพท์ : <input type="text" v-model="waterfall.phone" /></p>
  <p><button type="submit">create waterfall</button></p>
  </form>
  </div>
 </template>
 <script>
 import WaterfallService from '@/services/WaterfallService'
 export default {
  data () {
  return {
  waterfall: {
        name: "",
        park: "",
        province: "",
        season: "",
        detail: "",
        address: "",
        phone: "",
  }
  }
  },
  methods: {
  async createWaterfall () {
  try {
  await WaterfallService.post(this.waterfall)
  this.$router.push({
  name: 'waterfalls'
  })
  } catch (err) {
  console.log(err)
  }
  }
  }
 }
 </script>
 <style scoped>
 </style>