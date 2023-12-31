import { Badge } from '@/components/ui/badge'
import { ShapesIcon } from 'lucide-react'
import { prismaClient } from '@/lib/prisma'
import CategoryItem from './components/category-item'

const Catalog = async () => {
  const categories = await prismaClient.category.findMany({})

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        variant="outline"
        className="w-fit gap-1 border-2 border-primary px-3 py-1.5 text-base uppercase "
      >
        <ShapesIcon size={16} />
        Catálogo
      </Badge>
      <div className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}

export default Catalog
