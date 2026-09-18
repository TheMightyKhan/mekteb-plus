// MəktəbPlus - KaTeX Riyazi və Elmi Düstur Renderləyicisi

import React, { useEffect, useRef } from 'react';

/**
 * Mətndəki $...$ (inline) və $$...$$ (display) LaTeX bloklarını aşkar edir və KaTeX ilə render edir.
 */
export const KatexRenderer = ({ text = '', className = '', block = false }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (!window.katex) {
      containerRef.current.innerText = text;
      return;
    }

    if (block) {
      try {
        const cleanLatex = text.replace(/^\$\$/, '').replace(/\$\$$/, '').trim();
        window.katex.render(cleanLatex, containerRef.current, {
          displayMode: true,
          throwOnError: false
        });
        return;
      } catch (e) {
        console.warn('KaTeX render error:', e);
        containerRef.current.innerText = text;
        return;
      }
    }

    // Qarışıq mətn: mətni LaTeX hissələrinə və adi mətnə parçalayırıq
    // $$...$$ əvvəlcə, sonra $...$
    try {
      const parts = [];
      let remaining = text;

      // Regex for display math $$...$$ and inline math $...$
      // Qeyd: \$ qorunmalıdır
      const regex = /(\$\$[\s\S]+?\$\$|\$[^\$\n]+?\$)/g;
      let lastIndex = 0;
      let match;

      const tokens = [];
      while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
          tokens.push({ type: 'text', content: text.substring(lastIndex, match.index) });
        }
        const fullMatch = match[0];
        if (fullMatch.startsWith('$$')) {
          tokens.push({
            type: 'math-block',
            content: fullMatch.slice(2, -2).trim()
          });
        } else {
          tokens.push({
            type: 'math-inline',
            content: fullMatch.slice(1, -1).trim()
          });
        }
        lastIndex = regex.lastIndex;
      }

      if (lastIndex < text.length) {
        tokens.push({ type: 'text', content: text.substring(lastIndex) });
      }

      containerRef.current.innerHTML = '';

      tokens.forEach(tok => {
        if (tok.type === 'text') {
          const span = document.createElement('span');
          span.innerText = tok.content;
          containerRef.current.appendChild(span);
        } else if (tok.type === 'math-inline') {
          const span = document.createElement('span');
          span.className = 'katex-inline-formula mx-0.5';
          try {
            window.katex.render(tok.content, span, { displayMode: false, throwOnError: false });
          } catch (err) {
            span.innerText = '$' + tok.content + '$';
          }
          containerRef.current.appendChild(span);
        } else if (tok.type === 'math-block') {
          const div = document.createElement('div');
          div.className = 'katex-block-formula my-3 overflow-x-auto py-1 text-center';
          try {
            window.katex.render(tok.content, div, { displayMode: true, throwOnError: false });
          } catch (err) {
            div.innerText = '$$' + tok.content + '$$';
          }
          containerRef.current.appendChild(div);
        }
      });
    } catch (err) {
      console.error('KaTeX parse error:', err);
      containerRef.current.innerText = text;
    }
  }, [text, block]);

  return React.createElement('span', {
    ref: containerRef,
    className: `katex-container ${className}`
  });
};
