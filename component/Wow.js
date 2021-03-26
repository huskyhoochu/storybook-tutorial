import React from 'react';
import styled from 'styled-components';


const WowButton = styled.button`
    display: inline-block;
    background-color: ${props => props.primary ? 'violet' : 'grey'};
    color: white;
    padding: 20px 10px;
`;

export const Wow = ({ primary, children }) => {
    return <WowButton primary={primary}>{children}</WowButton>
}
