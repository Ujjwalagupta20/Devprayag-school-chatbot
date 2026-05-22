"use client";

import { useState, useEffect, useRef } from "react";

export default function DevprayagChatbotUI() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([]);

  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load old chat
  useEffect(() => {
    const savedMessages =
      localStorage.getItem("chatHistory");

    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save chat automatically
  useEffect(() => {
    localStorage.setItem(
      "chatHistory",
      JSON.stringify(messages)
    );
  }, [messages]);
  useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages]);

  const sendMessage = async (quickQuestion?: string) => {
    if (!(quickQuestion || input).trim()) return;
    const userMessage = quickQuestion || input;
    const greetings = [
  "hi",
  "hello",
  "hey",
  "hii",
  "good morning",
  "good afternoon",
  "good evening",
];

if (
  greetings.includes(
    userMessage.toLowerCase().trim()
  )
) {
  const greetingReply = `👋 Hello! Welcome to Devprayag Assistant.

How can I help you today?`;

  // Add user message first
  setMessages((prev) => [
    ...prev,
    { role: "user", text: userMessage },
  ]);

  let typedText = "";

  // Create bot placeholder
  setMessages((prev) => [
    ...prev,
    {
      role: "bot",
      text: "",
    },
  ]);

  // Typing animation
  for (let i = 0; i < greetingReply.length; i++) {
    typedText += greetingReply[i];

    await new Promise((resolve) =>
      setTimeout(resolve, 20)
    );

    setMessages((prev) => {
      const updated = [...prev];

      updated[updated.length - 1] = {
        role: "bot",
        text: typedText,
      };

      return updated;
    });
  }

  setInput("");
  setLoading(false);
  return;
}

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userMessage },
    ]);

    
    if (!quickQuestion) {
  setInput("");
}
setLoading(true);

try {
  const response = await fetch(
    "https://ujjwala25.app.n8n.cloud/webhook/devprayag-chatbot",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: userMessage,
      }),
    }
  );

  const text = await response.text();

  console.log("RAW RESPONSE:", text);

  const data = text ? JSON.parse(text) : {};
const botResponse = data.answer || "No response received";

// Add empty bot message first
setMessages((prev) => [
  ...prev,
  { role: "bot", text: "" },
]);

// Typing animation
let currentText = "";
const words = botResponse.split("");

for (let i = 0; i < words.length; i++) {
  await new Promise((resolve) => setTimeout(resolve, 15));

  currentText += words[i];

  setMessages((prev) => {
    const updated = [...prev];
    updated[updated.length - 1] = {
      role: "bot",
      text: currentText,
    };
    return updated;
  });
}
  
} catch (error) {
  console.error(error);

  setMessages((prev) => [
    ...prev,
    {
      role: "bot",
      text: "Something went wrong.",
    },
  ]);
}

