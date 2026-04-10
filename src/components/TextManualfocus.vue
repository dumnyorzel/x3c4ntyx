<script setup>
import { ref } from "vue";
import Drawer from "primevue/drawer";
import InputText from "primevue/inputtext";

const visible2 = ref(false);
const value2 = ref("");
const inputRef = ref();

const onDrawerShown = () => {
  inputRef.value?.$el?.focus();
};
</script>
<template>
  <h1>Text Manual Focus</h1>
  <Button label="Open Drawer" @click="visible2 = true" />
  <div class="card flex justify-center">
    <InputText
      v-model="value2"
      ref="inputRef"
      type="text"
      placeholder="Manual focus"
    />
  </div>
  <Drawer
    v-model:visible="visible2"
    header="TextManualfocus"
    position="top"
    @after-show="onDrawerShown"
  >
    <div class="card flex">
      <InputText
        v-model="value2"
        ref="inputRef"
        type="text"
        placeholder="Manual focus"
      />
    </div>
  </Drawer>
</template>
