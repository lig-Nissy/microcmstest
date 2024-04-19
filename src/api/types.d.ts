//APIの型定義

export type Blog = {
    contents:[{
      id:string,
      title:string,
      body:string
    }]
};

export type Test = {
    contents:[{
        title:string,
        content:string,
    }]
};

export type Sushi ={
    contents:[{
        id:string,
        name:string,
        img:{
            url:string,
            width:number,
            height:number,
        }
        text:string,
      }]
}

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
  