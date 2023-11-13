<template>
    <div class="container">
        <div class="column">
            <div v-for="spaceship in spaceships" :key="spaceship.url">
                <h2>{{ spaceship.name }}</h2>
                <p><strong>Модель:</strong> {{ spaceship.model }}</p>
                <p><strong>Вартість в кредитах:</strong> {{ spaceship.cost_in_credits }}</p>
                <p><strong>Довжина:</strong> {{ spaceship.length }}</p>
                <p><strong>Швидкість:</strong> {{ spaceship.max_atmosphering_speed }}</p>
                <p><strong>Екіпаж:</strong> {{ spaceship.crew }}</p>
                <p><strong>Пасажири:</strong> {{ spaceship.passengers }}</p>
                <p><strong>Вантажопідйомність:</strong> {{ spaceship.cargo_capacity }}</p>
                <p><strong>Гіпердвигун:</strong> {{ spaceship.hyperdrive_rating }}</p>
                <p><strong>Клас корабля:</strong> {{ spaceship.starship_class }}</p>
                <button @click="showPilots(spaceship)" :disabled="spaceship.pilots.length === 0">
                    Дивитись пілотів
                </button>
            </div>
            <pagination :page="page" :totalPages="totalPages" @page-change="handlePageChange" />
        </div>
    <div class="column">
      <pilot-list v-if="showPilotModal" :pilots="selectedPilots" />
    </div>
  </div>
</template>

  
<script>
import axios from "axios";
import Pagination from "./Pagination.vue";
import PilotList from "./PilotList.vue";

export default {
  data() {
    return {
      spaceships: [],
      page: 1,
      totalPages: 1,
      showPilotModal: false,
      selectedPilots: [],
    };
  },
  mounted() {
    this.loadSpaceships();
  },
  methods: {
    async loadSpaceships(newPage = this.page) {
      const response = await axios.get(`https://swapi.dev/api/starships/?page=${newPage}`);
      this.spaceships = response.data.results;
      this.page = newPage;
      this.totalPages = Math.ceil(response.data.count / 10);
    },
    async showPilots(spaceship) {
      this.selectedPilots = await this.loadPilots(spaceship.pilots);
      this.showPilotModal = true;
    },
    async loadPilots(pilotUrls) {
      const promises = pilotUrls.map((url) => axios.get(url));
      const responses = await Promise.all(promises);
      return responses.map((response) => response.data);
    },
    async handlePageChange(newPage) {
      await this.loadSpaceships(newPage);
    },
  },
  components: {
    Pagination,
    PilotList,
  },
};
</script>

<style>
.container {
  width: 100px;
  display: flex;
}

.column {
  
  flex: 1;
  margin: 10px;
}

.spaceship {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

</style>