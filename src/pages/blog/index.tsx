import {getblog, gettest1, getsushi} from "@/api/microcms"
import {
  Blog,
  Test,
  Sushi
} from "@/api/types";

import { Listpage } from "@/components/templates/Listpage";

// データをテンプレートに受け渡す部分の処理を記述する
export const getStaticProps = async () => {
  const blog = await getblog();
  const test = await gettest1();
  const sushi = await getsushi();

  return {
    props: {
      blog,
      test,
      sushi
    },
  };
};

export default function Home(
  {
    blog,
    test,
    sushi
  }:{
    blog:Blog;
    test:Test;
    sushi:Sushi
  }
) {
  return (
      <Listpage
        blog={blog}
        test={test}
        sushi={sushi}
      />
  );
}