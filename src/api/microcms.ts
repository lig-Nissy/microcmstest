import type { MicroCMSQueries } from "microcms-js-sdk";
import { client } from "./client";

export const gettest1 = async (
    queries?: MicroCMSQueries,
) => {
    return await client.get({ endpoint: "test1", queries });
};

export const getblog= async (
    queries?: MicroCMSQueries,
) => {
    return await client.get({ endpoint: "blog", queries });
};

export const getsushi= async (
    queries?: MicroCMSQueries,
) => {
    return await client.get({ endpoint: "sushi", queries });
};