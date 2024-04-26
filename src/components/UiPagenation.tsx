// ARTICL INDEX PAGE
import Link from "next/link";

//api types
import { Article } from "@/api/types";

const Pagenation = ({ article }: { article: Article }) => {
  //1ページあたりに描画する記事の個数の制限
  const { totalCount } = article;
  const pageNumber = Math.ceil(totalCount / 5);
  const pages: number[] = [];
  for (let i = 1; i <= pageNumber; i++) {
    pages.push(i);
  }
  const baseLink = "/blog";
  const createPageUrl = (page: number) =>
    page === 1 ? `${baseLink}` : `${baseLink}/${page}/`;

  const GeneratePagenation = () => {
    return (
      <>
        {pages.map((data, index) => (
          <Link href={createPageUrl(data)} key={index}>
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
