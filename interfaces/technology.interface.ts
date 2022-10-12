export enum TechnologyType {
  language = 'language',
  framework = 'framework',
  other = 'other'
}

export interface TechnologyInterface {
  imgUrl: string
  title: string
  description: string
  key: string
  url: string
  type: TechnologyType
}
