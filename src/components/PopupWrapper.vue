<template>
    <teleport to="body">
        <div class="popup-wrapper" @click="$emit('click', $event)">
          <slot></slot>
        </div>
    </teleport>
</template>

<script>
export default {
  name: "PopupWrapper",
}
</script>

<style lang="scss">
  .popup-wrapper{
    position: fixed;
    display: grid;
    justify-content: center;
    align-content: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.91);
  }
</style>
