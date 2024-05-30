//api types
import { Article } from '@/api/types';

//components
import BaseLayout from './BaseLayout';
import Sidebar from '@/components/BaseSidebar';

export const TemplatesArticle = ({
  article,
}: {
  article: Article;
  title: string;
}) => {
  return (
    <>
      <BaseLayout>
        <div
          className=" bg-slate-200 pt-16 pb-8"
          data-pagefind-body
        >
          <div className="flex flex-row-reverse gap-12 w-4/5 mx-auto">
            <div className="w-1/5 bg-slate-400">
              <Sidebar />
            </div>
            <div className="w-4/5 bg-white">
              <div
                className="editor w-4/5 mx-auto mt-8"
                dangerouslySetInnerHTML={{
                  __html: `${article.contents[0].content[0].content}`,
                }}
              />
            </div>
          </div>
        </div>
      </BaseLayout>
    </>
  );
};
