<script setup async>
  import LeftPanel from './components/LeftPanel.vue';
  import RightPanel from './components/RightPanel.vue';

  import { ref, onMounted } from 'vue';

  const data = ref([]);

  async function getData() {
    let res = await fetch('https://swapi.dev/api/people/');
    let result = await res.json();

    return result.results;
  }

  onMounted(async () => {
    data.value = await getData();
  })

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