setLoading(false);
    
  };
  return (
  <div className="min-h-screen bg-white relative">

    {/* Top Bar */}
    <div className="bg-orange-500 text-white px-10 py-3 flex justify-between text-sm">
      <p>Empowering Minds, Enabling Skills</p>

      <div className="flex gap-6">
        <a href="#">Pay Fee</a>
        <a href="#">Online Registration</a>
        <a href="#">Career</a>
      </div>
    </div>

    {/* Header */}
<div className="bg-[#f5f5f5] px-24 py-5 flex justify-between items-center">

  {/* Logo */}
  <div className="flex items-center">
    <img
      src="/logo.png"
      alt="Devprayag School Logo"
      className="h-26 object-contain"
    />
  </div>

  {/* Contact Items */}
  <div className="flex items-center gap-20">

    {/* Call */}
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-3xl">
        📞
      </div>

      <div>
        <h3 className="text-[18px] font-medium text-slate-900">
          Call Us
        </h3>

        <p className="text-[16px] text-slate-700 leading-6">
          7069700265
        </p>

        <p className="text-[16px] text-slate-700">
          7986154781
        </p>
      </div>
    </div>

    {/* Opening Hours */}
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-3xl">
        ⚒
      </div>

      <div>
        <h3 className="text-[18px] font-medium text-slate-900">
          Opening Hours
        </h3>

        <p className="text-[16px] text-slate-700">
          8:00 A.M to 4:00 P.M
        </p>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-3xl">
        ✉
      </div>

      <div>
        <h3 className="text-[18px] font-medium text-slate-900">
          Email Us
        </h3>

        <p className="text-[16px] text-slate-700">
          principaldevsc@gmail.com
        </p>
      </div>
    </div>

  </div>
</div>
    {/* Navbar */}
    <div className="bg-blue-900 text-white h-16 flex items-center justify-center">
  <div className="flex gap-12 font-semibold text-lg">
    <button>HOME</button>
    <button>ABOUT US</button>
    <button>ACADEMICS</button>
    <button>FACILITIES</button>
    <button>ADMISSION</button>
    <button>GALLERY</button>
    <button>CONTACT US</button>
  </div>
</div>

    {/* Hero Image */}
    <div className="relative">
      <img
        src="/Hero image.png"
        alt="School"
        className="w-full h-[650px] object-cover"
      />

      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        
      </div>
    </div>
      {isOpen && (
            <div className="fixed bottom-6 right-6 w-[420px] h-[650px] bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 overflow-hidden z-50 flex flex-col">
       
        {/* Sidebar */}
       { /*
        <div className="bg-slate-950 border-r border-slate-800 p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl overflow-hidden border border-slate-700">
             <img
              src="/logo.png"
              alt="KIET Logo"
              className="w-full h-full object-cover"
              />
             </div>
            <div>
              <h1 className="text-white text-lg font-bold">Devprayag</h1>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-slate-900 rounded-3xl p-5">
  <h3 className="font-semibold text-lg mb-4">
    Suggested Questions
  </h3>

  <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent pr-2">
    <div className="flex flex-wrap gap-2">
      {[
        "What are school timings?",
        "What is the admission process?",
        "What facilities are available?",
        "What is the fee structure?",
        "What is the contact number?",
        "What courses/classes are offered?",
        "Does the school provide transport?",
        "What sports facilities are available?",
        "What is the school address?",
        "How can I contact the school?",
        "What are the school rules?",
        "Does the school have smart classes?",
        "What extracurricular activities are available?",
        "Is hostel facility available?",
        "What documents are required for admission?"
      ].map((question, index) => (
        <button
          key={index}
          onClick={() => sendMessage(question)}
          className="px-3 py-2 text-sm rounded-full bg-slate-800 hover:bg-violet-600 transition text-slate-200 text-left"
        >
          {question}
        </button>
      ))}
    </div>
  </div>
</div>


            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 hover:border-violet-500 transition cursor-pointer">
              <p className="text-white text-sm font-medium">Technology Used</p>
              <p className="text-slate-400 text-xs mt-2">n8n + Qdrant + NVIDIA</p>
            </div>
          </div>
        </div>
*/}
       
        {/* Chat Area */}
        <div className="flex flex-col h-full">
          
          {/* Header */}
            <div className="bg-blue-900 p-4 flex justify-between">
  <div>
    <h1 className="text-white text-xl font-bold">
      Devprayag Assistant
    </h1>
    <p className="text-green-400 text-sm">
      ● Online
    </p>
  </div>

  <button
    onClick={() => setIsOpen(false)}
    className="text-slate-400 hover:text-red-400 text-2xl"
  >
    ✕
  </button>
</div>

{/* Chat Messages */}
<div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950">
  {messages.map((msg, index) => (
    <div
      key={index}
      className={`flex ${
        msg.role === "user"
          ? "justify-end"
          : "items-start gap-3"
      }`}
    >
      {msg.role === "bot" && (
        <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold">
          AI
        </div>
      )}

      <div
        className={`rounded-2xl px-4 py-3 max-w-[80%] ${
          msg.role === "user"
            ? "bg-violet-600 text-white"
            : "bg-slate-900 border border-slate-800 text-slate-200"
        }`}
      >
        <div className="whitespace-pre-line text-sm leading-6">
          {msg.text}
        </div>
      </div>
    </div>
  ))}

  {loading && (
    <p className="text-slate-400 text-sm">
      Typing...
    </p>
  )}

  <div ref={messagesEndRef} />
</div>

{/* Input Area */}
<div className="border-t border-slate-800 bg-slate-900 p-4">
  <div className="flex gap-2">
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        sendMessage();
      }
    }}
    placeholder="Ask anything..."
    className="flex-1 bg-slate-950 border border-slate-700 rounded-2xl px-4 py-3 text-white outline-none"
  />

  <button
    onClick={() => {
      setMessages([]);
      localStorage.removeItem("chatHistory");
    }}
    className="bg-blue-800 hover:bg-blue-900 text-white rounded-2xl px-4 transition duration-300"
  >
    Clear
  </button>

  <button
    onClick={() => sendMessage()}
   className="bg-orange-500 hover:bg-orange-600 text-white rounded-2xl px-5 transition duration-300"
  >
    Send
  </button>
</div>
</div>
 </div>
      </div>
      )}
      {/* Floating Chat Button */}
{!isOpen && (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
    {/* Chat Button */}
    <button
      onClick={() => setIsOpen(true)}
      className="bg-gradient-to-r from-violet-600 to-purple-700 text-white rounded-full shadow-2xl px-6 py-4 flex items-center gap-3 hover:scale-105 transition duration-300 animate-[bounce_2s_infinite]"
    >
      💬 Devprayag Assistant
    </button>

  </div>
)}

    </div>
  );
}

/*
NEXT STEP FOR YOUR CHATBOT API CONNECTION:

Use fetch() to connect to your webhook endpoint:

fetch('https://ujjwala25.app.n8n.cloud/webhook/kiet-chatbot', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    message: userInput
  })
})
.then(res => res.json())
.then(data => {
  console.log(data.answer)
})
*/
