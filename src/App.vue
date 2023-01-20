<script setup lang="ts">
import { dark } from "@/assets/theme/dark.css";
import { light } from "@/assets/theme/light.css";
import { div } from "@/assets/components/div.css";
import { button } from "@/assets/components/button.css";
import { ref } from "vue";
import { sprinkles } from "./assets/abstract/sprinkles.css";

const theme = ref(light);
const rangeValue = ref(100);

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  theme.value = dark;
}
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    theme.value = e.matches ? dark : light;
  });

const click = () => {
  theme.value = theme.value === light ? dark : light;
};
</script>

<template>
  <div :class="[theme]" id="app">
    <div :class="div">
      <div
        :class="
          sprinkles({
            textAlign: {
              mobile: 'center',
              tablet: 'left',
            },
          })
        "
      >
        1
      </div>
      <div
        :class="
          sprinkles({
            transition: 'all',
            flexGrow: 1,
            color: {
              default: 'brand',
              hover: 'text',
            },
            background: {
              default: 'text',
              hover: 'brand',
            },
          })
        "
      >
        2
      </div>
      <div>3</div>
    </div>
    <button @click="click" :class="button">Changer de couleur</button>
    <br />
    <h1
      :class="
        sprinkles({
          fontWeight: rangeValue,
          fontSize: '20',
          transition: 'all',
        })
      "
    >
      <span v-for="letter in rangeValue.toString()" :key="letter">
        {{ letter }}
      </span>
    </h1>
    <input
      :class="
        sprinkles({
          background: 'text',
          borderRadius: '4',
        })
      "
      type="range"
      min="100"
      max="900"
      step="50"
      v-model="rangeValue"
    />
  </div>
</template>
