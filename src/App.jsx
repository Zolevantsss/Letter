import { useState } from 'react'
import './App.css'

const SNOOPY_ST_PATH = '/snoopy_sticker_v2_1772113629423.png'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleEnvelope = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#fdfaf8] px-4 py-10 font-sans overflow-hidden relative">
      <div className="bg-circle w-[600px] h-[600px] bg-[#e7d7cc] -top-20 -left-20 animate-pulse"></div>
      <div className="bg-circle w-[500px] h-[500px] bg-[#d2c2b8] -bottom-20 -right-20"></div>

      <div className={`text-center mb-10 transition-all duration-1000 ${isOpen ? 'opacity-20 scale-90 translate-y-[-20px]' : 'opacity-100'}`}>
        <h1 className="text-4xl font-light text-[#8d6e63] mb-3 font-serif tracking-wide">Goodluck for Pursuing your Dream!</h1>
        <p className="text-[#a1887f] italic text-lg opacity-70">Tap the seal to peek inside...</p>
      </div>

      <div className="envelope-wrapper">
        <div
          className={`envelope ${isOpen ? 'open' : ''}`}
          onClick={toggleEnvelope}
        >
          <div className="envelope-flap"></div>
          <div className="envelope-front"></div>
          <div className="wax-seal">
            <span>🐾</span>
          </div>

          <div className="letter">
            <div className="letter-content paper-content">
              <img
                src={SNOOPY_ST_PATH}
                alt="Cute Snoopy and Woodstock"
                className="snoopy-img"
              />

              <div className="w-20 h-0.5 bg-[#d7ccc8] mb-8 shadow-sm"></div>

              <h2 className="text-3xl font-script text-[#5d4037] mb-4">Hiii Miiiii !!</h2>

              <div className="px-4 space-y-6">
                <p className="text-[#6d4c41] leading-relaxed text-lg italic font-medium">
                  “For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.”
                  - Book of Jeremiah 29:11
                </p>

                <div className="flex justify-center items-center space-x-2">
                  <div className="h-px w-6 bg-[#efebe9]"></div>
                  <span className="text-xs text-[#d7ccc8]">🐾</span>
                  <div className="h-px w-6 bg-[#efebe9]"></div>
                </div>

                <p className="text-[#795548] text-base leading-relaxed">
                  Hello miii hehehehe gulat ka no, eme. Goodluck sa job hunting mo today. I wish you luck to get the job you eagerly wanting for. I know you can do it!! I believe in you, and keep in mind that no matter how many rejections you may receive, don't ever think of giving up, and when you feel like you're giving up, always remember I'm always here for you and always be proud of you!. GOODLUCKK !!
                </p>
              </div>

              <div className="mt-10 flex flex-col items-center">
                <div className="flex space-x-4 mb-4 text-xl">
                  <span className="opacity-50 hover:opacity-100 cursor-default">☕</span>
                  <span className="opacity-50 hover:opacity-100 cursor-default">🍪</span>
                  <span className="opacity-50 hover:opacity-100 cursor-default">🍂</span>
                </div>
                <p className="text-[10px] text-[#bcaaa4] font-bold tracking-[0.4em] uppercase">Sent with hugs</p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="mt-10 btn btn-ghost btn-xs text-[#8d6e63] hover:bg-[#f7f3f0] rounded-full px-6 opacity-60 hover:opacity-100 transition-all border border-[#d7ccc8]/30"
              >
                Close & Re-seal
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#d7ccc8] opacity-20 animate-float"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 11) % 100}%`,
              animationDelay: `${i * 0.4}s`,
              fontSize: `${(i % 4 + 1) * 8}px`
            }}
          >
            {i % 3 === 0 ? '🐾' : i % 3 === 1 ? '♥' : '✨'}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
