// MəktəbPlus - Sağdan Sürüşərək Açılan İnteraktiv Alətlər və Laboratoriya Paneli (Tools Slide-Over Drawer)

import React, { useState } from 'react';
import { PhetEmbed } from './PhetEmbed.js';
import { KatexRenderer } from './KatexRenderer.js';

export const ToolsDrawer = ({ isOpen, onClose }) => {
  const [activeTool, setActiveTool] = useState('calculus'); // 'calculus', 'derivative_calc', 'physics_sim', 'geometry'

  // Törəmə və Funksiya Kalkulyatoru vəziyyəti
  const [polyA, setPolyA] = useState(2);
  const [polyB, setPolyB] = useState(-4);
  const [polyC, setPolyC] = useState(1);
  const [evalX, setEvalX] = useState(2);

  // Həndəsə Kalkulyatoru vəziyyəti (Düzbucaqlı üçbucaq)
  const [geomA, setGeomA] = useState(6);
  const [geomB, setGeomB] = useState(8);

  // Hesablamalar: f(x) = ax^2 + bx + c
  // f'(x) = 2ax + b
  const derivativeSlope = 2 * polyA * evalX + polyB;
  const funcValue = polyA * Math.pow(evalX, 2) + polyB * evalX + polyC;

  // Həndəsə: c = sqrt(a^2 + b^2)
  const geomC = Math.sqrt(Math.pow(geomA, 2) + Math.pow(geomB, 2));
  const geomArea = (geomA * geomB) / 2;
  const geomR = geomC / 2;
  const geomSmallR = (geomA + geomB - geomC) / 2;

  const toolsList = [
    { id: 'calculus', title: 'Calculus Grapher', icon: 'fa-chart-line', badge: 'PhET' },
    { id: 'derivative_calc', title: 'Törəmə Kalkulyatoru', icon: 'fa-square-root-variable', badge: 'Hesablayıcı' },
    { id: 'physics_sim', title: 'Fizika Qüvvə & Hərəkət', icon: 'fa-atom', badge: 'PhET' },
    { id: 'geometry', title: 'Həndəsə & Pifaqor', icon: 'fa-shapes', badge: 'Həndəsə' }
  ];

  return React.createElement(
    'div',
    {
      className: `fixed inset-0 z-50 overflow-hidden transition-all duration-300 no-print ${
        isOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible'
      }`
    },
    // Tünd fon overlay (klikləyəndə bağlanır)
    React.createElement('div', {
      className: `fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`,
      onClick: onClose
    }),

    // Sağ tərəfdən sürüşərək gələn panel
    React.createElement(
      'div',
      {
        className: `fixed inset-y-0 right-0 max-w-2xl w-full bg-white dark:bg-slate-900 shadow-2xl border-l border-slate-200/80 dark:border-slate-800 flex flex-col transform transition-transform duration-300 ease-out z-10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`
      },
      
      // Panel Başlığı (Header)
      React.createElement(
        'div',
        { className: 'p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-800/60' },
        React.createElement(
          'div',
          { className: 'flex items-center space-x-3' },
          React.createElement(
            'div',
            { className: 'w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-md' },
            React.createElement('i', { className: 'fas fa-toolbox text-base' })
          ),
          React.createElement(
            'div',
            null,
            React.createElement('h3', { className: 'font-black text-base text-slate-800 dark:text-slate-100' }, 'İnteraktiv Alətlər və Laboratoriya'),
            React.createElement('p', { className: 'text-[11px] text-slate-400' }, 'Dərs və imtahan zamanı istifadə edilə bilən köməkçi panel')
          )
        ),
        React.createElement(
          'button',
          {
            onClick: onClose,
            className: 'w-9 h-9 rounded-xl bg-slate-200/70 dark:bg-slate-700/70 hover:bg-rose-500 hover:text-white text-slate-600 dark:text-slate-300 transition flex items-center justify-center text-sm font-bold'
          },
          '✕'
        )
      ),

      // Alət Seçim Düymələri (Tabs)
      React.createElement(
        'div',
        { className: 'p-3 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-2' },
        toolsList.map(t => {
          const isActive = activeTool === t.id;
          return React.createElement(
            'button',
            {
              key: t.id,
              onClick: () => setActiveTool(t.id),
              className: `px-3 py-2 rounded-xl text-left transition flex items-center space-x-2 text-xs font-bold ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`
            },
            React.createElement('i', { className: `fas ${t.icon} text-xs ${isActive ? 'text-white' : 'text-indigo-500'}` }),
            React.createElement('span', { className: 'truncate' }, t.title)
          );
        })
      ),

      // Sürüşən Məzmun Sahəsi (Scrollable Body)
      React.createElement(
        'div',
        { className: 'flex-1 overflow-y-auto p-5 sm:p-6 space-y-6' },
        
        // 1. PHET CALCULUS GRAPHER
        activeTool === 'calculus' && React.createElement(
          'div',
          { className: 'space-y-4 animate-fadeIn' },
          React.createElement(
            'div',
            { className: 'p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/60' },
            React.createElement('h4', { className: 'text-xs font-bold text-indigo-700 dark:text-indigo-300' }, 'PhET Calculus Grapher (Funksiya və Törəmə)'),
            React.createElement('p', { className: 'text-[11px] text-slate-600 dark:text-slate-400 mt-0.5' },
              'Ekranda əyri çəkərək onun törəmə mailliyini ($f\'(x)$) və inteqral sahəsini real vaxtda vizual öyrənin.'
            )
          ),
          React.createElement(PhetEmbed, {
            simUrl: 'https://phet.colorado.edu/sims/html/calculus-grapher/latest/calculus-grapher_all.html',
            title: 'PhET Calculus Grapher',
            description: 'Canlı funksiya və törəmə qrafiki'
          })
        ),

        // 2. TÖRƏMƏ VƏ TOXUNAN KALKULYATORU
        activeTool === 'derivative_calc' && React.createElement(
          'div',
          { className: 'space-y-5 animate-fadeIn' },
          React.createElement(
            'div',
            { className: 'p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-4' },
            React.createElement('h4', { className: 'text-xs font-black text-slate-800 dark:text-slate-200 uppercase' }, 'f(x) = ax² + bx + c Parametrləri'),
            React.createElement(
              'div',
              { className: 'grid grid-cols-3 gap-3' },
              React.createElement(
                'div',
                null,
                React.createElement('label', { className: 'block text-[10px] font-bold text-slate-400 mb-1' }, 'a əmsalı:'),
                React.createElement('input', {
                  type: 'number',
                  value: polyA,
                  onChange: e => setPolyA(Number(e.target.value) || 0),
                  className: 'w-full p-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-bold'
                })
              ),
              React.createElement(
                'div',
                null,
                React.createElement('label', { className: 'block text-[10px] font-bold text-slate-400 mb-1' }, 'b əmsalı:'),
                React.createElement('input', {
                  type: 'number',
                  value: polyB,
                  onChange: e => setPolyB(Number(e.target.value) || 0),
                  className: 'w-full p-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-bold'
                })
              ),
              React.createElement(
                'div',
                null,
                React.createElement('label', { className: 'block text-[10px] font-bold text-slate-400 mb-1' }, 'c sərbəst həd:'),
                React.createElement('input', {
                  type: 'number',
                  value: polyC,
                  onChange: e => setPolyC(Number(e.target.value) || 0),
                  className: 'w-full p-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-bold'
                })
              )
            ),
            React.createElement(
              'div',
              null,
              React.createElement('label', { className: 'block text-[10px] font-bold text-slate-400 mb-1' }, 'Toxunma nöqtəsi (x₀):'),
              React.createElement('input', {
                type: 'number',
                value: evalX,
                onChange: e => setEvalX(Number(e.target.value) || 0),
                className: 'w-full p-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-bold'
              })
            )
          ),

          // Nəticə Paneli
          React.createElement(
            'div',
            { className: 'p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900 space-y-3' },
            React.createElement('div', { className: 'text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide' }, 'Canlı Hesablama Nəticəsi:'),
            React.createElement(KatexRenderer, { text: `$$f(x) = ${polyA}x^2 + (${polyB})x + (${polyC})$$`, block: true }),
            React.createElement(KatexRenderer, { text: `$$f'(x) = ${2 * polyA}x + (${polyB})$$`, block: true }),
            React.createElement(
              'div',
              { className: 'grid grid-cols-2 gap-3 pt-2' },
              React.createElement(
                'div',
                { className: 'p-3 rounded-xl bg-white dark:bg-slate-900 text-center' },
                React.createElement('div', { className: 'text-[10px] text-slate-400 font-bold' }, 'f(x₀) Qiyməti'),
                React.createElement('div', { className: 'text-xl font-black text-indigo-600 dark:text-indigo-400' }, funcValue)
              ),
              React.createElement(
                'div',
                { className: 'p-3 rounded-xl bg-white dark:bg-slate-900 text-center' },
                React.createElement('div', { className: 'text-[10px] text-slate-400 font-bold' }, 'Bucaq Əmsalı (k)'),
                React.createElement('div', { className: 'text-xl font-black text-cyan-600 dark:text-cyan-400' }, derivativeSlope)
              )
            ),
            React.createElement(
              'div',
              { className: 'p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 text-xs font-bold text-center' },
              React.createElement(KatexRenderer, { text: `Toxunan: y - (${funcValue}) = ${derivativeSlope}(x - ${evalX})` })
            )
          )
        ),

        // 3. PHET FİZİKA QÜVVƏ VƏ HƏRƏKƏT
        activeTool === 'physics_sim' && React.createElement(
          'div',
          { className: 'space-y-4 animate-fadeIn' },
          React.createElement(
            'div',
            { className: 'p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900' },
            React.createElement('h4', { className: 'text-xs font-bold text-emerald-700 dark:text-emerald-300' }, 'PhET: Forces and Motion (Nyuton Qanunları)'),
            React.createElement('p', { className: 'text-[11px] text-slate-600 dark:text-slate-400 mt-0.5' },
              'Kütlə və qüvvə parametrlərini idarə edərək təcillənmə prosesini müşahidə edin.'
            )
          ),
          React.createElement(PhetEmbed, {
            simUrl: 'https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_all.html',
            title: 'PhET Qüvvə və Hərəkət Simulyatoru',
            description: 'Canlı fizika laboratoriyası'
          })
        ),

        // 4. HƏNDƏSƏ VƏ PİFAQOR
        activeTool === 'geometry' && React.createElement(
          'div',
          { className: 'space-y-5 animate-fadeIn' },
          React.createElement(
            'div',
            { className: 'p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3' },
            React.createElement('h4', { className: 'text-xs font-black text-slate-800 dark:text-slate-200 uppercase' }, 'Düzbucaqlı Üçbucaq Katetləri'),
            React.createElement(
              'div',
              { className: 'grid grid-cols-2 gap-3' },
              React.createElement(
                'div',
                null,
                React.createElement('label', { className: 'block text-[10px] font-bold text-slate-400 mb-1' }, 'Katet a:'),
                React.createElement('input', {
                  type: 'number',
                  value: geomA,
                  onChange: e => setGeomA(Math.max(1, Number(e.target.value) || 1)),
                  className: 'w-full p-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-bold'
                })
              ),
              React.createElement(
                'div',
                null,
                React.createElement('label', { className: 'block text-[10px] font-bold text-slate-400 mb-1' }, 'Katet b:'),
                React.createElement('input', {
                  type: 'number',
                  value: geomB,
                  onChange: e => setGeomB(Math.max(1, Number(e.target.value) || 1)),
                  className: 'w-full p-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-bold'
                })
              )
            )
          ),

          React.createElement(
            'div',
            { className: 'grid grid-cols-2 gap-3' },
            React.createElement(
              'div',
              { className: 'p-3.5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900' },
              React.createElement('div', { className: 'text-[10px] text-slate-400 font-bold' }, 'Hipotenuz (c)'),
              React.createElement('div', { className: 'text-xl font-black text-indigo-600 dark:text-indigo-400 mt-1' }, geomC.toFixed(2))
            ),
            React.createElement(
              'div',
              { className: 'p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900' },
              React.createElement('div', { className: 'text-[10px] text-slate-400 font-bold' }, 'Sahə (S)'),
              React.createElement('div', { className: 'text-xl font-black text-emerald-600 dark:text-emerald-400 mt-1' }, geomArea.toFixed(2))
            ),
            React.createElement(
              'div',
              { className: 'p-3.5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900' },
              React.createElement('div', { className: 'text-[10px] text-slate-400 font-bold' }, 'Xarici Radius (R)'),
              React.createElement('div', { className: 'text-xl font-black text-amber-600 dark:text-amber-400 mt-1' }, geomR.toFixed(2))
            ),
            React.createElement(
              'div',
              { className: 'p-3.5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900' },
              React.createElement('div', { className: 'text-[10px] text-slate-400 font-bold' }, 'Daxili Radius (r)'),
              React.createElement('div', { className: 'text-xl font-black text-rose-600 dark:text-rose-400 mt-1' }, geomSmallR.toFixed(2))
            )
          )
        )
      )
    )
  );
};
