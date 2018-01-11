<template>
  <div id="app">
    <a id="fork-on-gitlab" href="https://www-scm.prevnet/patrick.cunha/referencia-vue">Fork me on GitLab</a>
    <dtp-header>
      <dtp-menu >
        <menu-item label="início" :is-active="isMenuItemActive(1)" :action="() => handleMenuItemClick(1)"/>
        <menu-item label="teste" :is-active="isMenuItemActive(2)" :action="() => handleMenuItemClick(2)"/>
        <menu-dropdown label="componentes">
          <menu-item label="Inputs" />
        </menu-dropdown>
        <menu-dropdown label="Exemplos Funcionais">
          <menu-item label="CRUD" />
        </menu-dropdown>
      </dtp-menu>
    </dtp-header>
    <main class="dtp-content">
      <router-view/>
    </main>
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
  data: function () {
    return {
      activeMenuKey: 1
    }
  },
  methods: {
    isMenuItemActive: function (key) {
      return key && this.activeMenuKey && this.activeMenuKey === key
    },
    handleMenuItemClick: function (key) {
      this.activeMenuKey = key
    },
    isDropdownMenuItemActive: function (key) {
      return (
        key &&
        this.state.activeMenuKey &&
        this.state.activeMenuKey >= key &&
        this.state.activeMenuKey < key + 1
      )
    }
  },
  components: {
    DtpHeader,
    DtpMenu,
    MenuItem,
    MenuDropdown,
    DtpFooter
  }
}
</script>