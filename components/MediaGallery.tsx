"use client";

import { useState } from "react";
import SectionReveal from "./SectionReveal";

// ── YouTube ──────────────────────────────────────────────────────────────────
// Add your video IDs here. Thumbnail auto-fetched from YouTube.
// Example: videoId: 'dQw4w9WgXcQ' → https://youtu.be/dQw4w9WgXcQ
const youtubeVideos = [
  {
    id: "yt-1",
    videoId: "zj9wsLHwsfg", // TODO: add video ID
    title: "System Design - SynchroAI - AI Powered Chat App",
    description: `Welcome to the behind-the-scenes breakdown of my latest project—a unique AI-powered chat app! In this video, I explain the High-Level Design (HLD) and Low-Level Design (LLD) of the app, focusing on how I’m integrating real-time messaging with AI assistance. Users can mention @AI within the chat, and the AI will provide real-time responses to help streamline conversations.`,
  },
  {
    id: "yt-2",
    videoId: "aSEhOXQZ824", // TODO: add video ID
    title: "Corporate sucks tbh.",
    description: "#corporate #corporatelife #mystory #storytelling",
  },
];

// ── Instagram ────────────────────────────────────────────────────────────────
// Add post image paths + URLs here. Place images in public/instagram/
// Example: image: '/instagram/post-1.jpg', postUrl: 'https://www.instagram.com/p/XXXXX/'
const instagramPosts = [
  {
    id: "ig-1",
    image: "/instagram/post-1.jpg",
    postUrl: "https://www.instagram.com/function.shubham/reel/DZSdx11zUPX/",
  },
  {
    id: "ig-2",
    image: "/instagram/post-2.jpg",
    postUrl: "https://www.instagram.com/function.shubham/reel/DYkQwbPT1td/",
  },
  {
    id: "ig-3",
    image: "/instagram/post-3.jpg",
    postUrl: "https://www.instagram.com/function.shubham/reel/DZsZU1CzeAU/",
  },
  {
    id: "ig-4",
    image: "/instagram/post-4.jpg",
    postUrl: "https://www.instagram.com/function.shubham/reel/DQFE2MXE6KB/",
  },
  {
    id: "ig-5",
    image: "/instagram/post-5.jpg",
    postUrl: "https://www.instagram.com/function.shubham/reel/DZDM3Qjz2hC/",
  },
  {
    id: "ig-6",
    image: "/instagram/post-6.jpg",
    postUrl: "https://www.instagram.com/function.shubham/reel/DZuzWKnTgKn/",
  },
];

function YouTubeCard({
  videoId,
  title,
  description,
}: {
  videoId: string;
  title: string;
  description: string;
}) {
  const [hovered, setHovered] = useState(false);
  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : null;

  return (
    <a
      href={
        videoId
          ? `https://www.youtube.com/watch?v=${videoId}`
          : "https://www.youtube.com/@function.shubham"
      }
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-line hover:border-text-lo transition-colors duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail area */}
      <div className="relative aspect-video overflow-hidden bg-surface">
        {thumbnailUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-text-lo group-hover:text-accent transition-colors duration-300"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
        )}

        {/* Play overlay on hover */}
        {thumbnailUrl && (
          <div
            className={`absolute inset-0 bg-canvas/50 flex items-center justify-center transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
          >
            <div className="w-12 h-12 rounded-full border border-text-hi/30 flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="text-text-hi ml-1"
              >
                <path d="M3 2l10 6-10 6V2z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Meta */}
      <div className="p-5">
        <p className="text-text-md text-sm font-sans leading-snug group-hover:text-text-hi transition-colors duration-300 line-clamp-2">
          {title}
        </p>
        {description && (
          <p className="text-text-lo text-xs font-sans mt-1 line-clamp-2">{description}</p>
        )}
      </div>
    </a>
  );
}

function InstagramTile({ image, postUrl }: { image: string; postUrl: string }) {
  return (
    <a
      href={postUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block aspect-[9/16] overflow-hidden bg-surface relative"
    >
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt="Instagram reel"
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-500"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          {/* Instagram Reels icon */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-text-lo group-hover:text-accent transition-colors duration-300"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
          </svg>
        </div>
      )}

      {/* Reels play badge — top right */}
      <div className="absolute top-2 right-2">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="white"
          opacity="0.8"
        >
          <path d="M5 3l14 9-14 9V3z" />
        </svg>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-canvas/0 group-hover:bg-canvas/30 transition-colors duration-300" />
    </a>
  );
}

export default function MediaGallery() {
  return (
    <section className="py-24 md:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <SectionReveal className="mb-20">
          <p className="text-text-lo text-xs tracking-widest uppercase font-sans mb-6">
            — 004 &nbsp; Beyond the Code
          </p>
          <h2
            className="font-serif text-text-hi leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            The Channel
          </h2>
          <p className="text-text-md text-sm leading-loose font-sans mt-4 max-w-xl">
            I document the process — the building, the escaping, the figuring
            out. Motivation, life updates, hustle, and everything in between.
          </p>
        </SectionReveal>

        {/* ── YouTube ── */}
        <div className="mb-20">
          <SectionReveal>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
              <div className="flex items-center gap-6">
                <span className="text-text-lo text-xs tracking-widest uppercase font-sans">
                  YouTube
                </span>
                <div className="w-px h-4 bg-line" />
                <a
                  href="https://www.youtube.com/@function.shubham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-lo text-xs tracking-widest uppercase font-sans hover:text-accent transition-colors duration-300"
                >
                  @function.shubham
                </a>
              </div>
              <a
                href="https://www.youtube.com/@function.shubham"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-lo text-xs tracking-widest uppercase font-sans hover:text-text-hi transition-colors duration-300"
              >
                Visit Channel
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M2 10L10 2M10 2H4M10 2v6" />
                </svg>
              </a>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {youtubeVideos.map((v, i) => (
              <SectionReveal key={v.id} delay={i * 0.1}>
                <YouTubeCard
                  videoId={v.videoId}
                  title={v.title}
                  description={v.description}
                />
              </SectionReveal>
            ))}
          </div>
        </div>

        {/* ── Instagram ── */}
        <div>
          <SectionReveal>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
              <div className="flex items-center gap-6">
                <span className="text-text-lo text-xs tracking-widest uppercase font-sans">
                  Instagram
                </span>
                <div className="w-px h-4 bg-line" />
                <a
                  href="https://www.instagram.com/function.shubham/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-lo text-xs tracking-widest uppercase font-sans hover:text-accent transition-colors duration-300"
                >
                  @function.shubham
                </a>
              </div>
              <a
                href="https://www.instagram.com/function.shubham/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-lo text-xs tracking-widest uppercase font-sans hover:text-text-hi transition-colors duration-300"
              >
                Follow
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M2 10L10 2M10 2H4M10 2v6" />
                </svg>
              </a>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
            {instagramPosts.map((p, i) => (
              <SectionReveal key={p.id} delay={i * 0.07}>
                <InstagramTile image={p.image} postUrl={p.postUrl} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
