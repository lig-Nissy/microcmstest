// INDEX PAGE COMPONENTS
import Link from "next/link";

//api types
import { Blog, Article } from "@/api/types";

// Style
import styles from "@/styles/components/templateListpage.module.scss";

// Components
import Sidebar from "@/components/BaseSidebar";
import Pagenation from "@/components/UiPagenation";

const Listpage = ({ blog, article }: { blog: Blog; article: Article }) => {
  const baselink = "/blog/article";
  return (
    <>
      <h1 className="bg-[#cecece] text-center">{blog.contents[0].title}</h1>
      <div
        className={styles.flexbox}
        dangerouslySetInnerHTML={{
          __html: `${blog.contents[0].body}`,
        }}
      />
      <div className="flex flex-row-reverse w-4/5 mx-auto mb-10 overflow-scroll ">
        <div className="w-1/5 bg-slate-400">
          <Sidebar />
        </div>
        <div className="w-4/5">
          <div>
            <h2 className="text-center mb-7">日報</h2>
            <div className="editer">
              {article.contents.map((content, index) => {
                return (
                  <Link key={index} href={`${baselink}/${content.title}`}>
                    <h3 className="block">{content.title}</h3>
                  </Link>
                );
              })}
            </div>
            <Pagenation article={article} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Listpage;
