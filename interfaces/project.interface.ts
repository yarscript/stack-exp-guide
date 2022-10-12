import { TechnologyInterface } from '~/interfaces/technology.interface'

export interface ProjectInterface {
  title: string
  description: string
  technologies: TechnologyInterface[]
  order: number

  pushTechnology(technology: TechnologyInterface): this
}
