import { ProductsGroup } from './ProductsGroup'

import { popularProducts } from '@/data/popularProducts'

const PopularProducts = () => {
  return (
    <ProductsGroup title='Popular Products' products={popularProducts} />
  )
}

export default PopularProducts