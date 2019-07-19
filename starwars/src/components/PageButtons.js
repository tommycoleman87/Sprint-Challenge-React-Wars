import React from 'react';
import { Button } from './styles';

const PageButtons = ({pageHandler}) => {
    return (
        <div>
        <Button>Previous</Button>
        <Button primary onClick={pageHandler}>Next</Button>
        </div>
    )
    
}

export default PageButtons;