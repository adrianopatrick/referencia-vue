<template>
    <li
        role="menuitem"
        @mouseover="isOpen = true"
        @mouseleave="isOpen = false"
        :class="{ open: isOpen, active: isActive }"
        class='dropdown-toggle'>
        <a
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            role="button" 
            @click.prevent="action()">{{ label }}</a>
        <ul class="dropdown-menu">
            <slot />
        </ul>
    </li>
</template>

<script>
export default {
  props: ['label', 'isActive', 'isOpen', 'action']
}
</script>

