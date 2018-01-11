<template>
  <div id="app">
    <a id="fork-on-gitlab" href="https://www-scm.prevnet/patrick.cunha/referencia-vue">Fork me on GitLab</a>
    <dtp-header>
      <dtp-menu >
        <menu-item label="início" :is-active="isMenuItemActive(1)" :action="() => handleMenuItemClick(1)"/>
        <menu-item label="teste" :is-active="isMenuItemActive(2)" :action="() => handleMenuItemClick(2)"/>
        <menu-dropdown label="componentes" :is-active="isDropdownMenuItemActive(3)" :action="() => handleMenuItemClick(3)">
          <menu-item label="Inputs" :is-active="isMenuItemActive(3.1)" :action="() => handleMenuItemClick(3.1)"/>
        </menu-dropdown>
        <menu-dropdown label="Exemplos Funcionais" :is-active="isDropdownMenuItemActive(4)" :action="() => handleMenuItemClick(4)">
          <menu-item label="Feature1" :is-active="isMenuItemActive(4.1)" :action="() => handleMenuItemClick(4.1)"/>
          <menu-item label="Feature2" :is-active="isMenuItemActive(4.2)" :action="() => handleMenuItemClick(4.2)"/>
          <menu-item label="Feature3" :is-active="isMenuItemActive(4.3)" :action="() => handleMenuItemClick(4.3)"/>
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
    handleMenuItemClick: function (key) {
      this.activeMenuKey = key
    },
    isMenuItemActive: function (key) {
      return key && this.activeMenuKey && this.activeMenuKey === key
    },
    isDropdownMenuItemActive: function (key) {
      return (
        key &&
        this.activeMenuKey &&
        this.activeMenuKey >= key &&
        this.activeMenuKey < key + 1
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