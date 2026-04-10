<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
import InputText from 'primevue/inputtext';
import { useRoute, useRouter } from 'vue-router';

type SearchResult = { title: string; description: string; url: string };

const FAKE_RESULTS: SearchResult[] = [
  { title: 'Getting started with Vue 3', description: 'Learn the basics of the Composition API and reactive state.', url: '#' },
  { title: 'PrimeVue InputText component', description: 'Styled input component from the PrimeVue component library.', url: '#' },
  { title: 'Safari WebKit cursor bugs', description: 'Known issues with cursor/caret position in Safari inputs.', url: '#' },
  { title: 'Understanding type="search"', description: 'How the search input type differs from text in WebKit browsers.', url: '#' },
];

const inputRef = ref();

const fakeSearch = (q: string): Promise<SearchResult[]> =>
  new Promise((resolve) =>
    setTimeout(
      () => resolve(FAKE_RESULTS.filter((r) => r.title.toLowerCase().includes(q.toLowerCase()) || q.length > 0)),
      800
    )
  );

const route = useRoute();
const router = useRouter();

const searchQuery = ref(route.query.q as string ?? '');
const results = ref<SearchResult[]>([]);
const isLoading = ref(false);

const handleSearch = async (): Promise<void> => {
  if (!searchQuery.value.trim()) return;
  router.replace({path: '/search', query: {q: searchQuery.value}})
  isLoading.value = true;
  results.value = [];
  results.value = await fakeSearch(searchQuery.value);
  isLoading.value = false;
  // ↑ Bug is reproducible here: cursor jumps to beginning after results load
};
onMounted(async () => {
  if (searchQuery.value) {
    isLoading.value = true
    results.value = await fakeSearch(searchQuery.value)
    isLoading.value = false
    inputRef.value?.$el?.focus();

  }
})
</script>

<template>
    <h1>Search results</h1>
    <form @submit.prevent="handleSearch" class="flex gap-2">
      <InputText
        type="text"
        v-model="searchQuery"
        placeholder="Type something…"
        ref="inputRef"
        class="w-full flex-1 p-3"
      />
      <Button type="submit" :disabled="isLoading">
        {{ isLoading ? 'Searching…' : 'Search' }}
      </Button>
    </form>

    <div v-if="isLoading" style="margin-top: 1.5rem; color: #555">Loading…</div>
    <div v-else-if="results.length === 0 && searchQuery" style="margin-top: 1.5rem; color: #555">
      No results for <strong>{{ searchQuery }}</strong>.
    </div>
    <ul v-else style="margin-top: 1.5rem; padding: 0; list-style: none">
      <li
        v-for="result in results"
        :key="result.url + result.title"
        style="border-top: 1px solid #e5e7eb; padding: 1rem 0"
      >
        <a :href="result.url" style="text-decoration: none; color: inherit">
          <strong style="display: block; margin-bottom: 0.25rem">{{ result.title }}</strong>
          <span style="font-size: 0.875rem; color: #555">{{ result.description }}</span>
        </a>
      </li>
    </ul>
</template>

