import LottieHandler from "@components/Feedback/LottieHandler/LottieHandler";
import React from "react";
import { Col, Row } from "react-bootstrap";

type TGridList<T> = {
  data: T[];
  renderData: (data: T) => React.ReactNode;
  positionContent?: string,
  emptyMessage: string;
};

type hasId = {
  id?: number;
};

function GridList<T extends hasId>({
  data,
  renderData,
  emptyMessage,
  positionContent
}: TGridList<T>) {
  const displayData =
    data.length > 0
      ? data.map((dataItem) => {
          return (
            <Col
              xs={12}
              md={4}
              key={dataItem.id}
              className={`d-flex justify-content-center mb-5 mt-2`}>
              {renderData(dataItem)}
            </Col>
          );
        })
      : <LottieHandler type="shopCartEmpty" message={emptyMessage}/>
  return <Row className={`${positionContent}`}>{displayData}</Row>;
}

export default GridList;
