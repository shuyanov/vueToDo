<script setup lang="ts">
import TableCardContainer from "./components/TableCardContainer.vue"
import InputTask from "./components/InputTask.vue"
import { store } from "./store"
</script>

<template>
    <div class="tableCardcontainer">
        <InputTask />
        <div class="table">
            <TableCardContainer msg="Задача" :tasks="store.tasks.task" />
            <TableCardContainer msg="В работе" :tasks="store.tasks.inWork" />
            <TableCardContainer msg="Ожидает ответа" :tasks="store.tasks.expectation" />
            <TableCardContainer msg="Завершена" :tasks="store.tasks.finish" />
        </div>
    </div>
</template>

<style scoped>
.tableCardcontainer {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.table {
    display: flex;
    gap: 16px;
}
</style>
