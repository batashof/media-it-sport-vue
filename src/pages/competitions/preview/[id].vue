<script setup lang="ts">
import { useAppFetch } from '~/api/useAppFetch'
import { apiRoutes } from '~/api/routes'

const tab = ref(0)
const { t } = useI18n()
const route = useRoute()

const { data } = useAppFetch(apiRoutes.competitions + route.params.id).json()
</script>

<template>
  <div class="bg-grey-darken-4 absolute left-0 top-16 h-101 w-full" />
  <div class="pt-14">
    <RouterLink to="/">
      <v-btn variant="text" color="white">
        <v-icon icon="mdi-chevron-left" />back
      </v-btn>
    </RouterLink>
    <CompetitionCard :data="data" variant="text" class="bg-grey-darken-4" />
  </div>

  <v-container class="d-flex ga-6 mt-16">
    <v-card class="w-full">
      <v-tabs
        v-model="tab"
        color="deep-purple-accent-4"
      >
        <v-tab :value="1">
          {{ t('competitions.tabs.about') }}
        </v-tab>
        <v-tab :value="2">
          {{ t('competitions.tabs.categories') }}
        </v-tab>
        <v-tab :value="3">
          {{ t('competitions.tabs.responsible_persons') }}
        </v-tab>
        <v-tab :value="4">
          {{ t('competitions.tabs.documents') }}
        </v-tab>
      </v-tabs>
      <v-divider />

      <v-tabs-window v-model="tab">
        <v-tabs-window-item
          v-for="n in 3"
          :key="n"
          :value="n"
        >
          <v-container fluid>
            <v-row>
              <v-col
                v-for="i in 6"
                :key="i"
                cols="12"
                md="4"
              >
                <v-img
                  :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                  :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                  height="205"
                  cover
                />
              </v-col>
            </v-row>
          </v-container>
          <v-container fluid>
            <v-row>
              <v-col
                v-for="i in 6"
                :key="i"
                cols="12"
                md="4"
              >
                <v-img
                  :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                  :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                  height="205"
                  cover
                />
              </v-col>
            </v-row>
          </v-container>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>
    <v-card class="h-fit w-80">
      <v-card-item class="h-12 text-14px uppercase">
        {{ t('competitions.contacts.title') }}
      </v-card-item>
      <v-divider />
      <v-card-item>
        {{ t('competitions.contacts.name') }}
        <div class="text-gray">
          {{ `${data?.contact_first_name} ${data?.contact_last_name}` }}
        </div>
      </v-card-item>
      <v-card-item>
        {{ t('competitions.contacts.phone') }}
        <div class="text-gray">
          {{ data?.contact_phone_number }}
        </div>
      </v-card-item>
      <v-card-item>
        {{ t('competitions.contacts.email') }}
        <div class="text-gray">
          {{ data?.contact_email }}
        </div>
      </v-card-item>
    </v-card>
  </v-container>
</template>
