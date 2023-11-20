import { defineStore } from "pinia";

export const useDateFormatStore = defineStore("dateFormatStore", () => {
  const dateFormat = (d) => {
    return d < 10 ? "0" + d : d;
  };

  return {
    dateFormat,
  };
});
