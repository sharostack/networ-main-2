"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaUserFriends, FaVideo, FaMapMarkedAlt, FaBrain, FaRocket, FaBell, FaUserCircle, FaFeatherAlt, FaFireAlt, FaEye, FaCalendarCheck, FaUserAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const dummyPosts = [
  { id: 1, user: 'Aarav Kumar', avatar: 'https://i.pravatar.cc/150?img=1', content: 'Just closed my first international SaaS deal \ud83d\udcbc\ud83c\udf0d #growth', views: 42, streak: 3, comments: [], viewers: ['Lina Ahmed', 'Mohamed Ali'] },
  { id: 2, user: 'Lina Ahmed', avatar: 'https://i.pravatar.cc/150?img=2', content: 'Built a voice AI agent in 24 hours \u26a1\ufe0f\ud83d\udd25 #HackathonWinner', views: 78, streak: 5, comments: [], viewers: ['Aarav Kumar'] },
  { id: 3, user: 'Mohamed Ali', avatar: 'https://i.pravatar.cc/150?img=3', content: 'NetworkQY got me my dream role \ud83d\ude4c #blessed', views: 58, streak: 2, comments: [], viewers: ['Lina Ahmed', 'Aarav Kumar'] },
];

export default function SmartFeedPage() {
  const [posts, setPosts] = useState(dummyPosts);
  const [newPost, setNewPost] = useState('');
  const [comments, setComments] = useState({});

  const handlePost = () => {
    if (!newPost.trim()) return;
    const newEntry = {
      id: posts.length + 1,
      user: 'You',
      avatar: 'https://i.pravatar.cc/150?img=12',
      content: newPost,
      views: 0,
      streak: 1,
      comments: [],
      viewers: []
    };
    setPosts([newEntry, ...posts]);
    setNewPost('');
  };

  const handleComment = (id, comment) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, comments: [...post.comments, comment] } : post
      )
    );
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white px-6 py-10 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-6xl flex justify-between items-center mb-6">
        <FaUserCircle className="text-4xl text-purple-300" />
        <motion.h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 bg-clip-text text-transparent animate-pulse">
          \u2728 Smart Feed
        </motion.h1>
        <FaBell className="text-2xl text-purple-300 animate-ping-slow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="md:col-span-2 space-y-6 overflow-auto max-h-[80vh] pr-2">
          <motion.div
            className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-white mb-2 flex items-center">
              <FaFeatherAlt className="mr-2 text-pink-400" />
              Share what you did great today:
            </h2>
            <textarea
              placeholder="Wrote 1000 lines of code, pitched my startup, helped a friend... \ud83d\udca5"
              className="w-full h-28 p-4 rounded-lg bg-black/60 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            ></textarea>
            <button
              onClick={handlePost}
              className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full transition"
            >
              Post
            </button>
          </motion.div>

          <div className="space-y-4">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                className="bg-white/5 p-4 rounded-xl shadow-lg backdrop-blur-md hover:scale-[1.01] transition-transform"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src={post.avatar}
                    alt="avatar"
                    width={32}
                    height={32}
                    className="rounded-full border border-white"
                  />
                  <span className="text-sm text-purple-300 font-semibold">{post.user}</span>
                </div>
                <div className="text-white text-base mb-2">{post.content}</div>
                <div className="flex justify-between text-xs text-pink-400">
                  <span className="flex items-center gap-1"><FaEye /> {post.views} views</span>
                  <span className="flex items-center gap-1"><FaCalendarCheck /> {post.streak} day streak</span>
                </div>
                {post.viewers.length > 0 && (
                  <div className="text-xs text-gray-400 mt-1">\ud83d\udc40 Viewed by: {post.viewers.join(', ')}</div>
                )}
                <div className="mt-3">
                  <input
                    type="text"
                    placeholder="Comment something..."
                    className="w-full bg-black/40 p-2 rounded text-sm text-white"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                        handleComment(post.id, e.currentTarget.value.trim());
                        e.currentTarget.value = '';
                      }
                    }}
                  />
                  <div className="mt-2 space-y-1 text-sm text-gray-300">
                    {post.comments.map((cmt, i) => (
                      <div key={i} className="bg-white/10 p-2 rounded">\ud83d\udcac {cmt}</div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <div className="bg-white/5 p-4 rounded-xl shadow-xl backdrop-blur-md mb-4">
            <h3 className="text-lg font-bold text-pink-400 mb-3 flex items-center">
              <FaFireAlt className="mr-2" /> Trending on NetworkQY
            </h3>
            <ul className="space-y-2 text-sm">
              <li>#AIAgent \ud83d\udca1</li>
              <li>#Funded \ud83d\udcb0</li>
              <li>#YC2025 \ud83d\ude80</li>
              <li>#DreamJob \ud83e\udde0</li>
              <li>#GenZFounder \ud83d\udd25</li>
            </ul>
          </div>

          <div className="bg-white/5 p-4 rounded-xl shadow-xl backdrop-blur-md">
            <h3 className="text-lg font-bold text-purple-300 mb-2">\ud83d\udd25 Streak Leaderboard</h3>
            <ul className="space-y-1 text-sm">
              {posts
                .sort((a, b) => b.streak - a.streak)
                .slice(0, 5)
                .map((p, i) => (
                  <li key={p.id} className="text-white">
                    #{i + 1} {p.user} \u2014 {p.streak} days
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
