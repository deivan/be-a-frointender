<template>
    <div class="pilot-list">
      <h2>Список пілотів</h2>
      <ul>
        <li v-for="pilot in pilots" :key="pilot.url">
          <h3>{{ pilot.name }}</h3>
          <p><strong>Ріст:</strong> {{ pilot.height }}</p>
          <p><strong>Маса:</strong> {{ pilot.mass }}</p>
          <p><strong>Волосся:</strong> {{ pilot.hair_color }}</p>
          <p><strong>Шкіра:</strong> {{ pilot.skin_color }}</p>
          <p><strong>Очі:</strong> {{ pilot.eye_color }}</p>
          <p><strong>Рік народження:</strong> {{ pilot.birth_year }}</p>
          <p><strong>Стать:</strong> {{ pilot.gender }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ["pilots"],
  };
  </script>
  
  <style scoped>
  .pilot-list {
    margin-left: 50px;
    width: 400px;
  }
  
  h2 {
    color: #ffffff;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 20px;
  }
  
  h3 {
    margin-bottom: 5px;
  }
  
  a {
    color: #ffffff;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>