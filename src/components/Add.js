import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { UserConsumer } from "../locale/common";
export function Add() {
  const dispatch = useDispatch();
  const backButton = useSelector(state => state.backButton);
  const data = useSelector(state => state.editDetails);
  const validated = useSelector(state => state.validated);
  let initialValue = {
    description: "",
    date: "",
    choice: false,
    amount: ""
  };
  if (data) {
    initialValue = {
      description: data[0].description,
      date: data[0].date,
      choice: data[0].type,
      amount: data[0].amount
    };
  }

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      dispatch({ type: "FormValid" });
    } else {
      if (data) {
        const saveData = {
          id: data[0].id,
          date: form.date.value,
          description: form.description.value,
          type: form.choice.value,
          amount: form.amount.value
        };
        dispatch({ type: "UPDATE", value: saveData });
      } else {
        const saveData = {
          id: Math.random(),
          date: form.date.value,
          description: form.description.value,
          type: form.choice.value,
          amount: form.amount.value
        };
        dispatch({ type: "SAVE", value: saveData });
      }
    }
  };
  return (
    <UserConsumer>
      {theme => {
        return (
          <>
            <h2>{data ? theme.lbl_edit_details : theme.lbl_add_details}</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="exampleForm.description">
                <Form.Label> {theme.lbl_description} </Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="Description"
                  defaultValue={
                    initialValue.description ? initialValue.description : ""
                  }
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {theme.lbl_error_description}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="exampleForm.date">
                <Form.Label> {theme.lbl_date} </Form.Label>
                <Form.Control
                  name="date"
                  type="date"
                  placeholder="Date"
                  required
                  defaultValue={initialValue.date ? initialValue.date : ""}
                />
                <Form.Control.Feedback type="invalid">
                  {theme.lbl_error_date}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="exampleForm.choice">
                <Form.Label> {theme.lbl_incexp} </Form.Label>
                <Form.Check
                  type="radio"
                  label="Income"
                  id="income"
                  name="choice"
                  defaultChecked={initialValue.choice ? true : false}
                  defaultValue={initialValue.choice ? initialValue.choice : ""}
                />
                <Form.Check
                  type="radio"
                  label="Expense"
                  id="expense"
                  name="choice"
                  defaultChecked={!initialValue.choice ? true : false}
                  defaultValue={initialValue.choice ? initialValue.choice : ""}
                />
                <Form.Control.Feedback type="invalid">
                  {theme.lbl_error_option}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="exampleForm.amount">
                <Form.Label> {theme.lbl_amount} </Form.Label>
                <Form.Control
                  name="amount"
                  type="number"
                  placeholder="Amount"
                  required
                  defaultValue={initialValue.amount ? initialValue.amount : ""}
                />
                <Form.Control.Feedback type="invalid">
                  {theme.lbl_error_amount}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Row}>
                <Col xs="4">
                  <Button variant="primary" type="submit">
                    {theme.lbl_submit}
                  </Button>
                </Col>
                <Col xs="4">
                  <Button variant="primary" type="reset">
                  {theme.lbl_reset}
                  </Button>
                </Col>
                <Col xs="4">
                  {backButton && (
                    <Button
                      variant="primary"
                      onClick={() => dispatch({ type: "LIST" })}
                      type="button"
                    >
                      {theme.back}
                    </Button>
                  )}
                </Col>
              </Form.Group>
            </Form>
          </>
        );
      }}
    </UserConsumer>
  );
}
