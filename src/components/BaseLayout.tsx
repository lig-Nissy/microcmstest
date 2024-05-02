// BASE LAYOUT COMPONENT
import React from "react";
import { BaseHeader } from "./BaseHeader";
import { BaseFooter } from "./BaseFooter";

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
      <BaseHeader />
      <main>
        {children}
        {/* {aboutSection && <AboutSection common={common} about={about} />} */}
        {/* {contact && <ContactSection contact={contact} />} */}
      </main>
      <BaseFooter />
    </>
  );
};

export default BaseLayout;
