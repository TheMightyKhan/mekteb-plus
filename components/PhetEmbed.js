// MəktəbPlus - PhET İnteraktiv Simulyasiya Komponenti

import React, { useState, useRef } from 'react';

export const PhetEmbed = ({ simUrl, title, description }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        console.warn('Fullscreen error:', err);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const reloadIframe = () => {
    setIsLoading(true);
    const iframe = containerRef.current?.querySelector('iframe');
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  return React.createElement(
    'div',
    {
      ref: containerRef,
      className: 'bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg my-6 transition-all duration-300'
    },
    // Başlıq və Alətlər Paneli
    React.createElement(
      'div',
      {
        className: 'flex items-center justify-between px-5 py-3.5 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800'
      },
      React.createElement(
        'div',
        { className: 'flex items-center space-x-3' },
        React.createElement(
          'span',
          { className: 'flex h-3 w-3 relative' },
          React.createElement('span', { className: 'animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75' }),
          React.createElement('span', { className: 'relative inline-flex rounded-full h-3 w-3 bg-cyan-500' })
        ),
        React.createElement(
          'div',
          null,
          React.createElement('h4', { className: 'font-bold text-slate-800 dark:text-slate-100 text-sm' }, title || 'PhET İnteraktiv Laboratoriyası'),
          React.createElement('p', { className: 'text-xs text-slate-500 dark:text-slate-400' }, description || 'Laboratoriya təcrübəsini ekranda idarə edin')
        )
      ),
      React.createElement(
        'div',
        { className: 'flex items-center space-x-2' },
        React.createElement(
          'button',
          {
            onClick: reloadIframe,
            title: 'Simulyasiyanı yenilə',
            className: 'p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition'
          },
          React.createElement('i', { className: 'fas fa-rotate-right text-sm' })
        ),
        React.createElement(
          'button',
          {
            onClick: toggleFullscreen,
            title: 'Tam ekran',
            className: 'p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition'
          },
          React.createElement('i', { className: isFullscreen ? 'fas fa-compress text-sm' : 'fas fa-expand text-sm' })
        )
      )
    ),
    // Simulyasiya Çərçivəsi
    React.createElement(
      'div',
      { className: 'relative w-full aspect-video bg-slate-950 flex items-center justify-center' },
      isLoading && React.createElement(
        'div',
        { className: 'absolute inset-0 flex flex-col items-center justify-center bg-slate-900/90 z-10 text-white' },
        React.createElement('div', { className: 'animate-spin rounded-full h-10 w-10 border-4 border-cyan-500 border-t-transparent mb-3' }),
        React.createElement('p', { className: 'text-xs font-semibold text-cyan-400 tracking-wider uppercase' }, 'PhET Simulyasiyası Yüklənir...')
      ),
      React.createElement('iframe', {
        src: simUrl,
        title: title,
        onLoad: () => setIsLoading(false),
        allowFullScreen: true,
        className: 'w-full h-full border-0'
      })
    ),
    // Alt Bildiriş
    React.createElement(
      'div',
      { className: 'px-5 py-2.5 bg-slate-50 dark:bg-slate-900/50 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between' },
      React.createElement(
        'span',
        null,
        'Mənbə: University of Colorado Boulder (PhET İnteraktiv Simulyasiyaları)'
      ),
      React.createElement(
        'a',
        {
          href: simUrl,
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 font-medium'
        },
        React.createElement('span', null, 'Yeni pəncərədə aç'),
        React.createElement('i', { className: 'fas fa-external-link-alt text-[10px]' })
      )
    )
  );
};
