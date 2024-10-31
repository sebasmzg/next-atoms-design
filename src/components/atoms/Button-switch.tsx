"use client";

import { usePathname } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

const SwitchContainer = styled.div`
  display: flex;
  width: 250px;
  height: 2rem;
  border-radius: 25px;
  justify-content: space-between;
  position: relative;
  background-color: ${(props) =>
    props.theme.colors.background.lightGrayPagination};
`;

const SwitchButton = styled.div<{ $isActive: boolean; $view: string }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 25px;
  padding: 10px 20px;
  background: ${(props) =>
    props.$isActive
      ? props.$view === "vacantes"
        ? props.theme.colors.accent.vacantes.normal
        : props.theme.colors.accent.companies.normal
      : props.theme.colors.background.lightGrayPagination};
  color: ${(props) =>
    props.$isActive
      ? props.$view === "vacantes"
        ? props.theme.colors.text.white
        : props.theme.colors.text.white
      : props.theme.colors.text.mediumGray};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.$isActive
        ? props.$view === "vacantes"
          ? props.theme.colors.accent.vacantes.hover
          : props.theme.colors.accent.companies.hover
        : props.theme.colors.background.lightGrayPagination};
  }

  svg {
    margin-right: 8px;
  }
`;

interface ButtonSwitchProps {
  $leftIcon: ReactNode;
  $leftLabel: string;
  $rightIcon: ReactNode;
  $rightLabel: string;
  $onSwitch: (isLeft: boolean) => void;
  $view?: string;
}

const ButtonSwitch: React.FC<ButtonSwitchProps> = ({
  $leftIcon: leftIcon,
  $leftLabel: leftLabel,
  $rightIcon: rightIcon,
  $rightLabel: rightLabel,
  $onSwitch: onSwitch,
  $view = "default",
}) => {
  const pathname = usePathname();
  const [isLeft, setIsLeft] = useState(true);

  useEffect(() => {
    if (pathname.includes("vacancies")) {
      setIsLeft(true);
    } else if (pathname.includes("companies")) {
      setIsLeft(false);
    }
  }, [pathname]);

  const handleSwitch = (left: boolean) => {
    setIsLeft(left);
    onSwitch(left);
  };

  return (
    <SwitchContainer>
      <SwitchButton
        $isActive={isLeft}
        $view={$view}
        onClick={() => handleSwitch(true)}
      >
        {leftIcon}
        {leftLabel}
      </SwitchButton>
      <SwitchButton
        $isActive={!isLeft}
        $view={$view}
        onClick={() => handleSwitch(false)}
      >
        {rightIcon}
        {rightLabel}
      </SwitchButton>
    </SwitchContainer>
  );
};

export default ButtonSwitch;
