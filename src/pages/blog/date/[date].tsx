// ARTICL INDEX PAGE
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticPropsContext } from "next";

// apis
import {getBlog, getArticle} from "@/api/microcms"

//api types
import {
  Blog,
  Test,
} from "@/api/types";

//components
import { TemplatesArticle } from "@/components/TemplatesArticle";

//////////////////////////
// 詳細ページのパスを生成
export const getStaticPaths: GetStaticPaths = async () => {
  const test = await getArticle({
    limit:100,
  });
  const paths = test.contents.map((data:any)=>({
      params:{ date : data.title},
  }))
  return { paths, fallback: false };
};
//////////////////////////

// データをテンプレートに受け渡す部分の処理を記述する
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const title = context.params!.date
  const blog = await getBlog();
  //ユニークな値にする
  const article = await getArticle({
    filters: `title[equals]${title}`,
    orders: "-publishedAt",
  });

  return {
    props: {
      blog,
      article,
    },
  };
};

export default function Home(
  {
    blog,
    article,
  }:{
    blog:Blog;
    article:Test;
  }
) {
  return (
      <TemplatesArticle
        blog={blog}
        article={article}
      />
  );
}