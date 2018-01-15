<template>
  <li role="menuitem" :class="{ active : isActive}" @click="action()">
      <a @click="navigate(rota)">{{ label }}</a>
  </li>
</template>

<script>
export default {
  props: ['label', 'isActive', 'action', 'rota'],
  methods: {
    navigate (rota) { this.$router.push({name: rota}) }
  }
}
</script>

<style scope>
li:hover {
  background-color: #284F82;
}
</style>


