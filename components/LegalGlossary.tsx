
import React from 'react';

const LegalGlossary: React.FC = () => {
  return (
    <div className="glossary-wrapper p-6 md:p-12 bg-pattern animate-fadeIn">

      <header className="max-w-4xl mx-auto text-center mb-16 border-b-2 border-amber-800/20 pb-10">
        <div className="mb-4 inline-block p-4 rounded-full bg-amber-100 text-amber-900">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
        </div>
        <h1 className="glossary-title text-5xl font-black text-amber-900 mb-4 uppercase tracking-tighter">Léxico Latino en el Derecho</h1>
        <p className="text-xl text-amber-800 italic font-medium">"Un recorrido etimológico por las raíces romanas que estructuran la justicia contemporánea."</p>
      </header>

      <main className="card-container">
        {/* Card 1: Ius */}
        <article className="card border-orange-200 bg-orange-50">
          <div className="p-6 border-b border-orange-200 flex justify-between items-start">
            <div>
              <h2 className="glossary-subtitle text-3xl font-black text-orange-800 tracking-wider">Ius</h2>
              <span className="latin-tag">Genitivo: Iuris</span>
            </div>
            <div className="p-3 rounded-xl bg-orange-100 text-orange-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
            </div>
          </div>
          <div className="p-6 flex-grow">
            <div className="mb-4">
              <h3 className="text-xs font-bold uppercase text-amber-900/60 mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path></svg>
                Significado Original
              </h3>
              <p className="text-lg italic leading-snug">En el corazón de toda la arquitectura legal se encuentra la palabra Ius. En su origen latino, este término no solo se refería al "derecho" como un conjunto de normas impuestas por el Estado, sino también a lo que es "justo" o "lícito" por naturaleza o costumbre. Era la fórmula sagrada que mantenía el equilibrio social.</p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase text-amber-900/60 mb-2">Derivados en Español</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/60 border border-orange-200 rounded text-sm text-orange-900">Justicia</span>
                  <span className="px-2 py-1 bg-white/60 border border-orange-200 rounded text-sm text-orange-900">Jurídico</span>
                  <span className="px-2 py-1 bg-white/60 border border-orange-200 rounded text-sm text-orange-900">Juez</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-black/5 border-t border-orange-200 text-sm">
            <h4 className="font-bold uppercase mb-1">Importancia Jurídica</h4>
            <p>Piedra angular de la disciplina. Define la distinción entre la fuerza bruta y la autoridad legítima. El abogado es, ante todo, un servidor del Ius.</p>
          </div>
        </article>

        {/* Card 2: Pactum */}
        <article className="card border-amber-200 bg-amber-50">
          <div className="p-6 border-b border-amber-200 flex justify-between items-start">
            <div>
              <h2 className="glossary-subtitle text-3xl font-black text-amber-800 tracking-wider">Pactum</h2>
              <span className="latin-tag">Genitivo: Pacti</span>
            </div>
            <div className="p-3 rounded-xl bg-amber-100 text-amber-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8Z"></path><path d="M10 12h.01"></path><path d="M16 12h.01"></path><path d="M22 8v8a3 3 0 0 1-3 3H11"></path><path d="M15 5a3 3 0 0 1 3 3v8"></path></svg>
            </div>
          </div>
          <div className="p-6 flex-grow">
            <div className="mb-4">
              <h3 className="text-xs font-bold uppercase text-amber-900/60 mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path></svg>
                Significado Original
              </h3>
              <p className="text-lg italic leading-snug">Originalmente, un pactum era un acuerdo o convenio derivado del verbo paciscor, que significa "hacer la paz". En el contexto romano, el pacto era el mecanismo mediante el cual dos partes ponían fin a una controversia o establecían una obligación mutua mediante el consentimiento.</p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase text-amber-900/60 mb-2">Derivados en Español</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/60 border border-amber-200 rounded text-sm text-amber-900">Pacto</span>
                  <span className="px-2 py-1 bg-white/60 border border-amber-200 rounded text-sm text-amber-900">Pactar</span>
                  <span className="px-2 py-1 bg-white/60 border border-amber-200 rounded text-sm text-amber-900">Impacto</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-black/5 border-t border-amber-200 text-sm">
            <h4 className="font-bold uppercase mb-1">Importancia Jurídica</h4>
            <p>Es la piedra angular de la disciplina. Sin el concepto de Ius, no existiría la distinción entre la fuerza bruta y la autoridad legítima. Define la identidad misma de la profesión: el abogado es un servidor del Ius.</p>
          </div>
        </article>

        {/* Card 3: Delictum */}
        <article className="card border-red-200 bg-red-50">
          <div className="p-6 border-b border-red-200 flex justify-between items-start">
            <div>
              <h2 className="glossary-subtitle text-3xl font-black text-red-900 tracking-wider">Delictum</h2>
              <span className="latin-tag">Genitivo: Delicti</span>
            </div>
            <div className="p-3 rounded-xl bg-red-100 text-red-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14.5 12.5-8 8a2.11 2.11 0 1 1-3-3l8-8"></path><path d="m16 16 2 2"></path><path d="m19 13 2 2"></path><path d="m5 8 3-3"></path><path d="m2 11 3-3"></path><path d="m7 11 11-11 3 3-11 11z"></path><path d="m22 22-5-5"></path></svg>
            </div>
          </div>
          <div className="p-6 flex-grow">
            <div className="mb-4">
              <h3 className="text-xs font-bold uppercase text-amber-900/60 mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path></svg>
                Significado Original
              </h3>
              <p className="text-lg italic leading-snug">Representa la autonomía de la voluntad. El derecho contractual moderno se fundamenta en la premisa pacta sunt servanda (los pactos deben cumplirse), principio que garantiza la seguridad jurídica y la estabilidad en las relaciones comerciales y civiles.</p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase text-amber-900/60 mb-2">Derivados en Español</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/60 border border-red-200 rounded text-sm text-red-950">Delito</span>
                  <span className="px-2 py-1 bg-white/60 border border-red-200 rounded text-sm text-red-950">Delincuente</span>
                  <span className="px-2 py-1 bg-white/60 border border-red-200 rounded text-sm text-red-950">Delictivo</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-black/5 border-t border-red-200 text-sm">
            <h4 className="font-bold uppercase mb-1">Importancia Jurídica</h4>
            <p>Es el eje del Derecho Penal. Permite clasificar las conductas humanas que el Estado considera intolerables, estableciendo la frontera entre la convivencia civilizada y la criminalidad.</p>
          </div>
        </article>

        {/* Card 4: Persona */}
        <article className="card border-yellow-200 bg-yellow-50">
          <div className="p-6 border-b border-yellow-200 flex justify-between items-start">
            <div>
              <h2 className="glossary-subtitle text-3xl font-black text-yellow-900 tracking-wider">Persona</h2>
              <span className="latin-tag">Genitivo: Personae</span>
            </div>
            <div className="p-3 rounded-xl bg-yellow-100 text-yellow-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
          </div>
          <div className="p-6 flex-grow">
            <div className="mb-4">
              <h3 className="text-xs font-bold uppercase text-amber-900/60 mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path></svg>
                Significado Original
              </h3>
              <p className="text-lg italic leading-snug">Curiosamente, el significado original de persona era "máscara", específicamente la que utilizaban los actores en el teatro para que su voz resonara (per-sonare). Con el tiempo, el Derecho Romano adoptó el término para designar al sujeto que posee capacidad de actuar en el escenario jurídico, es decir, el titular de derechos y obligaciones.</p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase text-amber-900/60 mb-2">Derivados en Español</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/60 border border-yellow-200 rounded text-sm text-yellow-900">Personalidad</span>
                  <span className="px-2 py-1 bg-white/60 border border-yellow-200 rounded text-sm text-yellow-900">Personería</span>
                  <span className="px-2 py-1 bg-white/60 border border-yellow-200 rounded text-sm text-yellow-900">Personaje</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-black/5 border-t border-yellow-200 text-sm">
            <h4 className="font-bold uppercase mb-1">Importancia Jurídica</h4>
            <p>Es el concepto fundamental de la subjetividad jurídica. Gracias a esta evolución semántica, el Derecho puede reconocer como "personas" no solo a los seres humanos (personas físicas), sino también a entidades abstractas como empresas u organizaciones (personas morales o jurídicas).</p>
          </div>
        </article>

        {/* Card 5: Testamentum */}
        <article className="card border-stone-300 bg-stone-50">
          <div className="p-6 border-b border-stone-300 flex justify-between items-start">
            <div>
              <h2 className="glossary-subtitle text-3xl font-black text-stone-800 tracking-wider">Testamentum</h2>
              <span className="latin-tag">Genitivo: Testamenti</span>
            </div>
            <div className="p-3 rounded-xl bg-stone-200 text-stone-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
            </div>
          </div>
          <div className="p-6 flex-grow">
            <div className="mb-4">
              <h3 className="text-xs font-bold uppercase text-amber-900/60 mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path></svg>
                Significado Original
              </h3>
              <p className="text-lg italic leading-snug">Esta palabra deriva de testari, que significa "ser testigo". El testamentum era el acto solemne mediante el cual una persona manifestaba su última voluntad ante testigos, asegurando la transmisión de su patrimonio y sus responsabilidades tras su muerte.</p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase text-amber-900/60 mb-2">Derivados en Español</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/60 border border-stone-300 rounded text-sm text-stone-900">Testamento</span>
                  <span className="px-2 py-1 bg-white/60 border border-stone-300 rounded text-sm text-stone-900">Testigo</span>
                  <span className="px-2 py-1 bg-white/60 border border-stone-300 rounded text-sm text-stone-900">Testimonio</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-black/5 border-t border-stone-300 text-sm">
            <h4 className="font-bold uppercase mb-1">Importancia Jurídica</h4>
            <p>Es la base del Derecho Sucesorio. El testamento garantiza la continuidad del patrimonio y la protección de la unidad familiar a través de las generaciones, siendo una de las manifestaciones más puras de la propiedad privada y la previsión humana.</p>
          </div>
        </article>
      </main>

      <footer className="max-w-6xl mx-auto mt-20 py-8 text-center text-amber-900/50 border-t border-amber-800/10 italic">
        <p>"Ius est ars boni et aequi" — El derecho es el arte de lo bueno y lo equitativo.</p>
      </footer>

    </div>
  );
};

export default LegalGlossary;
