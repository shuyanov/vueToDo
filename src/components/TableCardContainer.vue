<script setup lang="ts">
import { TTask } from "../store"

defineProps<{ msg: string; tasks: TTask[] }>()
</script>

<template>
    <div class="flexContainer container">
        <h3 class="header">{{ msg }}</h3>
        <div class="flexContainer bodyContainer">
            <div class="cardTask" v-for="(task, index) in tasks" :key="index">
                <span>{{ task.nameTask }}</span>
                <div class="buttonContainer">
                    <form>
                        <select name="taskBoard" id="city-select">
                            <option :selected="msg === 'Задача'" value="petersburg">Задача</option>
                            <option :selected="msg === 'В работе'" value="samara">В работе</option>
                            <option :selected="msg === 'Ожидает ответа'" value="perm">Ожидает ответа</option>
                            <option :selected="msg === 'Завершена'" value="novosibirsk">Завершена</option>
                        </select>
                    </form>
                    <button>Bin</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.flexContainer {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 16px;
}

.container {
    border: 1px solid red;
    width: 100%;
}

.bodyContainer {
    border-top: 1px solid red;
    width: 100%;
}

.cardTask {
    min-width: 400px;
    padding: 8px;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
}

.buttonContainer {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 16px;
}

.header {
    padding: 8px;
}
</style>
