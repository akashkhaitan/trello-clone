import { defineStore } from "pinia";
import boardData from "~/data/board.json";

export const useBoardStore = defineStore("boardStore", () => {
  const board = ref(boardData);

  const addColumn = (columnName: string) => {
    board.value.columns = [
      ...board.value.columns,
      { name: columnName, tasks: [] },
    ];
  };

  return { board, addColumn };
});
