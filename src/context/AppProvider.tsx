"use client";
import { ReactNode, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { Color, IsLoading, Quote, Quotes } from "@/shared/interfaces";
import axios, { AxiosError } from "axios";

interface Props {
  children: ReactNode;
}

const hex = [1, 2, 3, 4, 5, 6, 7, "A", "B", "C", "D", "E", "F"];

const url = "https://type.fit/api/quotes";

function AppProvider({ children }: Props) {
  const [color, setColor] = useState<Color>("");
  const [isLoading, setIsLoading] = useState<IsLoading>(true);
  const [quote, setQuote] = useState<Quote>({ text: "", author: "" });

  const getRandomNumber = (array: any[]): number => {
    const randomNumber = Math.floor(Math.random() * array.length);
    return randomNumber;
  };

  const getRandomColor = (): string => {
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      randomColor += hex[getRandomNumber(hex)];
    }
    return randomColor;
  };

  const getQuote = async () => {
    try {
      const { status, data } = await axios<Quotes>(url);
      if (status === 200) {
        const randomColor = getRandomColor();
        const randomQuote = data[getRandomNumber(data)];
        setColor(randomColor);
        setQuote(randomQuote);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <AppContext.Provider value={{ isLoading, color, quote, getQuote }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
