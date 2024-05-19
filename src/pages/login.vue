<script setup lang="ts">
const user = useUserStore()
const { t } = useI18n()
</script>

<template>
  <v-card class="d-flex align-center flex-column w-150 justify-center pa-8">
    <div class="d-flex align-center bg-blue-lighten-4 text-primary h-12 w-12 justify-center rounded-lg">
      <v-icon icon="mdi-login" size="x-large" />
    </div>
    <v-card-title class="text-h4">
      {{ t('login.title') }}
    </v-card-title>
    <v-card-subtitle class="text-subtitle-1">
      {{ t('login.subtitle') }}
      <RouterLink to="/create" class="text-primary decoration-underline">
        {{ t('login.create') }}
      </RouterLink>
    </v-card-subtitle>
    <v-form class="mt-6 w-full" @submit.prevent="user.login()">
      <v-text-field v-model="user.email" label="Email" />
      <v-text-field v-model="user.password" label="Password" type="password" />
      <RouterLink to="/forgot" class="text-primary float-right decoration-underline">
        {{ t('login.forgot') }}
      </RouterLink>
      <v-btn class="bg-primary mt-6 w-full" variant="flat" type="submit">
        {{ t('login.button') }}
      </v-btn>
    </v-form>
  </v-card>
</template>

<route lang="yaml">
meta:
  layout: auth
</route>
