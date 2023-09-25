import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import md5 from "md5";

const baseURL = "http://gateway.marvel.com/v1/public/comics";
const privateKey = "b64b13b35b9650b0597a8fa60e6b5497cfac20b3";
const publicKey = "116c3ab0e15b79bb6c80e9681213a7b1";

const timestemp = Number(new Date());
const hash = md5(timestemp + privateKey + publicKey);
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
        const response = await axios.get(
            `${baseURL}?ts=${timestemp}&apikey=${publicKey}&hash=${hash}`
        );
        return response.data.results;
    }
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
        builder.addCase(getAllComics.fulfilled, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAllComics.pending, (state, action) => {
            state.isLoading = false;
            state.comics = action.payload;
        });
        builder.addCase(getAllComics.rejected, (state) => {
            state.isLoading = false;
            console.error(state.error);
        });
    },
});
