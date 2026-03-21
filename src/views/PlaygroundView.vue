<template>
  <div class="gap-4 grid grid-cols-5 p-3 w-full">
    <div class="flex flex-col gap-4">
      <fwb-input
        v-for="size in sizes"
        :key="size.value"
        v-model="selected.input[size.value]"
        :label="`Input ${size.label}`"
        :size="size.value"
        :placeholder="`Input ${size.label}`"
      />
    </div>
    <div class="flex flex-col gap-4">
      <fwb-file-input
        v-for="size in sizes"
        :key="size.value"
        v-model="selected.file[size.value]"
        :label="`File Input ${size.label}`"
        :size="size.value"
        :placeholder="`Select ${size.label} file...`"
      />
    </div>
    <div class="flex flex-col gap-4">
      <fwb-autocomplete
        v-for="size in sizes"
        :key="size.value"
        v-model="selected.autocomplete[size.value]"
        :label="`Autocomplete ${size.label}`"
        :options="countries"
        :placeholder="`Search ${size.label}...`"
        :search-fields="['name']"
        :size="size.value"
        display="name"
      />
    </div>
    <div class="flex flex-col gap-4">
      <fwb-select
        v-for="size in sizes"
        :key="size.value"
        v-model="selected.select[size.value]"
        :label="`Select ${size.label}`"
        :options="countries"
        :size="size.value"
        :placeholder="`Select ${size.label}`"
      />
    </div>
    <div class="flex flex-col gap-4">
      <fwb-textarea
        v-for="size in sizes"
        :key="size.value"
        v-model="selected.textarea[size.value]"
        :label="`Textarea ${size.label}`"
        :size="size.value"
        rows="1"
        :placeholder="`Input ${size.label} text...`"
      />
    </div>
    <hr class="col-span-5 bg-gray-200 dark:bg-gray-600 my-8 border-0 h-px">
    <fwb-input
      v-model="name"
      v-bind="elementClasses"
      label="Input with custom classes"
    />
    <fwb-select
      v-model="selected.select.md"
      :label="`Select ${sizes[1].label}`"
      :options="countries"
      :size="sizes[1].value"
      :placeholder="`Select ${sizes[1].label}`"
      v-bind="elementClasses"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sizes = [
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' },
  { label: 'Extra Large', value: 'xl' },
]

const selected = ref({
  autocomplete: {
    sm: '',
    md: '',
    lg: '',
    xl: '',
  },
  select: {
    sm: '',
    md: '',
    lg: '',
    xl: '',
  },
  input: {
    sm: '',
    md: '',
    lg: '',
    xl: '',
  },
  file: {
    sm: '',
    md: '',
    lg: '',
    xl: '',
  },
  textarea: {
    sm: '',
    md: '',
    lg: '',
    xl: '',
  },
})
const countries = [
  { value: 'us', name: 'United States' },
  { value: 'ca', name: 'Canada' },
  { value: 'fr', name: 'France' },
]

const elementClasses = {
  class: 'border-red-500 border-2',
  inputClass: 'border-green-500 border-2',
  labelClass: 'border-blue-500 border-2',
  wrapperClass: 'border-yellow-500 border-2',
}
</script>
