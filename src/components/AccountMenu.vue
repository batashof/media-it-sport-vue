<script setup lang="ts">
import { useAppFetch } from '~/api/useAppFetch'
import { apiRoutes } from '~/api/routes'
import { getInitials } from '~/helpers'

const { t } = useI18n()
const user = useUserStore()
const { data } = useAppFetch(apiRoutes.profile).json()
</script>

<template>
  <v-menu max-width="300">
    <template #activator="{ props }">
      <v-btn
        icon=""
        v-bind="props"
      >
        <v-avatar
          color="brown"
        >
          <span class="text-h6">{{ getInitials(data?.first_name, data?.last_name) }}</span>
        </v-avatar>
      </v-btn>
    </template>

    <v-card min-width="300">
      <v-list>
        <v-list-item
          :subtitle="data?.email"
          :title="`${data?.first_name} ${data?.last_name}`"
        >
          <template #prepend>
            <v-avatar
              color="brown"
            >
              <span class="text-h6">{{ getInitials(data?.first_name, data?.last_name) }}</span>
            </v-avatar>
          </template>
        </v-list-item>
      </v-list>
      <v-divider />

      <v-list>
        <RouterLink to="/">
          <v-list-item>
            <v-list-item-title>
              <v-icon icon="mdi-account-multiple" />
              {{ t('account_menu.users') }}
            </v-list-item-title>
          </v-list-item>
        </RouterLink>
        <RouterLink to="/">
          <v-list-item>
            <v-icon icon="mdi-trophy" />
            {{ t('account_menu.competitions') }}
          </v-list-item>
        </RouterLink>
        <RouterLink to="/">
          <v-list-item>
            <v-icon icon="mdi-account" />
            {{ t('account_menu.profile') }}
          </v-list-item>
        </RouterLink>

        <v-divider />

        <RouterLink to="/login" @click="user.logout()">
          <v-list-item>
            <v-icon icon="mdi-logout" />
            {{ t('account_menu.logout') }}
          </v-list-item>
        </RouterLink>
      </v-list>
    </v-card>
  </v-menu>
</template>

<style scoped>

</style>
