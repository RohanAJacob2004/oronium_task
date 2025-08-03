import { notFound } from "next/navigation";
import Image from "next/image";


const blogPosts = [
  {
    id: "1",
    title: "Revolutionizing industries through SaaS implementation",
    img: "/img1.jpg",
    description: "Explore how SaaS solutions are transforming business landscapes and driving innovation across various sectors.",
    author: "Jennifer Taylor",
    readTime: "3 min read",
    content: `SaaS (Software as a Service) is revolutionizing industries by offering scalable, cost-effective, and easily accessible solutions. Businesses can now leverage cloud-based applications to streamline operations, enhance collaboration, and drive innovation. From healthcare to finance, SaaS platforms are enabling organizations to adapt quickly to changing market demands and stay ahead of the competition.`
  },
  {
    id: "2",
    title: "Synergizing saas and UX design for elevating digital experiences",
    img: "/img2.jpg",
    description: "Discover the intersection of SaaS and UX design, and how it can create more engaging and effective digital experiences.",
    author: "Jennifer Taylor",
    readTime: "5 min read",
    content: `The fusion of SaaS and UX design is key to creating digital products that are not only functional but also delightful to use. By prioritizing user needs and behaviors, SaaS providers can deliver intuitive interfaces and seamless workflows, resulting in higher user satisfaction and retention.`
  },
  {
    id: "3",
    title: "Navigating saas waters with intuitive UI and UX",
    img: "/img3.jpg",
    description: "Learn how intuitive UI and UX design can help users navigate complex SaaS applications with ease.",
    author: "Ryan A.",
    readTime: "2 min read",
    content: `Intuitive UI and UX design are essential for guiding users through complex SaaS applications. Clear navigation, consistent layouts, and helpful feedback empower users to accomplish tasks efficiently, reducing frustration and support requests.`
  },
  {
    id: "4",
    title: "Sculpting saas success - the art of UI and UX design",
    img: "/img4.jpg",
    description: "Explore the key principles of UI and UX design that can drive success in SaaS applications.",
    author: "Jennifer Taylor",
    readTime: "4 min read",
    content: `Successful SaaS products are built on a foundation of strong UI and UX principles. This includes understanding user journeys, minimizing friction, and continuously iterating based on feedback. A well-designed SaaS platform not only attracts new users but also fosters long-term loyalty.`
  },
  {
    id: "5",
    title: "Transforming saas platforms - a UI/UX design odyssey",
    img: "/img1.jpg",
    description: "Join us on a journey through the evolution of UI/UX design in SaaS platforms.",
    author: "Jennifer Taylor",
    readTime: "6 min read",
    content: `The evolution of UI/UX design in SaaS platforms reflects the growing importance of user-centric development. Modern SaaS solutions emphasize accessibility, responsiveness, and personalization, ensuring that users have a positive experience across devices and contexts.`
  }
];

export default function BlogPostPage({ params }) {
  const { id } = params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="mb-8">
        <Image src={post.img} alt={post.title} width={800} height={400} className="rounded-xl object-cover w-full h-72" />
      </div>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center gap-2 text-gray-500 mb-6">
        
        <span className="font-medium text-gray-800">{post.author}</span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>
      <p className="text-lg text-gray-700 leading-relaxed">{post.description}</p>
        <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Content</h2>
            <p className="text-gray-700">{post.content}</p>
            </div>
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ id: post.id }));
}
