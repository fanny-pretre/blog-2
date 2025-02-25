import prisma from "@/utils/connect"; // Connexion à la base de données (Prisma, ici par exemple)

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const sortByDate = searchParams.get("sortByDate") === "true";

  const POST_PER_PAGE = 4;

  try {
    let posts;
    let count = 0; // Initialise count à zéro par défaut

    if (searchParams.has("catSlug")) {
      posts = await prisma.post.findMany({
        where: {
          catSlug: searchParams.get("catSlug"),
        },
      });
      // Calcul du nombre total de posts
      count = await prisma.post.count();
    }

    // Si on veut les posts marqués comme favoris
    else if (searchParams.has("popular")) {
      posts = await prisma.post.findMany({
        take: POST_PER_PAGE,
        orderBy: {
          comments: {
            _count: "desc", // Tri par nombre de commentaires
          },
        },
        include: {
          comments: {
            select: { id: true }, // Inclure les commentaires pour le comptage
          },
        },
      });
      // Calcul du nombre total de posts populaires
      count = await prisma.post.count();
    }
    // Si on veut les posts marqués comme favoris
    else if (searchParams.has("favorite")) {
      posts = await prisma.post.findMany({
        where: {
          isFavorite: true,
        },
        take: POST_PER_PAGE,
      });
      // Calcul du nombre total de posts favoris
      count = await prisma.post.count({
        where: {
          isFavorite: true,
        },
      });
    }
    // Si on veut les posts avec pagination
    else if (searchParams.has("page")) {
      posts = await prisma.post.findMany({
        skip: POST_PER_PAGE * (page - 1), // Sauter les posts des pages précédentes
        take: POST_PER_PAGE, // Limiter à un certain nombre de posts
        orderBy: {
          createdAt: "desc", // Tri par date de création
        },
      });
      // Calcul du nombre total de posts
      count = await prisma.post.count();
    }
    // Si on veut les posts triés par date
    else if (sortByDate) {
      posts = await prisma.post.findMany({
        take: POST_PER_PAGE,
        orderBy: {
          createdAt: "desc", // Tri par date de création
        },
      });
      // Calcul du nombre total de posts triés par date
      count = await prisma.post.count();
    }
    // Si aucune condition n'est spécifiée, retourner tous les posts
    else {
      posts = await prisma.post.findMany({
        take: POST_PER_PAGE, // Limiter à 4 posts par défaut
      });
      // Calcul du nombre total de posts
      count = await prisma.post.count();
    }

    return new Response(JSON.stringify({ posts, count }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Something went wrong!" }), {
      status: 500,
    });
  }
};
