<template>
    <li
        role="menuitem"
        class='dropdown dropdown-toggle'>
        <a
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
            role="button" >{{ label }}</a>
        <ul class="dropdown-menu">
            <slot />
        </ul>
    </li>
</template>

<<script>
export default {
  props: ['label']
}
</script>

