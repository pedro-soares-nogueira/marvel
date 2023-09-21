import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
interface IComics {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: unknown[];
  resourceURI: string;
  urls: {
    type: string;
    url: string;
  }[];
  series: {
    resourceURI: string;
    name: string;
  };
  variants: {
    resourceURI: string;
    name: string;
  }[];
  collections: unknown[];
  collectedIssues: unknown[];
  dates: {
    type: string;
    date: string;
  }[];
  prices: {
    type: string;
    price: number;
  }[];
  thumbnail: {
    path: string;
    extension: string;
  };
  images: unknown[];
  creators: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
      role: string;
    }[];
    returned: number;
  };
  characters: {
    available: number;
    collectionURI: string;
    items: unknown[];
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
      type: string;
    }[];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: unknown[];
    returned: number;
  };
}

export const getAllComics = createAsyncThunk("", async () => {});

export interface Comics {
  comics: IComics | null;
  isLoading: boolean;
}

const initialState: Comics = {
  comics: null,
  isLoading: true,
};

export const comicsSlice = createSlice({
  name: "Comics",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllComics.fulfilled, (state, action) => {});
    builder.addCase(getAllComics.pending, (state, action) => {});
    builder.addCase(getAllComics.rejected, (state, action) => {});
  },
});
