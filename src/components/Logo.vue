<template>
  <div class="logo">
    <div class="logo__text">./MATHIS</div><br/>
    <div class="logo__text">HOUIS</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Logo',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/sass/core/colors.scss";

.logo {
  display: flex;
  flex-direction: column;
  align-items: self-start;
  margin-top: 9px;

  &__text {
    font-family: "Druk Wide Bold", sans-serif;
    font-size: 40px;
    color: $text-900;
    line-height: 14px;
    position: relative;

    &:last-child {
      position: relative;
      display: inline-block;
      &:after {
        content:"";
        width: 38px;
        height: 30px;
        right: -39px;
        bottom: -8px;
        background: $text-900;
        animation: blink 1s infinite;
        position: absolute;
      }
    }
  }
}

@keyframes blink {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  51% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}
</style>
