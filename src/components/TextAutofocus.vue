<script setup>
import { ref } from "vue";
import Drawer from "primevue/drawer";
import InputText from "primevue/inputtext";

const visible1 = ref(false);
const value1 = ref("");
</script>
<template>
  <h1>Text Autofocus</h1>
  <Button label="Open Drawer" @click="visible1 = true" />
  <div class="card flex justify-center">
    <InputText
      v-model="value1"
      type="text"
      placeholder="Autofocus"
      :autofocus="true"
    />
  </div>
  <Drawer v-model:visible="visible1" header="TextAutofocus" position="top">
    <div class="card flex">
      <InputText
        v-model="value1"
        type="text"
        placeholder="Autofocus"
        :autofocus="true"
      />
    </div>
  </Drawer>
</template>
