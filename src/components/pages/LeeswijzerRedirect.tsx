import React from "react";
import { Redirect } from "react-router-dom";

const Page: React.FC = () => {
    return (
        <div>
            Hey!!!
            <Redirect to="/leeswijzer" />
        </div>
    );
};
export default Page;
