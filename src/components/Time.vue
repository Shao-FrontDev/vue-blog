<template>
  <div id="time" v-text="time"></div>
</template>

<script>
export default {
  data() {
    return {
      interval: null,
      time: null,
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },

  created() {
    this.interval = setInterval(() => {
      // Concise way to format time according to system locale.
      // In my case this returns "3:48:00 am"
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }).format();
    }, 1000);
  },
};
</script>

<style>
#time {
  color: #303030;
  margin-right: 40px;
}
</style>
