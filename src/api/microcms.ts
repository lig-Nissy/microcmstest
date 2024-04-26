import type { MicroCMSQueries } from "microcms-js-sdk";
import { client } from "./client";

export const getArticle = async (queries?: MicroCMSQueries) => {
  return await client.get({ endpoint: "article", queries });
};

export const getBlog = async (queries?: MicroCMSQueries) => {
  return await client.get({ endpoint: "blog", queries });
};
