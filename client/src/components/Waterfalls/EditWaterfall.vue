<template>
  <div>
    <h1>Edit Waterfall</h1>
    <form v-on:submit.prevent="editWaterfall">
      <p>ชื่อน้ำตก : <input type="text" v-model="waterfall.name" /></p>
      <p>อุทยาน : <input type="text" v-model="waterfall.park" /></p>
      <p>จังหวัด : <input type="text" v-model="waterfall.province" /></p>
      <p>ฤดูกาล : <input type="text" v-model="waterfall.season" /></p>
      <p>รายละเอียด : <input type="text" v-model="waterfall.detail" /></p>
      <p>ที่อยู่ : <input type="text" v-model="waterfall.address" /></p>
      <p>เบอร์โทรศัพท์ : <input type="text" v-model="waterfall.phone" /></p>
      <p><button type="submit">แก้ไขข้อมูลน้ำตก</button></p>
    </form>
    <hr />
    <div>
      <p>เลข: {{ waterfall.id }}</p>
      <p>ชื่อน้ำตก: {{ waterfall.name }}</p>
      <p>อุทยาน: {{ waterfall.park }}</p>
      <p>จังหวัด: {{ waterfall.province }}</p>
      <p>ฤดูกาล: {{ waterfall.season }}</p>
      <p>รายละเอียด: {{ waterfall.detail }}</p>
      <p>ที่อยู่: {{ waterfall.address }}</p>
      <p>เบอร์โทรศัพท์: {{ waterfall.phone }}</p>
      <p></p>
    </div>
  </div>
</template>
<script>
import WaterfallService from "@/services/WaterfallService";
export default {
  data() {
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
    };
  },
  methods: {
    async editWaterfall() {
      try {
        await WaterfallService.put(this.waterfall);
        this.$router.push({
          name: "waterfalls"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    try {
      let waterfallId = this.$route.params.waterfallId;
      this.waterfall = (await WaterfallService.show(waterfallId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style scoped></style>