<template>
    <button>{{ props.nameBtn }}</button>
</template>
<script setup>
    const props = defineProps({
        nameBtn: String,
    });
</script>
<style scoped>
    
</style>