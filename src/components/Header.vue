<script setup lang="ts">
const user = useUserStore()
</script>

<template>
  <v-app-bar :elevation="2">
    <v-toolbar-title class="font-weight-bold">
      <RouterLink to="/">
        SCORING SYSTEM
      </RouterLink>
    </v-toolbar-title>
    <RouterLink v-if="!user.isAuth" to="/login">
      <v-btn color="indigo">
        sign in
      </v-btn>
    </RouterLink>
    <AccountMenu v-if="user.isAuth" />
  </v-app-bar>
</template>
