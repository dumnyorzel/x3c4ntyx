<template>
  <Drawer v-model:visible="visible" header="TextAutofocus">
    <div class="card flex justify-center flex-col gap-4">
      <InputText
        v-model="value3"
        type="search"
        placeholder="Autofocus"
        :autofocus="true"
      />
    </div>
  </Drawer>
</template>
