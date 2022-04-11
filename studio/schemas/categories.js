import { BiCategory } from 'react-icons/bi'
import supportedLanguages from './locale/supportedLanguages'

const baseLanguage = supportedLanguages.find((l) => l.isDefault)

export default {
  name: 'categories',
  title: 'Categories',
  description: 'Categories of services provided.',
  type: 'document',
  icon: BiCategory,
  fields: [
    {
      id: 'name',
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: `name`,
    },
  },
}