
import React from 'react';
import { SessionResult } from '../types';

interface Props {
  result: SessionResult;
  onReset: () => void;
}

const ProgressReport: React.FC<Props> = ({ result, onReset }) => {
  const score = Math.round((result.correct / result.total) * 100);
  
  // Basic heuristic for error report
  const analyzeErrors = () => {
    if (result.errors.length === 0) return "¡Impresionante! Tu conocimiento de las declinaciones es digno de un senador romano. El zumbido del éxito resuena en el Capitolio.";
    
    const declensionErrors: Record<number, number> = {};
    result.errors.forEach(e => {
      declensionErrors[e.exercise.declensionTarget] = (declensionErrors[e.exercise.declensionTarget] || 0) + 1;
    });

    const mostDifficult = Object.entries(declensionErrors).sort((a, b) => b[1] - a[1])[0];
    
    return `Tu desempeño ha sido sólido, pero parece que la ${mostDifficult[0]}ª declinación te está planteando algunos retos. Te sugerimos repasar las tablas de referencia antes de que la abeja vuelva a volar.`;
  };

  return (
    <div className="max-w-2xl mx-auto text-center py-12 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl p-10 border-4 border-amber-600">
        <div className="mb-8">
           <div className="text-4xl animate-bee mb-4">🐝</div>
           <h2 className="text-4xl font-cinzel font-bold text-red-900 mb-2">Reporte del Bombus</h2>
           <p className="italic text-slate-500">Análisis de tu vuelo gramatical</p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="relative w-48 h-48 flex items-center justify-center">
             <svg className="w-full h-full transform -rotate-90">
               <circle
                 cx="96"
                 cy="96"
                 r="88"
                 fill="transparent"
                 stroke="#e2e8f0"
                 strokeWidth="12"
               />
               <circle
                 cx="96"
                 cy="96"
                 r="88"
                 fill="transparent"
                 stroke={score > 70 ? '#10b981' : score > 40 ? '#f59e0b' : '#ef4444'}
                 strokeWidth="12"
                 strokeDasharray={552}
                 strokeDashoffset={552 - (552 * score) / 100}
                 className="transition-all duration-1000 ease-out"
               />
             </svg>
             <div className="absolute flex flex-col items-center">
               <span className="text-5xl font-cinzel font-bold text-slate-800">{score}%</span>
               <span className="text-xs uppercase font-bold text-slate-400">Puntuación</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
           <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <span className="block text-2xl font-bold text-green-600">{result.correct}</span>
              <span className="text-xs font-cinzel text-slate-500 uppercase">Aciertos</span>
           </div>
           <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <span className="block text-2xl font-bold text-red-600">{result.total - result.correct}</span>
              <span className="text-xs font-cinzel text-slate-500 uppercase">Errores</span>
           </div>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400 text-left mb-8">
           <h4 className="font-cinzel font-bold text-red-900 mb-2">Consejo del Magister:</h4>
           <p className="text-slate-700 italic leading-relaxed">
             {analyzeErrors()}
           </p>
        </div>

        <button
          onClick={onReset}
          className="w-full bg-red-800 text-white py-4 rounded-xl font-cinzel text-xl shadow-lg hover:bg-red-900 transition-all hover:scale-105 active:scale-95"
        >
          Nuevo Entrenamiento
        </button>
      </div>
    </div>
  );
};

export default ProgressReport;
