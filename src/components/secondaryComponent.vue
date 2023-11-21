<template>
    <div>{{ props.dayOfWeek }}</div>
    <div>
        <buttonComponent :nameBtn="stopwatchStore.dot ? 'Pause' : 'Start'" @click="stopwatchStore.changeBtn" />
        <buttonComponent :nameBtn="'Reset'" @click="stopwatchStore.stopwatchReset" />
    </div>
</template>
<script setup>
import buttonComponent from '../ui/buttonComponent.vue';
import { useStopwatchStore } from '../store/stopwatchStore';

const stopwatchStore = useStopwatchStore()

const props = defineProps({
    dayOfWeek: String
});

const emits = defineEmits(['changeBtn', 'stopwatchReset']);

</script>
<style scoped>
    
</style>