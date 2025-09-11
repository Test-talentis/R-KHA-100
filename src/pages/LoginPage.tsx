import { Heading } from "@components/ui";
import { Input } from "@components/form";
import useLogin from "@hooks/useLogin";

import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

function LoginPage() {
  const {
    errors,
    status,
    error,
    accessToken,
    register,
    handleSubmit,
    submitForm,
    searchParams,
  } = useLogin();
  if (accessToken) {
    <Navigate to="/" />;
  }
  return (
    <>
      <Heading title="User Login" level={1} />
      {error && <Alert variant="danger">{error}</Alert>}
      {searchParams.get("message") === "account_created" ? (
        <Alert variant="success">"Account Created."</Alert>
      ) : (
        ""
      )}
      {searchParams.get("message") === "login_required" ? (
        <Alert variant="danger">"login is Required"</Alert>
      ) : (
        ""
      )}
      {}
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              type="email"
              label="Email"
              name="email"
              register={register}
              error={errors.email?.message}
            />
            <Input
              type="password"
              label="password"
              name="password"
              register={register}
              error={errors.password?.message}
            />
            <Button
              type="submit"
              variant="primary"
              disabled={status === "pending" ? true : false}>
              {status === "pending" ? (
                <Spinner variant="border" size="sm" />
              ) : (
                "Sing In"
              )}
            </Button>
          </Form>
          <p className="text-center">
            you don't have an Account? <Link to="/register">Register</Link>
          </p>
        </Col>
      </Row>
    </>
  );
}

export default LoginPage;
