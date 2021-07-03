import React from "react";
import { useHistory } from "react-router-dom";

export default function ErrorMessage() {
  let history = useHistory();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="inline-block">
        <h1 className="my-8">ErrorMessage</h1>

        <button
          className="animate-bounce flex justify-center mx-auto"
          onClick={() => history.goBack()}
        >
          Back
        </button>
      </div>
    </div>
  );
}
