import Navbar from "./components/Navbar";
import Image from "next/image";

import FeaturedPost from "./components/FeaturedPost";
import LargePostsSection from "./components/LargePostsSection";

export default function Home() {
  // Featured posts data array
  const featuredPosts = [
    {
      id: "1",
      title: "Revolutionizing industries through SaaS implementation",
      img: "/img1.jpg",
      description: "Explore how SaaS solutions are transforming business landscapes and driving innovation across various sectors.",
      author: "Jennifer Taylor",
      content: `SaaS (Software as a Service) is revolutionizing industries by offering scalable, cost-effective, and easily accessible solutions. Businesses can now leverage cloud-based applications to streamline operations, enhance collaboration, and drive innovation. From healthcare to finance, SaaS platforms are enabling organizations to adapt quickly to changing market demands and stay ahead of the competition.`
    },
    {
      id: "2",
      title: "Synergizing saas and UX design for elevating digital experiences",
      img: "/img2.jpg",
      description: "Discover the intersection of SaaS and UX design, and how it can create more engaging and effective digital experiences.",
      author: "Jennifer Taylor",
      content: `The fusion of SaaS and UX design is key to creating digital products that are not only functional but also delightful to use. By prioritizing user needs and behaviors, SaaS providers can deliver intuitive interfaces and seamless workflows, resulting in higher user satisfaction and retention.`
    },
    {
      id: "3",
      title: "Navigating saas waters with intuitive UI and UX",
      img: "/img3.jpg",
      description: "Learn how intuitive UI and UX design can help users navigate complex SaaS applications with ease.",
      author: "Ryan A.",
      content: `Intuitive UI and UX design are essential for guiding users through complex SaaS applications. Clear navigation, consistent layouts, and helpful feedback empower users to accomplish tasks efficiently, reducing frustration and support requests.`
    },
    {
      id: "4",
      title: "Sculpting saas success - the art of UI and UX design",
      img: "/img4.jpg",
      description: "Explore the key principles of UI and UX design that can drive success in SaaS applications.",
      author: "Jennifer Taylor",
      content: `Successful SaaS products are built on a foundation of strong UI and UX principles. This includes understanding user journeys, minimizing friction, and continuously iterating based on feedback. A well-designed SaaS platform not only attracts new users but also fosters long-term loyalty.`
    },
    {
      id: "5",
      title: "Transforming saas platforms - a UI/UX design odyssey",
      img: "/img1.jpg",
      description: "Join us on a journey through the evolution of UI/UX design in SaaS platforms.",
      author: "Jennifer Taylor",
      content: `The evolution of UI/UX design in SaaS platforms reflects the growing importance of user-centric development. Modern SaaS solutions emphasize accessibility, responsiveness, and personalization, ensuring that users have a positive experience across devices and contexts.`
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen poppins">
      <Navbar />
      
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content Area (Left Side) */}
          <div className="flex-1">
            <div className="bg-white rounded-xl overflow-hidden ">
              {/* Image Section */}
              <div className="relative h-[400px]">
                <Image 
                  src="/img4.jpg" 
                  alt="Modern Office Environment" 
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Bottom Overlay with Blurred Background */}
                <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-black/80 via-black/60 to-transparent backdrop-blur-sm">
                  <div className="absolute max-w-xl bottom-0 left-0 right-0 p-6">
                    <span className="inline-block  px-2 py-0.5 text-xs font-medium text-white bg-transparent rounded-full border border-white/30 mb-1 ">
                      Business
                    </span>
                    <h1 className="text-2xl max-w-4xl lg:text-3xl font-medium text-white leading-tight">
                      Unlocking Business Efficiency with SaaS Solutions
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar (Right Side) */}
          <div className="lg:w-80">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Other featured posts</h2>
            
            <div className="space-y-4">
              {featuredPosts.map((post, index) => (
                <FeaturedPost
                  key={index}
                  title={post.title}
                  img={post.img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Large Posts Section as a separate component */}
      <LargePostsSection posts={featuredPosts} />
    </div>
  );
}
