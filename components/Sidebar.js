// MəktəbPlus - Mobil Yan Menyu (Drawer)

import React from 'react';

export const Sidebar = ({
  isOpen,
  onClose,
  activeTab,
  setActiveTab,
  userStats,
  onOpenTools
}) => {
  if (!isOpen) return null;

  const menuItems = [
    { id: 'dashboard', label: 'Ana Səhifə', icon: 'fa-house', desc: 'Fənlər və son xülasələr' },
    { id: 'lessons', label: 'Dərslər və Nəzəriyyə', icon: 'fa-book-open-reader', desc: 'KaTeX & PhET interaktiv dərsləri' },
    { id: 'tools', label: 'Alətlər & Laboratoriya', icon: 'fa-toolbox', desc: 'Calculus, Törəmə və PhET simulyatorları', badge: 'Sağ Panel' },
    { id: 'exams', label: 'BSQ / KSQ Arxiv', icon: 'fa-file-lines', desc: 'İnteraktiv test və rəsmi çap vərəqi' },
    { id: 'pvp', label: '1v1 Viktorina Arenası', icon: 'fa-gamepad', desc: 'Dostla oyna & sürətli matç', badge: 'Canlı' },
    { id: 'admin', label: 'İdarəetmə & Skan Paneli', icon: 'fa-database', desc: 'Yeni sual və JSON idarəetməsi' }
  ];

  const handleItemClick = (id) => {
    if (id === 'tools') {
      onClose();
      if (onOpenTools) onOpenTools();
    } else {
      setActiveTab(id);
      onClose();
    }
  };

  return React.createElement(
    'div',
    { className: 'fixed inset-0 z-50 lg:hidden no-print' },
    // Overlay backdrop
    React.createElement('div', {
      className: 'fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity',
      onClick: onClose
    }),
    // Drawer panel
    React.createElement(
      'div',
      {
        className: 'fixed inset-y-0 left-0 max-w-xs w-full bg-white dark:bg-slate-900 shadow-2xl p-6 flex flex-col justify-between z-10 transition-transform'
      },
      React.createElement(
        'div',
        null,
        // Header
        React.createElement(
          'div',
          { className: 'flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800' },
          React.createElement(
            'div',
            { className: 'flex items-center space-x-3' },
            React.createElement(
              'div',
              { className: 'w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold' },
              React.createElement('i', { className: 'fas fa-graduation-cap' })
            ),
            React.createElement(
              'div',
              null,
              React.createElement('span', { className: 'font-black text-lg text-slate-800 dark:text-slate-100' }, 'MəktəbPlus'),
              React.createElement('p', { className: 'text-[10px] text-slate-400' }, 'Milli Təhsil Platforması')
            )
          ),
          React.createElement(
            'button',
            {
              onClick: onClose,
              className: 'p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
            },
            React.createElement('i', { className: 'fas fa-times text-lg' })
          )
        ),
        // Menu list
        React.createElement(
          'nav',
          { className: 'mt-6 space-y-1.5' },
          menuItems.map(item => {
            const isActive = activeTab === item.id;
            return React.createElement(
              'button',
              {
                key: item.id,
                onClick: () => handleItemClick(item.id),
                className: `w-full px-4 py-3 rounded-2xl flex items-center justify-between text-left transition-all ${
                  isActive
                    ? 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`
              },
              React.createElement(
                'div',
                { className: 'flex items-center space-x-3' },
                React.createElement('i', { className: `fas ${item.icon} text-base ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}` }),
                React.createElement(
                  'div',
                  null,
                  React.createElement('div', { className: 'text-xs font-bold' }, item.label),
                  React.createElement('div', { className: 'text-[10px] text-slate-400' }, item.desc)
                )
              ),
              item.badge && React.createElement(
                'span',
                { className: 'text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-rose-500 text-white' },
                item.badge
              )
            );
          })
        )
      ),

      // Footer User stats
      React.createElement(
        'div',
        { className: 'pt-6 border-t border-slate-200 dark:border-slate-800' },
        React.createElement(
          'div',
          { className: 'p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 flex items-center space-x-3' },
          React.createElement('div', { className: 'w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-xl' }, '🧑‍🎓'),
          React.createElement(
            'div',
            { className: 'flex-1 min-w-0' },
            React.createElement('p', { className: 'text-xs font-bold text-slate-800 dark:text-slate-200 truncate' }, userStats?.name || 'Məktəbli'),
            React.createElement('p', { className: 'text-[10px] text-amber-600 dark:text-amber-400 font-semibold' }, `${userStats?.pvpScore || 1420} XP • 10-cu sinif`)
          )
        )
      )
    )
  );
};
