import styled from "styled-components";

const StyledCard = styled.div`
    /* add styles */
`;

interface CardProps {
  $data?: Array<{
    id: string;
    title: string;
    description: string;
    state: string;
    contact: string;
  }>;
}

export const Card = ({
  $data,
}: CardProps) => {
  return (
    <StyledCard>
      <>
        {$data
          ? $data.map((data) => (
              <div>
                <h2 key={data.id}>{data.title}</h2>
                <p key={data.id}>{data.description}</p>
                <p key={data.id}>{data.state}</p>
                <p key={data.id}>{data.contact}</p>
              </div>
            ))
          : null}
      </>
    </StyledCard>
  );
};
