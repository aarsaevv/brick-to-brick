<template>
  <div
    :class="$style.icon"
    :style="{
      width: width ? `${width}px` : undefined,
      height: height ? `${height}px` : undefined,
    }"
  >
    <slot />
  </div>
</template>

<script>
  export default {
    props: {
      width: { type: String, default: '25' },
      height: { type: String, default: '25' },
    },
  };
</script>

<style lang="scss" module>
  .icon {
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    color: currentColor;
    user-select: none;
    vertical-align: initial;
  }
</style>
