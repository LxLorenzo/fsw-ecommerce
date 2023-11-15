import { prismaClient } from '@/lib/prisma'
import Image from 'next/image'
import ProductImages from './components/product-images'

interface ProductDetailsPageProps {
  params: {
    slug: string
  }
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug,
    },
  })

  if (!product) return null

  return (
    <div className="">
      <ProductImages name={product.name} imageUrls={product.imageUrls} />
    </div>
  )
}

export default ProductDetailsPage
