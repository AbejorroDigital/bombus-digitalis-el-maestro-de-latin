
import React, { useState } from 'react';
import Layout from './components/Layout';
import ReferenceSection from './components/ReferenceSection';
import ExerciseSection from './components/ExerciseSection';
import ProgressReport from './components/ProgressReport';
import LegalGlossary from './components/LegalGlossary';
import { SessionResult } from './types';

enum View {
  Welcome = 'Welcome',
  Reference = 'Reference',
  Practice = 'Practice',
  Results = 'Results',
  Glossary = 'Glossary'
}

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.Welcome);
  const [lastResult, setLastResult] = useState<SessionResult | null>(null);

  const handlePracticeComplete = (result: SessionResult) => {
    setLastResult(result);
    setCurrentView(View.Results);
  };

  const renderContent = () => {
    switch (currentView) {
      case View.Welcome:
        return (
          <div className="text-center py-12 space-y-10 animate-fadeIn">
            <div className="space-y-4">
              <div className="text-6xl mb-4">🐝</div>
              <h2 className="text-5xl font-cinzel font-bold text-red-900 tracking-tighter">BOMBUS DIGITALIS</h2>
              <p className="text-xl text-slate-600 font-serif max-w-2xl mx-auto italic">
                "Lingua latina non mortua est, sed immortalis." El zumbido del saber clásico en la era digital.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <button
                onClick={() => setCurrentView(View.Reference)}
                className="group relative bg-white p-8 rounded-2xl shadow-xl border-2 border-slate-100 hover:border-amber-500 transition-all overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <svg className="w-24 h-24 text-red-900" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" /></svg>
                </div>
                <div>
                  <h3 className="text-2xl font-cinzel font-bold text-red-900 mb-2">Codex Referencia</h3>
                  <p className="text-slate-500 font-serif">Estudia las cinco declinaciones y las funciones sintácticas de cada caso.</p>
                </div>
                <div className="mt-6 flex items-center justify-center text-amber-600 font-bold uppercase tracking-widest text-xs">
                  Entrar al Tablinum →
                </div>
              </button>

              <button
                onClick={() => setCurrentView(View.Practice)}
                className="group relative bg-white p-8 rounded-2xl shadow-xl border-2 border-slate-100 hover:border-red-800 transition-all overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <svg className="w-24 h-24 text-red-900" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h3 className="text-2xl font-cinzel font-bold text-red-900 mb-2">Arena de Práctica</h3>
                  <p className="text-slate-500 font-serif">Pon a prueba tu conocimiento con ejercicios progresivos y retroalimentación IA.</p>
                </div>
                <div className="mt-6 flex items-center justify-center text-red-800 font-bold uppercase tracking-widest text-xs">
                  Comenzar Entrenamiento →
                </div>
              </button>

              <button
                onClick={() => setCurrentView(View.Glossary)}
                className="group relative bg-white p-8 rounded-2xl shadow-xl border-2 border-slate-100 hover:border-amber-700 transition-all overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <svg className="w-24 h-24 text-amber-900" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path></svg>
                </div>
                <div>
                  <h3 className="text-2xl font-cinzel font-bold text-amber-900 mb-2">Lexicon Iuridicum</h3>
                  <p className="text-slate-500 font-serif">Explora el origen etimológico de los conceptos fundamentales del Derecho.</p>
                </div>
                <div className="mt-6 flex items-center justify-center text-amber-800 font-bold uppercase tracking-widest text-xs">
                  Consultar Glosario →
                </div>
              </button>
            </div>
          </div>
        );
      case View.Reference:
        return (
          <div className="space-y-8">
            <button 
              onClick={() => setCurrentView(View.Welcome)}
              className="flex items-center gap-2 text-slate-500 hover:text-red-800 font-cinzel text-sm mb-4"
            >
              ← Regresar al Inicio
            </button>
            <ReferenceSection />
          </div>
        );
      case View.Practice:
        return (
          <div className="space-y-8">
            <button 
              onClick={() => setCurrentView(View.Welcome)}
              className="flex items-center gap-2 text-slate-500 hover:text-red-800 font-cinzel text-sm mb-4"
            >
              ← Cancelar Sesión
            </button>
            <ExerciseSection onComplete={handlePracticeComplete} />
          </div>
        );
      case View.Glossary:
        return (
          <div className="space-y-8">
            <button 
              onClick={() => setCurrentView(View.Welcome)}
              className="flex items-center gap-2 text-slate-500 hover:text-red-800 font-cinzel text-sm mb-4"
            >
              ← Regresar al Inicio
            </button>
            <LegalGlossary />
          </div>
        );
      case View.Results:
        return lastResult ? (
          <ProgressReport result={lastResult} onReset={() => setCurrentView(View.Welcome)} />
        ) : null;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="transition-all duration-500">
        {renderContent()}
      </div>
    </Layout>
  );
};

export default App;
