<script setup>
    defineProps(['apidata'])
</script>

<template>
    <div class="container">
        <ul v-for="person in apidata" :key="person.id">
            <li>{{ person.name }}</li>
        </ul>
    </div>
</template>

<style scoped>
    .container {
        padding: 1em;
        border-radius: 8px;
        color: #004;
        background-color: #ccc;
    }
</style>