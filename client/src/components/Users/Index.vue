<template>
<div>
      <h1>Get All Users</h1>
      <div><h2>จำนวนผู้เข้าใช้ทั้งหมด {{ users.length }} คน</h2></div>
      <div><button @click="navigateTo('/user/create')">เพื่มสมาชิก</button>&nbsp;
        <button @click="navigateTo('/waterfalls')">ดูรายการน้ำตกทั้งหมด</button>&nbsp;
        <button v-on:click="logout" >Logout</button></div><hr>
        <br>
      <div v-for="i in users" v-bind:key="i.id">
        <div>ชื่อ: {{ i.name }}</div>
        <div>นามสกุล: {{ i.lastname }}</div>
        <div>สถานะ: {{ i.status }}</div>
        <div>ประเภท: {{ i.type }}</div>
        <br>
        <div><button v-on:click="navigateTo('/user/'+i.id)">ดูข้อมูลผู้ใช้</button>&nbsp;
        <button @click="navigateTo('/user/edit/'+i.id)">แก้ไขข้อมูลผู้ใช้</button>&nbsp;
        <button @click="deleteUser(i)">ลบข้อมูลผู้ใช้</button></div>&nbsp;
        <hr>
      </div>
    </div>
  </template>
  
  <script>
  import UsersService from "@/services/UsersService";
  
  export default {
    data() {
      return {
        users: []
      };
    },
    methods:{
      logout () {
 this.$store.dispatch('setToken', null)
 this.$store.dispatch('setUser', null)
 this.$router.push({
 name: 'login'
 })
},
      navigateTo(route){
        this.$router.push(route)
      },
      async deleteUser(user){
        let result = confirm("Want of delete?")
        if (result){
          try{
            await UsersService.delete(user)
            this.refreshData()
          }catch(err){
            console.log(err)
          }
        }
      },
      async refreshData() {
        this.users = (await UsersService.index()).data;
      }
    },
    async created() {
      try{
        this.users = (await UsersService.index()).data;
      }catch (err){
        console.log(err)
      }
      
    }
  };
  </script>
  
  <style></style>