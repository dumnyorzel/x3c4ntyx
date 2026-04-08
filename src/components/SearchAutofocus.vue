<script setup>
import { ref } from "vue";
import Drawer from "primevue/drawer";
import InputText from "primevue/inputtext";

const visible3 = ref(false);
const value3 = ref("");
</script>

<template>
  <h1>Search Autofocus</h1>
  <Button label="Open Drawer" @click="visible3 = true" />
  <div class="card flex justify-center mt-4">
    <InputText
      v-model="value3"
      type="search"
      placeholder="Autofocus"
      :autofocus="true"
    />
  </div>
  <Drawer v-model:visible="visible3" header="SearchAutofocus">
    <div class="card flex justify-center">
      <InputText
        v-model="value3"
        type="search"
        placeholder="Autofocus"
        :autofocus="true"
      />
    </div>
  </Drawer>
</template>
