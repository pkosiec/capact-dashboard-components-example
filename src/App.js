import React from "react";
import "./App.css";
import { ActionListContainer, ErrorAlert, useDeleteActionMutation } from "@capactio/react-components";
import { message } from "antd";



function App() {
  const deleteActionMutation = useDeleteActionMutation();

  const deleteAction = async (name) => {
    try {
      await deleteActionMutation.mutateAsync({ actionName: name });
      message.success(`Successfully scheduled Action '${name}' deletion`);
    } catch (err) {
      message.error(
        `Failed to delete Action. Got error: ${err.name}: ${err.message}`
      );
    }
  }

  const alertAction = (name) => alert(name);

  return (
    <div>
      <ErrorAlert errorMessage="Foo" />

      <ActionListContainer
        refetchInterval={1000}
        // Change this action to "deleteAction" if you want :)
        onActionClick={alertAction}
      />
    </div>
  );
}

export default App;
