
import React, { useState, useEffect } from 'react';
import { DECLENSIONS_DATA, getExercisesForSession, getExercisesCountByDeclension } from '../database';
import { Exercise, SessionResult } from '../types';
import { getGeminiExplanation } from '../services/geminiService';

interface Props {
  onComplete: (result: SessionResult) => void;
}

const ExerciseSection: React.FC<Props> = ({ onComplete }) => {
  const [setupMode, setSetupMode] = useState(true);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; text: string; aiExplanation?: string | null }>({
    isCorrect: false,
    text: '',
  });
  const [loadingAI, setLoadingAI] = useState(false);
  const [results, setResults] = useState<SessionResult>({
    correct: 0,
    total: 0,
    errors: []
  });

  const startSession = (declensionId: number | 'all') => {
    const sessionExercises = getExercisesForSession(declensionId);
    if (sessionExercises.length === 0) return;
    
    setExercises(sessionExercises);
    setSetupMode(false);
  };

  const currentExercise = exercises[currentIndex];

  const handleSubmit = async () => {
    if (!currentExercise || isAnswered) return;

    const isCorrect = userAnswer.trim().toLowerCase() === currentExercise.correctAnswer.toLowerCase();
    setIsAnswered(true);
    setLoadingAI(true);

    const aiExplanation = await getGeminiExplanation(
      currentExercise.question,
      userAnswer,
      currentExercise.correctAnswer,
      currentExercise.context
    );

    setFeedback({
      isCorrect,
      text: isCorrect ? '¡Excelente! Optime fecisti.' : 'Vaya, parece que ha habido un error.',
      aiExplanation
    });

    setResults(prev => ({
      ...prev,
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      total: prev.total + 1,
      errors: isCorrect ? prev.errors : [...prev.errors, { exercise: currentExercise, userAnswer }]
    }));

    setLoadingAI(false);
  };

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setUserAnswer('');
      setIsAnswered(false);
      setFeedback({ isCorrect: false, text: '' });
    } else {
      onComplete(results);
    }
  };

  // --- RENDER SELECTION SCREEN ---
  if (setupMode) {
    return (
      <div className="max-w-4xl mx-auto animate-fadeIn">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-cinzel font-bold text-red-900 mb-2">Prepara tu Batalla</h2>
          <p className="text-slate-600 font-serif italic">"Bis vincit qui se vincit in victoria" - Elige tu campo de entrenamiento.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DECLENSIONS_DATA.map((decl) => {
            const count = getExercisesCountByDeclension(decl.id);
            return (
              <button
                key={decl.id}
                onClick={() => startSession(decl.id)}
                className="group flex flex-col items-center p-6 bg-amber-50 rounded-xl border-2 border-amber-200 hover:border-red-800 hover:bg-white hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-red-900 text-amber-50 flex items-center justify-center font-cinzel font-bold text-xl mb-4 group-hover:bg-red-700 transition-colors">
                  {decl.id}
                </div>
                <h3 className="text-xl font-cinzel font-bold text-slate-800 mb-2">{decl.name}</h3>
                <p className="text-sm text-slate-500 text-center mb-4 min-h-[40px]">{decl.description.substring(0, 60)}...</p>
                <span className="text-xs uppercase font-bold text-amber-700 tracking-widest bg-amber-100 px-3 py-1 rounded-full">
                  {count} Ejercicios
                </span>
              </button>
            );
          })}

          <button
            onClick={() => startSession('all')}
            className="group flex flex-col items-center p-6 bg-slate-800 rounded-xl border-2 border-slate-700 hover:border-amber-500 hover:bg-slate-900 hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-amber-400 transition-colors">
              ∞
            </div>
            <h3 className="text-xl font-cinzel font-bold text-white mb-2">Promiscuus</h3>
            <p className="text-sm text-slate-400 text-center mb-4 min-h-[40px]">Mezcla de todas las declinaciones. Solo para los más valientes.</p>
            <span className="text-xs uppercase font-bold text-slate-900 tracking-widest bg-amber-500 px-3 py-1 rounded-full">
              Desafío Total
            </span>
          </button>
        </div>
      </div>
    );
  }

  // --- RENDER EXERCISE SCREEN (QUIZ) ---
  if (exercises.length === 0) return <div className="text-center p-12 font-cinzel text-red-900">Preparando pergaminos...</div>;

  return (
    <div className="max-w-3xl mx-auto animate-fadeIn">
      <div className="mb-8 flex justify-between items-center bg-slate-100 p-4 rounded-lg shadow-inner border border-slate-200">
        <span className="text-sm font-bold text-slate-500 font-cinzel uppercase tracking-widest">
          Exercitium {currentIndex + 1} / {exercises.length}
        </span>
        <div className="w-48 bg-slate-300 h-2 rounded-full overflow-hidden border border-slate-400">
          <div 
            className="bg-red-800 h-full transition-all duration-500 shadow-[0_0_8px_rgba(153,27,27,0.4)]" 
            style={{ width: `${((currentIndex + 1) / exercises.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-2xl border-t-8 border-red-800 mb-8 relative">
        <div className="absolute top-4 right-8 text-xs font-cinzel text-slate-300 opacity-50">CURSUS I</div>
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded text-xs font-bold uppercase tracking-wider mb-2 border border-amber-200">
            {currentExercise.type} - {currentExercise.difficulty}
          </span>
          <h3 className="text-2xl font-serif text-slate-800 leading-relaxed font-semibold">
            {currentExercise.question}
          </h3>
          {currentExercise.context && (
            <div className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-300 italic text-slate-700 font-serif">
              "{currentExercise.context}"
            </div>
          )}
        </div>

        <div className="space-y-4">
          {currentExercise.options ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentExercise.options.map((opt) => (
                <button
                  key={opt}
                  disabled={isAnswered}
                  onClick={() => setUserAnswer(opt)}
                  className={`p-4 text-left border-2 rounded-lg transition-all duration-200 ${
                    userAnswer === opt 
                      ? 'border-red-800 bg-red-50 text-red-900 font-bold scale-[1.02] shadow-md' 
                      : 'border-slate-200 hover:border-red-300 hover:bg-slate-50'
                  } ${isAnswered && opt === currentExercise.correctAnswer ? 'bg-green-100 border-green-500 text-green-900' : ''} ${isAnswered && userAnswer === opt && opt !== currentExercise.correctAnswer ? 'bg-red-100 border-red-400 opacity-70' : ''}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          ) : (
            <div className="relative">
              <input
                type="text"
                value={userAnswer}
                disabled={isAnswered}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Escribe tu respuesta aquí..."
                className="w-full p-4 border-2 border-slate-200 rounded-lg focus:border-red-800 outline-none font-serif text-lg bg-slate-50 transition-colors"
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
              </div>
            </div>
          )}

          {!isAnswered ? (
            <button
              onClick={handleSubmit}
              disabled={!userAnswer}
              className={`w-full py-4 rounded-lg font-cinzel text-lg shadow-lg transition-all transform active:scale-95 ${
                !userAnswer ? 'bg-slate-300 cursor-not-allowed text-slate-500' : 'bg-red-800 text-white hover:bg-red-900 hover:-translate-y-1 hover:shadow-red-900/20'
              }`}
            >
              Verificar Respuesta
            </button>
          ) : (
            <div className="mt-8 animate-slideUp">
              <div className={`p-6 rounded-lg ${feedback.isCorrect ? 'bg-green-50 border-green-200 shadow-green-100' : 'bg-red-50 border-red-200 shadow-red-100'} border-2 shadow-inner`}>
                <div className="flex items-center gap-3 mb-4">
                   <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-md ${feedback.isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
                      {feedback.isCorrect ? '✓' : '✗'}
                   </div>
                   <h4 className="font-cinzel text-xl font-bold text-slate-800">{feedback.text}</h4>
                </div>
                
                <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                  <p className="mb-4"><strong>La respuesta correcta es:</strong> <span className="font-mono text-xl bg-white px-3 py-1 rounded-md border-2 border-slate-200 text-red-900 font-bold">{currentExercise.correctAnswer}</span></p>
                  
                  {loadingAI ? (
                    <div className="flex items-center gap-3 text-slate-500 italic py-6 bg-white/30 rounded-lg justify-center border border-dashed border-slate-300">
                      <div className="animate-spin h-6 w-6 border-4 border-slate-300 border-t-red-800 rounded-full"></div>
                      Consultando al Magister por el Oráculo...
                    </div>
                  ) : (
                    <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-amber-400"></div>
                      <p className="italic text-slate-600 font-serif whitespace-pre-wrap">{feedback.aiExplanation || currentExercise.explanation}</p>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleNext}
                  className="mt-8 w-full bg-slate-800 text-white py-4 rounded-lg font-cinzel text-lg hover:bg-slate-900 transition-all shadow-lg flex items-center justify-center gap-2 group"
                >
                  Siguiente Pregunta <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExerciseSection;
