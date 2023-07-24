import React from "react";

import { MDBBadge, MDBBtn, MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";

const Container = styled.div`
    height: 100vh;
    background-color: #08a3dc;
    display: flex;
    flex-direction: column;
`;

const Admin_users = () => {
    const userList = useSelector((state) => state.user.initialState);
    console.log(userList);

    axios
        .get("http://localhost:4000/user/profiles", {
            headers: {
                Authorization: "Bearer <token>",
            },
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });

    return (
        <MDBTable align="middle">
            <Container>
                <MDBTableBody style={{ backgroundColor: "grey", height: "100%", overflow: "auto" }}>
                    {userList.map((user) => (
                        <tr style={{ display: "flex", justifyContent: "space-between" }}>
                            <td>
                                <div className="d-flex align-items-center">
                                    <img
                                        src="https://admitoffer.com/images/site/user-img.png"
                                        alt=""
                                        style={{ width: "45px", height: "45px" }}
                                        className="rounded-circle"
                                    />
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">
                                            {user.firstName} {user.secondName}
                                        </p>
                                        <p className="text-muted mb-0">{user.userEmail}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="fw-bold mb-1">Password</p>
                                <p className="fw-normal mb-1">{user.userPassword}</p>
                            </td>
                            <td>
                                <p className="fw-bold mb-1">Phone:</p>
                                <p className="fw-normal mb-1">{user.userPhone}</p>
                            </td>
                            <td>
                                <MDBBadge color="success" pill>
                                    Active
                                </MDBBadge>
                            </td>
                            <td>
                                <MDBBtn color="red" rounded size="sm">
                                    Edit
                                </MDBBtn>
                            </td>
                            <td>
                                <MDBBtn color="red" rounded size="sm">
                                    Remove
                                </MDBBtn>
                            </td>
                        </tr>
                    ))}
                </MDBTableBody>
            </Container>
        </MDBTable>
    );
};

export default Admin_users;
