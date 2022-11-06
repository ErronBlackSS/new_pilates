export enum ROUTES {
  MAIN = '/',
  LOGIN = '/login',
  ACCOUNT = '/account',
  REGISTRATION = '/registration',
  RESET = '/reset',
  RESET_PASSWORD = '/reset/:token',
  SETTINGS = '/account/settings',
  MY_LESSONS = '/account/lessons',
  USERS = '/account/users',
  DIRECTIONS = '/account/directions',
  LESSON_TYPES = '/account/lessonstypes'
}

export enum ROLES {
  USER = '9bd2b9fc-446b-44ad-bbcd-d97c71004f5d',
  COACH =  'a3ee77b5-dd34-4a63-a460-7eb53eb6e560',
  ADMIN = '1c4f8c85-7a58-4dc9-85cc-d0709820eeea'
}
