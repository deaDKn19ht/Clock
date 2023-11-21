<template>
    <div>{{ props.time }}</div>
    <div>{{ dateFormat(props.minutes) }}:{{ dateFormat(props.seconds) }}:{{ dateFormat(props.milliseconds) }}</div>
</template>
<script setup>
import { useDateFormatStore } from '../store/dateFormatStore';

const { dateFormat } = useDateFormatStore()

const props = defineProps({
    time: String,
    minutes: Number,
    seconds: Number,
    milliseconds: Number,
});
</script>
<style scoped></style>