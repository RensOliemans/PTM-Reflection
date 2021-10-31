<template>
  <div v-if="display" class="destroy" v-on:click="toggleDiv()">
    <img alt="Circle of Destruction" src="../assets/destroy.jpg" width="750" height="706"/>
  </div>
  <div v-else>
  </div>
</template>
<script>

export default {
  name: 'Destruction',
  props: {
    display_div: Boolean
  },
  data() {
    return {
      display: this.display_div,
    };
  },
  methods: {
    toggleDiv: function() {
      this.display = !this.display;
    }
  }
}
</script>

<style>
.destroy {
  width: 100%;
}
</style>
