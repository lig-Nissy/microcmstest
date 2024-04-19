
// INDEX PAGE COMPONENTS
import { useRouter } from "next/router";

// API
import {
    Blog,
    Test
  } from "@/api/types";

// Components
import BaseLayout from "../bases/Layout";


export const Pageindex=(
    {
        blog,
        test,
    }:{
        blog:Blog;
        test:Test;
    }
)=>{
    const router = useRouter()
    return (
        <>
            <BaseLayout>
                <h1>テストサイト</h1>
                <p onClick={()=>{
                    router.push("/blog")
                }}>ブログ</p>
            </BaseLayout>
        </>
    )
}