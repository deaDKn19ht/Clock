import { defineStore } from "pinia";
import { ref, watchEffect } from "vue";

export const useDateStore = defineStore("dateStore", () => {
  const time = ref("");
  const currentDate = ref("");
  const dayOfWeek = ref("");

  const timeUpdate = () => {
    const dateNow = new Date();

    const year = dateNow.getFullYear();
    const month = dateNow.getMonth();
    const date = dateNow.getDate();

    const day = dateNow.getDay();

    const hours = dateNow.getHours();
    const minutes = dateNow.getMinutes();
    const seconds = dateNow.getSeconds();

    time.value = `${hours}:${minutes}:${seconds}`;
    currentDate.value = `${date}/${month}/${year}`;
    dayOfWeek.value = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][day];
  };

  watchEffect(() => {
    timeUpdate(time.value, currentDate.value);
  });
  setInterval(timeUpdate, 1000);

  return {
    time,
    currentDate,
    dayOfWeek,
  };
});
