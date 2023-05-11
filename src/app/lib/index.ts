type RENDERING_TYPE = "SG" | "SSR" | "ISR";

const baseFetcher =
  (renderingType: RENDERING_TYPE) =>
  async (url: string, frequency?: number) => {
    let options: RequestInit = {};

    switch (renderingType) {
      case "SG":
        options = { cache: "force-cache" };
        break;
      case "SSR":
        options = { cache: "no-store" };
        break;
      case "ISR":
        options = { next: { revalidate: frequency } };
        break;
      default:
        break;
    }
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };

export const fetchDataWithSG = baseFetcher("SG");
export const fetchDataWithSSR = baseFetcher("SSR");
export const fetchDataWithISR = baseFetcher("ISR");
