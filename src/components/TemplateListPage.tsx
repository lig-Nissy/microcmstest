// INDEX PAGE COMPONENTS
import Link from 'next/link';

//api types
import { Article } from '@/api/types';

// Style
import styles from '@/styles/components/templateListpage.module.scss';

// Components
import BaseLayout from './BaseLayout';
import Sidebar from '@/components/BaseSidebar';
import Pagenation from '@/components/UiPagenation';
import SearchPage from '@/components/UiPageFind';

const Listpage = ({
  article,
  page,
}: {
  article: Article;
  page: number;
}) => {
  const baselink = '/blog/article';

  return (
    <>
      <BaseLayout>
        <h1 className="bg-[#cecece] text-center">ブログ</h1>
        <div className="flex flex-row-reverse w-4/5 mx-auto overflow-scroll ">
          <div className="w-1/5 bg-slate-400">
            <Sidebar />
          </div>
          <div className="w-4/5">
            <div>
              <h2 className="text-center mt-8 mb-2">
                日報
              </h2>
              <div className="w-4/5 mx-auto">
                <div className=" bg-white">
                  <SearchPage />
                </div>
                <div className="editer my-8">
                  {article.contents.map(
                    (content, index) => {
                      return (
                        <Link
                          key={index}
                          href={`${baselink}/${content.title}`}
                        >
                          <h3 className={styles.link}>
                            {content.title}
                          </h3>
                        </Link>
                      );
                    },
                  )}
                </div>
                <Pagenation article={article} page={page} />
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    </>
  );
};

export default Listpage;
