<template>
    <Signup />
</template>

<script>
import Signup from '@/components/Signup'
import '@/assets/style.scss'
  
export default {
    name: 'SignupPage',
    components: {
        Signup,
    },
    layout: 'login',
}
</script>