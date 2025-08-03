import Navbar from "./components/Navbar";
import Image from "next/image";
import FeaturedPost from "./components/FeaturedPost";

export default function Home() {
  // Featured posts data array
  const featuredPosts = [
    {
      title: "Revolutionizing industries through SaaS implementation",
      img:"/img1.jpg"
    },
    {
      title: "Synergizing saas and UX design for elevating digital experiences",
      img:"/img2.jpg"
    },
    {
      title: "Navigating saas waters with intuitive UI and UX",
      img:"/img3.jpg"
    },
    {
      title: "Sculpting saas success - the art of UI and UX design",
      img:"/img4.jpg"
    },
    {
      title: "Transforming saas platforms - a UI/UX design odyssey",
      img:"/img1.jpg"
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
    </div>
  );
}
