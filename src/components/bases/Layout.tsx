// BASE LAYOUT COMPONENT
import React from "react";
import Script from "next/script";

// API types
import {
  MetaDataType,
  ContactType,
} from "@/api/types";

// Components
import BaseHead from "@/components/bases/Head";
import { BaseHeader } from "./Header";
import { BaseFooter } from "./Footer";
// import AboutSection from "@/components/bases/About";
// import ContactSection from "@/components/bases/Contact";

// Style
// import "@/styles/_destyle.scss";
// import "@/styles/_global.scss";
// import "@/styles/_utility.scss";

// metaタグに渡すデータ
// const meta = {
//   title: `${pageTitle} | ${copy}`,
//   description: index.description,
//   favicon: favicon,
//   appleTouchIcon: appleTouchIcon,
//   ogType: "website",
//   ogImage: ogImage,
//   noIndex: noIndex,
//   currentUrl: currentUrl,
//   pageTop: true,
// };

export const BaseLayout = ({
  children,
  // meta,
}: {
  children: React.ReactNode;
  // contact?: ContactType;
  // meta: MetaDataType;
}) => {

  return (
    <>
      {/* <BaseHead meta={meta} /> */}
      <BaseHeader/>
      <main>
        {children}
        {/* {aboutSection && <AboutSection common={common} about={about} />} */}
        {/* {contact && <ContactSection contact={contact} />} */}
      </main>
      <BaseFooter/>
    </>
  );
};

export default BaseLayout;
