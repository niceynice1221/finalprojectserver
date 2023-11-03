<template>
  <div>
 <h2>Get All Waterfall</h2>
 <h4>จํานวนหนังทั้งหมด {{waterfalls.length}} เรื่อง</h4><div><button @click="navigateTo('/waterfall/create')">เพื่มข้อมูลน้ำตก</button>&nbsp
 <button @click="navigateTo('/users')">กลับไปหน้าข้อมูลใช้งาน</button></div><hr>
 <div v-for="i in waterfalls" v-bind:key="i.id">
  <p>เลข: {{ i.id }}</p>
      <p>ชื่อน้ำตก: {{ i.name }}</p>
      <p>อุทยาน: {{ i.park }}</p>
      <p>จังหวัด: {{ i.province }}</p>
      <p>ฤดูกาล: {{ i.season }}</p>
      <p>รายละเอียด: {{ i.detail }}</p>
      <p>ที่อยู่: {{ i.address }}</p>
      <p>เบอร์โทรศัพท์: {{ i.phone }}</p>
      <br>
  <div><button v-on:click="navigateTo('/waterfall/'+i.id)">ดูข้อมูลน้ำตก</button>&nbsp
  <button @click="navigateTo('/waterfall/edit/'+i.id)">แก้ไขข้อมูลน้ำตก</button>&nbsp
  <button @click="deleteWaterfall(i)">ลบข้อมูลน้ำตก</button></div>
  <hr>
 </div>
  </div>
 </template>
 <script>
import WaterfallService from "@/services/WaterfallService";

export default {
data() {
  return {
    waterfalls: []
  };
},
methods: {
  navigateTo(route) {
    this.$router.push(route);
  },
  async deleteWaterfall(waterfall) {
    let result = confirm("Want of delete?");
    if (result) {
      try {
        await WaterfallService.delete(waterfall);
        this.refreshData();
      } catch (err) {
        console.log(err);
      }
    }
  },
  async refreshData() {
    this.waterfalls = (await WaterfallService.index()).data;
  }
},
async created() {
  try {
    this.waterfalls = (await WaterfallService.index()).data;
  } catch (err) {
    console.log(err);
  }
}
};
</script>

<style></style>