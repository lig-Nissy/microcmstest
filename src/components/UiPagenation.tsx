// ARTICL INDEX PAGE
import Link from "next/link";

//api types
import { Article } from "@/api/types";

const Pagenation = ({ article, page }: { article: Article; page: number }) => {
  //1ページあたりに描画する記事の個数の制限
  const { totalCount } = article;
  const pageNumber = Math.ceil(totalCount / 5);
  const pages: number[] = [];
  for (let i = 1; i <= pageNumber; i++) {
    if (page == 1) {
      // 1,2,3, ... >
      pages.push(i);
    } else if (page < 5) {
      // << < 1,2,3 > >>
      pages.push(i);
    } else if (page > 5 && page < pageNumber - 5) {
      //<< < ... 3,4,5 ... > >>
      pages.push(i);
    } else if (page >= pageNumber - 5) {
      // << < ... 8,9,10 > >>
      pages.push(i);
    } else if (page == pageNumber) {
      // << < ... 9,10
      pages.push(i);
    }
  }
  const baseLink = "/blog";
  const createPageUrl = (page: number) =>
    page === 1 ? `${baseLink}` : `${baseLink}/${page}/`;

  const GeneratePagenation = () => {
    return (
      <>
        {pages.map((data, index) => (
          <Link
            href={createPageUrl(data)}
            key={index}
            className={page == data ? "bg-blue-500" : ""}
          >
            <p>{data}</p>
          </Link>
        ))}
      </>
    );
  };

  return (
    <div>
      <div className="flex">{GeneratePagenation()}</div>
    </div>
  );
};

export default Pagenation;
