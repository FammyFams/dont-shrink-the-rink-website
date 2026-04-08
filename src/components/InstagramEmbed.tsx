"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export default function InstagramEmbed({ reelId }: { reelId: string }) {
  useEffect(() => {
    // Load Instagram embed script if not already loaded
    const existingScript = document.querySelector(
      'script[src*="instagram.com/embed.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [reelId]);

  return (
    <blockquote
      className="instagram-media w-full"
      data-instgrm-captioned
      data-instgrm-permalink={`https://www.instagram.com/reel/${reelId}/`}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: "12px",
        boxShadow:
          "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "0 auto",
        maxWidth: "540px",
        minWidth: "326px",
        padding: 0,
        width: "100%",
      }}
    >
      <div style={{ padding: "16px" }}>
        <a
          href={`https://www.instagram.com/reel/${reelId}/`}
          style={{
            background: "#FFFFFF",
            lineHeight: 0,
            padding: 0,
            textAlign: "center",
            textDecoration: "none",
            width: "100%",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            style={{
              color: "#3897f0",
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
              fontWeight: 550,
              lineHeight: "18px",
              padding: "16px 0",
            }}
          >
            View this post on Instagram
          </div>
        </a>
        <p
          style={{
            color: "#c9c8cd",
            fontFamily: "Arial, sans-serif",
            fontSize: "14px",
            lineHeight: "17px",
            marginBottom: 0,
            marginTop: "8px",
            overflow: "hidden",
            padding: "8px 0 7px",
            textAlign: "center",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <a
            href={`https://www.instagram.com/reel/${reelId}/`}
            style={{
              color: "#c9c8cd",
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "normal",
              lineHeight: "17px",
              textDecoration: "none",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            A post shared by Save Lloyd Ice Coalition (SLIC) (@savelloydice)
          </a>
        </p>
      </div>
    </blockquote>
  );
}
