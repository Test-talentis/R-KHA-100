import { Heading } from "@components/ui";
import { Input } from "@components/form";
import useRegister from "@hooks/useRegister";

import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";

function RegisterPage() {
  const {
    status,
    error,
    errors,
    handleSubmit,
    register,
    statusAvailablEmail,
    onBlurCheckEmailAvailable,
    submitFormRegister,
  } = useRegister();

  return (
    <Container>
      <Heading title="User Register" level={1} />
      <Row>
        {error && <Alert variant="danger">{error}</Alert>}
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(submitFormRegister)}>
            <Input
              label="FirstName"
              name="firstName"
              type="text"
              register={register}
              error={errors.firstName?.message}
            />
            <Input
              label="LastName"
              name="lastName"
              type="text"
              register={register}
              error={errors.lastName?.message}
            />
            <Input
              label="Email"
              name="email"
              type="text"
              register={register}
              onBlur={onBlurCheckEmailAvailable}
              formText={
                statusAvailablEmail === "checking"
                  ? "We are currently checking  the availability of this email. Please Wait.."
                  : ""
              }
              success={
                statusAvailablEmail === "available"
                  ? "The Email is Available"
                  : ""
              }
              disabled={statusAvailablEmail === "checking" ? true : false}
              error={
                errors.email?.message
                  ? errors.email.message
                  : statusAvailablEmail === "notAvailable"
                  ? "The Email is currently used."
                  : statusAvailablEmail === "failed"
                  ? "Currently we can't checking the Email because The Server has a problem"
                  : ""
              }
            />
            <Input
              label="Password"
              name="password"
              type="password"
              register={register}
              error={errors.password?.message}
            />
            <Input
              label="ConfirmPassword"
              name="confirmPassword"
              type="password"
              register={register}
              error={errors.confirmPassword?.message}
            />
            <Button
              variant="primary"
              type="submit"
              disabled={status === "pending" ? true : false}>
              {status === "pending" ? (
                <Spinner animation="border" size="sm" />
              ) : (
                "Register"
              )}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
