
import React from 'react';
import { LogoIcon, ArrowRightIcon } from '../icons';

interface HomePageProps {
    onEnter: () => void;
}

// --- 1. 全局背景：动态光斑 (保留) ---
const BackgroundBlobs: React.FC = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        {/* Noise Texture */}
        <div className="absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>
        
        {/* Animated Blobs */}
        <div className="absolute top-[-10%] left-[10%] w-[45rem] h-[45rem] bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
        <div className="absolute top-[-10%] right-[10%] w-[40rem] h-[40rem] bg-purple-200/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[30%] w-[50rem] h-[50rem] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-4000"></div>
        
        <style>{`
            @keyframes blob {
                0% { transform: translate(0px, 0px) scale(1); }
                33% { transform: translate(30px, -50px) scale(1.1); }
                66% { transform: translate(-20px, 20px) scale(0.9); }
                100% { transform: translate(0px, 0px) scale(1); }
            }
            .animate-blob {
                animation: blob 10s infinite;
            }
            .animation-delay-2000 {
                animation-delay: 2s;
            }
            .animation-delay-4000 {
                animation-delay: 4s;
            }
        `}</style>
    </div>
);

// --- 主页面组件 ---
export const HomePage: React.FC<HomePageProps> = ({ onEnter }) => {
    return (
        <div className="relative min-h-screen w-full bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-hidden flex flex-col items-center justify-center">
            
            {/* --- 全局背景 --- */}
            <BackgroundBlobs />
            
            <div className="relative z-10 w-full max-w-md px-6 text-center">
                <div className="mb-8 flex justify-center">
                    <div className="relative flex items-center justify-center w-20 h-20 bg-white rounded-3xl shadow-xl shadow-indigo-500/10 border border-white/50 backdrop-blur-xl">
                        <LogoIcon className="w-12 h-12 text-indigo-600" />
                    </div>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                    Auto Insight
                </h1>
                <p className="text-slate-500 text-lg mb-10 font-medium">
                    车企竞争力看板系统
                </p>

                <div className="space-y-4">
                    <button 
                        onClick={onEnter} 
                        className="group relative w-full h-14 flex items-center justify-center rounded-2xl bg-slate-900 px-8 font-bold text-white shadow-xl shadow-slate-900/20 transition-all duration-300 hover:bg-indigo-600 hover:scale-[1.02] hover:shadow-indigo-600/30 focus:outline-none"
                    >
                        <span className="mr-2 text-lg">登录系统</span>
                        <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>

                <p className="mt-8 text-xs text-slate-400">
                    内部系统 · 请使用授权账号登录
                </p>
            </div>

            {/* Footer */}
            <footer className="absolute bottom-6 w-full text-center z-10">
                <p className="text-xs text-slate-400/60">
                    &copy; 2024 Automotive Intelligence Platform
                </p>
            </footer>
        </div>
    );
};
