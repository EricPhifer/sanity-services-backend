import Layout from '@components/Layout'
import Countries from '@components/Countries'
import { cmsList } from '@utils/cms'
import _ from 'lodash'
import { searchEngineList } from '@utils/search'
import { cmsFunctions } from '@utils/cms'
import { GetStaticProps } from 'next'

type Props = {
  [key: string]: any
  countries: any[]
  cms: 'sanity'
  searchEngine?: 'algolia'
}

const IndexPage = (props: Props) => {
  const { cms, searchEngine, countries } = props
  return (
    <Layout title="Eric Phifer LLC - Services" showMenu={false} cms={cms} /
 
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const cms = cmsList()
  const searchEngine = searchEngineList()
  const countries = _.has(cmsFunctions, `${cms}AllCountries`)
    ? await cmsFunctions[`${cms}AllCountries`]()
    : []
  return {
    props: {
      countries,
      cms,
      searchEngine,
    },
    revalidate: false,
  }
}

export default IndexPage
