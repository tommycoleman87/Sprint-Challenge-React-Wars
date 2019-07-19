import React from "react";
import { Button } from "./styles";

const PageButtons = ({nextPageHandler, previousPageHandler}) => {
    return (
        <div>
        <Button onClick={previousPageHandler}>Previous</Button>
        <Button primary onClick={nextPageHandler}>Next</Button>
        </div>
    )
    
}

export default PageButtons;