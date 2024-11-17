<script setup lang="ts">
import { useUser } from "../Packages/User/Presentation/Composable/useUser";

defineProps<{ msg: string }>();

const users = await useUser().getUsers()

const createUser = async () => {
  await useUser().createUser('foo', 'bar', Math.floor(Math.random() * 50))
  console.log(await useUser().getUsers())
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="createUser">create</button>
  </div>

  <ul>
    <li
      v-for="user in users"
      :key="user.id"
    >
      <div class="user">
        <p>{{ user.name }}</p>
        <p>{{ user.lastName }}</p>
        <p>{{ user.age }}</p>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.user {
  display: inline-flex;
  width: 50%;
  justify-content: space-between;
}
</style>
