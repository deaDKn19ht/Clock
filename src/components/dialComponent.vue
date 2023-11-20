<template>
    <div>{{ props.time }}</div>
</template>
<script setup>
const props = defineProps({
    time: String,
});
</script>
<style scoped></style>