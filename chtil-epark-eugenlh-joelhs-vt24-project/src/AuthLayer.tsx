import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { observer } from "mobx-react-lite";
import { Model } from "./model/Model";
import { Route, Routes } from "react-router-dom";
import CreateAccountPresenter from "./presenter/createAccountPresenter";
import LoginPresenter from "./presenter/loginPresenter";

export const AuthLayer = observer(function (props: {
  children: ReactJSXElement[];
  model: Model;
}) {
  return props.model.user ? (
    props.children
  ) : (
    <Routes>
      <Route
        path="/createAccount"
        element={<CreateAccountPresenter model={props.model} />}
      />
      <Route path="*" element={<LoginPresenter model={props.model} />} />
    </Routes>
  );
});
