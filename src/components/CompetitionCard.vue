<script setup lang="ts">
import { useDate } from 'vuetify'
import type { CompetitionModel } from '~/types'
import { COLOR_BY_COMPETITION_STATUS } from '~/helpers'

defineProps<{
  data: CompetitionModel
  hover?: boolean
  variant?: any
}>()

const date = useDate()
const { t } = useI18n()
</script>

<template>
  <v-card
    class="mx-auto"
    subtitle="prepend and append"
    :hover="hover"
    :variant="variant ?? 'elevated'"
  >
    <template #title>
      <v-chip :color="COLOR_BY_COMPETITION_STATUS[data?.status]">
        {{ t(`competitions.status.${data?.status}`) }}
      </v-chip>
    </template>
    <template #subtitle>
      <div class="my-5 text-5">
        {{ data?.name }}
      </div>
    </template>
    <template #item>
      <div class="d-flex">
        <v-icon icon="mdi-calendar-blank" class="mr-2" />
        {{ date.format(data?.event_start_date, 'keyboardDate') }} - {{ date.format(data?.event_end_date, 'keyboardDate') }}

        <v-img
          height="21"
          max-width="32"
          cover
          class="ml-6 mr-2"
          :alt="data?.country?.name"
          :src="`https://flagcdn.com/w20/${data?.country?.code.toLowerCase()}.png`"
        />
        {{ data?.country?.name }}, {{ data?.location }}
      </div>
    </template>
    <template #prepend>
      <v-img
        width="148"
        height="148"
        class="mr-3"
        cover
        :alt="data?.name"
        :src="data?.logo_image?.file"
      />
    </template>
    <!--    <template #append> -->
    <!--      <RouterLink to="/" class="text-primary"> -->
    <!--        Details > -->
    <!--      </RouterLink> -->
    <!--    </template> -->
  </v-card>
</template>

<style scoped>

</style>
