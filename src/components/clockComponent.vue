<template>
  <div class="flex justify-between h-full font-mono">
    <div class="w-3/5 flex justify-center text-4xl md:text-6xl lg:text-5xl xl:text=6xl place-items-center">
      <dialComponent :time="dateStore.time" :minutes="stopwatchStore.minutes" :seconds="stopwatchStore.seconds"
        :milliseconds="stopwatchStore.milliseconds" :displayData="displayData" />
    </div>
    <div class="w-2/5 flex flex-col place-content-around">
      <div class="flex justify-center ">
        <buttonComponent :nameBtn="displayData ? stopwatchIcon : timeIcon" :titleBtn="displayData ? 'Stopwatch' : 'Time'" @click="changeData" />
      </div>
      <div class="flex justify-center ">
        <secondaryComponent :dayOfWeek="dateStore.dayOfWeek" :displayData="displayData"
          @changeBtn="stopwatchStore.changeBtn" @stopwatchReset="stopwatchStore.stopwatchReset" />
      </div>
      <div class="flex justify-center">{{ dateStore.currentDate }}</div>
    </div>
  </div>
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

const timeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/></svg>`

const stopwatchIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
  <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"/>
  <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"/>
</svg>`

</script>
<style scoped></style>