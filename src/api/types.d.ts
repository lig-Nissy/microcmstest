//APIの型定義

export type Blog = {
  contents: [
    {
      id: string;
      title: string;
      body: string;
    },
  ];
};

export type ArticleContent = {
  fieldId: string;
  content: string;
};

export type ArticleTitle = {
  title: string;
  content: ArticleContent[];
};

export type Article = {
  contents: ArticleTitle[];
  totalCount: number;
};

export type Accodion = {
  contents: AccodionContents[];
};

export type AccodionContents = {
  id: string;
  name: string;
  img: ImageType;
  text: string;
};

export type ImageType = {
  url: string;
  width: number;
  height: number;
};

// メタデータの型
export type MetaDataType = {
  favicon?: ImageType;
  appleTouchIcon?: ImageType;
  title: string;
  description?: string;
  ogType: string;
  currentUrl: string;
  ogImage?: ImageType;
  noIndex: boolean | undefined;
};

export type ContactType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  contactSection: boolean;
  title: string;
  titleEn: string;
  description: {
    fieldId: string;
    textPc: string;
    textSp: string;
  };
  cvButton: {
    fieldId: string;
    text: string;
    url: string;
    color: {
      id: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      revisedAt: string;
      name: string;
      colorCode: string;
    };
    external: boolean;
  };
  linkButtonColor: null;
};
