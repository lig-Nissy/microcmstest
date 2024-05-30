import React, { useEffect } from 'react';

declare global {
  interface Window {
    PagefindUI: any;
  }
}

export default function SearchPage() {
  useEffect(() => {
    let pagefindInstance: any;

    async function loadPagefind() {
      if (
        typeof window !== 'undefined' &&
        typeof window.PagefindUI === 'undefined'
      ) {
        try {
          await import(
            // @ts-expect-error pagefind.js generated after build
            /* webpackIgnore: true */ '/pagefind/pagefind.js'
          );
        } catch (e) {
          //error handling
        }
      }

      if (typeof window.PagefindUI !== 'undefined') {
        pagefindInstance = new window.PagefindUI({
          element: '#search',
          showSubResults: true,
          baseUrl: '/',
          url: '/blog/article/',
        });
      }
    }

    loadPagefind();

    return () => {
      if (pagefindInstance) {
        pagefindInstance.destroy();
      }
    };
  }, []);

  return <div id="search"></div>;
}
