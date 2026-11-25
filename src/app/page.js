import DailyDish from "@/components/home/DailyDish";
import getLatestPost from "@/lib/instagram/getLatestPost";

export default async function Home() {
  const post = await getLatestPost();

  return (
    <main>
      <DailyDish post={post} />
    </main>
  );
}
