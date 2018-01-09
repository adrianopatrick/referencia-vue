<template>
    <header class="dtp-header header-lg">
        <accessible-bar />
        <application-bar />
        <user-info />
        <info-bar-btn />
    </header>
</template>

<script>
import AccessibleBar from './accessible-bar'
import ApplicationBar from './application-bar'
import UserInfo from './user-info'
import InfoBarBtn from './info-bar-btn'
export default {
  components: {
    AccessibleBar,
    ApplicationBar,
    UserInfo,
    InfoBarBtn
  }
}
</script>
