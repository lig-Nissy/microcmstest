
// INDEX PAGE COMPONENTS
import { useRouter } from "next/router";

// Components
import BaseLayout from "./BaseLayout";

export const Pageindex=()=>{
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