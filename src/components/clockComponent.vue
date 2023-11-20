<template>
    <dialComponent :time="dateStore.time" />
    <secondaryComponent :dayOfWeek="dateStore.dayOfWeek" />
    <div>{{ dateStore.currentDate }}</div>
</template>
<script setup>
import dialComponent from './dialComponent.vue';
import secondaryComponent from './secondaryComponent.vue';
import btnComponent from '../ui/btnComponent.vue';
import { useDateStore } from '../store/dateStore';

const dateStore = useDateStore()

</script>
<style scoped></style>