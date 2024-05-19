import type { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface LoginPayload {
  email: string
  password: string
}

export enum CompetitionType {
  INDIVIDUAL = 'individual',
  GROUP = 'group',
}

export enum CompetitionLevel {
  INTERNATIONAL = 'international',
  NATIONAL = 'national',
  CLUB = 'club',
}

export enum ApplicationLoadingStatus {
  IN_PROGRESS = 'in_progress',
  FINISHED = 'finished',
}

export enum CompetitionStatus {
  DRAFT = 'draft',
  UPCOMING = 'upcoming',
  REGISTRATION_OPEN = 'registration_open',
  REGISTRATION_CLOSED = 'registration_closed',
  ACTIVE = 'active',
  CANCELED = 'canceled',
  FINISHED = 'finished',
}

export enum Equipment {
  ROPE = 'rope',
  HOOP = 'hoop',
  BALL = 'ball',
  RIBBON = 'ribbon',
  CLUBS = 'clubs',
  FREEHAND = 'freehand',
  NOT_SPECIFIED = 'not_specified',
}

export enum CompetitionStaffRole {
  ChiefSecretary = 'chief_secretary',
  ChiefReferee = 'chief_referee',
  Scoreboard = 'scoreboard',
  Supervisor = 'supervisor',
}

export interface CompetitionStaffModel {
  user: string
  role: CompetitionStaffRole
}

export interface CompetitionStaffModelResponse extends CompetitionStaffModel {
  uuid: string
  first_name: string
  last_name: string
}

export interface ResponsibleUserModel {
  label: string
  [key: string]: string
}

export enum AgeCategory {
  KIDS = 'kids',
  PRE_JUNIORS = 'pre_juniors',
  JUNIORS = 'juniors',
  SENIORS = 'seniors',
  NONE = '',
}

export interface LogoImageModel {
  uuid?: string
  fileName?: string
  file: string
  data?: FormData
  fileContent?: File
}

export interface DocumentModel {
  extension: string
  file: string | File
  readonly size: number
  uuid: string
  filename: string
}

export interface ExerciseModel {
  gymnastics_equipment: Equipment | null
  gymnast_quantity: number | null
  subcategory?: string
  uuid: string
}

export interface CompetitionSubCategory {
  application_limit: number | null
  birth_year_from: number | null
  birth_year_to: number | null
  exercises: ExerciseModel[]
  category?: string
  name: string
  uuid: string
}

export interface CompetitionCategory {
  has_multiple_subcategories: boolean
  subcategories: CompetitionSubCategory[]
  competition?: string
  category_type: CompetitionType
  age_group: AgeCategory
  uuid: string
}

export enum JudgeRemoteControlScoreParameter {
  DB = 'db',
  DA = 'da',
  A = 'a',
  E = 'e',
  T = 't',
  L = 'l',
}

export interface JudgeRemoteControl {
  code: string
  device_name: string | null
  judge_count: number
  score_parameter: JudgeRemoteControlScoreParameter
  uuid: string
}

export interface JudgePanel {
  judge_remote: JudgeRemoteControl[]
  panel_number: 'panel_1' | 'panel_2'
  uuid: string
}

export interface CompetitionBaseModel {
  uuid?: string
  name: string
  description: string
  level: CompetitionLevel | string
  host: string
  country: CountryModel | null
  status: CompetitionStatus
  location: string
  event_start_date: string | null
  event_end_date: string | null
  application_start_date: string | null
  application_deadline_date: string | null
  logo_image: LogoImageModel | null
  documents: DocumentModel[] | null
  created_by?: { full_name: string, uuid: string }
  updated_by?: string
  contact_phone_number: string
  contact_first_name: string
  contact_last_name: string
  contact_full_name?: string
  contact_email: string
  categories: CompetitionCategory[]
  should_be_published: boolean
  created_at?: string
  new_applications_count?: number
  can_upload_applications?: boolean
  judge_panel?: JudgePanel[]
}

export interface CompetitionModel extends CompetitionBaseModel {
  chief_secretary: ResponsibleUserModel[]
  chief_referee: ResponsibleUserModel[]
  scoreboard: ResponsibleUserModel | null
  supervisor: ResponsibleUserModel | null
  staff?: CompetitionStaffModelResponse[]
}

export interface CompetitionModelResponse extends CompetitionBaseModel {
  staff?: CompetitionStaffModelResponse[]
}

export interface CompetitionModelPayload extends CompetitionBaseModel {
  staff?: CompetitionStaffModel[]
}

export interface CompetitionsListItemModel {
  uuid: string
  name: string
  status: CompetitionStatus
  created_at: string
  logo_image: {
    uuid: string
    file: string
  } | null
  created_by: {
    uuid: string
    full_name: string
  }
  country: CountryModel
  location: string
  level: string
  event_start_date: string
  event_end_date: string
  application_deadline_date?: string
  new_applications_count: number
}

export interface CompetitionsListResponse {
  count: number
  next: string
  previous: string
  results: CompetitionsListItemModel[]
}
export interface CompetitionsTeamAndFederationResponse {
  team_names: string[]
  federations: string[]
}

export interface UploadApplications {
  application_loading_status: ApplicationLoadingStatus | null
}

export interface CountryModel {
  uuid: string
  name: string
  code: string
}

export interface JudgeRemoteLink {
  code: string
  device_name: string
  access_link: string
}

export interface JudgeRemotesPanelLink {
  panel_number: 'panel_1' | 'panel_2'
  judge_remote: JudgeRemoteLink[]
}
