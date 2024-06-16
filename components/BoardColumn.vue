<script setup>
import { useBoardStore } from "~/stores/boardStore";

defineProps({
  column: {
    type: Object,
    required: true,
  },
  columnIndex: {
    type: Number,
    required: true,
  },
});

const boardStore = useBoardStore();

const editNameState = ref(false);

const deleteColumn = (index) => {
  boardStore.deleteColumn(index);
};
</script>

<template>
  <UContainer class="column">
    <div class="column-header mb-4">
      <div>
        <h2>{{ column.name }}</h2>
        <UInput type="text" v-model="column.name" v-if="editNameState"></UInput>
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
</template>
