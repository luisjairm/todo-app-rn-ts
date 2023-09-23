export interface UserLocalRepository {
  save: (userName: string) => Promise<boolean>
  get: () => Promise<string | null>
}
