import LottieHandler from "@components/Feedback/LottieHandler/LottieHandler";

import { Container } from "react-bootstrap";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";


let statusText: string;

function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    statusText = error.statusText;
  }

  return (
    <Container>
      <div
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center flex-column">
        {isRouteErrorResponse(error) ? (
          <LottieHandler type="notFound" message={statusText} />
        ) : (
          <LottieHandler type="notFound"/>
        )}
        <Link to="/" replace={true}>
          Back
        </Link>
      </div>
    </Container>
  );
}

export default ErrorPage;
