// ARTICL INDEX PAGE
import Link from 'next/link';

//api types
import { Article } from '@/api/types';

//variables
import * as Variables from '@/variables';

const Pagenation = ({
  article,
  page,
}: {
  article: Article;
  page: number;
}) => {
  //1ページあたりに描画する記事の個数の制限
  const { totalCount } = article;
  const itemsPerPage = Variables.PAGES_PAR_VIEW; //1ページあたりの表示数
  const pageNumber = Math.ceil(totalCount / itemsPerPage);
  const currentlyPage = page; //現在のページ
  const showPagenation = 4; //ページネーションの表示数
  const pages: number[] = []; //ページネーション生成用の配列

  let FirstLinkFlag: boolean = false; //FirstLink用のフラグ
  let NextLinkFlag: boolean = false; //NextLink用のフラグ
  let BackLinkFlag: boolean = false; //backLink用のフラグ
  let LastLinkFlag: boolean = false; //LastLink用のフラグ

  //規定の数よりページが少ない場合
  if (showPagenation >= pageNumber) {
    //1ページ目の時
    if (currentlyPage == 1) {
      for (let i = 1; i <= pageNumber; i++) {
        pages.push(i);
      }
      FirstLinkFlag = false;
      BackLinkFlag = false;
      LastLinkFlag = false;
      if (pageNumber == 1) {
        NextLinkFlag = false;
      } else {
        NextLinkFlag = true;
      }
    } //2ページ目の時
    else if (currentlyPage == 2) {
      for (let i = 1; i <= pageNumber; i++) {
        pages.push(i);
      }
      if (pageNumber == 2) {
        FirstLinkFlag = false;
        BackLinkFlag = true;
        NextLinkFlag = false;
        LastLinkFlag = false;
      } else {
        FirstLinkFlag = false;
        BackLinkFlag = true;
        NextLinkFlag = true;
        LastLinkFlag = false;
      }
    } //3ページ目以降の時
    else if (currentlyPage < pageNumber) {
      for (let i = 1; i <= pageNumber; i++) {
        pages.push(i);
      }
      BackLinkFlag = true;
      NextLinkFlag = true;
    } //最後のページの時
    else if (currentlyPage == pageNumber) {
      for (let i = 1; i <= pageNumber; i++) {
        pages.push(i);
      }
      FirstLinkFlag = false;
      BackLinkFlag = true;
      NextLinkFlag = false;
      LastLinkFlag = false;
    }
  }
  //規定の数よりページが多い場合
  else if (showPagenation < pageNumber) {
    // 1ページ目の時
    if (currentlyPage == 1) {
      for (let i = 1; i <= showPagenation; i++) {
        pages.push(i);
      }
      FirstLinkFlag = false;
      BackLinkFlag = false;
      NextLinkFlag = true;
      LastLinkFlag = true;
    }
    // 2ページ目の時
    else if (currentlyPage == 2) {
      for (let i = 1; i <= showPagenation + 1; i++) {
        pages.push(i);
      }
      FirstLinkFlag = true;
      BackLinkFlag = true;
      NextLinkFlag = true;
      LastLinkFlag = true;
    }
    // 3ページ目の時
    else if (currentlyPage < showPagenation) {
      if (pageNumber <= showPagenation + 2) {
        for (let i = 1; i <= pageNumber; i++) {
          pages.push(i);
        }
      } else {
        for (let i = 1; i <= showPagenation + 2; i++) {
          pages.push(i);
        }
      }
      FirstLinkFlag = true;
      BackLinkFlag = true;
      NextLinkFlag = true;
      LastLinkFlag = true;
    }
    //4ページ目から最後のページの4ページ前まで
    else if (
      currentlyPage >= showPagenation &&
      currentlyPage <= pageNumber - showPagenation + 1
    ) {
      for (let i = 0; i < showPagenation + 3; i++) {
        pages.push(i + currentlyPage - 3);
      }
      FirstLinkFlag = true;
      BackLinkFlag = true;
      NextLinkFlag = true;
      LastLinkFlag = true;
    }
    //最後のページの4ページ前から最後のページの4ページ前まで
    else if (
      currentlyPage > pageNumber - showPagenation &&
      currentlyPage < pageNumber - showPagenation
    ) {
      for (
        let i = pageNumber - showPagenation + 1;
        i <= pageNumber;
        i++
      ) {
        pages.push(i);
      }
      FirstLinkFlag = true;
      BackLinkFlag = true;
      NextLinkFlag = true;
      LastLinkFlag = true;
    }
    //最後のページの2ページ前の時
    else if (
      currentlyPage ==
      pageNumber - showPagenation + 2
    ) {
      for (
        let i = pageNumber - showPagenation - 1;
        i <= pageNumber;
        i++
      ) {
        pages.push(i);
      }
      FirstLinkFlag = true;
      BackLinkFlag = true;
      NextLinkFlag = true;
      LastLinkFlag = true;
    }
    //最後のページの1ページ前の時
    else if (
      currentlyPage ==
      pageNumber - showPagenation + 3
    ) {
      for (
        let i = pageNumber - showPagenation;
        i <= pageNumber;
        i++
      ) {
        pages.push(i);
      }
      FirstLinkFlag = true;
      BackLinkFlag = true;
      NextLinkFlag = true;
      LastLinkFlag = true;
    }
    //最後のページの時
    else if (currentlyPage == pageNumber) {
      for (
        let i = currentlyPage - showPagenation + 1;
        i <= pageNumber;
        i++
      ) {
        pages.push(i);
      }
      FirstLinkFlag = true;
      BackLinkFlag = true;
      NextLinkFlag = false;
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
          className="flex size-8 items-center justify-center rounded-full border border-black"
        >
          <p>&lt;&lt;</p>
        </Link>
      </>
    );
  };

  const BackLink = (link: number) => {
    return (
      <>
        <Link
          href={createPageUrl(link)}
          className="flex size-8 items-center justify-center rounded-full border border-black"
        >
          <p>&lt;</p>
        </Link>
        {showPagenation + 1 <= link + 1 && <span>...</span>}
      </>
    );
  };

  //次のページにいくリンク
  const NextLink = (link: number) => {
    return (
      <>
        {pageNumber - showPagenation >= currentlyPage && (
          <span>...</span>
        )}
        <Link
          href={createPageUrl(link)}
          className="flex size-8 items-center justify-center rounded-full border border-black"
        >
          <p>&gt;</p>
        </Link>
      </>
    );
  };

  //最後のページにいくリンク
  const LastPageLink = () => {
    return (
      <>
        <Link
          href={createPageUrl(pageNumber)}
          className="flex size-8 items-center justify-center rounded-full border border-black"
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
        {BackLinkFlag && BackLink(currentlyPage - 1)}
        {pages.map((data, index) => (
          <Link
            href={createPageUrl(data)}
            key={index}
            className={`${currentlyPage == data ? 'text-black' : 'rounded-full border border-black text-blue-700'}
            flex size-8 items-center justify-center`}
          >
            {currentlyPage == data ? (
              <p>
                {data}/{pageNumber}
              </p>
            ) : (
              <p>{data}</p>
            )}
          </Link>
        ))}
        {NextLinkFlag && NextLink(currentlyPage + 1)}
        {LastLinkFlag && LastPageLink()}
      </>
    );
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-2">
        {GeneratePageLinks()}
      </div>
    </div>
  );
};

export default Pagenation;
