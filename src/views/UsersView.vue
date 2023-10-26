<script setup>
import { ref, computed } from "vue";
import { useUsers } from "../stores/getUsers"
const store = useUsers();
store.getUsers();

//console.log(store.users)
</script>

<template>
  <main>
    <h1>Users List:</h1>
    <ul>
        <li v-for="user of store.users" :key="user.id">{{ user.name }}</li>
    </ul>
  </main>
</template>