import Layout from '@components/Layout'
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
  const { cms } = props
  return (
    <Layout title="Eric Phifer LLC - Services" showMenu={false} cms={cms}>
      
    </Layout>
 
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
