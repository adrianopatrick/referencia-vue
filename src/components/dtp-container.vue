<template>
    <div class="container">
        <dtp-page-header :title="title" v-if="pageHeader"/>
        <slot />
    </div>
</template>

<script>
import DtpPageHeader from './dtp-page-header'
export default {
  props: {
    title: {
      type: String
    },
    pageHeader: {
      type: Boolean,
      default: true
    }
  },
  components: {
    DtpPageHeader
  }
}
</script>
