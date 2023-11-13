<template>
    <div class="pagination">
      <button @click="loadPage(page - 1)" :disabled="page === 1">Попередня сторінка</button>
      <span>{{ page }} з {{ totalPages }}</span>
      <button @click="loadPage(page + 1)" :disabled="page === totalPages">Наступна сторінка</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ["page", "totalPages"],
    methods: {
      loadPage(newPage) {
        if (newPage >= 1 && newPage <= this.totalPages) {
          this.$emit("page-change", newPage);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  
  button {
    margin: 0 5px;
    padding: 5px 10px;
    cursor: pointer;
    background-color: #ffffff;
    color: #fff;
    border: none;
    border-radius: 3px;
  }
  
  button:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
  </style>