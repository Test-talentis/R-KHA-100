import { Heading } from "@components/ui";
import { ProductInfo } from "@components/Ecomme";
import { Loading } from "@components/Feedback";
import LottieHandler from "@components/Feedback/LottieHandler/LottieHandler";
import useOrders from "@hooks/useOrders";
import { Container, Modal, Table } from "react-bootstrap";

function OrdersPage() {
  const {
    placeOrders,
    status,
    error,
    showModal,
    selectedProduct,
    closeModal,
    showOrderDetail,
  } = useOrders();

  const displayOrders = placeOrders.map((order) => {
    return (
      <tr key={order.id}>
        <td>#{order.id}</td>
        <td
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => showOrderDetail(order.id)}>
          {order.items.length}/items
        </td>
        <td>{order.subTotal.toFixed(2)}DH</td>
      </tr>
    );
  });

  return (
    <Container>
    <Loading status={status} error={error}>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Proudct Details:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct.map((product) => {
            return (
              <ProductInfo
                title={product.title}
                img={product.img}
                price={product.price}
                quantity={product.quantity}
                direction="row"
                style={{marginBottom:"10px"}}
                isAnimated={false}
              />
            );
          })}
        </Modal.Body>
      </Modal>
      <Heading title="Orders" level={1}/>
      {placeOrders.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#ID</th>
              <th>Products</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>{displayOrders}</tbody>
        </Table>
      ) : (
        <LottieHandler type="shopCartEmpty" message="There are no Product" />
      )}
    </Loading>
    </Container>
  );
}

export default OrdersPage;
