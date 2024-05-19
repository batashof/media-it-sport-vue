<script setup lang="ts">
import { useAppFetch } from '~/api/useAppFetch'
import { apiRoutes } from '~/api/routes'
import type { CompetitionModel } from '~/types'

defineOptions({
  name: 'IndexPage',
})

const { t } = useI18n()
const { data } = useAppFetch(apiRoutes.competitions).json()
</script>

<template>
  <h1 class="mt-8 text-center text-12">
    {{ t('index.title') }}
  </h1>

  <v-data-iterator class="pb-10" :items="data || []" :items-per-page="5">
    <template #default="{ items }">
      <template
        v-for="item in items"
        :key="item.raw.uuid"
      >
        <RouterLink :to="`${apiRoutes.competitions}preview/${item.raw.uuid}`">
          <CompetitionCard :data="item.raw as CompetitionModel" hover />
        </RouterLink>
        <br>
      </template>
    </template>
    <template #footer="{ pageCount, setPage }">
      <v-pagination
        :length="pageCount"
        :total-visible="7"
        @update:model-value="(value) => setPage(value)"
      />
    </template>
  </v-data-iterator>
</template>
