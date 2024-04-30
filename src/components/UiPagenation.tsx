//React hooks
import { useState } from "react";

// ARTICL INDEX PAGE
import Link from "next/link";

//api types
import { Article } from "@/api/types";

//variables
import * as Variables from "@/variables";

const Pagenation = ({ article, page }: { article: Article; page: number }) => {
  //1ページあたりに描画する記事の個数の制限
  const { totalCount } = article;
  const itemsPerPage = Variables.PAGES_PAR_VIEW; //1ページあたりの表示数
  // const [pageNumber, setPageNumber] = useState(Math.ceil(totalCount / itemsPerPage));
  const pageNumber = Math.ceil(totalCount / itemsPerPage);
  const showPagenation = 5; //ページネーションの表示数
  const pages: number[] = []; //ページネーション生成用の配列
  let FirstLinkFlag: boolean = false; //FirstLink用のフラグ
  let LastLinkFlag: boolean = false; //LastLink用のフラグ

  //規定の数よりページが少ない場合
  if (showPagenation >= pageNumber) {
    if (page == 1) {
      // 1,2,3, ... >
      for (let i = 1; i <= pageNumber; i++) {
        pages.push(i);
      }
      FirstLinkFlag = false;
      LastLinkFlag = true;
    } else if (page < pageNumber) {
      // << < 1,2,3 > >>
      for (let i = 1; i <= pageNumber; i++) {
        pages.push(i);
      }
      FirstLinkFlag = true;
      LastLinkFlag = true;
    } else if (page == pageNumber) {
      // << < ... 9,10
      for (let i = 1; i <= pageNumber; i++) {
        pages.push(i);
      }
      FirstLinkFlag = true;
      LastLinkFlag = false;
    }
  }
  //規定の数よりページが多い場合
  //前2 後ろ2 ずつ押せるように生成
  else if (showPagenation < pageNumber) {
    if (page == 1) {
      // 1,2,3, ... >
      for (let i = 1; i <= showPagenation; i++) {
        pages.push(i);
      }
      FirstLinkFlag = false;
      LastLinkFlag = true;
    } else if (page < showPagenation - 1) {
      // << < 1,2,3 > >>
      for (let i = 1; i <= showPagenation; i++) {
        pages.push(i);
      }
      FirstLinkFlag = true;
      LastLinkFlag = true;
    } else if (page >= showPagenation - 1 && page <= pageNumber - showPagenation + 3) {
      //<< < ... 3,4,5 ... > >>
      for (let i = 0; i < showPagenation; i++) {
        pages.push(i + page - 2);
      }
      FirstLinkFlag = true;
      LastLinkFlag = true;
    } else if (page >= pageNumber - showPagenation + 3 && page < pageNumber) {
      // << < ... 8,9,10 > >>
      for (let i = pageNumber - showPagenation + 1; i <= pageNumber; i++) {
        pages.push(i);
      }
      FirstLinkFlag = true;
      LastLinkFlag = true;
    } else if (page == pageNumber) {
      // << < ... 9,10
      for (let i = page - showPagenation + 1; i <= pageNumber; i++) {
        pages.push(i);
      }
      FirstLinkFlag = true;
      LastLinkFlag = false;
    }
  }
  const baseLink = "/blog";
  const createPageUrl = (page: number) => (page === 1 ? `${baseLink}` : `${baseLink}/${page}/`);

  //最初のページに戻るリンク
  const FirstPageLink = () => {
    return (
      <Link href={createPageUrl(1)}>
        <p>&lt;&lt;</p>
      </Link>
    );
  };

  //最後のページにいくリンク
  const LastPageLink = () => {
    return (
      <Link href={createPageUrl(pageNumber)}>
        <p>&gt;&gt;</p>
      </Link>
    );
  };

  const GeneratePageLinks = () => {
    return (
      <>
        {FirstLinkFlag && FirstPageLink()}
        {pages.map((data, index) => (
          <Link
            href={createPageUrl(data)}
            key={index}
            className={`${page == data ? "bg-blue-500 text-white" : ""}
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
      {/* <p>
        ページ数
        <input
          type="number"
          value={pageNumber}
          onChange={(e) => {
            setPageNumber(e.target.value);
          }}
        />
      </p> */}
      <div className="flex justify-center items-center gap-2">{GeneratePageLinks()}</div>
    </div>
  );
};

export default Pagenation;
