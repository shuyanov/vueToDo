<script setup lang="ts">
import { ref } from "vue"

defineProps<{ msg: string }>()
</script>

<template>
    <div class="flexContainer container">
        <h3 class="header">{{ msg }}</h3>
        <div class="flexContainer container">
            <div class="cardTask">
                <spa>task one</spa>
                <div class="buttonContainer">
                    <button>1</button>
                    <button>2</button>
                </div>
            </div>
            <div class="cardTask">
                <spa>task one</spa>
                <div class="buttonContainer">
                    <button>1</button>
                    <button>2</button>
                </div>
            </div>
            <div class="cardTask">
                <spa>task one</spa>
                <div class="buttonContainer">
                    <button>1</button>
                    <button>2</button>
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

.cardTask {
    min-width: 400px;
    padding: 8px;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
}

.buttonContainer{
    display: flex;
    gap: 16px;
}

.header {
}
</style>
