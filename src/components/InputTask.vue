<script setup lang="ts">
import { ref } from "vue"
import { store } from "../store"

const task = ref("")
</script>

<template>
    <div>
        <h1>Task</h1>
        <div class="controlContainer">
            <input v-model="task" />
            <button @click="store.addTask(task)">Add</button>
        </div>
    </div>
</template>

<style scoped>
.controlContainer {
    display: flex;
    gap: 16px;
}
.read-the-docs {
    color: #888;
}
</style>
