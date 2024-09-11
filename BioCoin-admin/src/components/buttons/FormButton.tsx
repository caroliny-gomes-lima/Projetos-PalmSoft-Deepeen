import { useFormFull } from "form-full";
import React from "react";
// import { Button, Spinner } from "react-bootstrap";
import Button from "@material-ui/core/Button";

function FormButtonComponent({
  children,
  disabled,
  loading,
  name,
  label,
  action,
  onClick: propsOnClick,
  ...props
}: any): JSX.Element {
  const { onClick, formLoading, formDisabled } = useFormFull.button({
    action,
    onClick: propsOnClick,
  });

  return (
    <>
      <Button
        {...props}
        disabled={disabled || formDisabled}
        className="button"
        onClick={loading || formLoading ? null : onClick}
      >
        {label}
        {/* {loading || formLoading ? (
        <Spinner animation="border" size="sm" />
      ) : (
        children
      )} */}
      </Button>
    </>
  );
}

export default FormButtonComponent;
