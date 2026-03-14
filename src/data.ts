export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Majestic Oud',
    category: 'Arabic Attar',
    price: 899,
    image: 'https://images.unsplash.com/photo-1595425970377-c9703bc48b40?auto=format&fit=crop&q=80&w=800',
    description: 'A deep, woody fragrance with notes of agarwood and amber. Perfect for evening wear.'
  },
  {
    id: '2',
    name: 'Rose Kannauj',
    category: 'Indian Attar',
    price: 499,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800',
    description: 'Authentic pure rose attar distilled in the traditional deg-bhapka method from Kannauj.'
  },
  {
    id: '3',
    name: 'Savage Clone',
    category: 'French Perfume Clones',
    price: 699,
    image: 'https://images.unsplash.com/photo-1523293115678-d2900f52f22e?auto=format&fit=crop&q=80&w=800',
    description: 'A fresh, spicy and woody clone of the popular designer fragrance. Long-lasting projection.'
  },
  {
    id: '4',
    name: 'Musk Al Rijali',
    category: 'Arabic Attar',
    price: 599,
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=800',
    description: 'A clean, powdery white musk with a touch of floral sweetness. Ideal for daily use.'
  },
  {
    id: '5',
    name: 'Mitti Attar',
    category: 'Indian Attar',
    price: 399,
    image: 'https://images.unsplash.com/photo-1615397323186-3ba868151478?auto=format&fit=crop&q=80&w=800',
    description: 'The scent of baked earth after the first rain. A unique, soothing earthy fragrance.'
  },
  {
    id: '6',
    name: 'Aventus Clone',
    category: 'French Perfume Clones',
    price: 999,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800',
    description: 'Fruity, rich, and smoky. A premium clone of the king of men\'s fragrances.'
  }
];

export const categories = [
  {
    name: 'Indian Attar',
    image: 'https://images.unsplash.com/photo-1608528577891-eb055944f2e7?auto=format&fit=crop&q=80&w=800',
    description: 'Traditional, pure, and earthy.'
  },
  {
    name: 'Arabic Attar',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800',
    description: 'Rich, woody, and luxurious.'
  },
  {
    name: 'French Perfume Clones',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800',
    description: 'Modern, fresh, and designer-inspired.'
  }
];

export const reviews = [
  {
    id: 1,
    name: 'Rahul Sharma',
    rating: 5,
    text: 'The Majestic Oud is simply mind-blowing. It lasts all day and I get so many compliments. Best perfume shop in Patna!'
  },
  {
    id: 2,
    name: 'Ayesha Khan',
    rating: 5,
    text: 'I bought the Rose Kannauj attar for my mother. It smells so pure and natural. Highly recommend Rahmani Perfumery.'
  },
  {
    id: 3,
    name: 'Vikram Singh',
    rating: 4,
    text: 'Their French clones are very close to the originals. The Savage clone is my daily wear now. Great value for money.'
  },
  {
    id: 4,
    name: 'Neha Gupta',
    rating: 5,
    text: 'Beautiful packaging and amazing fragrances. The Mitti Attar takes me back to my childhood. Will definitely order again.'
  }
];

// Inside our Shop - Replace these URLs with your actual shop images
export const shopImages = [
  '/image-1.png',
  '/image-2.png',
  '/image-3.png',
  '/image-4.png'
];
