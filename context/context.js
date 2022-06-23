import React from "react";

const seoContext = React.createContext();

export const seoContextProvider = seoContext.Provider;
export const seoContextConsumer = seoContext.Consumer;

export default seoContext;