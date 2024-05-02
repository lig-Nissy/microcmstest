// ARTICL INDEX PAGE
import { GetStaticPaths, GetStaticPropsContext } from "next";

// apis
import { getBlog, getArticle } from "@/api/microcms";

//api types
import { Blog, Article } from "@/api/types";

//compornents
import Listpage from "@/components/TemplateListPage";

//variables
import * as Variables from "@/variables";

//////////////////////////
// 詳細ページのパスを生成
export const getStaticPaths: GetStaticPaths = async () => {
  const article = await getArticle({
    limit: 100,
  });
  const itemsPerPage = Variables.PAGES_PAR_VIEW; //1ページあたりの表示数
  const pageNumber = Math.ceil(article.contents.length / itemsPerPage);
  const pages: number[] = [];
  for (let i = 2; i <= pageNumber; i++) {
    pages.push(i);
  }
  const paths = pages.map((data: number) => ({
    params: { page: data.toString() },
  }));
  return { paths, fallback: false };
};
//////////////////////////

// データをテンプレートに受け渡す部分の処理を記述する
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const blog = await getBlog();
  const itemsPerPage = Variables.PAGES_PAR_VIEW; //1ページあたりの表示数
  //paseIntで文字列型を数値型に変換
  const page = parseInt(context.params?.page as string, 10); // 現在のページ番号
  const offset = (page - 1) * itemsPerPage; // 現在のページの最初の記事のインデックス

  //ユニークな値にする
  const article = await getArticle({
    offset: offset,
    limit: itemsPerPage,
    orders: "-publishedAt",
  });

  return {
    props: {
      blog,
      article,
      page,
    },
  };
};

const page = ({
  blog,
  article,
  page,
}: {
  blog: Blog;
  article: Article;
  page: number;
}) => {
  return <Listpage blog={blog} article={article} page={page} />;
};

export default page;
