<template>
  <div>
 <h1>Show Waterfall By ID</h1>
      <p>เลข: {{ waterfall.id }}</p>
      <p>ชื่อน้ำตก: {{ waterfall.name }}</p>
      <p>อุทยาน: {{ waterfall.park }}</p>
      <p>จังหวัด: {{ waterfall.province }}</p>
      <p>ฤดูกาล: {{ waterfall.season }}</p>
      <p>รายละเอียด: {{ waterfall.detail }}</p>
      <p>ที่อยู่: {{ waterfall.address }}</p>
      <p>เบอร์โทรศัพท์: {{ waterfall.phone }}</p>
 <div><button @click="navigateTo('/waterfall/edit/'+waterfall.id)">แก้ไขข้อมูลน้ำตก</button>&nbsp
 <button @click="navigateTo('/waterfalls')">back</button></div>
  </div>
 </template>
 <script>
import WaterfallService from "@/services/WaterfallService";

export default {
  data() {
    return {
      waterfall: null
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },
  async created() {
    try {
      let waterfallId = this.$route.params.waterfallId;
      this.waterfall = (await WaterfallService.show(waterfallId)).data;
      console.log(this.waterfall);
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style></style>