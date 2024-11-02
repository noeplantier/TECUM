const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const products = [
  { name: 'Gold Necklace', price: 200, image: '/images/goldnecklace.webp' },
  { name: 'Diamond Ring', price: 500, image: '/images/diamondring.jpg.webp' },
  { name: 'Silver Bracelet', price: 150, image: '/images/silverbracelet.jpg' },
  { name: 'Emerald Earrings', price: 100, image: '/images/Emerald Earrings.jpg.webp' },
  { name: 'Pearl Pendant', price: 250, image: '/images/Pearl Pendant.jpg' },
  { name: 'Sapphire Bracelet', price: 300, image: '/images/Sapphire Bracelet.jpg.webp' },
  { name: 'Leather Watch', price: 180, image: '/images/Leather Watch.jpg' },
  { name: 'Ruby Necklace', price: 450, image: '/images/Ruby Necklace.jpg' },
  { name: 'Gold Anklet', price: 90, image: '/images/Gold Anklet.jpeg.webp' },
  { name: 'Cubic Zirconia Ring', price: 70, image: '/images/Cubic Zirconia Ring.webp' },
  { name: 'Silver Cufflinks', price: 110, image: '/images/Silver Cufflinks.jpeg' },
  { name: 'Platinum Chain', price: 600, image: '/images/Platinum Chain.jpg.webp' },
  { name: 'Rose Gold Bangle', price: 220, image: '/images/Rose Gold Bangle.jpg.avif' },
  { name: 'Crystal Brooch', price: 80, image: '/images/ Crystal Brooch.webp' },
  { name: 'Turquoise Necklace', price: 160, image: '/images/Turquoise Necklace.jpg' },
  { name: 'White Gold Earrings', price: 340, image: '/images/whitegoldearrings.jpg' },
  { name: 'Amethyst Ring', price: 275, image: '/images/Amethyst Ring.jpg.webp' },
  { name: 'Gold Hoop Earrings', price: 120, image: '/images/Gold Hoop Earrings.png.webp' },
  { name: 'Silk Scarf', price: 60, image: '/images/Silk Scarf.jpg' },
  { name: 'Pearl Bracelet', price: 200, image: '/images/Pearl Bracelet.jpg.webp' },
  { name: 'Diamond Pendant', price: 800, image: '/images/Diamond Pendant.jpg' },
  { name: 'Leather Handbag', price: 550, image: '/images/Leather Handbag.jpg.webp' },
  { name: 'Silver Hairpin', price: 40, image: '/images/Silver Hairpin.jpeg.webp' },
  { name: 'Velvet Choker', price: 50, image: '/images/Velvet Choker.jpg.webp' },
  { name: 'Gold-plated Sunglasses', price: 300, image: '/images/Gold-plated Sunglasses.jpg.webp' },
  { name: 'Beaded Necklace', price: 85, image: '/images/Beaded Necklace.jpg.webp' },
  { name: 'Crystal Earrings', price: 65, image: '/images/Crystal Earrings.jpg' },
  { name: 'Platinum Tie Clip', price: 95, image: '/images/Platinum Tie Clip.jpg' },
];

async function main() {
  await Promise.all(
    products.map((product) =>
      prisma.product.create({ data: product })
    )
  );
  console.log('Products added successfully!');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
