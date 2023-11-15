import { prismaClient } from '@/lib/prisma'
import Image from 'next/image'

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
    <div className="flex w-full items-center justify-center">
      <div className="flex items-center justify-center bg-accent p-20">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          sizes="100vw"
          height={0}
          width={0}
          style={{ objectFit: 'cover' }}
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
        />
      </div>
    </div>
  )
}

export default ProductDetailsPage
