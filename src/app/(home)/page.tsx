import Categories from './components/categories'
import ProductList from './components/product-list'
import { prismaClient } from '@/lib/prisma'
import SectionTitle from './components/section-title'
import PromoBanner from './components/promo-banner'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'keyboards',
      },
    },
  })

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'mouses',
      },
    },
  })
  return (
    <div className="flex flex-col gap-8 py-8 placeholder-sky-800">
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% de desconto esse mês"
      />
      <div className="px-5">
        <Categories />
      </div>
      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ScrollArea>
          <ProductList products={deals} />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="Até 55% de desconto em teclados"
      />

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ScrollArea>
          <ProductList products={keyboards} />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <PromoBanner
        src="/banner-home-03.png"
        alt="Até 55% de desconto em mouses"
      />

      <div>
        <SectionTitle>Mouses</SectionTitle>
        <ScrollArea>
          <ProductList products={mouses} />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  )
}
