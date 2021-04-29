import React from "react";
import {Header} from "../../components/header/header";

export const Home = () => {
    const helloWorld = "Hello World Home";

    return (
        <>
            <Header />
            <h2>{helloWorld}</h2>
        </>
    );
};
