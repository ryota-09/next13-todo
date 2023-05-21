import { z } from "zod";

type RENDERING_TYPE = "SG" | "SSR" | "ISR";

// type Fetcher = {
//   <T>(
//     renderingType: "SG" | "SSR",
//     url: string,
//     headers: RequestInit | undefined
//   ): Promise<T>;
//   <T>(
//     renderingType: "ISR",
//     url: string,
//     headers: RequestInit | undefined,
//     frequency: number
//   ): Promise<T>;
// };

// const baseFetcher: Fetcher = async <T>(
//   renderingType: RENDERING_TYPE,
//   url: string,
//   headers: RequestInit | undefined,
//   frequency?: number
// ) => {
//   let options: RequestInit = headers ? { ...headers } : {};

//   switch (renderingType) {
//     case "SG":
//       options = { ...options, cache: "force-cache" };
//       break;
//     case "SSR":
//       options = { ...options, cache: "no-store" };
//       break;
//     case "ISR":
//       if (frequency === undefined) {
//         throw new Error("🔥: frequencyを指定してください。");
//       }
//       options = { ...options, next: { revalidate: frequency } };
//       break;
//     default:
//       throw new Error(`🔥: renderingTypeに誤りがあります。 ${renderingType}`);
//   }

//   const response = await fetch(url, options);
//   if (!response.ok) {
//     throw new Error(`🔥: status200以外です: ${response.status}`);
//   }
//   const data = (await response.json()) as T;
//   return data;
// };

// export const fetchDataWithSG = <DataType>(url: string, headers?: RequestInit) =>
//   baseFetcher<DataType>("SG", url, headers);
// export const fetchDataWithSSR = <DataType>(
//   url: string,
//   headers?: RequestInit
// ) => baseFetcher<DataType>("SSR", url, headers);
// export const fetchDataWithISR = <DataType>(
//   url: string,
//   frequency: number,
//   headers?: RequestInit
// ) => baseFetcher<DataType>("ISR", url, headers, frequency);

type Fetcher = {
  <T>(
    renderingType: "SG" | "SSR",
    url: string,
    schema: z.ZodSchema<T>,
    headers: RequestInit | undefined
  ): Promise<T>;
  <T>(
    renderingType: "ISR",
    url: string,
    schema: z.ZodSchema<T>,
    headers: RequestInit | undefined,
    frequency: number
  ): Promise<T>;
};

const baseFetcher: Fetcher = async <T>(
  renderingType: RENDERING_TYPE,
  url: string,
  schema: z.ZodSchema<T>,
  headers?: RequestInit,
  frequency?: number
) => {
  let options: RequestInit = headers ? { ...headers } : {};

  switch (renderingType) {
    case "SG":
      options = { ...options, cache: "force-cache" };
      break;
    case "SSR":
      options = { ...options, cache: "no-store" };
      break;
    case "ISR":
      if (frequency === undefined) {
        throw new Error("🔥: frequencyを指定してください。");
      }
      options = { ...options, next: { revalidate: frequency } };
      break;
    default:
      throw new Error(`🔥: renderingTypeに誤りがあります。 ${renderingType}`);
  }

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`🔥: status200以外です: ${response.status}`);
  }
  const rawData = await response.json();
  const data = await schema.parse(rawData);
  return data;
};

export const fetchDataWithSG = <DataType>(
  url: string,
  schema: z.ZodSchema<DataType>,
  headers?: RequestInit
) => baseFetcher("SG", url, schema, headers);
export const fetchDataWithSSR = <DataType>(
  url: string,
  schema: z.ZodSchema<DataType>,
  headers?: RequestInit
) => baseFetcher<DataType>("SSR", url, schema, headers);
export const fetchDataWithISR = <DataType>(
  url: string,
  schema: z.ZodSchema<DataType>,
  frequency: number,
  headers?: RequestInit
) => baseFetcher("ISR", url, schema, headers, frequency);

//NOTE: with yup .ver

// type Fetcher = {
//   (
//     renderingType: "SG" | "SSR",
//     url: string,
//     schema: yup.AnySchema,
//     headers: RequestInit | undefined
//   ): Promise<yup.InferType<typeof schema>>;
//   (
//     renderingType: "ISR",
//     url: string,
//     schema: yup.AnySchema,
//     headers: RequestInit | undefined,
//     frequency: number
//   ): Promise<yup.InferType<typeof schema>>;
// };

// const baseFetcher: Fetcher = async (
//   renderingType: RENDERING_TYPE,
//   url: string,
//   schema: yup.AnySchema,
//   headers?: RequestInit,
//   frequency?: number
// ) => {
//   let options: RequestInit = headers ? { ...headers } : {};

//   switch (renderingType) {
//     case "SG":
//       options = { ...options, cache: "force-cache" };
//       break;
//     case "SSR":
//       options = { ...options, cache: "no-store" };
//       break;
//     case "ISR":
//       if (frequency === undefined) {
//          throw new Error("🔥: frequencyを指定してください。");
//       }
//       options = { ...options, next: { revalidate: frequency } };
//       break;
//     default:
//      throw new Error(`🔥: renderingTypeに誤りがあります。 ${renderingType}`);
//   }

//   const response = await fetch(url, options);
//   if (!response.ok) {
//     throw new Error(`🔥: status200以外です: ${response.status}`);
//   }
//   const rawData = await response.json();
//   const data = await schema.validate(rawData).catch((error) => {
//     throw new Error(`🔥: データのスキーマに誤りがあります。 ${error}`);
//   });
//   return data;
// };

// export const fetchDataWithSG = (
//   url: string,
//   schema: yup.AnySchema,
//   headers?: RequestInit
// ) => baseFetcher("SG", url, schema, headers);
// export const fetchDataWithSSR = (
//   url: string,
//   schema: yup.AnySchema,
//   headers?: RequestInit
// ) => baseFetcher("SSR", url, schema, headers);
// export const fetchDataWithISR = (
//   url: string,
//   schema: yup.AnySchema,
//   frequency: number,
//   headers?: RequestInit
// ) => baseFetcher("ISR", url, schema, headers, frequency);
