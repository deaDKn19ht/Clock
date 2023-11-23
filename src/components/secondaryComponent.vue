<template>
    <div v-if="displayData" class="text-2xl">{{ props.dayOfWeek }}</div>
    <div v-else class="flex gap-1"> 
        <buttonComponent :nameBtn="stopwatchStore.dot ? stopIcon : startIcon" :titleBtn="stopwatchStore.dot ? 'Stop' : 'Start'" @click="stopwatchStore.changeBtn"  />
        <buttonComponent :nameBtn="resetIcon" :titleBtn="'Reset'" @click="stopwatchStore.stopwatchReset" />
    </div>
</template>
<script setup>
import buttonComponent from '../ui/buttonComponent.vue';
import { useStopwatchStore } from '../store/stopwatchStore';

const stopwatchStore = useStopwatchStore()

const props = defineProps({
    dayOfWeek: String,
    displayData: Boolean,
});

const emits = defineEmits(['changeBtn', 'stopwatchReset']);

const startIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>`

const stopIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/></svg>`


const resetIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/></svg>`

</script>
<style scoped>
    
</style>