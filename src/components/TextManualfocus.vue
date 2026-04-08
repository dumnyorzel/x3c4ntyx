<template>
  <Drawer v-model:visible="visible" header="TextAutofocus">
    <div class="card flex justify-center flex-col gap-4">
      <InputText v-model="value2" type="text" placeholder="Manual focus" />
    </div>
  </Drawer>
</template>
