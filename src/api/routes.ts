export const apiRoutes = {
  login: `/auth/token/`,
  users: `/users/`,
  profile: `/users/me`,
  competitions: `/competitions/`,
  participants: '/participants/',
  categories: 'categories/',
  subCategories: 'subcategories/',

  teams: 'teams/',
  gymnasts: 'gymnasts/',
  gymnastsGroups: 'gymnasts_groups/',
  judges: 'judges/',
  countries: `/countries/`,
  applications: '/applications/',
  uploadApplications: '/upload_applications/',
  activation: {
    activate: `/auth/activation/`,
    validate: `/auth/activation/validate/`,
  },
  password: {
    restore: `/auth/password/restore/`,
    createRestore: `/auth/password/create-restore/`,
    validateRestore: `/auth/password/validate-restore/`,
    updatePassword: `/users/me/update-password/`,
  },
  files: {
    images: `/files/images/`,
    documents: `/files/documents/`,
  },
}
