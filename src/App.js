import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { UserProvider } from "./locale/common";
import { List } from "./components/List";
import { Add } from "./components/Add";
import en from './locale/en.json';
import fr from './locale/fr.json';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
export default function App() {
  const dispatch = useDispatch();
  const isEditAddmode = useSelector(state => state.isEditAddmode);
  const details = useSelector(state => state.details);
  const languageContent = useSelector(state => state.language);
  return (
    <>
      <UserProvider value={languageContent}>
        <Container>
          <Row>
            <Col xs="9">
              <h1>{languageContent.title}</h1>
            </Col>
            <Col xs="3">
              language :{" "}
              <Button onClick={() => dispatch({'type':"LOCALE",'value': en})}>
                {en.english}
              </Button> || 
              <Button onClick={() => dispatch({'type':"LOCALE",'value': fr})}>
                {en.french}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>{!isEditAddmode && <List details={details} />}</Col>
          </Row>
          <Row>
            <Col>{isEditAddmode && <Add />}</Col>
          </Row>
        </Container>
      </UserProvider>
    </>
  );
}
