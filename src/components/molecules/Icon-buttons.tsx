import styled from "styled-components";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { ButtonIcon } from "../atoms/Button-icons";


const StyledIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  gap: 0.5rem;
`;

const IconButtons = () => {
  return (
    <StyledIcons>
      <ButtonIcon $icon={<MdOutlineModeEdit color="blue" />} />
      <ButtonIcon $icon={<FaRegTrashAlt color="red" />} />
    </StyledIcons>
  );
};

export default IconButtons;