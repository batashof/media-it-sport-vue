<script setup lang="ts">
</script>

<template>
  <v-layout>
    <Header />
    <v-main class="d-flex position-relative h-100vh justify-center overflow-auto">
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-layout>
</template>
