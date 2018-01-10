<template>
  <div id="app">
    <a id="fork-on-gitlab" href="https://www-scm.prevnet/patrick.cunha/referencia-vue">Fork me on GitLab</a>
    <dtp-header>
      <dtp-menu >
        <menu-item label="início" />
      </dtp-menu>
    </dtp-header>
    <router-view/>
  </div>
</template>

<script>
import DtpHeader from './components/basic/header/dtp-header'
import DtpMenu from './components/basic/menu/dtp-menu'
import MenuItem from './components/basic/menu/menu-item'
export default {
  name: "the-container",
  components: {
    DtpHeader,
    DtpMenu,
    MenuItem
  }
}
</script>