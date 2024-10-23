import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
    font-size: ${(props) => props.theme.fontSizes.medium};
    color: ${(props) => props.theme.colors.text.mediumGray};
`;


interface LabelProps {
    text: string;
    htmlfor?: string;
}
const Label: React.FC<LabelProps> = ({ text, htmlfor}) => {
    return (
        <StyledLabel htmlFor={htmlfor}>
            {text}
        </StyledLabel>
    );
};

export default Label;