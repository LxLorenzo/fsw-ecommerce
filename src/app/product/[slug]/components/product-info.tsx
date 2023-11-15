'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ProductWithTotalPrice } from '@/helpers/product'
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  TruckIcon,
} from 'lucide-react'
import { useState } from 'react'

interface ProductInfoProps {
  product: ProductWithTotalPrice
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1)

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1))
  }

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }
  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{product.name}</h2>
      <p className="text-sm font-light text-[#8162FF]">Disponível em estoque</p>
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold">
          R$ {product.totalPrice.toFixed(2)}
        </h2>
        {product.discountPercentage > 0 && (
          <Badge className="px-2 py-[2px]">
            <ArrowDownIcon size={14} />
            {product.discountPercentage}%
          </Badge>
        )}
      </div>

      {product.discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {Number(product.basePrice).toFixed(2)}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={() => handleDecreaseQuantity()}
        >
          <ArrowLeftIcon size={16} />
        </Button>

        <span>{quantity}</span>

        <Button
          size="icon"
          variant="outline"
          onClick={() => handleIncreaseQuantity()}
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">{product.description}</p>
      </div>

      <Button className="mt-8 font-bold uppercase">
        Adicionar ao carrinho
      </Button>

      <div className="mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2">
        <div className="flex items-center gap-3">
          <TruckIcon />
          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">FSPacket®</span>
            </p>
            <p className="text-xs text-[#8162FF]">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>
        <p className="text-sm font-bold">Frete Grátis</p>
      </div>
    </div>
  )
}

export default ProductInfo
