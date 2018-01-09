<template>
  <div id="app">
    <DtpHeader />
    <router-view/>
  </div>
</template>

<script>
import DtpHeader from './components/basic/header/dtp-header'
export default {
  name: 'the-container',
  components: {
    DtpHeader
  }
}
</script>