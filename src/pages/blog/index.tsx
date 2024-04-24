
// apis
import {getBlog, getArticle, getSushi} from "@/api/microcms"

//api types
import {
  Blog,
  Test,
  Sushi
} from "@/api/types";

//components
import { Listpage } from "@/components/TemplateListpage";

// データをテンプレートに受け渡す部分の処理を記述する
export const getStaticProps = async () => {
  const blog = await getBlog();
  const article = await getArticle({
    limit: 100,
  });
  const sushi = await getSushi();

  return {
    props: {
      blog,
      article,
      sushi
    },
  };
};

export default function Home(
  {
    blog,
    article,
    sushi
  }:{
    blog:Blog;
    article:Test;
    sushi:Sushi
  }
) {
  return (
      <Listpage
        blog={blog}
        article={article}
        sushi={sushi}
      />
  );
}