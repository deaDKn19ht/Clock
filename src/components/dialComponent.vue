<template>
    <div v-if="props.displayData">{{ props.time }}</div>
    <div v-else>{{ dateFormat(props.minutes) }}:{{ dateFormat(props.seconds) }}:{{ dateFormat(props.milliseconds) }}</div>
</template>
<script setup>
import { useDateFormatStore } from '../store/dateFormatStore';

const { dateFormat } = useDateFormatStore()

const props = defineProps({
    time: String,
    minutes: Number,
    seconds: Number,
    milliseconds: Number,
    displayData: Boolean,
});
</script>
<style scoped></style>