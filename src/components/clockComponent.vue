<template>
    <dialComponent :time="dateStore.time" :minutes="stopwatchStore.minutes" :seconds="stopwatchStore.seconds" :milliseconds="stopwatchStore.milliseconds" />
    <secondaryComponent :dayOfWeek="dateStore.dayOfWeek" @changeBtn="stopwatchStore.changeBtn" @stopwatchReset="stopwatchStore.stopwatchReset" />
    <div>{{ dateStore.currentDate }}</div>
</template>
<script setup>
import dialComponent from './dialComponent.vue';
import secondaryComponent from './secondaryComponent.vue';
import buttonComponent from '../ui/buttonComponent.vue';
import { useDateStore } from '../store/dateStore';
import { useStopwatchStore } from '../store/stopwatchStore';

const dateStore = useDateStore()
const stopwatchStore = useStopwatchStore()

</script>
<style scoped></style>