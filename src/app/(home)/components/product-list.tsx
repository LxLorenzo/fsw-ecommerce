import ProductItem from '@/components/ui/product-item'
import { ScrollBar } from '@/components/ui/scroll-area'
import { computeProductTotalPrice } from '@/helpers/product'
import { Product } from '@prisma/client'
import { ScrollArea } from '@radix-ui/react-scroll-area'

interface ProductListProps {
  products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-hidden px-5 pb-5">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={computeProductTotalPrice(product)}
        />
      ))}
    </div>
  )
}

export default ProductList
