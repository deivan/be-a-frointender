
<template>
  <div id="app">
    <spaceship-list :spaceships="currentSpaceships" @page-change="loadSpaceships" @view-pilots="openPilotModal" />
    <pilot-modal v-if="selectedPilots.length > 0" :pilots="selectedPilots" @close="clearSelectedPilots" />
  </div>
</template>

<script>
import axios from 'axios';
import SpaceshipList from "@/components/SpaceshipList.vue";
import PilotModal from "@/components/PilotModal.vue";

export default {
  name: "App",
  components: {
    SpaceshipList,
    PilotModal,
  },
  data() {
    return {
      spaceships: [],
      currentPage: 1,
      itemsPerPage: 5,
      selectedPilots: [],
    };
  },
  computed: {
    totalSpaceships() {
      return this.spaceships.length;
    },
    totalPages() {
      return Math.ceil(this.totalSpaceships / this.itemsPerPage);
    },
    currentSpaceships() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.spaceships.slice(start, end);
    },
  },
  methods: {
    async loadSpaceships(newPage) {
      try {
        const response = await axios.get(`https://swapi.dev/api/starships/?page=${newPage}`);
        this.spaceships = response.data.results;
        this.currentPage = newPage;
      } catch (error) {
        console.error('Помилка при отриманні даних космічних кораблів:', error);
      }
    },
    openPilotModal(pilots) {
      this.selectedPilots = pilots;
    },
    clearSelectedPilots() {
      this.selectedPilots = [];
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #ffffff;
}
</style>