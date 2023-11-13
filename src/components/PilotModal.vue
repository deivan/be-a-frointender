<template>
    <div class="pilot-modal">
      <div class="modal-content">
        <h2>Пілоти</h2>
        <div v-for="pilot in pilots" :key="pilot.url" class="pilot-item">
          <h3>{{ pilot.name }}</h3>
          <p>Зріст: {{ pilot.height }}</p>
          <p>Вага: {{ pilot.mass }}</p>
          <p>Колір волосся: {{ pilot.hair_color }}</p>
          <p>Колір шкіри: {{ pilot.skin_color }}</p>
          <p>Колір очей: {{ pilot.eye_color }}</p>
          <p>Дата народження: {{ pilot.birth_year }}</p>
          <p>Стать: {{ pilot.gender }}</p>
        </div>
        <button @click="closeModal">Закрити</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      pilots: Array,
    },
    methods: {
      closeModal() {
        this.$emit("close");
      },
    },
  };
  </script>
  

  <style scoped>
  .pilot-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
  }
  
  .pilot-item {
    margin-bottom: 20px;
  }
  </style>