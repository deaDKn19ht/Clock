<template>
    <button :aria-label="props.titleBtn" class="bg-cyan-950 w-10 h-8 text-white rounded-lg flex justify-center place-items-center border-2 border-cyan-700 "><div v-html="props.nameBtn"></div></button>
</template>
<script setup>
    const props = defineProps({
        nameBtn: String,
        titleBtn: String,
    });
</script>
<style scoped>
    
</style>