// INDEX PAGE COMPONENTS
import Link from 'next/link';

//api types
import { Blog, Article } from '@/api/types';

// Style
import styles from '@/styles/components/templateListpage.module.scss';

// Components
import BaseLayout from './BaseLayout';
import Sidebar from '@/components/BaseSidebar';
import Pagenation from '@/components/UiPagenation';
import SearchPage from './UiPageFind';

const Listpage = ({
  blog,
  article,
  page,
}: {
  blog: Blog;
  article: Article;
  page: number;
}) => {
  const baselink = '/blog/article';
  // const pagefind = await import('/pagefind/pagefind.js');
  // const search = await pagefind.search('static');
  // const oneResult = await search.results[0].data();
  // console.log(oneResult);
  // await pagefind.options({
  //   bundlePath: '/custom-pagefind-directory/',
  // });
  // pagefind.init();

  return (
    <>
      <BaseLayout>
        <h1 className="bg-[#cecece] text-center">
          {blog.contents[0].title}
        </h1>
        <div
          className={styles.flexbox}
          dangerouslySetInnerHTML={{
            __html: `${blog.contents[0].body}`,
          }}
        />
        <div className="w-4/5 bg-white mx-auto">
          <SearchPage />
        </div>
        <div className="flex flex-row-reverse w-4/5 mx-auto overflow-scroll ">
          <div className="w-1/5 bg-slate-400">
            <Sidebar />
          </div>
          <div className="w-4/5">
            <div>
              <h2 className="text-center mb-7">日報</h2>
              <div className="w-4/5 mx-auto">
                <div className="editer">
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
