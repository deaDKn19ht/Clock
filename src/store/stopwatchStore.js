import { defineStore } from "pinia";
import { ref } from "vue";

export const useStopwatchStore = defineStore("stopwatchStore", () => {
  const minutes = ref(0);
  const seconds = ref(0);
  const milliseconds = ref(0);

  const interval = ref(null);
  const dot = ref(false);

  const stopwatchUpdate = () => {
    minutes.value == 59 && seconds.value == 59 && milliseconds.value == 99
      ? stopwatchStop()
      : milliseconds.value++;

    milliseconds.value > 99
      ? (seconds.value++, (milliseconds.value = 0))
      : null;
    seconds.value > 59 ? (minutes.value++, (seconds.value = 0)) : null;

    dot.value = true;
  };

  const stopwatchStart = () => {
    interval.value = setInterval(stopwatchUpdate, 10);
  };

  const stopwatchStop = () => {
    clearInterval(interval.value);
    dot.value = false;
  };

  const stopwatchReset = () => {
    stopwatchStop();

    minutes.value = 0;
    seconds.value = 0;
    milliseconds.value = 0;
  };

  const changeBtn = () => {
    dot.value == false ? stopwatchStart() : stopwatchStop();
  };

  return {
    minutes,
    seconds,
    milliseconds,
    dot,
    changeBtn,
    stopwatchReset,
  };
});
