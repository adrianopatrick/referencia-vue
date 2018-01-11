<template>
  <li role="menuitem" :class="{ active : isActive}" @click="action()">
      <a>{{ label }}</a>
  </li>
</template>

<script>
export default {
  props: ['label', 'isActive', 'action']
}
</script>

<style scope>
li:hover {
  background-color: #284F82;
}
</style>


