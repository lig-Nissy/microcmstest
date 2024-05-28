import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function SearchPage() {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState<any[]>([]);

  async function loadPagefind() {
    if (typeof (window as any).pagefind === 'undefined') {
      try {
        // pagefindの読み出しを行う
        const pf = await import(
          // @ts-expect-error pagefind.js generated after build
          /* webpackIgnore: true */ '/pagefind/pagefind.js'
        );
        (window as any).pagefind = pf;
        (window as any).pagefind.setOptions({
          language: 'ja', // 検索エンジンの言語設定
          searchIn: ['title', 'content', 'url'], // 検索対象の要素
          // その他の設定...
        });
        // pagefindの初期化
        (window as any).pagefind.init();
      } catch (e) {
        // todo: エラー処理
      }
    }
  }

  useEffect(() => {
    loadPagefind();
  }, []);

  async function searchQuery() {
    if ((window as any).pagefind) {
      try {
        const search = await (
          window as any
        ).pagefind.search(query);
        setResults(search.results);
      } catch (e) {
        //Error handling
      }
    }
  }

  return (
    <div>
      <input
        className="border-b border-black h-12 w-full my-3"
        type="text"
        placeholder="検索ワード入れる..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onInput={searchQuery}
      />
      <div id="results">
        {results.map((result) => (
          <ResultItem key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}

const ResultItem = ({ result }: { result: any }) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      const data = await result.data();
      setData(data);
    }
    fetchData();
  }, [result]);

  const getPathWithoutExtension = (
    path: string,
  ): string => {
    return path
      .replace(/\.[^/.]+$/, '')
      .replace(/^\/server\/pages\//, '');
  };

  return data ? (
    <div>
      <p>
        <Link href={getPathWithoutExtension(data.url)}>
          {data.meta.title}
        </Link>
      </p>
    </div>
  ) : null;
};
