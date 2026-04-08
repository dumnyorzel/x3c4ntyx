<template>
  <Drawer v-model:visible="visible" header="TextAutofocus">
    <div class="card flex justify-center flex-col gap-4">
      <InputText v-model="value4" type="search" placeholder="Manual focus" />
    </div>
  </Drawer>
</template>
