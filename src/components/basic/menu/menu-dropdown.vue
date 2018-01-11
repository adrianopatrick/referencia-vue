<template>
    <li
        role="menuitem"
        :class="{ open: isActive }"
        class='dropdown-toggle'>
        <a
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            role="button" 
            @click="action()">{{ label }}</a>
        <ul class="dropdown-menu">
            <slot />
        </ul>
    </li>
</template>

<script>
export default {
  props: ['label', 'isActive', 'action']
}
</script>

