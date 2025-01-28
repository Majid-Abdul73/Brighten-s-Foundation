import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import { format } from 'date-fns';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

interface BlogPost {
  id: number;
  title: string;
  created_at: string;
  excerpt: string;
  content: string;
  image_url: string;
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogPosts(data || []);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const BlogPostCard = ({ post }: { post: BlogPost }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-rose-500/30 transition-colors"
    >
      {post.image_url && (
        <div className="aspect-video bg-gray-700 overflow-hidden">
          <img
            src={post.image_url}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <p className="text-rose-400 text-sm mb-2">
          {format(new Date(post.created_at), 'MMMM d, yyyy')}
        </p>
        <h2 className="text-xl font-semibold text-white mb-3">{post.title}</h2>
        <p className="text-gray-300 mb-4">{post.excerpt}</p>
        <button
          onClick={() => setSelectedPost(post)}
          className="text-sm font-medium text-rose-400 hover:text-rose-300 transition-colors"
        >
          Read More →
        </button>
      </div>
    </motion.div>
  );

  const BlogPostDetail = ({ post }: { post: BlogPost }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-900/95 z-50 overflow-y-auto"
    >
      <div className="min-h-screen px-4 py-16">
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl overflow-hidden">
          {post.image_url && (
            <div className="aspect-video bg-gray-700 overflow-hidden">
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-8">
            <button
              onClick={() => setSelectedPost(null)}
              className="mb-6 text-rose-400 hover:text-rose-300 transition-colors"
            >
              ← Back to Blog
            </button>
            <p className="text-rose-400 text-sm mb-2">
              {format(new Date(post.created_at), 'MMMM d, yyyy')}
            </p>
            <h1 className="text-3xl font-bold text-white mb-6">{post.title}</h1>
            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-600">
          Our Blog
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        <AnimatePresence>
          {selectedPost && <BlogPostDetail post={selectedPost} />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Blog;