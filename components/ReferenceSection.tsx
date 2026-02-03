
import React, { useState } from 'react';
import { DECLENSIONS } from '../constants';
import { Case, Gender } from '../types';

const CASE_DEFINITIONS = [
  { name: Case.Nominativo, func: 'Sujeto / Atributo', desc: 'Indica quién realiza la acción o de quién se dice algo.' },
  { name: Case.Vocativo, func: 'Apelación', desc: 'Se usa para llamar o dirigirse directamente a alguien.' },
  { name: Case.Acusativo, func: 'Objeto Directo', desc: 'Recibe la acción directa del verbo.' },
  { name: Case.Genitivo, func: 'Complemento del Nombre', desc: 'Indica posesión, pertenencia o relación.' },
  { name: Case.Dativo, func: 'Objeto Indirecto', desc: 'Indica el destinatario o beneficiario de la acción.' },
  { name: Case.Ablativo, func: 'Complemento Circunstancial', desc: 'Indica lugar, tiempo, modo, instrumento, etc.' },
];

const ReferenceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="space-y-12 animate-fadeIn">
      <section className="bg-white p-8 rounded-lg shadow-md border-l-8 border-amber-500">
        <h2 className="text-2xl font-cinzel font-bold text-red-900 mb-6 border-b pb-2">¿Qué es una Declinación?</h2>
        <div className="prose prose-slate max-w-none">
          <p className="mb-4">
            En latín, los sustantivos, adjetivos y pronombres cambian su terminación según la función sintáctica que desempeñan en la oración. 
            A este proceso se le llama <strong>declinar</strong>. Existen 5 declinaciones principales, cada una con sus propias reglas y desinencias.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {CASE_DEFINITIONS.map((c) => (
              <div key={c.name} className="bg-amber-50 p-4 rounded border border-amber-200">
                <h4 className="font-cinzel font-bold text-red-800">{c.name}</h4>
                <p className="text-xs font-bold text-slate-600 mb-1">{c.func}</p>
                <p className="text-sm italic">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap gap-2 mb-6">
          {DECLENSIONS.map((decl, idx) => (
            <button
              key={decl.id}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2 font-cinzel text-sm transition-all duration-300 rounded-t-lg border-b-2 ${
                activeTab === idx 
                  ? 'bg-red-800 text-white border-red-900 shadow-md' 
                  : 'bg-slate-200 text-slate-600 border-transparent hover:bg-slate-300'
              }`}
            >
              {decl.name}
            </button>
          ))}
        </div>

        <div className="bg-white p-6 rounded-b-lg shadow-lg border border-slate-200">
          <h3 className="text-xl font-cinzel font-bold text-red-900 mb-2">{DECLENSIONS[activeTab].name}</h3>
          <p className="text-slate-600 italic mb-6">{DECLENSIONS[activeTab].description}</p>

          <div className="space-y-8">
            {DECLENSIONS[activeTab].variants.map((variant, vIdx) => (
              <div key={vIdx} className="overflow-x-auto">
                <h4 className="text-md font-bold text-slate-700 mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                  Género: {variant.gender.join(' / ')}
                </h4>
                <table className="w-full text-left border-collapse bg-slate-50">
                  <thead>
                    <tr className="bg-slate-200">
                      <th className="p-3 border font-cinzel text-sm">Caso</th>
                      <th className="p-3 border font-cinzel text-sm">Singular</th>
                      <th className="p-3 border font-cinzel text-sm">Plural</th>
                    </tr>
                  </thead>
                  <tbody>
                    {variant.endings.map((ending, eIdx) => (
                      <tr key={eIdx} className="hover:bg-amber-50 transition-colors">
                        <td className="p-3 border font-bold text-red-900">{ending.case}</td>
                        <td className="p-3 border font-mono text-blue-800">{ending.singular}</td>
                        <td className="p-3 border font-mono text-blue-800">{ending.plural}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 flex gap-4">
                  <span className="text-sm font-bold text-slate-500">Ejemplos:</span>
                  {variant.examples.map((ex, i) => (
                    <span key={i} className="text-sm italic text-slate-700">
                      <strong>{ex.latin}</strong> ({ex.translation})
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-400 text-sm">
            <h5 className="font-bold mb-1">Nota del Magister:</h5>
            <p>
              Recuerda que el Vocativo es casi siempre igual al Nominativo, excepto en los temas en -us de la 2ª declinación, donde el singular termina en -e.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferenceSection;
