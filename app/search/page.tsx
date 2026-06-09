'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Icons = {
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
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex justify-center items-start pt-4">
      {/* မူလ App Layout အတိုင်း ဘောင်အကျယ်ကို max-w-md ထိန်းထားပေးပါတယ် */}
      <div className="w-full max-w-md px-4 flex items-center gap-3">
        
        {/* နောက်ပြန်ဆုတ်ရန် ခလုတ် (Back Key နှိပ်ရင်လည်း မူလပေ့ခ်ျ ပြန်ရောက်ပါတယ်) */}
        <button 
          onClick={() => router.back()} 
          className="text-[#706E6B] hover:text-[#C07047] p-1 transition-colors"
        >
          <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* စာရိုက်မည့် Input အစစ်အမှန် ဧရိယာ */}
        <div className="relative flex-1 group">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8782] group-focus-within:text-[#C07047] transition-colors duration-300">
            <Icons.Search />
          </span>

          <input
            type="text"
            autoFocus // 🛠 စာမျက်နှာ ပွင့်လာတာနဲ့ ဖုန်းလက်ကွက် တန်းတက်လာစေရန်
            placeholder="စာအုပ်များ၊ ဆောင်းပါးများ၊ စာရေးဆရာများကို ရှာဖွေပါ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#F5EFE6] rounded-2xl pl-11 pr-4 py-3.5 text-xs font-bold text-[#2E2C2A] placeholder-[#908E8B] focus:outline-none focus:border-[#C07047] shadow-sm"
          />
        </div>

      </div>
    </div>
  );
}
