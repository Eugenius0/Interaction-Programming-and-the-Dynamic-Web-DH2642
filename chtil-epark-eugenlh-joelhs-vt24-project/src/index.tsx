import { configure, observable } from "mobx";
import "./fetchProtection";
import { model } from "./model/Model";
import { createRoot } from "react-dom/client";
import Root from "./Root";
import { connectToFirebase } from "./firebaseModel";

configure({ enforceActions: "never" });
const reactiveModel = observable(model);

connectToFirebase(reactiveModel);

createRoot(document.getElementById("root")!).render(
  <Root model={reactiveModel} />
);
