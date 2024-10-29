import styled from "styled-components";

const PaginatioWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;

interface PaginationWrapperProps {
    children: React.ReactNode;
}

export const PaginationWrapper = ({ children }: PaginationWrapperProps) => {
    return <PaginatioWrapper>{children}</PaginatioWrapper>;
};