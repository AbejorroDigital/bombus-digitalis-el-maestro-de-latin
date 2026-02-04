
import React, { useState } from 'react';
import Layout from './components/Layout';
import ReferenceSection from './components/ReferenceSection';
import ExerciseSection from './components/ExerciseSection';
import ProgressReport from './components/ProgressReport';
import { SessionResult } from './types';

enum View {
  Welcome = 'Welcome',
  Reference = 'Reference',
  Practice = 'Practice',
  Results = 'Results'
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
          <div className="text-center py-20 space-y-10 animate-fadeIn">
            <div className="space-y-4">
              <div className="text-6xl animate-bee mb-4">🐝</div>
              <h2 className="text-5xl font-cinzel font-bold text-red-900 tracking-tighter">BOMBUS DIGITALIS</h2>
              <p className="text-xl text-slate-600 font-serif max-w-2xl mx-auto italic">
                "Lingua latina non mortua est, sed immortalis." El zumbido del saber clásico en la era digital.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <button
                onClick={() => setCurrentView(View.Reference)}
                className="group relative bg-white p-8 rounded-2xl shadow-xl border-2 border-slate-100 hover:border-amber-500 transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <svg className="w-24 h-24 text-red-900" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" /></svg>
                </div>
                <h3 className="text-2xl font-cinzel font-bold text-red-900 mb-2">Codex Referencia</h3>
                <p className="text-slate-500 font-serif">Estudia las cinco declinaciones y las funciones sintácticas de cada caso.</p>
                <div className="mt-6 flex items-center justify-center text-amber-600 font-bold uppercase tracking-widest text-xs">
                  Entrar al Tablinum →
                </div>
              </button>

              <button
                onClick={() => setCurrentView(View.Practice)}
                className="group relative bg-white p-8 rounded-2xl shadow-xl border-2 border-slate-100 hover:border-red-800 transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <svg className="w-24 h-24 text-red-900" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                </div>
                <h3 className="text-2xl font-cinzel font-bold text-red-900 mb-2">Arena de Práctica</h3>
                <p className="text-slate-500 font-serif">Pon a prueba tu conocimiento con ejercicios progresivos y retroalimentación IA.</p>
                <div className="mt-6 flex items-center justify-center text-red-800 font-bold uppercase tracking-widest text-xs">
                  Comenzar Entrenamiento →
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
