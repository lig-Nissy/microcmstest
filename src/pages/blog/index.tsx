// apis
import { getBlog, getArticle } from "@/api/microcms";

//api types
import { Blog, Article } from "@/api/types";

//components
import Listpage from "@/components/TemplateListPage";

// データをテンプレートに受け渡す部分の処理を記述する
export const getStaticProps = async () => {
  const blog = await getBlog();
  const article = await getArticle({
    limit: 100,
  });
  return {
    props: {
      blog,
      article,
    },
  };
};

export default function Home({
  blog,
  article,
}: {
  blog: Blog;
  article: Article;
}) {
  return <Listpage blog={blog} article={article} />;
}
