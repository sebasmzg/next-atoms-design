import styled from "styled-components";

const StyledPagination = styled.div``;

export const Pagination = () => {
    return (
        <StyledPagination>
            <Button $text="Anterior" $view="vacantes" $icon={<ArrowLeft />} />
            <Button $text="Siguiente" $view="vacantes" $icon={<ArrowRight />} />
        </StyledPagination>
    )
}