<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue"
import TableCardContainer from "./components/TableCardContainer.vue"
</script>

<template>
  <div class="tableCardcontainer">
    <TableCardContainer msg="Задача" />
    <TableCardContainer msg="В работе" />
    <TableCardContainer msg="Ожидает ответа" />
    <TableCardContainer msg="Завершена" />
  </div>
</template>

<style scoped>
.tableCardcontainer{
  display: flex;
}
</style>
