export enum CompetitionStatus {
  DRAFT = 'draft',
  UPCOMING = 'upcoming',
  REGISTRATION_OPEN = 'registration_open',
  REGISTRATION_CLOSED = 'registration_closed',
  ACTIVE = 'active',
  CANCELED = 'canceled',
  FINISHED = 'finished',
}

export const COLOR_BY_COMPETITION_STATUS = {
  [CompetitionStatus.DRAFT]: 'info',
  [CompetitionStatus.UPCOMING]: 'info',
  [CompetitionStatus.REGISTRATION_OPEN]: 'success',
  [CompetitionStatus.REGISTRATION_CLOSED]: 'warning',
  [CompetitionStatus.ACTIVE]: 'success',
  [CompetitionStatus.FINISHED]: 'secondary',
  [CompetitionStatus.CANCELED]: 'error',
}

export function getInitials(firstName: string, lastName: string) {
  return (firstName?.charAt(0)?.toUpperCase() ?? '') + (lastName?.charAt(0)?.toUpperCase() ?? '')
}
