import { MoveUpRight, Heart, CalendarDays, User } from "lucide-react";
import React from "react";
import blogImg from "@/assets/filip.jpg";

const BlogPost = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Car Exterior Maintenance",
      tag: "Exterior",
      author: "Admin",
      date: "May 15, 2023",
      image: blogImg
    },
    {
      id: 2,
      title: "Upgrading Your Car Sound System: What You Need to Know",
      tag: "Sound",
      author: "Admin",
      date: "June 2, 2023",
      image: blogImg
    },
    {
      id: 3,
      title: "Essential Car Accessories for Long Road Trips",
      tag: "Accessories",
      author: "Admin",
      date: "June 10, 2023",
      image: blogImg
    }
  ];

  return (
    <section className="bg-[#FFF] py-10 px-4 md:px-10">
      <div className="container max-w-5xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Latest Blog Posts</h2>
          <button className="text-sm text-primary flex items-center gap-1 hover:underline">
            View All <MoveUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
             
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 left-2 bg-white text-black text-xs px-3 py-1 rounded-full">
                  {post.tag}
                </span>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarDays className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                </div>

        
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPost;