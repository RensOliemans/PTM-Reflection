<template>
  <div v-if="display" class="schopenhauer">
   <p class='content' v-on:click="toggleDiv()">
   <em>The Art of Being Right</em> by Arthur Schopenhauer is a work where he explains how to "win" an argument. How to befuddle your opponent with bad arguments or mental tricks, or to make the audience think that you are right, when you in fact only argue in order to win the argument, rather than to collectively arrive at the truth.
   </p>
    <ul>
      <li><a href="https://en.wikipedia.org/wiki/The_Art_of_Being_Right" target="_blank" rel="noopener noreferrer">Wiki</a></li>
      <li><a href="http://coolhaus.de/art-of-controversy/" target="_blank" rel="noopener noreferrer">Original Text & Translation</a></li>
      <li><a href="https://librivox.org/the-art-of-controversy-or-the-art-of-being-right-by-arthur-schopenhauer/" target="_blank" rel="noopener noreferrer">Audiobook</a></li>
    </ul>
  </div>
  <div v-else class="schopenhauer">
    <p class='fancy' v-on:click="toggleDiv()"><em>The Art of Being Right</em> by Arthur Schopenhauer</p>
  </div>
</template>
<script>

export default {
  name: 'Schopenhauer',
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
      console.log('test');
      this.display = !this.display;
    }
  }
}
</script>

<style>
.schopenhauer {
  margin: 40px auto;
  border: 1px dotted green;
}
.content {
  margin: 20px 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
