// import {getBlog, getArticle} from "@/api/microcms"
// import {
//   Blog,
//   Test
// } from "@/api/types";

import { Pageindex } from "@/components/TemplatesPageindex";

// データをテンプレートに受け渡す部分の処理を記述する
// export const getStaticProps = async () => {
  // const blog = await getBlog();
  // const article = await getArticle();

  // return {
  //   props: {
  //     blog,
  //     article
  //   },
  // };
// };

export default function Home() {

  return (
      <Pageindex/>
  );
}