import { createClient } from "next-sanity";

export const projectId = "mbua096m";
export const dataset = "production";
export const apiVersion = "2026-11-26";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
