import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import product from './product'
import variant from './variant'
import size from './size'
import taxon from './taxon'
import taxonomy from './taxonomy'
import blockContent from './blockContent'
import productImage from './productImage'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    product,
    variant,
    size,
    taxon,
    taxonomy,
    // When added to this list, object types can be used as
    // { type: "typename" } in other document schemas
    productImage,
    blockContent,
  ]),
})
