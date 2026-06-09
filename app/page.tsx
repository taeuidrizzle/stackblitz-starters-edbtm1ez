'use client';
import { useState } from 'react'

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
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
  ),
  BookWritten: () => (
    <svg
      className="w-5 h-5 text-[#8C7A6B]"
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
  Search: () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  ),
  ArrowUpRight: () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 5l-14 14M19 5v12M19 5H7"
      />
    </svg>
  ),
};

const UserData = {
  name: 'Thurein',
  username: 'thurein@example.com',
  profileImg:
    'https://i.postimg.cc/V62jPr8w/540bff47b71b6fd6895bfccd03f73daf.jpg',
};

export default function PadaytharApp() {
  const [currentTab, setCurrentTab] = useState('home');

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex justify-center items-center">
      <div className="w-full max-w-md bg-[#FFFDF9] rounded-[5px] overflow-hidden flex flex-col h-[100vh] relative">
        {/* Dynamic Screen Area */}
        <div className="flex-1 overflow-y-auto hidden-scrollbar pb-24">
          {currentTab === 'home' && <HomeScreen />}
          {currentTab === 'book' && <BookScreen />}
          {currentTab === 'chat' && <ChatScreen />}
          {currentTab === 'saved' && <SavedScreen />}
          {currentTab === 'profile' && <ProfileScreen />}
        </div>

        {/* Unified Bottom Navigation (Same for all screens) */}
        <div className={`absolute bottom-0 left-0 right-0 bg-[#FFFDF9]/90 backdrop-blur-md border-t border-[#F5EFE6] px-6 py-4 flex justify-between items-center z-10 [:has(input:focus)_&]:hidden`}>
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
            onClick={() => setCurrentTab('book')}
            className={`flex flex-col items-center space-y-1 transition-all ${
              currentTab === 'book'
                ? 'text-[#C07047] scale-105'
                : 'text-[#706E6B]'
            }`}
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
  const [searchQuery, setSearchQuery] = useState('');

  // 📝 DB Data: စာအုပ်တန်းလေးများအတွက် Database Array Structure
  const dbTrendingBooks = [
    {
      id: 1,
      title: 'ပိတောက်ပွင့်ဆဲ လသာဆဲဝယ်',
      author: 'တက္ကသိုလ်ဘုန်းနိုင်',
      coverUrl:
        'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 2,
      title: 'သင်သေသွားသော်',
      author: 'ဆရာဇော်ဂျီ',
      coverUrl:
        'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 3,
      title: 'Modern Minimalist UI',
      author: 'Dexl Design',
      coverUrl:
        'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 4,
      title: 'The Creative Mindset',
      author: 'John Doe',
      coverUrl:
        'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=300&q=80',
    },
  ];

  const dbTravelArticles = [
    {
      id: 1,
      title: 'မြန်မာ့စာပေခေတ်တခေတ်၏ အလှည့်အပြောင်းများ',
      author: 'Devan Haidar',
      imgUrl:
        'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 2,
      title: 'မြန်မာ့စာပေခေတ်တခေတ်၏ အလှည့်အပြောင်းများ',
      author: 'Asep Suherman',
      imgUrl:
        'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 3,
      title: 'မြန်မာ့စာပေခေတ်တခေတ်၏ အလှည့်အပြောင်းများ',
      author: 'Steven William',
      imgUrl:
        'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=400&q=80',
    },
  ];

  // 📝 DB Data: Wattpad Style Categories (ကျစ်ကျစ်လျစ်လျစ် အတုံးလေးများ)
  const dbCategories = [
    {
      id: 1,
      name: 'ကဗျာကဏ္ဍ',
      count: '120 ပုဒ်',
      bg: 'bg-[#F5EFE6]',
      text: 'text-[#C07047]',
    },
    {
      id: 2,
      name: 'ဝတ္ထုများ',
      count: '85 အုပ်',
      bg: 'bg-[#E2EBE4]',
      text: 'text-[#2D4030]',
    },
    {
      id: 3,
      name: 'စာပေဆောင်းပါး',
      count: '64 စောင်',
      bg: 'bg-[#EAE6E2]',
      text: 'text-[#524F4A]',
    },
    {
      id: 4,
      name: 'အနုပညာ / UI',
      count: '42 စောင်',
      bg: 'bg-[#F0EAE1]',
      text: 'text-[#A06037]',
    },
  ];

  // 📝 DB Data: Featured Authors (စာရေးဆရာဝိုင်းလေးများ)
  const dbAuthors = [
    { id: 1, name: 'ဆရာဇော်ဂျီ', avatar: '🧓', bg: 'bg-[#2D4030]' },
    { id: 2, name: 'တက္ကသိုလ်ဘုန်းနိုင်', avatar: '👨‍🏫', bg: 'bg-[#4A6B82]' },
    { id: 3, name: 'Thurein', avatar: '🧑‍💻', bg: 'bg-[#C07047]' },
    { id: 4, name: 'Dexl Design', avatar: '🎨', bg: 'bg-[#524F4A]' },
  ];

  const dbBtags = [
    { id: 1, name: 'Novel' },
    { id: 2, name: 'Fantasy' },
    { id: 3, name: 'Romance' },
    { id: 4, name: 'Sci-Fi' },
    { id: 5, name: 'Historical' },
    { id: 6, name: 'Comedy' },
    { id: 7, name: 'Adventure' },
    { id: 8, name: 'Drama' },
  ];

  return (
    <div className="p-6 pb-24">
      {/* 📱 1. APP HEADER */}
      <div className="flex justify-between items-center mb-6 pt-2">
        <h1 className="text-2.5xl font-extrabold text-[#42332A]">Padaythar</h1>
        <div className="w-10 h-10 rounded-full flex items-center justify-center">
          <img
            className="w-full h-full rounded-full shadow-sm border border-gray-200 object-cover"
            src={UserData.profileImg}
            alt={UserData.name}
          />
        </div>
      </div>

      {/* 🔍 2. DYNAMIC SEARCH BAR */}
      <div className="group relative max-w-sm mx-auto mb-8">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#8A8782] group-focus-within:text-[#C07047] transition-colors duration-300">
          <Icons.Search />
        </span>
        <input
          type="text"
          placeholder="စာအုပ်များ၊ ဆောင်းပါးများ စာရေးဆရာများကို ရှာဖွေပါ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onBlur={(e) => e.currentTarget.blur()}
          className="w-full bg-white border border-[#F5EFE6] rounded-2xl pl-11 pr-4 py-3.5 text-xs font-bold text-[#2E2C2A] placeholder-[#908E8B] focus:outline-none focus:border-[#C07047]  shadow-sm"
        />
      </div>

      {/* 📚 3. HORIZONTAL BOOKS ROW (စာအုပ်တန်းလေးများ) */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4 px-1">
          <span className="text-[11px] font-bold text-[#8A8782] uppercase tracking-wider">
            Trending Books
          </span>
          <button className="text-[11px] font-extrabold text-[#C07047] hover:underline">
            See All
          </button>
        </div>

        <div className="flex space-x-4 overflow-x-auto pb-3 pt-1 no-scrollbar snap-x px-1">
          {dbTrendingBooks.map((book) => (
            <div
              key={book.id}
              className="w-[105px] flex-shrink-0 snap-start group cursor-pointer"
            >
              <div className="w-full aspect-[105/150] rounded-xl bg-[#EDE5D9] overflow-hidden shadow-sm border border-[#EBE4DA] transition duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-[#2E2C2A] text-[11px] mt-2 truncate group-hover:text-[#C07047] transition leading-relaxed">
                {book.title}
              </h4>
              <p className="text-[9px] text-[#908E8B] mt-0.5 truncate">
                {book.author}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* 🌅 4. NEW: UPLOADED UI DESIGN STYLE SECTION (ပူးတွဲပါပုံစံအတိုင်း ပြင်ဆင်ထားသော နေရာ) */}
      <div className="mb-8 max-w-sm mx-auto">
        <div className="flex justify-between items-center mb-4 px-1 mb-2">
          <span className="text-[11px] font-bold text-[#8A8782] uppercase tracking-wider">
            Recommend Articles
          </span>
          <button className="text-[11px] font-extrabold text-[#C07047] hover:underline">
            See All
          </button>
        </div>

        <div className="flex flex-col space-y-5">
          {dbTravelArticles.map((article) => (
            <div
              key={article.id}
              className="flex items-start justify-between group cursor-pointer"
            >
              {/* Left Content Area */}
              <div className="flex space-x-4 min-w-0 flex-1">
                {/* Article Image (Spine လိုင်းမပါ ကောက်ကြောင်းဝိုင်းစတိုင်) */}
                <div className="w-[100px] h-[100px] rounded-[20px] overflow-hidden bg-[#EDE5D9] shrink-0 border border-[#EBE4DA]">
                  <img
                    src={article.imgUrl}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info Text */}
                <div className="flex flex-col min-w-0 pt-0.5">
                  <h3 className="font-semibold text-[#2E2C2A] mt-0.5 text-[14px] leading-snug line-clamp-2 group-hover:text-[#C07047] transition leading-normal pb-1">
                    {article.title}
                  </h3>
                  <span className="font-[600] text-[#2E2C2A] text-[12px] mt-1.5">
                    {article.author}
                  </span>
                </div>
              </div>

              {/* Right Action Button (ပုံထဲကအတိုင်း စက်ဝိုင်းထဲက မျှားစောင်းခလုတ်) */}
              <div className="w-9 h-9 rounded-full bg-[#F5EFE6] group-hover:bg-[#C07047] text-[#42332A] group-hover:text-white flex items-center justify-center transition shrink-0 ml-3 mt-1 shadow-sm">
                <Icons.ArrowUpRight />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8 max-w-sm mx-auto">
        <div className="mb-4 px-1">
          <span className="text-[11px] font-bold text-[#8A8782] uppercase tracking-wider">
            Explore Tags
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {dbBtags.map((tags) => (
            <div
              key={tags.id}
              className="rounded-lg flex h-min cursor-pointer w-min whitespace-nowrap border"
            >
              <span
                className={`text-xs font-black font-[600] hover:text-[#C07047] hover:bg-[#F5EFE6] p-1.5 duration-200 ${tags.name}`}
              >
                {tags.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 🏷️ 5. Explore Genres (၂ တန်း ၂ ကော်လံ ကျစ်ကျစ်လျစ်လျစ် အတုံးလေးတွေ) */}
      <div className="mb-8 max-w-sm mx-auto">
        <div className="mb-4 px-1">
          <span className="text-[11px] font-bold text-[#8A8782] uppercase tracking-wider">
            Explore Genres
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {dbCategories.map((cat) => (
            <div
              key={cat.id}
              className={`${cat.bg} rounded-2xl p-3.5 flex flex-col justify-between h-20 cursor-pointer hover:scale-[1.02] transition duration-200 border border-[#42332A]/5`}
            >
              <span className={`text-xs font-black ${cat.text}`}>
                {cat.name}
              </span>
              <span className="text-[10px] text-[#908E8B] font-bold">
                {cat.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 👨‍🏫 6. POPULAR AUTHORS ROW (စာရေးဆရာ အဝိုင်းတန်းလေး) */}
      <div className="max-w-sm mx-auto">
        <div className="mb-4 px-1">
          <span className="text-[11px] font-bold text-[#8A8782] uppercase tracking-wider">
            Popular Authors
          </span>
        </div>
        <div className="flex space-x-5 overflow-x-auto pb-2 pt-1 scrollbar-hide px-1">
          {dbAuthors.map((author) => (
            <div
              key={author.id}
              className="flex flex-col items-center space-y-1.5 cursor-pointer shrink-0"
            >
              <div
                className={`w-12 h-12 rounded-full ${author.bg} flex items-center justify-center text-xl shadow-sm border-2 border-white hover:scale-105 transition`}
              >
                {author.avatar}
              </div>
              <span className="text-[10px] font-bold text-[#42332A] text-center w-14 truncate">
                {author.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- ChatScreen Component (With Authentic Original Bell & CPU Icons) ---
function ChatScreen() {
  const dbChatRooms = [
    {
      id: 'public-group-1',
      type: 'group',
      title: 'အထွေထွေဆွေးနွေးခန်း (Public Lounge)',
      lastMessage: 'မင်္ဂလာပါဗျာ၊ အုပ်စုထဲကို ကြိုဆိုပါတယ်...',
      time: '10:30 PM',
      unreadCount: 5,
      avatarBg: 'bg-[#2D4030]',
      iconText: '👥',
    },
    {
      id: 'personal-user-1',
      type: 'personal',
      title: 'Aung Ko (စာရေးဆရာ)',
      lastMessage: 'ဟုတ်ကဲ့၊ ဝတ္ထုအသစ်တင်ပေးထားပါတယ်ဗျာ။',
      time: 'Yesterday',
      unreadCount: 0,
      avatarBg: 'bg-[#4A6B82]',
      iconText: 'AK',
    },
  ];

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6 pt-2">
        <h1 className="text-2.5xl font-extrabold text-[#42332A]">
          မက်ဆေ့ခ်ျ (Chats)
        </h1>
        <div className="w-10 h-10 rounded-full bg-[#F5EFE6] flex items-center justify-center text-[#C07047]">
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
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>
      </div>

      {/* Main Chat Container */}
      <div className="flex flex-col space-y-6 max-w-sm mx-auto">
        {/* ==============================================================
            📌 PART 1: SYSTEM CHANNELS (ခေါင်းလောင်းနှင့် CPU Icon စစ်စစ်များ)
           ============================================================== */}
        <div className="flex flex-col space-y-3">
          <span className="text-[11px] font-bold text-[#8A8782] uppercase tracking-wider px-1">
            System Channels
          </span>

          {/* 🔔 Announcement (မူလ ခေါင်းလောင်း Icon အစစ်) */}
          <div className="bg-[#FFFDF9] border border-[#EBE4DA] rounded-[20px] p-3.5 flex items-center space-x-4 shadow-sm shadow-[#42332A]/5 hover:shadow-md transition cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#C07047] shrink-0">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {/* Bell SVG Line */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-[#2E2C2A] text-[15px]">
                  Announcement
                </h3>
                <span className="text-[10px] text-[#908E8B] font-medium">
                  Official
                </span>
              </div>
              <p className="text-xs text-[#908E8B] truncate mt-1">
                အက်ပ်ဗားရှင်းအသစ် ထွက်ရှိလာပါပြီ...
              </p>
            </div>
          </div>

          {/* 🎛️ AI Chat Room (မူလ CPU/Microchip Icon အစစ်) */}
          <div className="bg-[#FFFDF9] border border-[#EBE4DA] rounded-[20px] p-3.5 flex items-center space-x-4 shadow-sm shadow-[#42332A]/5 hover:shadow-md transition cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-[#E2EBE4] flex items-center justify-center text-[#2D4030] shrink-0">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {/* CPU Microchip SVG Line */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-[#2E2C2A] text-[15px]">
                  AI Assistant
                </h3>
                <span className="text-[10px] text-[#2D4030] bg-[#E2EBE4] px-1.5 py-0.5 rounded-md font-bold uppercase tracking-wider">
                  Online
                </span>
              </div>
              <p className="text-xs text-[#908E8B] truncate mt-1">
                ကျွန်ုပ်အား မည်သည့်မေးခွန်းမဆို မေးမြန်းနိုင်ပါတယ်...
              </p>
            </div>
          </div>
        </div>

        {/* ==============================================================
            🌐 PART 2: DATABASE CHANNELS (Conversations နေရာ)
           ============================================================== */}
        <div className="flex flex-col space-y-3">
          <span className="text-[11px] font-bold text-[#8A8782] uppercase tracking-wider px-1">
            Conversations
          </span>

          {dbChatRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white border border-[#EBE4DA] rounded-[24px] p-3.5 flex items-center space-x-4 shadow-sm shadow-[#42332A]/5 hover:shadow-md transition duration-300 cursor-pointer"
            >
              <div
                className={`w-12 h-12 ${
                  room.type === 'group' ? 'rounded-[16px]' : 'rounded-full'
                } ${
                  room.avatarBg
                } flex items-center justify-center text-white font-extrabold text-sm shadow-inner shrink-0`}
              >
                {room.iconText}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <div className="flex items-center space-x-1.5 min-w-0">
                    <h3 className="font-bold text-[#2E2C2A] text-[15px] truncate">
                      {room.title}
                    </h3>
                    <span
                      className={`text-[9px] px-1 py-0.2 rounded-sm uppercase tracking-tight font-bold shrink-0 ${
                        room.type === 'group'
                          ? 'bg-[#F5EFE6] text-[#C07047]'
                          : 'bg-[#E2EBE4] text-[#2D4030]'
                      }`}
                    >
                      {room.type}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#908E8B] font-semibold shrink-0 ml-2">
                    {room.time}
                  </span>
                </div>

                <div className="flex justify-between items-center mt-1">
                  <p className="text-xs text-[#8A8782] truncate pr-2 flex-1">
                    {room.lastMessage}
                  </p>

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
    {
      id: 1,
      title: 'မြန်မာ့စာပေခေတ်တခေတ်၏ အလှည့်အပြောင်းများ',
      source: 'Literature Magazine',
      date: 'June 2',
      readTime: '5 min read',
      imgUrl:
        'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=400&q=80',
    },
  ];

  const savedPosts = [
    {
      id: 1,
      title: 'Morden Books',
      author: 'Zayar Lin',
      avatarText: 'ZL',
      text: "ဆရာဇော်ဂျီရဲ့ 'သင်သေသွားသော်' ကဗျာလေးကို ပြန်ဖတ်မိတိုင်း ရင်ထဲ တမျိုးပဲ။ လူဆိုတာ သေသွားပေမဲ့ နာမည်နဲ့ အလုပ်က ကျန်ခဲ့ရမယ်ဆိုတာ ဆရာဇော်ဂျီရဲ့ 'သင်သေသွားသော်' ကဗျာလေးကို ပြန်ဖတ်မိတိုင်း ရင်ထဲ တမျိုးပဲ။ လူဆိုတာ သေသွားပေမဲ့ နာမည်နဲ့ အလုပ်က ကျန်ခဲ့ရမယ်ဆိုတာ",
      likes: 24,
      comments: 8,
      time: '2 hours ago',
    },
  ];

  const savedBooks = [
    {
      id: 1,
      title: 'ပိတောက်ပွင့်ဆဲ လသာဆဲဝယ်',
      author: 'တက္ကသိုလ်ဘုန်းနိုင်',
      coverUrl:
        'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 2,
      title: 'သင်သေသွားသော်',
      author: 'ဆရာဇော်ဂျီ',
      coverUrl:
        'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 3,
      title: 'Modern Minimalist UI',
      author: 'Dexl Design',
      coverUrl:
        'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 4,
      title: 'The Creative Mindset',
      author: 'John Doe',
      coverUrl:
        'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=300&q=80',
    },
  ];

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6 pt-2">
        <h1 className="text-2.5xl font-extrabold text-[#42332A]">
          သိမ်းဆည်းမှုများ (Saved)
        </h1>
        <div className="w-10 h-10 rounded-full bg-[#F5EFE6] flex items-center justify-center text-[#C07047]">
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
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
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
              <div
                key={article.id}
                className="bg-white border border-[#EBE4DA] rounded-[24px] p-3 flex space-x-4 shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <div className="w-20 h-20 rounded-xl shrink-0 bg-[#EDE5D9] overflow-hidden border border-[#EBE4DA]">
                  <img
                    src={article.imgUrl}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <h3 className="font-bold text-[#2E2C2A] text-[14px] leading-snug line-clamp-2">
                    {article.title}
                  </h3>
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
                    {post.avatarText}
                  </div>

                  {/* 📝 ခေါင်းစဉ်နှင့် အချိန် */}
                  <div className="min-w-0">
                    <h4 className="font-bold text-[#2E2C2A] text-[14px] truncate leading-tight group-hover:text-[#C07047] transition duration-200">
                      {post.title || 'My Creative Thinking Journey'}{' '}
                      {/* 💡 Database က title သုံးဖို့ ပြင်ပေးထားပါတယ် */}
                    </h4>
                    <p className="text-[10px] text-[#908E8B] font-semibold mt-1 uppercase tracking-wider">
                      POST • {post.time || '2 DAYS AGO'}
                    </p>
                  </div>
                </div>

                {/* ညာဘက်ခြမ်း- မျှားခေါင်း (chevron-right) Icon လေး */}
                <div className="text-[#8A8782] group-hover:text-[#C07047] transition duration-200 shrink-0 ml-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
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
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
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
  const [currentView, setCurrentView] = useState<
    'profile' | 'edit' | 'settings'
  >('profile');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // ၁။ Edit Profile အတွက် စာရင်း
  const editProfileData = [
    { id: 'pic', label: 'Picture', value: 'Change Photo', type: 'link' },
    { id: 'name', label: 'Name', value: 'Thurein', type: 'link' },
    { id: 'username', label: 'Username', value: '@thurein_dev', type: 'link' },
    {
      id: 'email',
      label: 'G-mail',
      value: 'thurein@example.com',
      type: 'link',
    },
    { id: 'password', label: 'Password', value: '••••••••', type: 'link' },
    {
      id: 'playlist',
      label: 'Playlist',
      value: 'My Playlists (16)',
      type: 'link',
    },
  ];

  // ၂။ Settings အတွက် စာရင်း
  const settingsData = [
    { id: 'dark_mode', label: 'Dark Mode', type: 'toggle', cata: 'Theme' },
    {
      id: 'font_size',
      label: 'Font Size',
      value: 'Medium',
      type: 'link',
      cata: 'Theme',
    },
    {
      id: 'font_style',
      label: 'Font',
      value: 'Pyidaungsu',
      type: 'link',
      cata: 'Theme',
    },
    {
      id: 'data_storage',
      label: 'Data & Storage',
      type: 'link',
      cata: 'System Setting',
    },
    { id: 'noti', label: 'Notification', type: 'link', cata: 'System Setting' },
    { id: 'security', label: 'Security', type: 'link', cata: 'System Setting' },
  ];

  // ဘုံသုံး Back Button Header
  const renderHeader = (title: string) => (
    <div className="flex items-center mb-8 pt-2">
      <button
        onClick={() => setCurrentView('profile')}
        className="w-10 h-10 rounded-full bg-[#F5EFE6] flex items-center justify-center text-[#C07047] mr-4 active:scale-95 transition"
      >
        <svg
          xmlns="http://w3.org"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
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
              <span className="text-base font-semibold text-[#2E2C2A]">
                {item.label}
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-[#8A8782] font-medium">
                  {item.value}
                </span>
                <svg
                  xmlns="http://w3.org"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#8A8782"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
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
    const categories = Array.from(
      new Set(settingsData.map((item) => item.cata))
    );

    return (
      <div className="p-6">
        {renderHeader('Settings')}
        <div className="space-y-6 max-w-sm mx-auto">
          {categories.map((categoryName) => (
            <div key={categoryName} className="pt-2">
              <span className="text-[11px] inline-block mb-2 ml-[-7px] font-bold text-[#8A8782] uppercase tracking-wider px-1">
                {categoryName}
              </span>
              <div className="flex flex-col divide-y divide-[#EDE5D9]">
                {settingsData
                  .filter((item) => item.cata === categoryName)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="w-full flex items-center justify-between py-4"
                    >
                      <span className="text-base font-semibold text-[#2E2C2A]">
                        {item.label}
                      </span>
                      {item.type === 'toggle' ? (
                        <button
                          onClick={() => setIsDarkMode(!isDarkMode)}
                          className={`w-11 h-6 flex items-center rounded-full p-0.5 transition-colors duration-300 ${
                            isDarkMode ? 'bg-[#C07047]' : 'bg-[#EDE5D9]'
                          }`}
                        >
                          <div
                            className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                              isDarkMode ? 'translate-x-5' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      ) : (
                        <button
                          onClick={() => console.log(`${item.id} clicked`)}
                          className="flex items-center space-x-2 active:opacity-60 transition"
                        >
                          <span className="text-sm text-[#8A8782] font-medium">
                            {item.value}
                          </span>
                          <svg
                            xmlns="http://w3.org"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="#8A8782"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  ))}
              </div>
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
        <h1 className="text-2.5xl font-extrabold text-[#42332A]">
          အကောင့် (Profile)
        </h1>
        <div className="w-10 h-10 rounded-full bg-[#F5EFE6] flex items-center justify-center text-[#C07047]">
          <Icons.Gear />
        </div>
      </div>

      <div className="flex flex-col items-center text-center mt-4">
        <div className="w-28 h-28 rounded-full border-4 border-white shadow-md overflow-hidden relative mb-3 bg-[#EDE5D9]">
          <img
            src={UserData.profileImg}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <h2 className="text-2.5xl font-bold text-[#2E2C2A]">{UserData.name}</h2>
        <p className="text-sm text-[#8A8782] mt-1">{UserData.username}</p>
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
          <Icons.Bell />
          <span className=" relative top-[-6px] right-[23px] w-2 h-2 bg-red-500 rounded-full"></span>
          <span className="font-[500] text-m">Notifications</span>
        </div>
        <Icons.ChevronRight />
      </div>

      <div className="bg-[#FFFDF9] border border-[#F5EFE6] rounded-2xl mt-4 p-4 flex justify-between items-center max-w-sm mx-auto">
        <div className="flex items-center space-x-3 text-[#2E2C2A]">
          <Icons.BookWritten />
          <span className="font-[500] text-m">Books Written</span>
        </div>
        <Icons.ChevronRight />
      </div>

      <div className="bg-white border border-[#F5EFE6] rounded-2xl p-4 max-w-sm mx-auto shadow-sm mt-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h4 className="font-bold text-[#2E2C2A] text-xs leading-tight">
              Weekly Reading Challenge
            </h4>
            <p className="text-[10px] text-[#908E8B] mt-0.5">
              ဒီအပတ် စာဖတ်မှုပန်းတိုင်
            </p>
          </div>
          <span className="text-[11px] font-black text-[#C07047] bg-[#F5EFE6] px-2 py-0.5 rounded-md">
            2 / 4 Books
          </span>
        </div>
        <div className="w-full bg-[#F5EFE6] h-2 rounded-full overflow-hidden">
          <div className="bg-[#C07047] h-full w-[50%] rounded-full transition-all duration-300"></div>
        </div>
      </div>

      <span className="text-[11px] inline-block mt-7 ml-1 font-bold text-[#8A8782] uppercase tracking-wider px-1">
        Others
      </span>
      <div className="rounded-xl bg-white p-2 m-2 flex justify-between border text-[#2E2C2A]">
        <span className="font-normal text-sm ml-2 text-[#908E8B]">
          {'Help & Support'}
        </span>
      </div>
      <div className="rounded-xl bg-white p-2 m-2 flex justify-between border text-[#2E2C2A]">
        <span className="font-normal text-sm ml-2 text-[#908E8B]">Report</span>
      </div>
      <div className="rounded-xl bg-white p-2 m-2 flex justify-between border text-[#2E2C2A]">
        <span className="font-normal text-sm ml-2 text-[#908E8B]">
          Contact Us
        </span>
      </div>
      <div className="rounded-xl bg-white p-2 m-2 flex justify-between border text-[#2E2C2A]">
        <span className="font-normal text-sm ml-2 text-[#908E8B]">
          {'Private Policy & Terms of Service'}
        </span>
      </div>
      <div className="rounded-xl bg-white p-2 m-2 flex justify-between items-center border text-[#FF5C5C]">
        <span className="font-normal text-sm ml-2">Log Out</span>
        <svg
          xmlns="http://w3.org"
          viewBox="0 0 24 24"
          width="18"
          height="16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="text-red-500 mr-1"
        >
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
      id: 'recent',
      title: 'လတ်တလောဖတ်လက်စများ (Recent Books)',
      books: [
        {
          id: 1,
          title: 'ပိတောက်ပွင့်ဆဲ လသာဆဲဝယ်',
          author: 'တက္ကသိုလ်ဘုန်းနိုင်',
          progress: 65,
          coverUrl:
            'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=200&q=80',
        },
        {
          id: 2,
          title: 'သင်သေသွားသော်',
          author: 'ဆရာဇော်ဂျီ',
          progress: 100,
          coverUrl:
            'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=200&q=80',
        },
        {
          id: 3,
          title: 'The Art of Imagination',
          author: 'Unknown Author',
          progress: 20,
          coverUrl:
            'https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?auto=format&fit=crop&w=200&q=80',
        },
      ],
    },
    {
      id: 'trending',
      title: 'လူကြိုက်အများဆုံး စာအုပ်များ (Trending Now)',
      books: [
        {
          id: 4,
          title: 'Modern Minimalist UI Guide',
          author: 'Dexl Design',
          progress: 0,
          coverUrl:
            'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=200&q=80',
        },
        {
          id: 5,
          title: 'The Creative Mindset',
          author: 'John Doe',
          progress: 0,
          coverUrl:
            'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=200&q=80',
        },
        {
          id: 6,
          title: 'Beyond the Horizon',
          author: 'Aung Ko',
          progress: 0,
          coverUrl:
            'https://images.unsplash.com/photo-1727022171385-1c561462ba90?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      ],
    },
  ];

  // 💡 နှိပ်လိုက်တဲ့ ID နဲ့ ကိုက်ညီတဲ့ Section Data တစ်ခုတည်းကိုပဲ ရှာထုတ်တဲ့အဆင့်ပါ
  const selectedSection = bookSections.find(
    (section) => section.id === showAll
  );

  // --- (A) See All View: ရွေးချယ်လိုက်တဲ့ Section တစ်ခုတည်းက စာအုပ်တွေကိုပဲ ပြမယ့်နေရာ ---
  if (selectedSection) {
    return (
      <div className="p-6 animate-fadeIn">
        <div className="flex items-center space-x-3 mb-6 pt-2">
          <button
            onClick={() => setShowAll(null)}
            className="text-[#C07047] p-1 bg-[#F5EFE6] rounded-xl hover:scale-105 transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          {/* ခေါင်းစဉ်က နှိပ်လိုက်တဲ့ Section အလိုက် Dynamic ပြောင်းသွားမှာပါ */}
          <h1 className="text-xl font-extrabold text-[#42332A] leading-relaxed">
            {selectedSection.title}
          </h1>
        </div>

        <div className="flex flex-col space-y-4 max-w-sm mx-auto">
          {selectedSection.books.map((book) => (
            <div
              key={book.id}
              className="bg-white border border-[#EBE4DA] rounded-[24px] p-3 flex space-x-4 shadow-sm shadow-[#42332A]/5 hover:shadow-md transition cursor-pointer"
            >
              <div className="w-16 h-24 rounded-xl shrink-0 bg-[#EDE5D9] overflow-hidden shadow-md relative border border-[#EBE4DA]">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1 min-w-0">
                <div>
                  <h3 className="font-bold text-[#2E2C2A] text-[16px] leading-tight truncate">
                    {book.title}
                  </h3>
                  <p className="text-xs text-[#908E8B] mt-1">
                    ဆရာ - {book.author}
                  </p>
                </div>
                {book.progress > 0 && (
                  <div className="mt-2">
                    <div className="flex justify-between text-[11px] font-semibold text-[#8A8782] mb-1">
                      <span>
                        {book.progress === 100 ? 'Completed' : `Reading`}
                      </span>
                      <span>{book.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#F5EFE6] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          book.progress === 100
                            ? 'bg-[#2D4030]'
                            : 'bg-[#C07047]'
                        }`}
                        style={{ width: `${book.progress}%` }}
                      />
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
        <h1 className="text-2.5xl font-extrabold text-[#42332A]">
          စာအုပ်စင် (Books)
        </h1>
        <div className="w-10 h-10 rounded-full bg-[#F5EFE6] flex items-center justify-center text-[#C07047]">
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
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
        </div>
      </div>

      <div className="space-y-8">
        {bookSections.map((section) => (
          <div key={section.id} className="flex flex-col">
            {/* Roll Header (Title & See More Button) */}
            <div className="flex justify-between items-justify mb-3 px-1">
              <h2 className="font-extrabold text-[#2E2C2A] text-[16px] tracking-wide leading-relaxed pr-2 flex-1">
                {section.title}
              </h2>
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
                <div
                  key={book.id}
                  className="w-[110px] shrink-0 snap-start group cursor-pointer"
                >
                  <div className="w-[110px] h-[160px] rounded-[10px] bg-[#EDE5D9] overflow-hidden shadow-md border border-[#EBE4DA] relative transition duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <img
                      src={book.coverUrl}
                      alt={book.title}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    {book.progress > 0 && (
                      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/20 backdrop-blur-xs">
                        <div
                          className={`h-full ${
                            book.progress === 100
                              ? 'bg-[#2D4030]'
                              : 'bg-[#C07047]'
                          }`}
                          style={{ width: `${book.progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                  <h4 className="font-bold text-[#2E2C2A] text-xs mt-2 truncate px-0.5 group-hover:text-[#C07047] transition">
                    {book.title}
                  </h4>
                  <p className="text-[10px] text-[#908E8B] mt-0.5 truncate px-0.5">
                    {book.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
