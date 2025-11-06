import React from 'react';
import { ShoppingCart, Filter, Star } from 'lucide-react';

const products = [
  {
    id: 'pvb-legendary-1',
    name: 'Legendary Brainrot Sprout',
    rarity: 'Legendary',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1200&auto=format&fit=crop',
    popularity: 95,
  },
  {
    id: 'pvb-epic-1',
    name: 'Epic Neon Vine',
    rarity: 'Epic',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=1200&auto=format&fit=crop',
    popularity: 90,
  },
  {
    id: 'pvb-rare-1',
    name: 'Rare Glow Bud',
    rarity: 'Rare',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop',
    popularity: 83,
  },
  {
    id: 'pvb-common-1',
    name: 'Common Leaflet',
    rarity: 'Common',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1495223153807-b916f75de8c5?q=80&w=1200&auto=format&fit=crop',
    popularity: 70,
  },
];

export default function FeaturedProducts() {
  const [sort, setSort] = React.useState('popularity');

  const sorted = React.useMemo(() => {
    const list = [...products];
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sort === 'newest') list.sort((a, b) => b.id.localeCompare(a.id));
    else list.sort((a, b) => b.popularity - a.popularity);
    return list;
  }, [sort]);

  return (
    <section id="shop" className="relative bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Best Sellers — Plants vs Brainrots</h2>
            <p className="text-slate-300 text-sm">Hand-picked favorites with fast delivery</p>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-300" />
            <select
              className="bg-slate-900 text-slate-100 border border-white/10 rounded-md px-3 py-2 text-sm"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="popularity">Popularity</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sorted.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <div className="group rounded-xl overflow-hidden border border-white/10 bg-slate-900">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 rounded-full px-2 py-1 text-[10px] font-semibold bg-sky-500/90 text-white">
          {product.rarity}
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-slate-100 text-sm font-semibold line-clamp-1">{product.name}</h3>
        <div className="mt-1 flex items-center justify-between">
          <p className="text-sky-300 font-bold">${product.price.toFixed(2)}</p>
          <div className="flex items-center text-amber-300 text-xs">
            <Star className="w-3 h-3 fill-current" />
            <span className="ml-1">{product.popularity}</span>
          </div>
        </div>
        <button
          className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-md bg-sky-500 hover:bg-sky-600 text-white px-3 py-2 text-sm font-semibold transition-colors"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingCart className="w-4 h-4" /> Add to Cart
        </button>
      </div>
    </div>
  );
}
