<template>
  <div class="hello">
    <h1>To reflect: <a target='_blank' rel='noreferrer noopener' href='https://www.thefreedictionary.com/reflect'>to think seriously.</a></h1>
    <p>
      When I then have to reflect on how I do philosophy, how I think, and how I do this with others, <a v-on:click="$refs.Schopenhauer.toggleDiv()"><em>The Art of Being Right</em></a> immediately comes to mind.
    </p>
    <Schopenhauer ref="Schopenhauer" />

    <h3>Winning</h3>
    <p>
      You see, discussion is all too often about "winning" or "destroying" - see the <a v-on:click="$refs.Destruction.toggleDiv()"><em>Circle of Destruction</em></a>, rather than collectively arriving at some shared conclusion. I frequently catch myself doing this. Rather than accepting the other's good argument, I employ mental tricks in order to convince myself that I am right, and that they have misunderstood me, or that <em>they</em> are the one prone to fallacies.
    </p>
    <Destruction ref="Destruction" />

    <h3>PTM</h3>
    <p>
      During this course, we sometimes had to argue in favour of one interpretation over the other, the preferred MindMupping method, or our opinions of the text. During this course, I feel that my arguments were more or less always motivated by reason. After all, this course is about reasoning.
      <br/><br/>
      However, the texts in PTM did not represent my personal opinions, or were vitally important for me. In those scenario's, it seems that I don't always think so clearly.
      Of course, Seneca told us long ago. "Every man prefers belief to the exercise of judgment."
      It seems that we only started to accept this at a global (and economic) scale since Amos Tversky and Daniel Kahneman showed the extent of <a href="https://en.wikipedia.org/wiki/Cognitive_bias">cognitive biases</a> in human thought.
    </p>

    <h3>What Now?</h3>
    <p>
      We were given the advice to, at least once in your life, take a week for Descartes' meditations: let his thoughts completely consume the mind for a week. Perhaps it's worth it to let another meditation consume your mind as well: instead of doubting everything, doubt your correctness. Doubt your biases, mental capacity, reasoning skills, whatever you (implicitly or explicitly) use to come at conclusions. Of course, we are told to do this all the time. But thinking so explicitly <em>about</em> thinking made me less prone to errors during PTM, I think.
      <br/><br/>
      Perhaps I should do this more seriously, "meditate" on this, once every while.
    </p>
  </div>
</template>



<script>
import Schopenhauer from './Schopenhauer.vue';
import Destruction from './Destruction.vue';

export default {
  name: 'Overview',
  components: {
    Schopenhauer,
    Destruction
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin: 40px auto;
  max-width: 50%;
}

h3 {
  margin: 60px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.reflect {
  padding: 0 0 40px 0;
}
</style>
