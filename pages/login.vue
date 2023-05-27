<template>
    <Login />
</template>

<script>
import Login from '@/components/Login'
import '@/assets/style.scss'
  
export default {
    name: 'LoginPage',
    components: {
        Login,
    },
    layout: 'login',
}
</script>