'use client';
import { useState } from 'react';

// --- SVG Icons Map (No npm Package Required) ---
const Icons = {
  Home: () => (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  ),
  Chat: () => (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785 4.5 4.5 0 003.018-.971c.427-.241.93-.277 1.387-.12a9.141 9.141 0 002.659.417z"
      />
    </svg>
  ),
  Bookmark: ({ className = 'w-6 h-6' }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.593 3.322c1.1.154 1.907 1.101 1.907 2.213v15.584a.75.75 0 01-1.153.64l-6.32-4.004-6.32 4.004a.75.75 0 01-1.153-.64V5.535c0-1.112.807-2.06 1.907-2.213a48.884 48.884 0 0111.08 0z"
      />
    </svg>
  ),
  User: ({ className = 'w-5 h-5 text-white' }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  ),
  Plus: ({ className = 'w-6 h-6' }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  ),
  Bell: () => (
    <svg
      className="w-6 h-6 text-[#8C7A6B]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
      />
    </svg>
  ),
  Cpu: () => (
    <svg 
      className="w-6 h-6 text-[#8C7A6B] block shrink-0" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <line x1="9" y1="1" x2="9" y2="3" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="15" y1="1" x2="15" y2="3" />
      <line x1="9" y1="21" x2="9" y2="23" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="15" y1="21" x2="15" y2="23" />
      <line x1="1" y1="9" x2="3" y2="9" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="1" y1="15" x2="3" y2="15" />
      <line x1="21" y1="9" x2="23" y2="9" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="21" y1="15" x2="23" y2="15" />
    </svg>
  ),
  Gear: () => (
    <svg
      className="w-7 h-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.767a1.123 1.123 0 00-.417 1.03c.004.074.006.148.006.222 0 .074-.002.148-.006.222a1.123 1.123 0 00.417 1.03l1.003.767a1.125 1.125 0 01.26 1.43l-1.296 2.247a1.125 1.125 0 01-1.37.49l-1.216-.456a1.125 1.125 0 00-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281a1.125 1.125 0 00-.646-.87a6.512 6.512 0 01-.22-.127a1.125 1.125 0 00-1.074-.124l-1.217.456a1.125 1.125 0 01-1.37-.49l-1.296-2.247a1.125 1.125 0 01.26-1.43l1.003-.767a1.122 1.122 0 00.417-1.03c-.004-.074-.006-.148-.006-.222 0-.074.002-.148.006-.222a1.122 1.122 0 00-.417-1.03l-1.003-.767a1.125 1.125 0 01-.26-1.43l1.296-2.247a1.125 1.125 0 011.37-.49l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  ChevronRight: () => (
    <svg
      className="w-5 h-5 text-[#8A8782]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  ),
  Book: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
};

export default function PadaytharApp() {
  const [currentTab, setCurrentTab] = useState('home');

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex justify-center items-center">
      <div className="w-full max-w-md bg-[#FFFDF9] rounded-[5px] overflow-hidden flex flex-col h-[100vh] relative">
        {/* Dynamic Screen Area */}
        <div className="flex-1 overflow-y-auto hidden-scrollbar pb-24">
          {currentTab === 'home' && <HomeScreen />}
          {currentTab === "book" && <BookScreen />}
          {currentTab === 'chat' && <ChatScreen />}
          {currentTab === 'saved' && <SavedScreen />}
          {currentTab === 'profile' && <ProfileScreen />}
        </div>

        {/* Unified Bottom Navigation (Same for all screens) */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#FFFDF9]/90 backdrop-blur-md border-t border-[#F5EFE6] px-6 py-4 flex justify-between items-center z-10">
          <button
            onClick={() => setCurrentTab('home')}
            className={`flex flex-col items-center space-y-1 transition-all ${
              currentTab === 'home'
                ? 'text-[#C07047] scale-105'
                : 'text-[#706E6B]'
            }`}
          >
            <Icons.Home />
            <span className="text-xs font-medium">Home</span>
          </button>

          <button 
  onClick={() => setCurrentTab("book")} 
  className={`flex flex-col items-center space-y-1 transition-all ${currentTab === "book" ? "text-[#C07047] scale-105" : "text-[#706E6B]"}`}
>
  <Icons.Book />
  <span className="text-xs font-medium">Books</span>
</button>

          <button
            onClick={() => setCurrentTab('chat')}
            className={`flex flex-col items-center space-y-1 transition-all ${
              currentTab === 'chat'
                ? 'text-[#C07047] scale-105'
                : 'text-[#706E6B]'
            }`}
          >
            <Icons.Chat />
            <span className="text-xs font-medium">Chat</span>
          </button>

          <button
            onClick={() => setCurrentTab('saved')}
            className={`flex flex-col items-center space-y-1 transition-all ${
              currentTab === 'saved'
                ? 'text-[#C07047] scale-105'
                : 'text-[#706E6B]'
            }`}
          >
            <Icons.Bookmark />
            <span className="text-xs font-medium">Saved</span>
          </button>

          <button
            onClick={() => setCurrentTab('profile')}
            className={`flex flex-col items-center space-y-1 transition-all ${
              currentTab === 'profile'
                ? 'text-[#C07047] scale-105'
                : 'text-[#706E6B]'
            }`}
          >
            <Icons.User className="w-6 h-6" />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// --- Screens Layouts ---

function HomeScreen() {
  return (
    <div>
      <div className="bg-[#C07047] p-6 pt-4 pb-4 rounded-b-[5px] flex a justify-between items-center text-white shadow-lg shadow-[#C07047]/10">
        <div className="flex items-center space-x-3">
          <div className="border-2 border-white/80 rounded-lg p-1">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold tracking-wide">Padaythar</h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#4A6B82] border-2 border-white/50 flex items-center justify-center">
          <Icons.User className="w-5 h-5 text-white/90" />
        </div>
      </div>

      <div className="p-5 grid grid-cols-2 gap-4">
        <div className="col-span-1 bg-[#FFFFFF] border rounded-xl overflow-hidden flex flex-col justify-between">
          <div>
            <div className="h-32 bg-[#2D4030] rounded-[10px] m-1 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A1E] to-[#405D45] opacity-90" />
            </div>
            <div className="p-2 pt-3">
              <h3 className="font-bold text-[#2E2C2A] text-[15px] leading-snug">
                The Enchanted Forest
              </h3>
              <p className="text-xs text-[#908E8B] mt-0.5">Article</p>
            </div>
          </div>
          <div className="p-2 pt-0 flex space-x-2">
            <button className="flex-1 bg-[#F5EFE6] text-[#2E2C2A] font-semibold text-xs py-2 rounded-xl">
              Read
            </button>
            <button className="p-2 bg-[#F5EFE6] text-[#2E2C2A] rounded-xl">
              <Icons.Bookmark className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="col-span-1 bg-white border rounded-xl overflow-hidden flex flex-col justify-between">
          <div>
            <div className="h-32 bg-[#243A3A] rounded-[10px] m-1 relative overflow-hidden flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-[#D1E0DB] opacity-80" />
            </div>
            <div className="p-2 pt-3">
              <h3 className="font-bold text-[#2E2C2A] text-[15px] leading-snug">
                Endless Night
              </h3>
              <p className="text-xs text-[#908E8B] mt-0.5">Aung Ko</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-white rounded-xl border overflow-hidden">
          <div className="h-32 bg-[#3A4B54] rounded-[10px] m-1 relative overflow-hidden flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md">
              <svg
                className="w-5 h-5 text-[#3A4B54] fill-current ml-0.5"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="p-2 pt-2">
            <h3 className="font-bold text-[#2E2C2A] text-[15px]">
              City Lights
            </h3>
          </div>
        </div>

        <div className="col-span-1 flex flex-col space-y-3">
          <div className="flex-1 bg-[#E2EBE4] rounded-3xl p-4 flex items-center justify-center text-center">
            <p className="text-[#2F4234] font-bold text-sm leading-relaxed">
              Imagination <br /> is the key to <br /> creativity
            </p>
          </div>
          <button className="w-full bg-[#C07047] text-white font-bold py-3.5 rounded-2xl flex items-center justify-center space-x-2">
            <Icons.Plus className="w-5 h-5 stroke-[3]" />
            <span>Write</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function ChatScreen() {
  const chatSessions = [
    {
      id: 1,
      type: 'system',
      title: 'Announcements',
      subtitle: 'New features are coming!',
      icon: <Icons.Bell />,
    },
    {
      id: 2,
      type: 'ai',
      title: 'AI Chat',
      subtitle: 'Hello! How can I assist you today?',
      icon: <Icons.Cpu />,
    },
    {
      id: 3,
      type: 'user',
      title: 'Lin Thet',
      subtitle: 'Are you going to the event tomor...',
      gender: 'male',
    },
    {
      id: 4,
      type: 'user',
      title: 'Su Su',
      subtitle: 'Sounds good!',
      gender: 'female',
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8 pt-2">
        <div className="flex items-center space-x-3">
          <svg
            className="w-7 h-7 text-[#5C4033]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
          <h1 className="text-2.5xl font-extrabold text-[#42332A]">
            Padaythar
          </h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#4A6B82] flex items-center justify-center">
          <Icons.User className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="space-y-5">
        {chatSessions.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center space-x-4 p-1 cursor-pointer"
          >
            {chat.type === 'system' || chat.type === 'ai' ? (
              <div className="w-14 h-14 rounded-full bg-[#F5EFE6] flex items-center justify-center">
                {chat.icon}
              </div>
            ) : (
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center overflow-hidden relative border ${
                  chat.gender === 'male' ? 'bg-[#34547A]' : 'bg-[#D9825D]'
                }`}
              >
                <div className="absolute bottom-0 w-10 h-10 bg-[#EFEFEF] rounded-full translate-y-3" />
                <div
                  className={`absolute top-3 w-6 h-6 bg-[#2E2B2A] ${
                    chat.gender === 'male' ? 'rounded-full' : 'rounded-t-full'
                  }`}
                />
              </div>
            )}
            <div className="flex-1 border-b border-[#F5EFE6] pb-3">
              <h3 className="font-bold text-[#2E2C2A] text-[16px]">
                {chat.title}
              </h3>
              <p className="text-sm text-[#7A7875] mt-0.5 line-clamp-1">
                {chat.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Placeholder for Saved Screen ---
// --- Saved Screen Component (With Clean List Lines Layout) ---
function SavedScreen() {
  const savedItems = [
    { id: 1, type: "Post", title: "My Creative Thinking Journey", count: "2 days ago" },
    { id: 2, type: "Post", title: "Web Design Concepts in 2026", count: "1 week ago" },
    { id: 3, type: "Book", title: "The Art of Imagination", count: "Ch-4 Reading" },
    { id: 4, type: "Book", title: "Modern Minimalist UI Guide", count: "Completed" },
    { id: 5, type: "Article", title: "Deep Dive into Earth Tone Palettes", count: "5 mins read" },
    { id: 6, type: "Article", title: "Why Typography Matters", count: "12 mins read" },
  ];

  return (
    <div className="p-6">
      {/* Header Utilities */}
      <div className="flex justify-between items-center mb-6 pt-2">
        <h1 className="text-2.5xl font-extrabold text-[#42332A]">Saved Items</h1>
        <div className="w-10 h-10 rounded-full bg-[#EDE5D9] flex items-center justify-center text-[#C07047]">
          <Icons.Bookmark className="w-5 h-5 fill-current" />
        </div>
      </div>

      {/* Styled Directory List with Dividing Lines */}
      <div className="bg-[#FFFDF9] border border-[#F5EFE6] rounded-[24px] overflow-hidden max-w-sm mx-auto shadow-sm">
        {savedItems.map((item, index) => (
          <div 
            key={item.id} 
            className={`flex justify-between items-center p-4 cursor-pointer hover:bg-[#F5EFE6]/30 transition group
              ${index !== savedItems.length - 1 ? "border-b border-[#F5EFE6]" : ""}`}
          >
            {/* Left Content Area */}
            <div className="flex items-center space-x-3.5">
              {/* Contextual Badge Icon Indicator */}
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs
                ${item.type === "Post" ? "bg-[#E2EBE4] text-[#2F4234]" : ""}
                ${item.type === "Book" ? "bg-[#F5EFE6] text-[#C07047]" : ""}
                ${item.type === "Article" ? "bg-[#EAEFF2] text-[#4A6B82]" : ""}`
              }>
                {item.type[0]}
              </div>

              {/* Main Typography Metadata */}
              <div>
                <h3 className="font-bold text-[#2E2C2A] text-[15px] group-hover:text-[#C07047] transition duration-200">
                  {item.title}
                </h3>
                <span className="text-[11px] font-semibold tracking-wider text-[#8A8782] uppercase mt-0.5 block">
                  {item.type} • {item.count}
                </span>
              </div>
            </div>

            {/* Action Route Trigger Arrow */}
            <div className="transform group-hover:translate-x-1 transition duration-200">
              <Icons.ChevronRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileScreen() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6 pt-2">
        <h1 className="text-2.5xl font-extrabold text-[#42332A]">Padaythar</h1>
        <button className="text-[#524F4A]">
          <Icons.Gear />
        </button>
      </div>

      <div className="flex flex-col items-center text-center mt-4">
        <div className="w-28 h-28 rounded-full border-4 border-white shadow-md overflow-hidden relative mb-3 bg-[#EDE5D9]">
          <img
            src="https://i.postimg.cc/V62jPr8w/540bff47b71b6fd6895bfccd03f73daf.jpg"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <h2 className="text-2.5xl font-bold text-[#2E2C2A]">Thurein</h2>
        <p className="text-sm text-[#8A8782] mt-1">thurein@example.com</p>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center my-8 max-w-xs mx-auto">
        <div>
          <p className="text-xl font-bold text-[#2E2C2A]">28</p>
          <p className="text-[13px] text-[#8A8782]">Following</p>
        </div>
        <div className="border-x border-[#EDE5D9]">
          <p className="text-xl font-bold text-[#2E2C2A]">109</p>
          <p className="text-[13px] text-[#8A8782]">Followers</p>
        </div>
        <div>
          <p className="text-xl font-bold text-[#2E2C2A]">16</p>
          <p className="text-[13px] text-[#8A8782]">Posts</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-8">
        <button className="bg-[#F5EFE6] font-bold text-sm text-[#2E2C2A] py-3.5 rounded-2xl">
          Edit Profile
        </button>
        <button className="bg-[#F5EFE6] font-bold text-sm text-[#2E2C2A] py-3.5 rounded-2xl">
          Settings
        </button>
      </div>

      <div className="bg-[#FFFDF9] border border-[#F5EFE6] rounded-2xl p-4 flex justify-between items-center max-w-sm mx-auto">
        <div className="flex items-center space-x-3 text-[#2E2C2A]">
          <Icons.Bookmark className="w-6 h-6" />
          <span className="font-bold">Saved</span>
        </div>
        <Icons.ChevronRight />
      </div>
    </div>
  );
}

// --- BookScreen Component (Section-specific See All View) ---
function BookScreen() {
  // 💡 showAll မှာ true/false အစား နှိပ်လိုက်တဲ့ Section ID ကို သိမ်းပါမယ် (Default က null)
  const [showAll, setShowAll] = useState<string | null>(null); 

  const bookSections = [
    {
      id: "recent",
      title: "လတ်တလောဖတ်လက်စများ (Recent Books)",
      books: [
        { id: 1, title: "ပိတောက်ပွင့်ဆဲ လသာဆဲဝယ်", author: "တက္ကသိုလ်ဘုန်းနိုင်", progress: 65, coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=200&q=80" },
        { id: 2, title: "သင်သေသွားသော်", author: "ဆရာဇော်ဂျီ", progress: 100, coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=200&q=80" },
        { id: 3, title: "The Art of Imagination", author: "Unknown Author", progress: 20, coverUrl: "https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?auto=format&fit=crop&w=200&q=80" },
      ]
    },
    {
      id: "trending",
      title: "လူကြိုက်အများဆုံး စာအုပ်များ (Trending Now)",
      books: [
        { id: 4, title: "Modern Minimalist UI Guide", author: "Dexl Design", progress: 0, coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=200&q=80" },
        { id: 5, title: "The Creative Mindset", author: "John Doe", progress: 0, coverUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=200&q=80" },
        { id: 6, title: "Beyond the Horizon", author: "Aung Ko", progress: 0, coverUrl: "https://images.unsplash.com/photo-1727022171385-1c561462ba90?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      ]
    }
  ];

  // 💡 နှိပ်လိုက်တဲ့ ID နဲ့ ကိုက်ညီတဲ့ Section Data တစ်ခုတည်းကိုပဲ ရှာထုတ်တဲ့အဆင့်ပါ
  const selectedSection = bookSections.find(section => section.id === showAll);

  // --- (A) See All View: ရွေးချယ်လိုက်တဲ့ Section တစ်ခုတည်းက စာအုပ်တွေကိုပဲ ပြမယ့်နေရာ ---
  if (selectedSection) {
    return (
      <div className="p-6 animate-fadeIn">
        <div className="flex items-center space-x-3 mb-6 pt-2">
          <button onClick={() => setShowAll(null)} className="text-[#C07047] p-1 bg-[#F5EFE6] rounded-xl hover:scale-105 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          {/* ခေါင်းစဉ်က နှိပ်လိုက်တဲ့ Section အလိုက် Dynamic ပြောင်းသွားမှာပါ */}
          <h1 className="text-xl font-extrabold text-[#42332A] leading-relaxed">{selectedSection.title}</h1>
        </div>

        <div className="flex flex-col space-y-4 max-w-sm mx-auto">
          {selectedSection.books.map((book) => (
            <div key={book.id} className="bg-white border border-[#EBE4DA] rounded-[24px] p-3 flex space-x-4 shadow-sm shadow-[#42332A]/5 hover:shadow-md transition cursor-pointer">
              <div className="w-16 h-24 rounded-xl shrink-0 bg-[#EDE5D9] overflow-hidden shadow-md relative border border-[#EBE4DA]">
                <div className="absolute top-0 left-0 w-1 h-full bg-black/10 z-10" /> 
                <img src={book.coverUrl} alt={book.title} className="w-full h-full object-cover" loading="eager" />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1 min-w-0">
                <div>
                  <h3 className="font-bold text-[#2E2C2A] text-[16px] leading-tight truncate">{book.title}</h3>
                  <p className="text-xs text-[#908E8B] mt-1">ဆရာ - {book.author}</p>
                </div>
                {book.progress > 0 && (
                  <div className="mt-2">
                    <div className="flex justify-between text-[11px] font-semibold text-[#8A8782] mb-1">
                      <span>{book.progress === 100 ? "Completed" : `Reading`}</span>
                      <span>{book.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#F5EFE6] rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${book.progress === 100 ? "bg-[#2D4030]" : "bg-[#C07047]"}`} style={{ width: `${book.progress}%` }} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- (B) Main Shelf View: Wattpad Style အတန်းလိုက်ပုံစံ ---
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6 pt-2">
        <h1 className="text-2.5xl font-extrabold text-[#42332A]">စာအုပ်စင် (Books)</h1>
        <div className="w-10 h-10 rounded-full bg-[#F5EFE6] flex items-center justify-center text-[#C07047]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
        </div>
      </div>

      <div className="space-y-8">
        {bookSections.map((section) => (
          <div key={section.id} className="flex flex-col">
            
            {/* Roll Header (Title & See More Button) */}
            <div className="flex justify-between items-end mb-3 px-1">
              <h2 className="font-extrabold text-[#2E2C2A] text-[16px] tracking-wide leading-relaxed pr-2 flex-1">{section.title}</h2>
              <button 
                onClick={() => setShowAll(section.id)} 
                className="text-xs font-bold text-[#C07047] hover:underline cursor-pointer leading-none pb-0.5 shrink-0"
              >
                See all
              </button>
            </div>

            {/* Books Container (Scroll bar ဖျောက်ပြီးသား အလျားလိုက်အတန်း) */}
            <div className="flex space-x-4 overflow-x-auto pb-3 pt-1 px-1 no-scrollbar snap-x snap-mandatory">
              {section.books.map((book) => (
                <div key={book.id} className="w-[110px] shrink-0 snap-start group cursor-pointer">
                  <div className="w-[110px] h-[160px] rounded-[10px] bg-[#EDE5D9] overflow-hidden shadow-md border border-[#EBE4DA] relative transition duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="absolute top-0 left-0 w-1 h-full bg-black/10 z-10" />
                    <img src={book.coverUrl} alt={book.title} className="w-full h-full object-cover" loading="eager" />
                    {book.progress > 0 && (
                      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/20 backdrop-blur-xs">
                        <div className={`h-full ${book.progress === 100 ? "bg-[#2D4030]" : "bg-[#C07047]"}`} style={{ width: `${book.progress}%` }} />
                      </div>
                    )}
                  </div>
                  <h4 className="font-bold text-[#2E2C2A] text-xs mt-2 truncate px-0.5 group-hover:text-[#C07047] transition">{book.title}</h4>
                  <p className="text-[10px] text-[#908E8B] mt-0.5 truncate px-0.5">{book.author}</p>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
