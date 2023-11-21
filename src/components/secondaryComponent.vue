<template>
    <div v-if="displayData">{{ props.dayOfWeek }}</div>
    <div v-else>
        <buttonComponent :nameBtn="stopwatchStore.dot ? 'Pause' : 'Start'" @click="stopwatchStore.changeBtn" />
        <buttonComponent :nameBtn="'Reset'" @click="stopwatchStore.stopwatchReset" />
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

</script>
<style scoped>
    
</style>