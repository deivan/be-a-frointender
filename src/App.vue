<script setup>
  import LeftPanel from './components/LeftPanel.vue';
  import RightPanel from './components/RightPanel.vue';

  import { reactive } from 'vue';

  let data = getData();

  async function getData() {
    let res = await fetch('https://swapi.dev/api/people/');
    let result = await res.json();

    return result.results;
  }

</script>

<template>
  <header>
    Star Wars API homework
  </header>

  <main>
    <LeftPanel :apidata="data" />
    <RightPanel />
  </main>
</template>

<style scoped>
header {
  font-size: 4em;
  text-align: center;
  background-color: aquamarine;
}

main {
  display: flex;
  justify-content: space-between;
}
</style>
