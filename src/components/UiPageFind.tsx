import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import styles from '@/styles/components/uiPagefind.module.scss';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const loadPagefind = async () => {
      if (typeof (window as any).pagefind === 'undefined') {
        try {
          (window as any).pagefind = await import(
            // @ts-expect-error pagefind.js generated after build
            /* webpackIgnore: true */ '/pagefind/pagefind.js'
          );
        } catch (e) {
          (window as any).pagefind = {
            search: () => ({ results: [] }),
          };
        }
      }
    };
    loadPagefind();
  }, []);

  async function handleSearch() {
    if ((window as any).pagefind) {
      const search = await (window as any).pagefind.search(
        query,
      );
      setResults(search.results);
    }
  }

  useEffect(() => {
    handleSearch();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.search}
      />
      <div id="results" className={styles.result}>
        {results.length > 0 && (
          <h2 className={styles.subHeading}>検索結果...</h2>
        )}
        {results.map((result: any) => (
          <Result key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}

function Result({ result }: { result: any }) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await result.data();
      setData(data);
    }
    fetchData();
  }, [result]);

  if (!data) return null;

  const parts = data.url.split('/');

  const articleId = parts[parts.length - 2];

  return (
    <div className={styles.container}>
      <Link href={data.url}>
        <h3>{articleId}</h3>
        <p
          dangerouslySetInnerHTML={{ __html: data.excerpt }}
        />
      </Link>
    </div>
  );
}
