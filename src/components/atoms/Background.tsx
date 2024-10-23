import styled from "styled-components";
import { ReactNode } from "react";

const StyledBackground = styled.div`
    background: linear-gradient(
        to bottom,
        ${(props) => props.theme.colors.background.gradient.lightPurple},
        ${(props) => props.theme.colors.background.gradient.pink},
        ${(props) => props.theme.colors.background.gradient.red}
    );
    min-height: 100vh;
    width: 100%;
`;

interface BackgroundProps {
    children: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
    return <StyledBackground>{children}</StyledBackground>;
}

export default Background;