import React from 'react'
import { useSelector } from 'react-redux'
import {
  Form,
  Row,
  Col,
  Card,
  DropdownButton,
  Dropdown,
  InputGroup,
} from 'react-bootstrap'
import { useInput } from '../../shared/useInput'

import './FXCalculator.scss'

const FXCalculator = () => {
  const {
    value: currencyValue,
    bind: bindCurrencyValue,
    setValue: setCurrencyValue,
  } = useInput('EUR')
  const { value: notionalValue, bind: bindNotionalValue } = useInput('')

  const rates = useSelector(state => state.rates)

  return (
    <Row className="fx-calculator">
      <Col>
        <Card bg="secondary" text="white" className="fx-calculator-card">
          <Card.Header>Currency, Notional Value</Card.Header>
          <Card.Body className="card-body">
            <InputGroup className="mb-3 input-group">
              <DropdownButton
                className="calc-dropdown-button"
                variant="info"
                title={currencyValue}
                {...bindCurrencyValue}
              >
                <Dropdown.Menu className="calc-dropdown-menu">
                  {Object.keys(rates).map(rate => (
                    <Dropdown.Item
                      key={rate}
                      onClick={() => setCurrencyValue(rate)}
                      active={currencyValue === rate}
                    >
                      {rate}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </DropdownButton>
              <Form.Control
                placeholder="Notional Value"
                {...bindNotionalValue}
              />
            </InputGroup>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="primary" text="white" className="fx-calculator-card">
          <Card.Header>Calculated Value (in USD)</Card.Header>
          <Card.Body className="card-body">
            <Card.Text>${rates[currencyValue] * notionalValue}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default FXCalculator
