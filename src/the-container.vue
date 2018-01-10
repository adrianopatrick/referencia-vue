<template>
  <div id="app">
    <a id="fork-on-gitlab" href="https://www-scm.prevnet/patrick.cunha/referencia-vue">Fork me on GitLab</a>
    <dtp-header>
      <dtp-menu >
        <menu-item label="início" />
        <menu-dropdown label="componentes">
          <menu-item label="Inputs" />
        </menu-dropdown>
        <menu-dropdown label="Exemplos Funcionais">
          <menu-item label="CRUD" />
        </menu-dropdown>
      </dtp-menu>
    </dtp-header>
    <router-view/>
    <dtp-footer />
  </div>
</template>

<script>
import DtpHeader from './components/basic/header/dtp-header'
import DtpMenu from './components/basic/menu/dtp-menu'
import MenuItem from './components/basic/menu/menu-item'
import MenuDropdown from './components/basic/menu/menu-dropdown'
import DtpFooter from './components/basic/footer/dtp-footer'
export default {
  name: 'the-container',
  components: {
    DtpHeader,
    DtpMenu,
    MenuItem,
    MenuDropdown,
    DtpFooter
  }
}
</script>