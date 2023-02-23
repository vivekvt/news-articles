import axios from "axios";
import { useEffect, useState } from "react";
import { Article } from "../types/article";

const initialState = {
  loading: false,
  error: null,
};

const API_URL =
  "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed";

export const useGetArticles = () => {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [state, setState] = useState(initialState);

  const getArticles = async () => {
    try {
      setState((oldState) => ({ ...oldState, loading: true }));
      const { data } = await axios.get<Article[]>(API_URL);
      setArticles(data);
      setState(initialState);
    } catch (error: any) {
      setState((oldState) => ({
        ...oldState,
        loading: false,
        error: error?.message,
      }));
    }
  };
  useEffect(() => {
    getArticles();
  }, []);

  return { ...state, articles };
};
