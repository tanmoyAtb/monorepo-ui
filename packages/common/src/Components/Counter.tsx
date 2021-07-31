import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../store/rootActions";
import { AppState } from "../store/store";
import BorderedButton from "./BorderedButton";
import styled from "styled-components";

const ColorDiv = styled.div`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.primaryColor};
`;

function Counter() {
  const { count } = useSelector((state: AppState) => state.counter);
  const dispatch = useDispatch();

  const onAddCount = () => {
    dispatch(addCount());
  };

  return (
    <>
      <div>
        <div>
          <ColorDiv>{count}</ColorDiv>
          <br />
        </div>
      </div>
      <BorderedButton onClick={onAddCount}>Add count</BorderedButton>
    </>
  );
}

export default Counter;
