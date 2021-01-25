import React from "react";
import { Route, RouteProps } from "react-router-dom";

import Layout from "components/Layout";

/**
 * @component
 * The goal of this HoC component is to extend the
 * react-router-dom Route component to receive two
 * components (result and form) and render a layout.
 *
 * I'm still thinking how can I reduce the need
 * for this HoC and if it's a better implementation.
 */

interface CalculatorRouteProps extends RouteProps {
  form: React.ElementType;
  result: React.ElementType;
}

const CalculatorRoute = ({
  component: Component,
  form: Form,
  result: Result,
  ...rest
}: CalculatorRouteProps) => {
  return (
    <Route
      {...rest}
      render={(props) => <Layout form={Form} result={Result} {...props} />}
    />
  );
};

export default CalculatorRoute;
