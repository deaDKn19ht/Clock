<template>
    <dialComponent :time="dateStore.time" :minutes="stopwatchStore.minutes" :seconds="stopwatchStore.seconds" :milliseconds="stopwatchStore.milliseconds" :displayData="displayData" />
    <buttonComponent :nameBtn="displayData ? 'Stopwatch' : 'Time'" @click="changeData" />
    <secondaryComponent :dayOfWeek="dateStore.dayOfWeek" :displayData="displayData" @changeBtn="stopwatchStore.changeBtn" @stopwatchReset="stopwatchStore.stopwatchReset" />    
    <div>{{ dateStore.currentDate }}</div>
</template>
<script setup>
import { ref } from 'vue'
import dialComponent from './dialComponent.vue';
import secondaryComponent from './secondaryComponent.vue';
import buttonComponent from '../ui/buttonComponent.vue';
import { useDateStore } from '../store/dateStore';
import { useStopwatchStore } from '../store/stopwatchStore';

const dateStore = useDateStore()
const stopwatchStore = useStopwatchStore()

const displayData = ref(true)

const changeData = () => {
    displayData.value = !displayData.value
}

</script>
<style scoped></style>