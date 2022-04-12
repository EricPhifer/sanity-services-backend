import Layout from '@components/Layout'
import { cmsList } from '@utils/cms'
import _ from 'lodash'
import { searchEngineList } from '@utils/search'
import { cmsFunctions } from '@utils/cms'
import { GetStaticProps } from 'next'
import ProductsList from '@components/ProductsList'
import { useEffect, useState } from 'react'

type Props = {
  [key: string]: any
  countries: any[]
  cms: 'sanity'
  searchEngine?: 'algolia'
  activeAlgolia: () => void
  algoliaStatus: boolean
  lang?: string
}

const IndexPage = ( {taxonomies, activeAlgolia, algoliaStatus, searchEngine, props }: Props) => {
  const { cms } = props
  const [on, setOn] = useState<Record<string, number>>({ '0': 0 })
  const [currentProducts, setCurrentProducts] = useState([])
  useEffect(() => {
    if (!_.isEmpty(taxonomies)) {
      _.map(on, (v, k: number) => {
        setCurrentProducts(taxonomies[k].taxons[v].products || [])
      })
    }
  }, [on, taxonomies])
  return (
    <Layout title="Eric Phifer LLC - Services" showMenu={false} cms={cms}>
      <div className="pb-10 px-5 md:px-0 max-x-screen-lg mx-auto container">
        <ProductsList products={currentProducts} cms={cms} searchBy={searchEngine} />
      </div>
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
