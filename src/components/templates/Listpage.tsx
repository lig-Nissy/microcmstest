import {
  Blog,
  Test,
  Sushi
} from "@/api/types";

// Style
import styles from "@/styles/index.module.scss";

import { Accordion } from "../ui/AccordionMenu";
import { Sidebar } from "../bases/Sidebar";

export const Listpage = (
  {
    blog,
    test,
    sushi,
  }:{
    blog:Blog;
    test:Test;
    sushi:Sushi;
  }
) =>{
    return (
        <>
        <h1 className={styles.title}>{blog.contents[0].title}</h1>
        <div
            className={styles.flexbox}
            dangerouslySetInnerHTML={{
              __html: `${blog.contents[0].body}`,
            }}
        />
        <div className="flex flex-row-reverse w-4/5 mx-auto">
          <Sidebar/>
          <div className="w-4/5">
            <div className={styles.menu}>
              <Accordion title="寿司ネタ" data={sushi} length={sushi.contents.length}/>
              <h2>{test.contents[0].title}</h2>
                    <div
                    dangerouslySetInnerHTML={{
                        __html: `${test.contents[0].content}`,
                    }}
                    />
            </div>
          </div>
        </div>
      </>
    )
}