import React from "react";

export default function Alert(props) {
  return (
    <>
      <div className="container mt-3">
        {props.alert && (
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{props.alert.type}</strong>: {props.alert.msg}
          </div>
        )}
      </div>
    </>
  );
}
