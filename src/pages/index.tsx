import {getblog, gettest1} from "@/api/microcms"
import {
  Blog,
  Test
} from "@/api/types";

import { Pageindex } from "@/components/templates/Pageindex";

// データをテンプレートに受け渡す部分の処理を記述する
export const getStaticProps = async () => {
  const blog = await getblog();
  const test = await gettest1();

  return {
    props: {
      blog,
      test
    },
  };
};

export default function Home(
  {
    blog,
    test,
  }:{
    blog:Blog;
    test:Test;
  }
) {

  return (
      <Pageindex
        blog={blog}
        test={test}
      />
  );
}