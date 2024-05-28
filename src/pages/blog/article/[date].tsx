// ARTICL INDEX PAGE
import {
  GetStaticPaths,
  GetStaticPropsContext,
} from 'next';

// apis
import { getArticle } from '@/api/microcms';

//api types
import { Article, ArticleTitle } from '@/api/types';

//components
import { TemplatesArticle } from '@/components/TemplateArticle';

//////////////////////////
// 詳細ページのパスを生成
export const getStaticPaths: GetStaticPaths = async () => {
  const article = await getArticle({
    limit: 100,
  });
  const paths = article.contents.map(
    (data: ArticleTitle) => ({
      params: { date: data.title },
    }),
  );
  return { paths, fallback: false };
};
//////////////////////////

// データをテンプレートに受け渡す部分の処理を記述する
export const getStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const title = context.params!.date;

  //ユニークな値にする
  const article = await getArticle({
    filters: `title[equals]${title}`,
    orders: '-publishedAt',
  });

  return {
    props: {
      article,
    },
  };
};

export default function Home({
  article,
}: {
  article: Article;
}) {
  return <TemplatesArticle article={article} />;
}
