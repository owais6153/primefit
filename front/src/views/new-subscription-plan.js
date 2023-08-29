import React from "react";
import { Link } from 'react-router-dom';
import { 
    Card, 
    CardBody, 
    Row, 
    Col,
    Button,
    FormGroup,
    Label,
    Input,
} from "reactstrap";

function NewSubscriptionPlan () {
    return (
        <>
            <div className="content">
                <Card className="breadCrumb">
					<CardBody>
						<div className="tpf-horizontal-card">
							<Row>
                                <Col xl="4">
                                    <div className="d-flex">
                                        <div>
                                            <Link to="/admin/subscription-plans">
                                            <figure className="figImage d-flex align-items-center">
                                                <svg width="50" height="50" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle opacity="0.2" cx="18" cy="18" r="18" fill="#4F76D9"/>
                                                    <path d="M13.6475 16.758C13.3486 17.0568 13.3486 17.5549 13.6475 17.8537L20.0889 24.3283C20.4209 24.6271 20.9189 24.6271 21.2178 24.3283L21.9814 23.5646C22.2803 23.2658 22.2803 22.7678 21.9814 22.4357L16.8682 17.2892L21.9814 12.176C22.2803 11.8439 22.2803 11.3459 21.9814 11.0471L21.2178 10.2834C20.9189 9.98456 20.4209 9.98456 20.0889 10.2834L13.6475 16.758Z" fill="white"/>
                                                </svg>
                                            </figure>
                                            </Link>
                                        </div>

                                        <div className="pl-3 flex-shrink-1 w-100 d-flex align-items-center">
                                            <div className="title">
                                                <h5 className="card-title font-weight-bold">New Subscription Plan</h5>
                                                <ul className="breadCrumbList">
                                                    <li><a path="/admin/dashboard" >Home</a></li>
                                                    <li><a path="/admin/Users" >Subscription Plans</a></li>
                                                    <li><a path="/admin/Users" >New</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col xl="8">
                                    <div className="filter h-100 d-flex align-items-center justify-content-end">
                                        <div className="addNew">
                                            <Button color="default">
                                                discard
                                                <i className="fa fa-trash warning"/>{" "}
                                            </Button>

                                            <Button color="primary">
                                                Create new Recipe
                                                <i className="white">
                                                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.98584 14.4586C9.39209 14.4586 9.73584 14.1461 9.73584 13.7086V7.45863H12.9546C13.6421 7.45863 13.9546 6.67738 13.4858 6.17738L8.01709 0.677383C7.70459 0.396133 7.23584 0.396133 6.95459 0.677383L1.45459 6.17738C0.98584 6.67738 1.29834 7.45863 1.98584 7.45863H5.23584V13.7086C5.23584 14.1461 5.54834 14.4586 5.98584 14.4586H8.98584Z" fill="white"/>
                                                    </svg>
                                                </i>
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
						</div>
					</CardBody>
				</Card>

                <Card className="guide-card">
                    <CardBody>
                        <form>
                            <div className="form-row">
                                <FormGroup className="col-lg-12">
                                    <Label for="title">Title</Label>
                                    <Input type="text"  id="title" placeholder="Type Here"/>
                                </FormGroup>

                                <FormGroup className="col-lg-6">
                                    <Label for="price">Price</Label>
                                    <Input type="text"  id="price" placeholder="Type Here"/>
                                </FormGroup>

                                <FormGroup className="col-lg-6">
                                    <Label for="payment-schedule">Payment Schedule</Label>
                                    <Input type="select" name="payment-schedule" id="payment-schedule" >
                                        <option>Select</option>
                                        <option>...</option>
                                    </Input>
                                </FormGroup>

                                <hr />

                                <FormGroup className="col-lg-6">
                                    <Label for="title1">Feature Title #1</Label>
                                    <Input type="text"  id="title1" placeholder="Type Here"/>
                                </FormGroup>

                                <div className="col-lg-6 d-flex flex-column justify-content-center">
                                    <h4 className="mt-3 mb-0">Availability</h4>
                                    <FormGroup check className="mt-0">
                                        <Label className="form-check-label mr-4">
                                            <Input className="form-check-input" type="checkbox" value="" checked/>
                                            Yes
                                            <span className="form-check-sign">
                                            <span className="check"></span>
                                            </span>
                                        </Label>

                                        <Label className="form-check-label ">
                                            <Input className="form-check-input" type="checkbox" value=""/>
                                            No
                                            <span className="form-check-sign">
                                            <span className="check"></span>
                                            </span>
                                        </Label>
                                    </FormGroup>
                                </div>

                                <FormGroup className="col-lg-6">
                                    <Label for="title2">Feature Title #2</Label>
                                    <Input type="text"  id="title2" placeholder="Type Here"/>
                                </FormGroup>

                                <div className="col-lg-6 d-flex flex-column justify-content-center">
                                    <h4 className="mt-3 mb-0">Availability</h4>
                                    <FormGroup check className="mt-0">
                                        <Label className="form-check-label mr-4">
                                            <Input className="form-check-input" type="checkbox" value="" checked/>
                                            Yes
                                            <span className="form-check-sign">
                                            <span className="check"></span>
                                            </span>
                                        </Label>

                                        <Label className="form-check-label ">
                                            <Input className="form-check-input" type="checkbox" value=""/>
                                            No
                                            <span className="form-check-sign">
                                            <span className="check"></span>
                                            </span>
                                        </Label>
                                    </FormGroup>
                                </div>
                                
                                <div className="addFeature">
                                    <Button className="btn-simple" color="primary">
                                        <text className="white">Add Feature</text>
                                        <i className="fa fa-plus primary"></i>
                                    </Button>
                                </div>

                                <div className="col-lg-12">
                                    <div className="d-flex justify-content-end align-items-center w-100">
                                        <Button type="reset" color="default">
                                            discard
                                            <i className="fa fa-trash warning"/>{" "}
                                        </Button>

                                        <Button type="submit" color="primary">
                                            Create new Recipe
                                            <i className="white">
                                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.98584 14.4586C9.39209 14.4586 9.73584 14.1461 9.73584 13.7086V7.45863H12.9546C13.6421 7.45863 13.9546 6.67738 13.4858 6.17738L8.01709 0.677383C7.70459 0.396133 7.23584 0.396133 6.95459 0.677383L1.45459 6.17738C0.98584 6.67738 1.29834 7.45863 1.98584 7.45863H5.23584V13.7086C5.23584 14.1461 5.54834 14.4586 5.98584 14.4586H8.98584Z" fill="white"/>
                                                </svg>
                                            </i>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default NewSubscriptionPlan;