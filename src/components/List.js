import React from "react";
import { Row, Col, Button, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { UserConsumer } from "../locale/common";
export function List({ details }) {
  const dispatch = useDispatch();
  return (
    <>
      <UserConsumer>
        {theme => {
          console.log("theme", theme);
          return (
            <>
              {/* {addButton && (
                
              )} */}
              <Row>
                <Col xs="11">
                  <h2>{theme.lbl_listdetails}</h2>
                </Col>
                <Col xs="1">
                  <Button onClick={() => dispatch({ type: "ADD" })}>
                    {theme.lbl_add}
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col className="content-scroll">
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <td>{theme.lbl_slno}</td>
                        <td>{theme.lbl_date}</td>
                        <td>{theme.lbl_description}</td>
                        <td>{theme.lbl_incexp}</td>
                        <td>{theme.lbl_amount}</td>
                        <td align="center" colSpan={2}>
                          {theme.lbl_action}
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {details.map((data, index) => (
                        <tr key={data.id}>
                          <td>{index + 1}</td>
                          <td>{data.date}</td>
                          <td>{data.description}</td>
                          <td>{data.type ? "Income" : "Expense"}</td>
                          <td>{data.amount}</td>
                          <td align="center">
                            <Button
                              onClick={() =>
                                dispatch({ type: "EDIT", value: data.id })
                              }
                            >
                              {theme.lbl_edit}
                            </Button>
                          </td>
                          <td align="center">
                            <Button
                              onClick={() =>
                                dispatch({ type: "DELETE", value: data.id })
                              }
                            >
                              {theme.lbl_delete}
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </>
          );
        }}
      </UserConsumer>
    </>
  );
}
