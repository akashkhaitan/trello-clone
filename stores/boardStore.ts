import { defineStore } from "pinia";
import boardData from "~/data/board.json";
import { useStorage } from "@vueuse/core";
import { v4 as uuidv4 } from "uuid";

export const useBoardStore = defineStore("boardStore", () => {
  const board = useStorage("board", boardData);

  const addColumn = (columnName: string) => {
    board.value.columns = [
      ...board.value.columns,
      { id: uuidv4(), name: columnName, tasks: [] },
    ];
  };

  const deleteColumn = (columnIndex: number) => {
    board.value.columns.splice(columnIndex, 1);
  };

  return { board, addColumn, deleteColumn };
});
