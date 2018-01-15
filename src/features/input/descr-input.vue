<template>
  <dtp-container title="Componente Input" :pageHeader="true" >
      <form class="form-control">
          <label>Pesquisa</label>
          <input type="search" />
      </form>
  </dtp-container>
</template>

<script>
import DtpContainer from '@/components/dtp-container'
export default {
  components: {
    DtpContainer
  }
}
</script>
