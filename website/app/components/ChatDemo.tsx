"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "../hooks/useInView";
import { chatDemoMessages } from "../data/content";

interface Message {
  role: "user" | "ai";
  content: string;
}

export function ChatDemo() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isInView || hasStarted.current) return;
    hasStarted.current = true;

    const runSequence = async () => {
      for (let i = 0; i < chatDemoMessages.length; i++) {
        const msg = chatDemoMessages[i];

        if (msg.role === "ai" && i > 0) {
          setIsTyping(true);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setIsTyping(false);
        }

        setMessages((prev) => [...prev, msg]);
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }
    };

    runSequence();
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="bg-black/50 border border-white/10 rounded-xl p-4 max-w-[400px] w-full mt-4"
    >
      <div className="space-y-3 min-h-[200px]">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`chat-message-in max-w-[85%] px-4 py-2.5 text-sm ${
                msg.role === "user"
                  ? "bg-vercel-cyan/20 text-white rounded-2xl rounded-br-sm border border-vercel-cyan/30"
                  : "bg-white/10 text-gray-300 rounded-2xl rounded-bl-sm border border-white/10"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white/10 border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full typing-dot" />
                <div className="w-2 h-2 bg-gray-500 rounded-full typing-dot" />
                <div className="w-2 h-2 bg-gray-500 rounded-full typing-dot" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
