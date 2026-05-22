# 🎓 Devprayag School AI Chatbot

An AI-powered school assistant chatbot built for **Devprayag School & College** to help students and parents get instant answers about admissions, timings, facilities, fees, contact details, and more.

The chatbot is integrated into a school website as a **floating popup assistant** and uses **Retrieval-Augmented Generation (RAG)** for intelligent responses.

---

## 🌐 Live Demo

🔗 Live Website: https://devprayag-ai-chatbot.netlify.app/

🎥 Demo Video: https://drive.google.com/file/d/13KdhTjdo7Lqucua4Nv_OwE_m0QFxe1oj/view?usp=sharing

---

## 🚀 Features

- 💬 Floating AI chatbot integrated into school website
- 🎓 Answers school-related queries instantly
- ⚡ Real-time AI responses
- 🧠 RAG-based intelligent search
- 📚 Handles admissions, timings, facilities, contact details, fees, etc.
- 👋 Smart greeting response (Hello/Hi handling)
- ⌨️ Typing animation for chatbot replies
- 💾 Chat history support
- 📱 Responsive UI

---

## 🛠️ Tech Stack

### Frontend
- Next.js
- TypeScript
- Tailwind CSS
- React.js

### AI & Backend
- n8n Workflow Automation
- Qdrant Vector Database
- NVIDIA NIM (Llama Model)
- RAG Architecture

### Deployment
- Netlify

---

## 🏗️ System Architecture

```text
User Query
     ↓
Frontend Chatbot UI
     ↓
n8n Webhook
     ↓
Qdrant Vector Search
     ↓
NVIDIA Llama Model
     ↓
AI Response
     ↓
Chatbot UI
