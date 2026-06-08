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
      className="w-6 h-6"
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
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  BookWritten: () => (
    <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
    />
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

// --- ChatScreen Component (With Authentic Original Bell & CPU Icons) ---
function ChatScreen() {
  const dbChatRooms = [
    {
      id: "public-group-1",
      type: "group", 
      title: "အထွေထွေဆွေးနွေးခန်း (Public Lounge)",
      lastMessage: "မင်္ဂလာပါဗျာ၊ အုပ်စုထဲကို ကြိုဆိုပါတယ်...",
      time: "10:30 PM",
      unreadCount: 5,
      avatarBg: "bg-[#2D4030]",
      iconText: "👥" 
    },
    {
      id: "personal-user-1",
      type: "personal", 
      title: "Aung Ko (စာရေးဆရာ)",
      lastMessage: "ဟုတ်ကဲ့၊ ဝတ္ထုအသစ်တင်ပေးထားပါတယ်ဗျာ။",
      time: "Yesterday",
      unreadCount: 0,
      avatarBg: "bg-[#4A6B82]",
      iconText: "AK" 
    }
  ];

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6 pt-2">
        <h1 className="text-2.5xl font-extrabold text-[#42332A]">မက်ဆေ့ခ်ျ (Chats)</h1>
        <div className="w-10 h-10 rounded-full bg-[#F5EFE6] flex items-center justify-center text-[#C07047]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
      </div>

      {/* Main Chat Container */}
      <div className="flex flex-col space-y-6 max-w-sm mx-auto">
        
        {/* ==============================================================
            📌 PART 1: SYSTEM CHANNELS (ခေါင်းလောင်းနှင့် CPU Icon စစ်စစ်များ)
           ============================================================== */}
        <div className="flex flex-col space-y-3">
          <span className="text-[11px] font-bold text-[#8A8782] uppercase tracking-wider px-1">System Channels</span>
          
          {/* 🔔 Announcement (မူလ ခေါင်းလောင်း Icon အစစ်) */}
          <div className="bg-[#FFFDF9] border border-[#EBE4DA] rounded-[20px] p-3.5 flex items-center space-x-4 shadow-sm shadow-[#42332A]/5 hover:shadow-md transition cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#C07047] shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {/* Bell SVG Line */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-[#2E2C2A] text-[15px]">Announcement</h3>
                <span className="text-[10px] text-[#908E8B] font-medium">Official</span>
              </div>
              <p className="text-xs text-[#908E8B] truncate mt-1">အက်ပ်ဗားရှင်းအသစ် ထွက်ရှိလာပါပြီ...</p>
            </div>
          </div>

          {/* 🎛️ AI Chat Room (မူလ CPU/Microchip Icon အစစ်) */}
          <div className="bg-[#FFFDF9] border border-[#EBE4DA] rounded-[20px] p-3.5 flex items-center space-x-4 shadow-sm shadow-[#42332A]/5 hover:shadow-md transition cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-[#E2EBE4] flex items-center justify-center text-[#2D4030] shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {/* CPU Microchip SVG Line */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-[#2E2C2A] text-[15px]">AI Assistant</h3>
                <span className="text-[10px] text-[#2D4030] bg-[#E2EBE4] px-1.5 py-0.5 rounded-md font-bold uppercase tracking-wider">Online</span>
              </div>
              <p className="text-xs text-[#908E8B] truncate mt-1">ကျွန်ုပ်အား မည်သည့်မေးခွန်းမဆို မေးမြန်းနိုင်ပါတယ်...</p>
            </div>
          </div>

        </div>

        {/* ==============================================================
            🌐 PART 2: DATABASE CHANNELS (Conversations နေရာ)
           ============================================================== */}
        <div className="flex flex-col space-y-3">
          <span className="text-[11px] font-bold text-[#8A8782] uppercase tracking-wider px-1">Conversations</span>

          {dbChatRooms.map((room) => (
            <div 
              key={room.id} 
              className="bg-white border border-[#EBE4DA] rounded-[24px] p-3.5 flex items-center space-x-4 shadow-sm shadow-[#42332A]/5 hover:shadow-md transition duration-300 cursor-pointer"
            >
              <div className={`w-12 h-12 ${room.type === "group" ? "rounded-[16px]" : "rounded-full"} ${room.avatarBg} flex items-center justify-center text-white font-extrabold text-sm shadow-inner shrink-0`}>
                {room.iconText}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <div className="flex items-center space-x-1.5 min-w-0">
                    <h3 className="font-bold text-[#2E2C2A] text-[15px] truncate">{room.title}</h3>
                    <span className={`text-[9px] px-1 py-0.2 rounded-sm uppercase tracking-tight font-bold shrink-0 ${room.type === "group" ? "bg-[#F5EFE6] text-[#C07047]" : "bg-[#E2EBE4] text-[#2D4030]"}`}>
                      {room.type}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#908E8B] font-semibold shrink-0 ml-2">{room.time}</span>
                </div>
                
                <div className="flex justify-between items-center mt-1">
                  <p className="text-xs text-[#8A8782] truncate pr-2 flex-1">{room.lastMessage}</p>
                  
                  {room.unreadCount > 0 && (
                    <span className="w-5 h-5 bg-[#C07047] text-white text-[10px] font-extrabold rounded-full flex items-center justify-center shrink-0">
                      {room.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

// --- Placeholder for Saved Screen ---
// --- Saved Screen Component (With Clean List Lines Layout) ---
// --- SavedScreen Component (Dynamic 3-Tab System with Vertical Book Grid) ---
function SavedScreen() {
  // 💡 လက်ရှိ ဘယ် Tab ကို ရောက်နေလဲ မှတ်မယ့် State ပါ (Default အနေနဲ့ 'article' ထားထားပါတယ်)
  const [activeTab, setActiveTab] = useState('article');

  // 📝 Dummy Data: နောက်ပိုင်း Database (Supabase) ကနေ ဆွဲတင်ရင် သုံးရမယ့် ဖွဲ့စည်းပုံအတိုင်းပါ boss
  const savedArticles = [
    { id: 1, title: "မြန်မာ့စာပေခေတ်တခေတ်၏ အလှည့်အပြောင်းများ", source: "Literature Magazine", date: "June 2", readTime: "5 min read", imgUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=400&q=80" }
  ];

  const savedPosts = [
    { id: 1, title: "Morden Books", author: "Zayar Lin", avatarText: "ZL", text: "ဆရာဇော်ဂျီရဲ့ 'သင်သေသွားသော်' ကဗျာလေးကို ပြန်ဖတ်မိတိုင်း ရင်ထဲ တမျိုးပဲ။ လူဆိုတာ သေသွားပေမဲ့ နာမည်နဲ့ အလုပ်က ကျန်ခဲ့ရမယ်ဆိုတာ ဆရာဇော်ဂျီရဲ့ 'သင်သေသွားသော်' ကဗျာလေးကို ပြန်ဖတ်မိတိုင်း ရင်ထဲ တမျိုးပဲ။ လူဆိုတာ သေသွားပေမဲ့ နာမည်နဲ့ အလုပ်က ကျန်ခဲ့ရမယ်ဆိုတာ", likes: 24, comments: 8, time: "2 hours ago" }
  ];

  const savedBooks = [
    { id: 1, title: "ပိတောက်ပွင့်ဆဲ လသာဆဲဝယ်", author: "တက္ကသိုလ်ဘုန်းနိုင်", coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=300&q=80" },
    { id: 2, title: "သင်သေသွားသော်", author: "ဆရာဇော်ဂျီ", coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&q=80" },
    { id: 3, title: "Modern Minimalist UI", author: "Dexl Design", coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=300&q=80" },
    { id: 4, title: "The Creative Mindset", author: "John Doe", coverUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=300&q=80" }
  ];

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6 pt-2">
        <h1 className="text-2.5xl font-extrabold text-[#42332A]">သိမ်းဆည်းမှုများ (Saved)</h1>
        <div className="w-10 h-10 rounded-full bg-[#F5EFE6] flex items-center justify-center text-[#C07047]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
          </svg>
        </div>
      </div>

      {/* 🏷️ 3-Tab Navigator (Article, Post, Book အကူးအပြောင်းနေရာ) */}
      <div className="flex bg-[#F5EFE6] rounded-[16px] p-1 mb-6">
        {['article', 'post', 'book'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2.5 text-xs font-extrabold rounded-[12px] uppercase tracking-wider transition-all duration-200 ${
              activeTab === tab
                ? 'bg-[#C07047] text-white shadow-sm'
                : 'text-[#8A8782] hover:text-[#42332A]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 📦 Tab Content Area */}
      <div className="max-w-sm mx-auto">
        
        {/* ==========================================
            📰 TAB 1: ARTICLES (မူလ Layout အတိုင်း)
           ========================================== */}
        {activeTab === 'article' && (
          <div className="flex flex-col space-y-4 animate-fadeIn">
            {savedArticles.map((article) => (
              <div key={article.id} className="bg-white border border-[#EBE4DA] rounded-[24px] p-3 flex space-x-4 shadow-sm hover:shadow-md transition cursor-pointer">
                <div className="w-20 h-20 rounded-xl shrink-0 bg-[#EDE5D9] overflow-hidden border border-[#EBE4DA]">
                  <img src={article.imgUrl} alt={article.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <h3 className="font-bold text-[#2E2C2A] text-[14px] leading-snug line-clamp-2">{article.title}</h3>
                  <div className="flex justify-between items-center text-[10px] text-[#908E8B] font-semibold mt-1">
                    <span>{article.source}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==========================================
    💬 TAB 2: POSTS (Boss ရဲ့ စိတ်ကြိုက် List Item Layout အသစ်)
   ========================================== */}
{activeTab === 'post' && (
  <div className="flex flex-col bg-white border border-[#EBE4DA] rounded-[24px] divide-y divide-[#F5EFE6] overflow-hidden shadow-sm hover:shadow-md transition duration-300 animate-fadeIn">
    {savedPosts.map((post) => (
      <div 
        key={post.id} 
        className="flex items-center justify-between p-4 hover:bg-[#FFFDF9] transition duration-200 cursor-pointer group"
      >
        {/* ဘယ်ဘက်ခြမ်း- Avatar Tag နှင့် စာသားများ */}
        <div className="flex items-center space-x-4 min-w-0">
          
          {/* 🔵 'P' Tag အဝိုင်းလေး (Active အဝါရောင်နု သို့မဟုတ် မူလ Theme ကာလာ) */}
          <div className="w-10 h-10 rounded-full bg-[#E2EBE4] text-[#2D4030] flex items-center justify-center font-bold text-xs shadow-inner shrink-0">
            P
          </div>
          
          {/* 📝 ခေါင်းစဉ်နှင့် အချိန် */}
          <div className="min-w-0">
            <h4 className="font-bold text-[#2E2C2A] text-[14px] truncate leading-tight group-hover:text-[#C07047] transition duration-200">
              {post.title || "My Creative Thinking Journey"} {/* 💡 Database က title သုံးဖို့ ပြင်ပေးထားပါတယ် */}
            </h4>
            <p className="text-[10px] text-[#908E8B] font-semibold mt-1 uppercase tracking-wider">
              POST • {post.time || "2 DAYS AGO"}
            </p>
          </div>

        </div>

        {/* ညာဘက်ခြမ်း- မျှားခေါင်း (chevron-right) Icon လေး */}
        <div className="text-[#8A8782] group-hover:text-[#C07047] transition duration-200 shrink-0 ml-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

      </div>
    ))}
  </div>
)}

        {/* ==========================================
            📚 TAB 3: BOOKS (အောက်ကို ဆက်ဆင်းသွားမည့် Grid Flow ပုံစံ)
           ========================================== */}
        {activeTab === 'book' && (
          /* 💡 grid-cols-3 ကို သုံးပြီး စာအုပ်တွေကို တစ်တန်းမှာ ၃ အုပ်စီ အောက်ကို ဆက်ဆင်းသွားအောင် လုပ်ထားပါတယ် boss */
          <div className="grid grid-cols-3 gap-x-4 gap-y-6 animate-fadeIn">
            {savedBooks.map((book) => (
              <div key={book.id} className="flex flex-col group cursor-pointer">
                {/* Book Cover Container (Spine လိုင်း မပါဘဲ Minimalist အပြည့်) */}
                <div className="w-full aspect-[110/160] rounded-[16px] bg-[#EDE5D9] overflow-hidden shadow-sm border border-[#EBE4DA] transition duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                  <img src={book.coverUrl} alt={book.title} className="w-full h-full object-cover" />
                </div>
                {/* Book Information */}
                {/* 💡 FIXED: leading-relaxed ထည့်ထားပြီး truncate နဲ့ စာတန်း မဆန့်ရင် ဖြတ်ပေးထားပါတယ် */}
                <h4 className="font-bold text-[#2E2C2A] text-[11px] mt-2 truncate px-0.5 group-hover:text-[#C07047] transition leading-relaxed">
                  {book.title}
                </h4>
                <p className="text-[9px] text-[#908E8B] mt-0.5 truncate px-0.5">
                  {book.author}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

function ProfileScreen() {
  // Screen ပြောင်းလဲမှုနှင့် Dark Mode ကို ထိန်းချုပ်မည့် State များ
  const [currentView, setCurrentView] = useState<'profile' | 'edit' | 'settings'>('profile');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // ၁။ Edit Profile အတွက် စာရင်း
  const editProfileData = [
    { id: 'pic', label: 'Picture', value: 'Change Photo', type: 'link' },
    { id: 'name', label: 'Name', value: 'Thurein', type: 'link' },
    { id: 'username', label: 'Username', value: '@thurein_dev', type: 'link' },
    { id: 'email', label: 'G-mail', value: 'thurein@example.com', type: 'link' },
    { id: 'password', label: 'Password', value: '••••••••', type: 'link' },
    { id: 'playlist', label: 'Playlist', value: 'My Playlists (16)', type: 'link' },
  ];

  // ၂။ Settings အတွက် စာရင်း
  const settingsData = [
    { id: 'dark_mode', label: 'Dark Mode', type: 'toggle' },
    { id: 'font_size', label: 'Font Size', value: 'Medium', type: 'link' },
    { id: 'font_style', label: 'Font', value: 'Pyidaungsu', type: 'link' },
  ];

  // ဘုံသုံး Back Button Header
  const renderHeader = (title: string) => (
    <div className="flex items-center mb-8 pt-2">
      <button 
        onClick={() => setCurrentView('profile')} 
        className="w-10 h-10 rounded-full bg-[#F5EFE6] flex items-center justify-center text-[#C07047] mr-4 active:scale-95 transition"
      >
        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <h1 className="text-2.5xl font-extrabold text-[#42332A]">{title}</h1>
    </div>
  );

  // ================= (က) EDIT PROFILE VIEW ပေါ်စေရန် ကြားဖြတ်ခြင်း =================
  if (currentView === 'edit') {
    return (
      <div className="p-6">
        {renderHeader('Edit Profile')}
        <div className="flex flex-col divide-y divide-[#EDE5D9] max-w-sm mx-auto">
          {editProfileData.map((item) => (
            <button
              key={item.id}
              onClick={() => console.log(`${item.id} clicked`)}
              className="w-full flex items-center justify-between py-4 text-left transition active:opacity-60"
            >
              <span className="text-base font-bold text-[#2E2C2A]">{item.label}</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-[#8A8782] font-medium">{item.value}</span>
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#8A8782" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ================= (ခ) SETTINGS VIEW ပေါ်စေရန် ကြားဖြတ်ခြင်း =================
  if (currentView === 'settings') {
    return (
      <div className="p-6">
        {renderHeader('Settings')}
        <div className="flex flex-col divide-y divide-[#EDE5D9] max-w-sm mx-auto">
          {settingsData.map((item) => (
            <div key={item.id} className="w-full flex items-center justify-between py-4">
              <span className="text-base font-bold text-[#2E2C2A]">{item.label}</span>
              {item.type === 'toggle' ? (
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`w-11 h-6 flex items-center rounded-full p-0.5 transition-colors duration-300 ${
                    isDarkMode ? 'bg-[#C07047]' : 'bg-[#EDE5D9]'
                  }`}
                >
                  <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${isDarkMode ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              ) : (
                <button
                  onClick={() => console.log(`${item.id} clicked`)}
                  className="flex items-center space-x-2 active:opacity-60 transition"
                >
                  <span className="text-sm text-[#8A8782] font-medium">{item.value}</span>
                  <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#8A8782" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ================= (ဂ) မူလ MAIN PROFILE VIEW =================
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6 pt-2">
        <h1 className="text-2.5xl font-extrabold text-[#42332A]">အကောင့် (Profile)</h1>
        <div className="w-10 h-10 rounded-full bg-[#F5EFE6] flex items-center justify-center text-[#C07047]">
          <Icons.Gear/>
        </div>
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
          <p className="text-[13px] text-[#8A8782]">Playlists</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-8">
        {/* Edit Profile ကို နှိပ်လျှင် Edit View သို့ ပြောင်းရန် */}
        <button 
          onClick={() => setCurrentView('edit')}
          className="bg-[#F5EFE6] font-bold text-sm text-[#2E2C2A] py-3.5 rounded-2xl active:scale-95 transition"
        >
          Edit Profile
        </button>
        {/* Settings ကို နှိပ်လျှင် Settings View သို့ ပြောင်းရန် */}
        <button 
          onClick={() => setCurrentView('settings')}
          className="bg-[#F5EFE6] font-bold text-sm text-[#2E2C2A] py-3.5 rounded-2xl active:scale-95 transition"
        >
          Settings
        </button>
      </div>

      <div className="bg-[#FFFDF9] border border-[#F5EFE6] rounded-2xl p-4 flex justify-between items-center max-w-sm mx-auto">
        <div className="flex items-center space-x-3 text-[#2E2C2A]">
          <Icons.BookWritten />
          <span className="font-semibold text-m">Books Written</span>
        </div>
        <Icons.ChevronRight />
      </div>

      <span className="text-[11px] inline-block mt-7 ml-1 font-bold text-[#8A8782] uppercase tracking-wider px-1">Others</span>
      <div className="rounded-xl bg-white p-2 mt-1 flex justify-between border text-[#2E2C2A]">
          <span className="font-normal text-sm ml-1">{"Help & Support"}</span>
      </div>
      <div className="rounded-xl bg-white p-2 mt-1 flex justify-between border text-[#2E2C2A]">
          <span className="font-normal text-sm ml-1">Report</span>
      </div>
      <div className="rounded-xl bg-white p-2 mt-1 flex justify-between border text-[#2E2C2A]">
          <span className="font-normal text-sm ml-1">Contact Us</span>
      </div>
      <div className="rounded-xl bg-white p-2 mt-1 flex justify-between items-center border text-[#2E2C2A]">
          <span className="font-normal text-red-500 text-sm ml-1">Log Out</span>
            <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="18" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-red-500">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
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
            <div className="flex justify-between items-justify mb-3 px-1">
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
