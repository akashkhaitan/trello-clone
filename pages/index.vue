<script setup>
import { useBoardStore } from "~/stores/boardStore";

const boardStore = useBoardStore();

const newColumnName = ref("");
const editNameState = ref(false);

const addColumn = () => {
  boardStore.addColumn(newColumnName.value);
  newColumnName.value = "";
};

const deleteColumn = (index) => {
  boardStore.deleteColumn(index);
};
</script>

<template>
  <div class="board-wrapper">
    <main class="board">
      <UContainer
        v-for="(column, columnIndex) in boardStore.board.columns"
        :key="column.name"
        class="column"
      >
        <div class="column-header mb-4">
          <div>
            <h2>{{ column.name }}</h2>
            <UInput
              type="text"
              v-model="column.name"
              v-if="editNameState"
            ></UInput>
          </div>
          <div>
            <UButton
              icon="i-heroicons-pencil-square"
              class="mr-2"
              @click="editNameState = !editNameState"
            />
            <UButton
              icon="i-heroicons-trash"
              color="red"
              @click="deleteColumn(columnIndex)"
            />
          </div>
        </div>

        <ul>
          <li v-for="task in column.tasks" :key="task.id" class="mb-4">
            <UCard>
              <strong> {{ task.name }}</strong>
              {{ task.description }}
            </UCard>
          </li>
        </ul>
      </UContainer>
      <UContainer class="column">
        <UInput
          v-model="newColumnName"
          type="text"
          placeholder="Create new column"
          icon="i-heroicons-plus-circle-solid"
          @keyup.enter="addColumn"
        />
      </UContainer>
    </main>
  </div>
</template>
