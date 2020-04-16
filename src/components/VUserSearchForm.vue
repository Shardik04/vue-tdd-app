<template>
  <form @submit.prevent="$emit('submitted', username)">
     <el-input 
        v-model="username" 
        placeholder="Search for github user profile via github username" 
        class="search-form__input"
      >
        <el-button
          class="search-form__button"
          native-type="submit"
          slot="append"
          icon="el-icon-search"
        >Submit</el-button>
     </el-input>
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

