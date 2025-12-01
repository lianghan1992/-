
import React, { useState } from 'react';
import { User, View } from '../types';
import {
    ChartIcon,
    ChevronDownIcon
} from './icons';

interface HeaderProps {
    currentView: View;
    onNavigate: (view: View) => void;
    onUpgrade: () => void;
    user: User;
}

// 仅保留竞争力看板
const navItems: { view: View; label: string; icon: React.FC<React.SVGProps<SVGSVGElement>> }[] = [
    { view: 'techboard', label: '竞争力看板', icon: ChartIcon },
];

const NavItem: React.FC<{
    view: View;
    label: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    isActive: boolean;
    onClick: () => void;
}> = ({ label, icon: Icon, isActive, onClick }) => (
    <button
        onClick={onClick}
        title={label}
        className={`
            group flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 flex-shrink-0
            ${
            isActive
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 transform scale-105'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
        }`}
    >
        <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'}`} />
        <span className="whitespace-nowrap">{label}</span>
    </button>
);


export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, user }) => {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const finalNavItems = [...navItems];
    
    const handleLogout = (e: React.MouseEvent) => {
        e.preventDefault();
        localStorage.removeItem('accessToken');
        window.location.reload();
    };

    return (
        <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] sticky top-0 z-50">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-18">
                    {/* Desktop Nav */}
                    <div className="flex items-center gap-4 lg:gap-8 overflow-hidden flex-1">
                        <nav className="flex items-center gap-1 lg:gap-2 overflow-x-auto no-scrollbar mask-image-r">
                            {finalNavItems.map(item => (
                                <NavItem 
                                    key={item.view}
                                    {...item}
                                    isActive={currentView === item.view}
                                    onClick={() => onNavigate(item.view)}
                                />
                            ))}
                        </nav>
                    </div>

                    {/* Right side: User Menu */}
                    <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                        <div className="relative">
                            <button
                                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                onBlur={() => setTimeout(() => setIsUserMenuOpen(false), 200)}
                                className="flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200 group"
                            >
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-700 font-bold border-2 border-white shadow-sm group-hover:scale-105 transition-transform">
                                    {user.username.charAt(0).toUpperCase()}
                                </div>
                                <span className="hidden sm:inline text-sm font-semibold text-slate-600 group-hover:text-slate-900 max-w-[100px] truncate">{user.username}</span>
                                <ChevronDownIcon className="hidden sm:block w-3 h-3 text-slate-400 group-hover:text-slate-600 transition-transform group-hover:rotate-180" />
                            </button>

                            {isUserMenuOpen && (
                                <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl ring-1 ring-black/5 py-2 animate-in fade-in-0 zoom-in-95 origin-top-right z-50">
                                    <div className="px-5 py-3 border-b border-slate-50 bg-slate-50/50">
                                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">当前账号</p>
                                        <p className="text-sm font-bold text-slate-800 truncate">{user.email}</p>
                                    </div>
                                    <div className="py-1">
                                        <a href="#" className="block px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">个人资料</a>
                                        <a href="#" className="block px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">偏好设置</a>
                                    </div>
                                    <div className="border-t border-slate-50 my-1"></div>
                                    <a href="#" onClick={handleLogout} className="block px-5 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 transition-colors">退出登录</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
