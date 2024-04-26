// ARTICL INDEX PAGE
import { GetStaticPaths, GetStaticPropsContext } from "next";

// apis
import { getBlog, getArticle } from "@/api/microcms";

//api types
import { Blog, Article } from "@/api/types";

import Listpage from "@/components/TemplateListPage";

//////////////////////////
// 詳細ページのパスを生成
export const getStaticPaths: GetStaticPaths = async () => {
  const article = await getArticle({
    limit: 100,
  });
  const pageNumber = Math.ceil(article.contents.length / 5);
  const pages: number[] = [];
  for (let i = 2; i <= pageNumber; i++) {
    pages.push(i);
  }
  const paths = pages.map((data: any) => ({
    params: { page: data.toString() },
  }));
  return { paths, fallback: false };
};
//////////////////////////

// データをテンプレートに受け渡す部分の処理を記述する
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const blog = await getBlog();
  const pagenumber = context.params!.date;
  //ユニークな値にする
  const article = await getArticle({
    //   filters: `title[equals]${title}`,
    orders: "-publishedAt",
  });

  return {
    props: {
      blog,
      article,
    },
  };
};

const page = ({ blog, article }: { blog: Blog; article: Article }) => {
  return <Listpage blog={blog} article={article} />;
};

export default page;
