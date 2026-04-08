<script setup lang="ts">
import { ref } from "vue";
import InputText from "primevue/inputtext";

const searchQuery = ref("");
const results = ref<string[]>([]);
const isLoading = ref(false);

const fakeSearch = (q: string): Promise<string[]> =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          `Result for "${q}" #1`,
          `Result for "${q}" #2`,
          `Result for "${q}" #3`,
        ]),
      800,
    ),
  );

const handleSubmit = async (): Promise<void> => {
  if (!searchQuery.value) return;
  isLoading.value = true;
  results.value = [];
  results.value = await fakeSearch(searchQuery.value);
  isLoading.value = false;
};
</script>

<template>
  <div style="padding: 2rem; max-width: 600px; font-family: sans-serif">
    <h2>Bug repro: Safari search input cursor reset</h2>
    <ol style="line-height: 2">
      <li>Type a multi-word phrase (e.g. <em>"hello world"</em>)</li>
      <li>Click <strong>Search</strong> or press <kbd>Enter</kbd></li>
      <li>Wait for the results to appear (~800 ms)</li>
    </ol>
    <p>
      <strong>Expected:</strong> cursor stays after the last character.<br />
      <strong>Actual (Safari):</strong> cursor jumps to the beginning of the
      input.
    </p>

    <form @submit.prevent="handleSubmit" style="display: flex; gap: 8px">
      <InputText
        type="search"
        v-model="searchQuery"
        placeholder="Type something…"
        autofocus
        style="flex: 1"
      />
      <Button type="submit" :disabled="isLoading">
        {{ isLoading ? "Searching…" : "Search" }}
      </Button>
    </form>

    <ul v-if="results.length" style="margin-top: 1.5rem">
      <li v-for="r in results" :key="r">{{ r }}</li>
    </ul>
  </div>
</template>
