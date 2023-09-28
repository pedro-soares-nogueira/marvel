import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getComics } from "../../services/comicsService";

interface IComic {
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

export const getAllComics = createAsyncThunk(
  "comics/getAllComics",
  async () => {
    const data = await getComics();
    return data;
  }
);

export const getAllCharacteres = createAsyncThunk(
  "comics/getAllCharacters",
  async () => {}
);

export interface Comics {
  comics: IComic[] | null | undefined;
  isLoading: boolean;
  error: ErrorEvent | null;
}

const initialState: Comics = {
  comics: null,
  isLoading: true,
  error: null,
};

export const comicsSlice = createSlice({
  name: "comics",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllComics.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllComics.fulfilled, (state, action) => {
      state.isLoading = false;
      state.comics = action.payload;
    });
    builder.addCase(getAllComics.rejected, (state) => {
      state.isLoading = false;
      console.error(state.error);
    });
  },
});
