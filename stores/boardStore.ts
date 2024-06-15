import { defineStore } from "pinia";
import boardData from "~/data/board.json";
import { useStorage } from "@vueuse/core";

export const useBoardStore = defineStore("boardStore", () => {
  const board = useStorage("board", boardData);

  const addColumn = (columnName: string) => {
    board.value.columns = [
      ...board.value.columns,
      { name: columnName, tasks: [] },
    ];
  };

  return { board, addColumn };
});
