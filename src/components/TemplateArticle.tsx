//api types
import { Blog, Article } from "@/api/types";

//components
import BaseLayout from "./BaseLayout";
import Sidebar from "@/components/BaseSidebar";

export const TemplatesArticle = ({ blog, article }: { blog: Blog; article: Article }) => {
  return (
    <>
      <BaseLayout>
        <h1 className="bg-[#cecece] text-center">{blog.contents[0].title}</h1>
        <div className="flex flex-row-reverse w-4/5 mx-auto">
          <div className="w-1/5 bg-slate-400">
            <Sidebar />
          </div>
          <div
            className="editor w-4/5"
            dangerouslySetInnerHTML={{
              __html: `${article.contents[0].content[0].content}`,
            }}
          />
        </div>
      </BaseLayout>
    </>
  );
};
