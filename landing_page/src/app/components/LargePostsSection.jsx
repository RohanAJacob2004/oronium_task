import Image from "next/image";
import Link from "next/link";

export default function LargePostsSection({ posts }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>
        <div className="flex justify-end ">
          <button className="px-4 py-1 border mb-5 border-gray-300 rounded-full text-gray-700 hover:bg-gray-100  transition">All Posts</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(0, 3).map((post, idx) => (
              <Link
                key={post.id || idx}
                href={`/blog/${post.id || (idx + 1)}`}
                className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-2 flex-1">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <span className="font-medium text-gray-800">{post.author}</span>
                  </div>
                 
                </div>
              </Link>
        ))}
      </div>
    </section>
  );
}
