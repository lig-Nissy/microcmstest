// INDEX PAGE COMPONENTS
import { useRouter } from "next/router";
import Link from "next/link";

//api types
import {
  Blog,
  Test,
  Sushi
} from "@/api/types";

// Style
import styles from "@/styles/blog.module.scss";

// Components
import  Accordion from "@/components/UiAccordionMenu";
import Sidebar from "@/components/BaseSidebar";

export const Listpage = (
  {
    blog,
    article,
    sushi,
  }:{
    blog:Blog;
    article:Test;
    sushi:Sushi;
  }
) =>{
    const router = useRouter()
    return (
        <>
        <h1 className="bg-#cecece text-center">{blog.contents[0].title}</h1>
        <div
            className={styles.flexbox}
            dangerouslySetInnerHTML={{
              __html: `${blog.contents[0].body}`,
            }}
        />
        <div className="flex flex-row-reverse w-4/5 mx-auto overflow-scroll">
          <div className="w-1/5 bg-slate-400">
            <Sidebar/>
          </div>
          <div className="w-4/5">
            <div className={styles.menu}>
              <Accordion title="寿司ネタ" data={sushi} length={sushi.contents.length}/>
              <h2>日報</h2>
              <div className="editer">
                {
                  article.contents.map((content,index) => {
                    return(
                      <Link key={index} href={`/blog/date/${content.title}`}>
                        <h3>{content.title}</h3>
                      </Link>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </>
    )
}