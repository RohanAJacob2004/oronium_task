
import AllPostsClient from "./AllPostsClient";

export default async function AllPostsPage() {
  const res = await fetch("https://688f74aef21ab1769f89450e.mockapi.io/api/v1/posts", { cache: "force-cache" });
  const posts = await res.json();
  return <AllPostsClient posts={posts} />;
}
