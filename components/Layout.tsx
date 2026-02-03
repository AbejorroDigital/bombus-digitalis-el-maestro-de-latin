
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-red-900 text-amber-50 py-6 shadow-xl border-b-4 border-amber-600">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-4xl animate-bee">🐝</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-cinzel font-bold tracking-widest">
                BOMBUS DIGITALIS
              </h1>
              <p className="text-sm opacity-80 italic font-serif">Ars Grammatica Latina</p>
            </div>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-xs font-cinzel block">SPQR</span>
            <span className="text-lg italic font-serif">"Labor omnia vincit"</span>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        {children}
      </main>
      <footer className="bg-slate-900 text-slate-400 py-6 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Bombus Digitalis. El zumbido del Magister Linguas Classicas.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
