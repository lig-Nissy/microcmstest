// apis
import { getBlog, getArticle } from "@/api/microcms";

//api types
import { Blog, Article } from "@/api/types";

//components
import Listpage from "@/components/TemplateListPage";

//variables
import * as Variables from "@/variables";

// データをテンプレートに受け渡す部分の処理を記述する
export const getStaticProps = async () => {
  const blog = await getBlog();
  const itemsPerPage = Variables.PAGES_PAR_VIEW;
  const page = 1; // 1ページ目を表示
  const offset = (page - 1) * itemsPerPage; // 現在のページの最初の記事のインデックス

  //ユニークな値にする
  const article = await getArticle({
    offset: offset, //どこから
    limit: itemsPerPage, //何件
    orders: "-publishedAt", //降順
  });
  return {
    props: {
      blog,
      article,
      page,
    },
  };
};

export default function Home({
  blog,
  article,
  page,
}: {
  blog: Blog;
  article: Article;
  page: number;
}) {
  return <Listpage blog={blog} article={article} page={page} />;
}
