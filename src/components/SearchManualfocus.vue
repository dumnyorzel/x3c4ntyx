<script setup>
import { ref } from "vue";
import Drawer from "primevue/drawer";
import InputText from "primevue/inputtext";

const visible4 = ref(false);
const value4 = ref("");
const inputRef = ref();

const onDrawerShown = () => {
  inputRef.value?.$el?.focus();
};
</script>
<template>
  <h1>Search Manual Focus</h1>
  <Button label="Open Drawer" @click="visible4 = true" />
  <div class="card flex justify-center">
    <InputText
      v-model="value4"
      ref="inputRef"
      type="search"
      placeholder="Manual focus"
    />
  </div>
  <Drawer
    v-model:visible="visible4"
    header="SearchManualfocus"
    position="top"
    @after-show="onDrawerShown"
  >
    <div class="card flex">
      <InputText
        v-model="value4"
        ref="inputRef"
        type="search"
        placeholder="Manual focus"
      />
    </div>
  </Drawer>
</template>
