import React from "react";
import "./App.css";
import "./App.less";
import BorderedButton from "@engaze/common/src/Components/BorderedButton";
import { Provider } from "react-redux";
import store, { AppState } from "./store/store";
import { useSelector, useDispatch } from "react-redux";
import { addTag } from "./store/rootActions";
import Counter from "@engaze/common/src/Components/Counter";
import { theme } from "@engaze/common/src/assets/styles/styled-theme";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

function makeTag(length: number) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const TagComp = styled.div`
  color: ${({ theme }) => theme.colors.secondaryColor};
`;

function Child() {
  const { tags } = useSelector((state: AppState) => state.tags);
  const { count } = useSelector((state: AppState) => state.counter);
  const dispatch = useDispatch();

  const onAddTag = () => {
    dispatch(addTag(makeTag(5)));
  };

  return (
    <>
      <div>
        {tags.map((tag: any) => (
          <div key={tag}>
            <TagComp>{tag}</TagComp>
            <br />
          </div>
        ))}
      </div>
      <div>{count}</div>
      <BorderedButton onClick={onAddTag}>Add tag</BorderedButton>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Child />
          <Counter />
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
