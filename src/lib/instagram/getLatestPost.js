export default async function getLatestPost() {
  const feedUrl = process.env.BEHOLD_FEED_URL;

  if (!feedUrl) {
    console.error("La variable BEHOLD_FEED_URL est manquante.");
    return null;
  }

  try {
    const response = await fetch(feedUrl, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error(`Behold error: ${response.status}`);
    }

    const feed = await response.json();

    const post = feed.posts?.find(
      (item) => item.visibility === "visible" && item.mediaType === "IMAGE",
    );

    if (!post) return null;

    return {
      imageUrl: post.sizes?.large?.mediaUrl ?? post.mediaUrl,
      caption: post.caption ?? "",
      permalink: post.permalink ?? "",
      timestamp: post.timestamp ?? null,
    };
  } catch (error) {
    console.error("Impossible de récupérer le dernier post Instagram :", error);

    return null;
  }
}
