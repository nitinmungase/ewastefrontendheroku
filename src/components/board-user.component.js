import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import UserService from "../services/user.service";
import authService from "../services/auth.service";
import EventBus from "../common/EventBus";

const BoardUser = () => {
  const [currentDetails, setcurrentDetails] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [weight, setWeight] = useState("");
  const [id, setId] = useState("");
  const [smShow, setSmShow] = useState(false);
  const [show, setShow] = useState(false);
  const currentUser = authService.getCurrentUser();
  let usernameid = currentUser.id;

  useEffect(() => {
    getallrecords();
  }, []);

  //Get all Records from data
  const getallrecords = () => {
    const currentUser = authService.getCurrentUser();
    UserService.getUserBoard(currentUser.id).then(
      (response) => {
        setcurrentDetails(response.data);
      },
      (error) => {
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
          error.message ||
          error.toString();
        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  };

  //Edit Function to Update Records
  const selectitem = (getitems) => {
    console.log(getitems);
    setTitle(getitems.title);
    setDate(getitems.date);
    setQuantity(getitems.quantity);
    setWeight(getitems.weight);
    setId(getitems.id);
  };
  function updateRecord(event) {
    let items = { title, date, quantity, weight, id, usernameid };
    UserService.update(items).then((response) => {
      getallrecords();
    });
    setSmShow(false);
    event.preventDefault();
  }

  //Function to delete record
  function deleterecord(id) {
    UserService.delete(id).then((response) => {
      getallrecords();
    });
  }

  //creating func to post data on server
  const [item, setItem] = useState({
    title: "",
    date: "",
    quantity: "",
    weight: "",
    usernameid: currentUser.id,
  });
  function submit(e) {
    UserService.create(item).then((response) => {
      getallrecords();
    });
    setShow(false);
    e.preventDefault();
    setItem("");
  }
  const handle = (event) => {
    //handle for add new item
    const newitem = { ...item };
    newitem[event.target.id] = event.target.value;
    setItem(newitem);
  };

  return (
    <div style={{ paddingTop: 180 }}>
      <div className="container-fluid">
        <header className="jumbotron me-6 pe-6">
          <div className="container-fluid ">
            <div className="crud shadow-lg p-5 mb-3 mt-3 bg-body rounded">
              <div className="text-center" style={{ color: "#198754" }}>
                <h2>
                  <b>Ewaste Record Details</b>
                </h2>
              </div>
              <div className="text-end m-3">
                <Button variant="success" onClick={() => setShow(true)}>
                  Schedule Ewaste Pickup
                </Button>
              </div>
              <div className="row">
                <div className="table-responsive ">
                  <table className="table table-striped table-hover table-bordered">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>E-Waste Name</th>
                        <th>Pick Up Date</th>
                        <th>Quantity</th>
                        <th>Weight</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentDetails.map((getitems) => (
                        <tr key={getitems.id}>
                          <td>{getitems.id}</td>
                          <td>{getitems.title}</td>
                          <td>{getitems.date}</td>
                          <td>{getitems.quantity}</td>
                          <td>{getitems.weight}</td>
                          <td>
                            <button
                              className="btn btn-light"
                              onClick={() => setSmShow(true)}
                            >
                              <i
                                style={{ color: "#198754" }}
                                className="material-icons"
                                onClick={() => {
                                  selectitem(getitems);
                                }}
                              >
                                &#xE254;
                              </i>
                            </button>
                            <button className="btn btn-light">
                              <i
                                style={{ color: "red" }}
                                onClick={() => {
                                  deleterecord(getitems.id);
                                }}
                                className="material-icons"
                              >
                                &#xE872;
                              </i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Ewaste Edit Modal*/}
        <Modal show={smShow} onHide={() => setSmShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Record</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-2">
            <div className="alert alert-success" role="alert">
              <div className="register-container">
                <form onSubmit={updateRecord}>
                  <div className="form-group">
                    <label htmlFor="username">E-Waste Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required="required"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="username">Pick-Up Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required="required"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="username">Quantity</label>
                    <input
                      type="Number"
                      className="form-control"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      required="required"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="username">Weight</label>
                    <input
                      type="Number"
                      className="form-control"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required="required"
                    />
                  </div>
                  <Button type="Submit" className="btn btn-success my-1 mx-1">
                    Update Record
                  </Button>
                </form>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="p-1">
            <Button variant="secondary" onClick={() => setSmShow(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Ewaste Edit Modal Finish*/}

        {/* Ewaste Add Modal*/}
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Record</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-2">
            <div className="alert alert-success p-1" role="alert">
              <div className="register-container p-1">
                <form onSubmit={(e) => submit(e)}>
                  <label htmlFor="username">E Waste Name</label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Enter E-Waste Name"
                      onChange={(e) => handle(e)}
                      value={item.title}
                      required
                    />
                  </div>
                  <div className="form-group ">
                    <label htmlFor="username">Pick-Up Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      placeholder="Enter Pick Up Date"
                      onChange={(e) => handle(e)}
                      value={item.date}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Quantity</label>
                    <input
                      type="Number"
                      className="form-control"
                      id="quantity"
                      placeholder="Enter Quantity"
                      onChange={(e) => handle(e)}
                      value={item.quantity}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Weight</label>
                    <input
                      type="Number"
                      className="form-control"
                      id="weight"
                      placeholder="Enter Weight in grams"
                      onChange={(e) => handle(e)}
                      value={item.weight}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-success my-1 mx-1">
                    Add Record
                  </button>
                </form>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="p-1">
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Ewaste Add Modal Finish*/}
      </div>
    </div>
  );
};

export default BoardUser;
