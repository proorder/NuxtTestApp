<template lang="pug">
  .m-table-column
    slot(name="label")
    slot(name="default", :photo="data")
    slot(v-if="data") {{ data }}
    div(v-if="label", class="m-table-column__label") {{ label }}
</template>

<script>
export default {
  props: {
    data: {
      type: [String, Boolean],
      default: false,
    },
    label: {
      type: [String, Boolean],
      default: false,
    },
  },
};
</script>

<style lang="stylus">
.m-table-column
  &__label
    padding 15px 20px
    display flex
    justify-content center
    align-items center
</style>
