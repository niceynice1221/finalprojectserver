<template>
    <div>
      <h1>Get User By Id</h1>
      <div>id: {{ user.id }}</div>
      <div>ชื่อ: {{ user.name }}</div>
      <div>นามสกุล: {{ user.lastname }}</div>
      <div>email: {{ user.email }}</div>
      <div>password: {{ user.password }}</div>
      <div>status: {{ user.status }}</div>
      <div>type: {{ user.type }}</div>
      <br>
      <div><button @click="navigateTo('/user/edit/'+user.id)">แก้ไขข้อมูลผู้ใช้</button></div>&nbsp;
      <br>
      <div><button @click="navigateTo('/users')">back</button></div>
    </div>
  </template>
  
  <script>
  import UsersService from "@/services/UsersService";
  
  export default {
    data() {
      return {
        user: null
      };
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      }
    },
    async created() {
      try {
        let userId = this.$route.params.userId;
        this.user = (await UsersService.show(userId)).data;
        console.log(this.user);
      } catch (err) {
        console.log(err);
      }
    }
  };
  </script>
  
  <style></style>