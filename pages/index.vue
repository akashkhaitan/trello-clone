<script setup>
import { useBoardStore } from "~/stores/boardStore";

const boardStore = useBoardStore();
</script>

<template>
  <h1>Trello Clone</h1>
  <pre>{{ boardStore.board }}</pre>
</template>
