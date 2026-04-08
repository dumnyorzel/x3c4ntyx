<template>
  <Drawer v-model:visible="visible" header="TextAutofocus">
    <div class="card flex justify-center flex-col gap-4">
      <InputText
        v-model="value1"
        type="text"
        placeholder="Autofocus"
        :autofocus="true"
      />
    </div>
  </Drawer>
</template>
