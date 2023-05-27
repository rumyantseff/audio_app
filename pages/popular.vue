<template>
    <Popular />
</template>
  
<script>
import Popular from '@/components/Popular'
import '@/assets/style.scss' 

export default {
    name: 'PopularPage',
    components: {
        Popular,
    },
    layout: 'start',
    }
</script>