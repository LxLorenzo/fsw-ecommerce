import Image from 'next/image'
import Categories from './components/categories'
import ProductList from './components/product-list'
import { prismaClient } from '@/lib/prisma'
import SectionTitle from './components/section-title'
import PromoBanner from './components/promo-banner'

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
<<<<<<< HEAD
    <div className="flex flex-col gap-8 placeholder-sky-800">
=======
    <div>
>>>>>>> a4503bd3ba26231f4c24ed378e44dbad25ffc5f3
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% de desconto esse mês"
      />
      <div className="px-5">
        <Categories />
      </div>
<<<<<<< HEAD
      <div>
=======
      <div className="mt-8">
>>>>>>> a4503bd3ba26231f4c24ed378e44dbad25ffc5f3
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
<<<<<<< HEAD
        alt="Até 55% de desconto em teclados"
      />

      <div>
=======
        alt="Até 55% de desconto em mouses"
      />

      <div className="mt-8">
>>>>>>> a4503bd3ba26231f4c24ed378e44dbad25ffc5f3
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        src="/banner-home-03.png"
        alt="Até 55% de desconto em mouses"
<<<<<<< HEAD
      />

      <div>
=======
        className="mt-8"
      />

      <div className="mt-8">
>>>>>>> a4503bd3ba26231f4c24ed378e44dbad25ffc5f3
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  )
}
