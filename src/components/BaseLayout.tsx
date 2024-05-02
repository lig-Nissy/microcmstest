// BASE LAYOUT COMPONENT
import React from "react";
import { BaseHead } from "@/components/BaseHead";
import { BaseHeader } from "@/components/BaseHeader";
import { BaseFooter } from "@/components/BaseFooter";

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
      <BaseHead />
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
