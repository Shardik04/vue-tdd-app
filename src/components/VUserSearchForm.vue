<template>
  <form @submit.prevent="$emit('submitted', username)">
    <input type="text" v-model="username" placeholder="Search for github user profile via github username" />
    <button type="submit">Submit</button>
    <div style="font-size: 12px;">(Search for github user profile via github username)</div>
  </form>
</template>

<script>
export default {
  name: 'UserSearchForm',
  data() {
    return {
      username: ''
    }
  }
}
</script>

