<template>
    <div>
        <VUserSearchForm />
        <VUserProfile :user="user" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'

export default {
    name: 'UserView',
    components: {
        VUserSearchForm,
        VUserProfile
    },
    // with vuex state passing user
    computed: {
        ...mapState({
        user: 'user',
    }),
    // without vuex passing prop to component
    data() {
        return {
            user1: {
                name: ''
            }
        }
    }
  }
}
</script>