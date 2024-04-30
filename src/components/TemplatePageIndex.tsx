// INDEX PAGE COMPONENTS
import { useRouter } from "next/router";

// Components
import BaseLayout from "./BaseLayout";

export const Pageindex = () => {
  const router = useRouter();
  return (
    <>
      <BaseLayout>
        <div className="h-[80vh]">
          <h1>テストサイト</h1>
          <p
            className="cursor-pointer"
            onClick={() => {
              router.push("/blog");
            }}
          >
            ブログ
          </p>
        </div>
      </BaseLayout>
    </>
  );
};
