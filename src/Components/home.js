import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addData } from "../Redux/action";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import players from "./players";
import "./home.css";

function Home(props) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [campaignName, setcampaignName] = useState("");
  const [session, setSession] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
      setIsOpen(false);
   }
   
  useEffect(() => {
    setItems(players);
  }, []);

  const handleRowClick = (rowValue) => {
    console.log(rowValue);
    return rowValue;
  };

//  
  const filteredPlayers = (e) =>{
    const updatedList = items.filter(item => {
      console.log(item);
      return (
        item.campaignName.includes(e.target.value)
      );
    });
    setItems(updatedList)
  }
  return (
    <div className="App">
      <div>
        <button
          onClick={openModal}
          style={{
            border: "1.5px solid black",
            margin: "20px",
            color: "rgb(12, 127, 161)",
            backgroundColor: "white",
          }}
        >
          Add Player
        </button>
        <input
        type="text"
        placeholder="search.."
        onChange={filteredPlayers}
      />
      </div>

      <Modal show={isOpen} onHide={closeModal}>
        <Modal.Header>
          <Modal.Title>Add Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <p style={{color:"red"}}>All fields are required</p>
            <div className="input-field" >
              <label>First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label>Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label>Contact Number</label>
              <input
                type="text"
                value={contactNumber}
                onChange={(e) => setcontactNumber(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label>Campaign Name</label>
              <input
                type="text"
                value={campaignName}
                onChange={(e) => setcampaignName(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label>Session</label>
              <input
                type="text"
                value={session}
                onChange={(e) => setSession(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            style={{
              border: "1.5px solid black",
              margin: "20px",
              color: "rgb(12, 127, 161)",
              backgroundColor: "white",
            }}
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            style={{
              border: "1.5px solid black",
              margin: "20px",
              color: "rgb(12, 127, 161)",
              backgroundColor: "white",
            }}
            onClick={() => {          
              var obj = {
                firstName: firstName,
                lastName: lastName,
                contactNumber: contactNumber,
                campaignName: campaignName,
                sessions: session
              };
              const newArray = items.slice();
              newArray.push(obj);
              players.push(obj)
              setItems(newArray);
              closeModal();
           
          console.log(players);
          }
          }
          
          >
            Add
          </button>
        </Modal.Footer>
      </Modal>
      <table className="table container" style={{ width: "50%" }}>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Session</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((d, i) => (
            <tr key={i} onClick={() => props.addData(handleRowClick(d))}>
              <Link to="/details">
                <td style={{ color: "black", textDecoration: "none" }}>
                  {d.firstName} {d.lastName}
                </td>
              </Link>
              <td>{d.campaignName}</td>
              <td>
                <button
                  style={{
                    border: "1.5px solid black",
                    color: "rgb(12, 127, 161)",
                    backgroundColor: "white",
                  }}
                  onClick={() => {
                    const filteredUser = items.filter((user) => {
                      return user.firstName !== d.firstName;
                    });
                    setItems(filteredUser);
                  }}
                >
                  Delete
                </button>
                <button onClick={() => {console.log(handleRowClick(d))
                
                }}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addData: (data) => dispatch(addData(data)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
