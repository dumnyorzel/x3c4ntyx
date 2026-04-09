<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import InputText from "primevue/inputtext";

const router = useRouter();

const searchQuery = ref("");

const goToSearch = () => {
  if (!searchQuery.value.trim()) return;
  router.push({path: '/search', query: {q: searchQuery.value}})
}
</script>

<template>
  <div class="max-w-2xl">
    <p class="text-surface-600">Type a phrase and click <strong>Search</strong> to go to the results page.</p>
    <form @submit.prevent="goToSearch" class="flex gap-4 mt-4">
      <InputText
        type="search"
        v-model="searchQuery"
        placeholder="Type something…"
        :autofocus="true"
        style="flex: 1"
      />
      <Button type="submit">Search →</Button>
    </form>
  </div>
</template>
