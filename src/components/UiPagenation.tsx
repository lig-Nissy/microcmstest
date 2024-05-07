//React hooks
import { useState } from 'react';

// ARTICL INDEX PAGE
import Link from 'next/link';

//api types
import { Article } from '@/api/types';

//variables
import * as Variables from '@/variables';

const Pagenation = ({ article, page }: { article: Article; page: number }) => {
  //1ページあたりに描画する記事の個数の制限
  // const { totalCount } = article;
  const [totalCount, setTotalCount] = useState(article.totalCount);

  // const itemsPerPage = Variables.PAGES_PAR_VIEW; //1ページあたりの表示数
  const [itemsPerPage, setItemsPerpage] = useState(Variables.PAGES_PAR_VIEW); //1ページあたりの表示数

  const pageNumber = Math.ceil(totalCount / itemsPerPage);
  // const currentlyPage = page; //現在のページ
  // const [pageNumber, setPageNumber] = useState(Math.ceil(totalCount / itemsPerPage));

  const [currentlyPage, setCurrentlyPage] = useState(page);
  const showPagenation = 5; //ページネーションの表示数
  const pages: number[] = []; //ページネーション生成用の配列
  let FirstLinkFlag: boolean = false; //FirstLink用のフラグ
  let LastLinkFlag: boolean = false; //LastLink用のフラグ

  //規定の数よりページが少ない場合
  if (showPagenation >= pageNumber) {
    if (currentlyPage == 1) {
      // 1,2,3, ... >
      for (let i = 1; i <= pageNumber; i++) {
        pages.push(i);
      }
      FirstLinkFlag = false;
      if (pageNumber == 1) {
        LastLinkFlag = false;
      } else {
        LastLinkFlag = true;
      }
    } else if (currentlyPage < pageNumber) {
      // << < 1,2,3 > >>
      for (let i = 1; i <= pageNumber; i++) {
        pages.push(i);
      }
      FirstLinkFlag = true;
      LastLinkFlag = true;
    } else if (currentlyPage == pageNumber) {
      // << < ... 9,10
      for (let i = 1; i <= pageNumber; i++) {
        pages.push(i);
      }
      FirstLinkFlag = true;
      LastLinkFlag = false;
    }
  }
  //規定の数よりページが多い場合
  //前2 後2 ずつ押せるように生成
  else if (showPagenation < pageNumber) {
    if (currentlyPage == 1) {
      // 1,2,3, ... >
      for (let i = 1; i <= showPagenation; i++) {
        pages.push(i);
      }
      FirstLinkFlag = false;
      LastLinkFlag = true;
    } else if (currentlyPage < showPagenation - 1) {
      // << < 1,2,3 > >>
      for (let i = 1; i <= showPagenation; i++) {
        pages.push(i);
      }
      FirstLinkFlag = true;
      LastLinkFlag = true;
    } else if (
      currentlyPage >= showPagenation - 1 &&
      currentlyPage <= pageNumber - showPagenation + 3
    ) {
      //<< < ... 3,4,5 ... > >>
      for (let i = 0; i < showPagenation; i++) {
        pages.push(i + currentlyPage - 2);
      }
      FirstLinkFlag = true;
      LastLinkFlag = true;
    } else if (
      currentlyPage >= pageNumber - showPagenation + 3 &&
      currentlyPage < pageNumber
    ) {
      // << < ... 8,9,10 > >>
      for (let i = pageNumber - showPagenation + 1; i <= pageNumber; i++) {
        pages.push(i);
      }
      FirstLinkFlag = true;
      LastLinkFlag = true;
    } else if (currentlyPage == pageNumber) {
      // << < ... 9,10
      for (let i = currentlyPage - showPagenation + 1; i <= pageNumber; i++) {
        pages.push(i);
      }
      FirstLinkFlag = true;
      LastLinkFlag = false;
    }
  }

  //ぺージネーションのベースリンク
  const baseLink = '/blog';
  const createPageUrl = (page: number) =>
    page === 1 ? `${baseLink}` : `${baseLink}/${page}/`;

  //最初のページに戻るリンク
  const FirstPageLink = () => {
    return (
      <>
        <Link
          href={createPageUrl(1)}
          className="flex justify-center items-center w-8 h-8 border border-black rounded-full"
        >
          <p>&lt;&lt;</p>
        </Link>
        <span>...</span>
      </>
    );
  };

  //最後のページにいくリンク
  const LastPageLink = () => {
    return (
      <>
        <span>...</span>
        <Link
          href={createPageUrl(pageNumber)}
          className="flex justify-center items-center w-8 h-8 border border-black rounded-full"
        >
          <p>&gt;&gt;</p>
        </Link>
      </>
    );
  };

  ///リンクの生成
  const GeneratePageLinks = () => {
    return (
      <>
        {FirstLinkFlag && FirstPageLink()}
        {pages.map((data, index) => (
          <Link
            href={createPageUrl(data)}
            key={index}
            className={`${currentlyPage == data ? 'bg-blue-500 text-white' : ''}
            flex justify-center items-center w-8 h-8 border border-black rounded-full`}
          >
            <p>{data}</p>
          </Link>
        ))}
        {LastLinkFlag && LastPageLink()}
      </>
    );
  };

  return (
    <div>
      <h2 className="mt-4">固定値</h2>
      <p className="mt-4 ml-4">
        記事数：
        <input
          type="number"
          value={totalCount}
          name="totalCount"
          aria-label="記事数を入力してください"
          className="ml-2 border border-black"
          onChange={(e) => {
            setTotalCount(Number(e.target.value));
          }}
        />
      </p>
      <p className="mt-2 ml-4">
        現在のページ：
        <input
          type="number"
          value={currentlyPage}
          name="currentlyPage"
          aria-label="現在のページを入力してください"
          className="ml-2 border border-black"
          onChange={(e) => {
            setCurrentlyPage(Number(e.target.value));
          }}
        />
      </p>
      <h2 className="mt-4">可変値</h2>
      <p className="my-4 ml-4">
        1ページあたりの記事の個数：
        <input
          type="number"
          value={itemsPerPage}
          name="itemsPerPage"
          aria-label="1ページあたりの記事の個数を入力してください"
          className="ml-2 border border-black"
          onChange={(e) => {
            setItemsPerpage(Number(e.target.value));
          }}
        />
      </p>
      <div className="flex justify-center items-center gap-2">
        {GeneratePageLinks()}
      </div>
    </div>
  );
};

export default Pagenation;
