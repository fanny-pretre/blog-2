import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get("page") ?? 1);
  const cat = searchParams.get("cat");
  const isFeatured = searchParams.get("isFeatured") === "true";
  const isFavorite = searchParams.get("isFavorite") === "true";
  const sort = searchParams.get("sort"); // Ajout d'un paramètre pour le tri

  const POST_PER_PAGE = 5;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && { catSlug: cat }),
      ...(isFeatured && { isFeatured: true }),
      ...(isFavorite && { isFavorite: true }),
    },
    orderBy:
      sort === "popular"
        ? { comments: { _count: "desc" } }
        : { createdAt: "desc" }, // Tri par popularité ou par date
    include: {
      comments: true, // Inclure les commentaires pour pouvoir compter
    },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);

    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
