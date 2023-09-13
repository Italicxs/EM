import { createClient } from "next-sanity";

const projectId = "c3oal390";
const dataset = "production";
const apiVersion = "2023-12-09";


export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true

})
