import { ProductWithTotalPrice } from '@/helpers/product'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from './badge'
import { ArrowDownIcon } from 'lucide-react'

interface ProductItemProps {
  product: ProductWithTotalPrice
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="flex flex-col gap-4">
        <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            style={{ objectFit: 'contain' }}
          />
          {product.discountPercentage > 0 && (
            <Badge className="absolute left-4 top-2 px-2 py-[2px]">
              <ArrowDownIcon size={14} />
              {product.discountPercentage}%
            </Badge>
          )}
        </div>
        <div className="flex flex-col">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {product.name}
          </p>
          <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            {product.discountPercentage > 0 ? (
              <>
                <p className="text-base font-semibold">
                  R$ {product.totalPrice.toFixed(2).replace('.', ',')}
                </p>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs line-through opacity-75">
                  R$ {Number(product.basePrice).toFixed(2).replace('.', ',')}
                </p>
              </>
            ) : (
              <p className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-semibold">
                R$ {product.totalPrice.toFixed(2).replace('.', ',')}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
