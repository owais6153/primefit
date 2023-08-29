import React from "react";
import { Link } from 'react-router-dom';
import { 
    Card, 
    CardBody, 
    CardHeader, 
    CardTitle,
    Row, 
    Col,
    Button,
    FormGroup,
    Label,
    Input,
    Badge,
} from "reactstrap";

function SubscriptionPlans () {
    return (
        <>
            <div className="content">
				<Row>
					<Col md="12">
						<Card className="card-plain tpf-card">
							<CardHeader>
								<Row>
									<Col md="4">
										<CardTitle tag="h4">
                                            Subscription Plans
											<Badge color="info" pill>3</Badge>
										</CardTitle>
										{/* <p className="category">Sort by:</p> */}
										<div className="selectDown">
											<FormGroup>
												<Label for="sortBy">Sort by:</Label>
												<Input type="select" name="sortBy" id="SortsortByBy" >
													<option>Recent</option>
													<option>...</option>
												</Input>
											</FormGroup>
										</div>
									</Col>

									<Col>
										<div className="filter">

											<div className="addNew">
                                                <Link to="/admin/new-subscription">
                                                    <Button color="primary">
                                                        Create new Plans
                                                        <i className="fa fa-plus"></i>
                                                    </Button>
                                                </Link>
											</div>
										</div>
									</Col>
								</Row>
							</CardHeader>

							<CardBody>
                                <Row>
                                    <Col lg="4">
                                        <Card className="plans-card">
                                            <CardHeader>
                                                <Row className="mb-2">
                                                    <Col lg="6">
                                                        <h6>Basic</h6>
                                                        <h4>Free Trial</h4>
                                                    </Col>

                                                    <Col lg="6" className="d-flex justify-content-end align-items-center">
                                                        <Button className="btn-icon" color="info" size="sm">
                                                            <i>
                                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M7.9504 2.66666L0.891808 9.72525L0.587121 12.6198C0.536339 13.0006 0.866417 13.3307 1.24728 13.2799L4.14181 12.9753L11.2004 5.91666L7.9504 2.66666ZM13.2063 2.18423L11.6828 0.660797C11.2258 0.178375 10.4387 0.178375 9.95626 0.660797L8.53439 2.08267L11.7844 5.33267L13.2063 3.9108C13.6887 3.42838 13.6887 2.64127 13.2063 2.18423Z" fill="white"/>
                                                                </svg>
                                                            </i>
                                                        </Button>{` `}
                                                        <Button className="btn-icon" color="warning" size="sm">
                                                            <i>
                                                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.4293 0.902313H8.38241L8.1285 0.445282C8.02694 0.242157 7.79842 0.0898132 7.5953 0.0898132H4.67538C4.47225 0.0898132 4.21835 0.242157 4.14217 0.445282L3.91366 0.902313H0.866784C0.638268 0.902313 0.460534 1.10544 0.460534 1.30856V2.12106C0.460534 2.34958 0.638268 2.52731 0.866784 2.52731H11.4293C11.6324 2.52731 11.8355 2.34958 11.8355 2.12106V1.30856C11.8355 1.10544 11.6324 0.902313 11.4293 0.902313ZM1.80624 11.9472C1.83163 12.582 2.39022 13.0898 3.02499 13.0898H9.24569C9.88046 13.0898 10.439 12.582 10.4644 11.9472L11.023 3.33981H1.27303L1.80624 11.9472Z" fill="white"/>
                                                                </svg>
                                                            </i>
                                                        </Button>
                                                    </Col>
                                                </Row>

                                                <hr />
                                            </CardHeader>

                                            <CardBody>
                                                <ul className="list">
                                                    <li className="item">
                                                        <span className="icon">
                                                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M15.3605 0.911133L5.6007 10.6709L2.0382 7.07129C1.85265 6.92285 1.55578 6.92285 1.40734 7.07129L0.331169 8.14746C0.182732 8.2959 0.182732 8.59277 0.331169 8.77832L5.30383 13.7139C5.48937 13.8994 5.74914 13.8994 5.93468 13.7139L17.0675 2.58105C17.2159 2.43262 17.2159 2.13574 17.0675 1.9502L15.9913 0.911133C15.8429 0.725586 15.546 0.725586 15.3605 0.911133Z" fill="#188E40"/>
                                                            </svg>
                                                        </span>
                                                        <span className="itemText">Lifestyle Coaching: 3 Days</span>
                                                    </li>

                                                    <li className="item">
                                                        <span className="icon">
                                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M9.13535 7.16895L13.776 2.57129C14.0338 2.31348 14.0338 1.84082 13.776 1.58301L12.7018 0.508789C12.4439 0.250977 11.9713 0.250977 11.7135 0.508789L7.11582 5.14941L2.47519 0.508789C2.21738 0.250977 1.74473 0.250977 1.48691 0.508789L0.412695 1.58301C0.154882 1.84082 0.154882 2.31348 0.412695 2.57129L5.05332 7.16895L0.412695 11.8096C0.154882 12.0674 0.154882 12.54 0.412695 12.7979L1.48691 13.8721C1.74473 14.1299 2.21738 14.1299 2.47519 13.8721L7.11582 9.23145L11.7135 13.8721C11.9713 14.1299 12.4439 14.1299 12.7018 13.8721L13.776 12.7979C14.0338 12.54 14.0338 12.0674 13.776 11.8096L9.13535 7.16895Z" fill="#973737"/>
                                                            </svg>
                                                        </span>
                                                        <span className="itemText">Workout Programs</span>
                                                    </li>

                                                    <li className="item">
                                                        <span className="icon">
                                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M9.13535 7.16895L13.776 2.57129C14.0338 2.31348 14.0338 1.84082 13.776 1.58301L12.7018 0.508789C12.4439 0.250977 11.9713 0.250977 11.7135 0.508789L7.11582 5.14941L2.47519 0.508789C2.21738 0.250977 1.74473 0.250977 1.48691 0.508789L0.412695 1.58301C0.154882 1.84082 0.154882 2.31348 0.412695 2.57129L5.05332 7.16895L0.412695 11.8096C0.154882 12.0674 0.154882 12.54 0.412695 12.7979L1.48691 13.8721C1.74473 14.1299 2.21738 14.1299 2.47519 13.8721L7.11582 9.23145L11.7135 13.8721C11.9713 14.1299 12.4439 14.1299 12.7018 13.8721L13.776 12.7979C14.0338 12.54 14.0338 12.0674 13.776 11.8096L9.13535 7.16895Z" fill="#973737"/>
                                                            </svg>
                                                        </span>
                                                        <span className="itemText">Meal Options, Recipes </span>
                                                    </li>

                                                    <li className="item">
                                                        <span className="icon">
                                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M9.13535 7.16895L13.776 2.57129C14.0338 2.31348 14.0338 1.84082 13.776 1.58301L12.7018 0.508789C12.4439 0.250977 11.9713 0.250977 11.7135 0.508789L7.11582 5.14941L2.47519 0.508789C2.21738 0.250977 1.74473 0.250977 1.48691 0.508789L0.412695 1.58301C0.154882 1.84082 0.154882 2.31348 0.412695 2.57129L5.05332 7.16895L0.412695 11.8096C0.154882 12.0674 0.154882 12.54 0.412695 12.7979L1.48691 13.8721C1.74473 14.1299 2.21738 14.1299 2.47519 13.8721L7.11582 9.23145L11.7135 13.8721C11.9713 14.1299 12.4439 14.1299 12.7018 13.8721L13.776 12.7979C14.0338 12.54 14.0338 12.0674 13.776 11.8096L9.13535 7.16895Z" fill="#973737"/>
                                                            </svg>
                                                        </span>
                                                        <span className="itemText">Consistency Calendar</span>
                                                    </li>
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Col>

                                    <Col lg="4">
                                        <Card className="plans-card">
                                            <CardHeader>
                                                <Row className="mb-2">
                                                    <Col lg="6">
                                                        <h6>Basic</h6>
                                                        <h4>
                                                            $ 7.99
                                                            <small>/Month</small>
                                                        </h4>
                                                    </Col>

                                                    <Col lg="6" className="d-flex justify-content-end align-items-center">
                                                        <Button className="btn-icon" color="info" size="sm">
                                                            <i>
                                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M7.9504 2.66666L0.891808 9.72525L0.587121 12.6198C0.536339 13.0006 0.866417 13.3307 1.24728 13.2799L4.14181 12.9753L11.2004 5.91666L7.9504 2.66666ZM13.2063 2.18423L11.6828 0.660797C11.2258 0.178375 10.4387 0.178375 9.95626 0.660797L8.53439 2.08267L11.7844 5.33267L13.2063 3.9108C13.6887 3.42838 13.6887 2.64127 13.2063 2.18423Z" fill="white"/>
                                                                </svg>
                                                            </i>
                                                        </Button>{` `}
                                                        <Button className="btn-icon" color="warning" size="sm">
                                                            <i>
                                                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.4293 0.902313H8.38241L8.1285 0.445282C8.02694 0.242157 7.79842 0.0898132 7.5953 0.0898132H4.67538C4.47225 0.0898132 4.21835 0.242157 4.14217 0.445282L3.91366 0.902313H0.866784C0.638268 0.902313 0.460534 1.10544 0.460534 1.30856V2.12106C0.460534 2.34958 0.638268 2.52731 0.866784 2.52731H11.4293C11.6324 2.52731 11.8355 2.34958 11.8355 2.12106V1.30856C11.8355 1.10544 11.6324 0.902313 11.4293 0.902313ZM1.80624 11.9472C1.83163 12.582 2.39022 13.0898 3.02499 13.0898H9.24569C9.88046 13.0898 10.439 12.582 10.4644 11.9472L11.023 3.33981H1.27303L1.80624 11.9472Z" fill="white"/>
                                                                </svg>
                                                            </i>
                                                        </Button>
                                                    </Col>
                                                </Row>

                                                <hr />
                                            </CardHeader>

                                            <CardBody>
                                                <ul className="list">
                                                    <li className="item">
                                                        <span className="icon">
                                                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M15.3605 0.911133L5.6007 10.6709L2.0382 7.07129C1.85265 6.92285 1.55578 6.92285 1.40734 7.07129L0.331169 8.14746C0.182732 8.2959 0.182732 8.59277 0.331169 8.77832L5.30383 13.7139C5.48937 13.8994 5.74914 13.8994 5.93468 13.7139L17.0675 2.58105C17.2159 2.43262 17.2159 2.13574 17.0675 1.9502L15.9913 0.911133C15.8429 0.725586 15.546 0.725586 15.3605 0.911133Z" fill="#188E40"/>
                                                            </svg>
                                                        </span>
                                                        <span className="itemText">Lifestyle Coaching: 3 Days</span>
                                                    </li>

                                                    <li className="item">
                                                        <span className="icon">
                                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M9.13535 7.16895L13.776 2.57129C14.0338 2.31348 14.0338 1.84082 13.776 1.58301L12.7018 0.508789C12.4439 0.250977 11.9713 0.250977 11.7135 0.508789L7.11582 5.14941L2.47519 0.508789C2.21738 0.250977 1.74473 0.250977 1.48691 0.508789L0.412695 1.58301C0.154882 1.84082 0.154882 2.31348 0.412695 2.57129L5.05332 7.16895L0.412695 11.8096C0.154882 12.0674 0.154882 12.54 0.412695 12.7979L1.48691 13.8721C1.74473 14.1299 2.21738 14.1299 2.47519 13.8721L7.11582 9.23145L11.7135 13.8721C11.9713 14.1299 12.4439 14.1299 12.7018 13.8721L13.776 12.7979C14.0338 12.54 14.0338 12.0674 13.776 11.8096L9.13535 7.16895Z" fill="#973737"/>
                                                            </svg>
                                                        </span>
                                                        <span className="itemText">Workout Programs</span>
                                                    </li>

                                                    <li className="item">
                                                        <span className="icon">
                                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M9.13535 7.16895L13.776 2.57129C14.0338 2.31348 14.0338 1.84082 13.776 1.58301L12.7018 0.508789C12.4439 0.250977 11.9713 0.250977 11.7135 0.508789L7.11582 5.14941L2.47519 0.508789C2.21738 0.250977 1.74473 0.250977 1.48691 0.508789L0.412695 1.58301C0.154882 1.84082 0.154882 2.31348 0.412695 2.57129L5.05332 7.16895L0.412695 11.8096C0.154882 12.0674 0.154882 12.54 0.412695 12.7979L1.48691 13.8721C1.74473 14.1299 2.21738 14.1299 2.47519 13.8721L7.11582 9.23145L11.7135 13.8721C11.9713 14.1299 12.4439 14.1299 12.7018 13.8721L13.776 12.7979C14.0338 12.54 14.0338 12.0674 13.776 11.8096L9.13535 7.16895Z" fill="#973737"/>
                                                            </svg>
                                                        </span>
                                                        <span className="itemText">Meal Options, Recipes </span>
                                                    </li>

                                                    <li className="item">
                                                        <span className="icon">
                                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M9.13535 7.16895L13.776 2.57129C14.0338 2.31348 14.0338 1.84082 13.776 1.58301L12.7018 0.508789C12.4439 0.250977 11.9713 0.250977 11.7135 0.508789L7.11582 5.14941L2.47519 0.508789C2.21738 0.250977 1.74473 0.250977 1.48691 0.508789L0.412695 1.58301C0.154882 1.84082 0.154882 2.31348 0.412695 2.57129L5.05332 7.16895L0.412695 11.8096C0.154882 12.0674 0.154882 12.54 0.412695 12.7979L1.48691 13.8721C1.74473 14.1299 2.21738 14.1299 2.47519 13.8721L7.11582 9.23145L11.7135 13.8721C11.9713 14.1299 12.4439 14.1299 12.7018 13.8721L13.776 12.7979C14.0338 12.54 14.0338 12.0674 13.776 11.8096L9.13535 7.16895Z" fill="#973737"/>
                                                            </svg>
                                                        </span>
                                                        <span className="itemText">Consistency Calendar</span>
                                                    </li>
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Col>

                                    <Col lg="4">
                                        <Card className="plans-card">
                                            <CardHeader>
                                                <Row className="mb-2">
                                                    <Col lg="6">
                                                        <h6>Basic</h6>
                                                        <h4>
                                                            $ 19.99
                                                            <small>/Quaterly</small>
                                                        </h4>
                                                    </Col>

                                                    <Col lg="6" className="d-flex justify-content-end align-items-center">
                                                        <Button className="btn-icon" color="info" size="sm">
                                                            <i>
                                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M7.9504 2.66666L0.891808 9.72525L0.587121 12.6198C0.536339 13.0006 0.866417 13.3307 1.24728 13.2799L4.14181 12.9753L11.2004 5.91666L7.9504 2.66666ZM13.2063 2.18423L11.6828 0.660797C11.2258 0.178375 10.4387 0.178375 9.95626 0.660797L8.53439 2.08267L11.7844 5.33267L13.2063 3.9108C13.6887 3.42838 13.6887 2.64127 13.2063 2.18423Z" fill="white"/>
                                                                </svg>
                                                            </i>
                                                        </Button>{` `}
                                                        <Button className="btn-icon" color="warning" size="sm">
                                                            <i>
                                                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.4293 0.902313H8.38241L8.1285 0.445282C8.02694 0.242157 7.79842 0.0898132 7.5953 0.0898132H4.67538C4.47225 0.0898132 4.21835 0.242157 4.14217 0.445282L3.91366 0.902313H0.866784C0.638268 0.902313 0.460534 1.10544 0.460534 1.30856V2.12106C0.460534 2.34958 0.638268 2.52731 0.866784 2.52731H11.4293C11.6324 2.52731 11.8355 2.34958 11.8355 2.12106V1.30856C11.8355 1.10544 11.6324 0.902313 11.4293 0.902313ZM1.80624 11.9472C1.83163 12.582 2.39022 13.0898 3.02499 13.0898H9.24569C9.88046 13.0898 10.439 12.582 10.4644 11.9472L11.023 3.33981H1.27303L1.80624 11.9472Z" fill="white"/>
                                                                </svg>
                                                            </i>
                                                        </Button>
                                                    </Col>
                                                </Row>

                                                <hr />
                                            </CardHeader>

                                            <CardBody>
                                                <ul className="list">
                                                    <li className="item">
                                                        <span className="icon">
                                                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M15.3605 0.911133L5.6007 10.6709L2.0382 7.07129C1.85265 6.92285 1.55578 6.92285 1.40734 7.07129L0.331169 8.14746C0.182732 8.2959 0.182732 8.59277 0.331169 8.77832L5.30383 13.7139C5.48937 13.8994 5.74914 13.8994 5.93468 13.7139L17.0675 2.58105C17.2159 2.43262 17.2159 2.13574 17.0675 1.9502L15.9913 0.911133C15.8429 0.725586 15.546 0.725586 15.3605 0.911133Z" fill="#188E40"/>
                                                            </svg>
                                                        </span>
                                                        <span className="itemText">Lifestyle Coaching: 3 Days</span>
                                                    </li>

                                                    <li className="item">
                                                        <span className="icon">
                                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M9.13535 7.16895L13.776 2.57129C14.0338 2.31348 14.0338 1.84082 13.776 1.58301L12.7018 0.508789C12.4439 0.250977 11.9713 0.250977 11.7135 0.508789L7.11582 5.14941L2.47519 0.508789C2.21738 0.250977 1.74473 0.250977 1.48691 0.508789L0.412695 1.58301C0.154882 1.84082 0.154882 2.31348 0.412695 2.57129L5.05332 7.16895L0.412695 11.8096C0.154882 12.0674 0.154882 12.54 0.412695 12.7979L1.48691 13.8721C1.74473 14.1299 2.21738 14.1299 2.47519 13.8721L7.11582 9.23145L11.7135 13.8721C11.9713 14.1299 12.4439 14.1299 12.7018 13.8721L13.776 12.7979C14.0338 12.54 14.0338 12.0674 13.776 11.8096L9.13535 7.16895Z" fill="#973737"/>
                                                            </svg>
                                                        </span>
                                                        <span className="itemText">Workout Programs</span>
                                                    </li>

                                                    <li className="item">
                                                        <span className="icon">
                                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M9.13535 7.16895L13.776 2.57129C14.0338 2.31348 14.0338 1.84082 13.776 1.58301L12.7018 0.508789C12.4439 0.250977 11.9713 0.250977 11.7135 0.508789L7.11582 5.14941L2.47519 0.508789C2.21738 0.250977 1.74473 0.250977 1.48691 0.508789L0.412695 1.58301C0.154882 1.84082 0.154882 2.31348 0.412695 2.57129L5.05332 7.16895L0.412695 11.8096C0.154882 12.0674 0.154882 12.54 0.412695 12.7979L1.48691 13.8721C1.74473 14.1299 2.21738 14.1299 2.47519 13.8721L7.11582 9.23145L11.7135 13.8721C11.9713 14.1299 12.4439 14.1299 12.7018 13.8721L13.776 12.7979C14.0338 12.54 14.0338 12.0674 13.776 11.8096L9.13535 7.16895Z" fill="#973737"/>
                                                            </svg>
                                                        </span>
                                                        <span className="itemText">Meal Options, Recipes </span>
                                                    </li>

                                                    <li className="item">
                                                        <span className="icon">
                                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M9.13535 7.16895L13.776 2.57129C14.0338 2.31348 14.0338 1.84082 13.776 1.58301L12.7018 0.508789C12.4439 0.250977 11.9713 0.250977 11.7135 0.508789L7.11582 5.14941L2.47519 0.508789C2.21738 0.250977 1.74473 0.250977 1.48691 0.508789L0.412695 1.58301C0.154882 1.84082 0.154882 2.31348 0.412695 2.57129L5.05332 7.16895L0.412695 11.8096C0.154882 12.0674 0.154882 12.54 0.412695 12.7979L1.48691 13.8721C1.74473 14.1299 2.21738 14.1299 2.47519 13.8721L7.11582 9.23145L11.7135 13.8721C11.9713 14.1299 12.4439 14.1299 12.7018 13.8721L13.776 12.7979C14.0338 12.54 14.0338 12.0674 13.776 11.8096L9.13535 7.16895Z" fill="#973737"/>
                                                            </svg>
                                                        </span>
                                                        <span className="itemText">Consistency Calendar</span>
                                                    </li>
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
							</CardBody>
						</Card>
					</Col>
				</Row>
            </div>
        </>
    )
}

export default SubscriptionPlans;