type Category = {
  id: number;
  name: string;
  image: string;
};

async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${process.env.API_URL}/api/categories`, {
    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    throw new Error('Gagal mengambil kategori');
  }

  return response.json();
}

export default async function HomePage() {
  const categories = await getCategories();

  return <Category categories={categories} />;
}
