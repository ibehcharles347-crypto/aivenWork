import { useState } from "react";
import API from "../util/api";
import "./loginform.css";
import Spinner from 'react-bootstrap/Spinner';
import Pagination from "react-bootstrap/Pagination";


const UsersTable = ({ users, refresh }) => {
    const usersPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(users.length / usersPerPage);

    const startIndex = (currentPage - 1) * usersPerPage;
    const currentUsers = users.slice(startIndex, startIndex + usersPerPage);

    const [editingId, setEditingId] = useState(null);
    const [editLoadingId, setEditLoadingId] = useState(null);
    const [updateLoadingId, setUpdateLoadingId] = useState(null);
    const [deleteLoadingId, setDeleteLoadingId] = useState(null);
    const [editData, setEditData] = useState({ name: "", email: "" });

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleChange = (e) => {
        setEditData({
            ...editData,
            [e.target.name]: e.target.value
        });
    };
    const handleDelete = async (id) => {
        setDeleteLoadingId(id);
        await API.delete(`/api/users/${id}`);
        setDeleteLoadingId(null);
        refresh();
    };

    const handleEdit = (user) => {
        setEditLoadingId(user.id);
        setTimeout(() => {
            setEditingId(user.id);
            setEditData({ name: user.name, email: user.email });
            setEditLoadingId(null);
        }, 500);
    };

    const handleUpdate = async (id) => {
        setUpdateLoadingId(id);
        await API.put(`/api/users/${id}`, editData);
        setEditingId(null);
        setUpdateLoadingId(null);
        refresh();
    };

    return (<div className="users-box">
        <div className="gap-3 d-flex flex-wrap justify-content-center">

            {currentUsers.length === 0 ? (
                <div className="text-center p-4 text-muted shadow rounded bg-light">
                    No users available
                </div>
            ) : (
                currentUsers.map((user) => (
                    <div
                        key={user.id}
                        className="gap-3 mb-3 card-width"
                    >
                        <div className="card shadow border-0 user-card d-flex align-items-center gap-3 p-4">
                            <img
                                src={`http://localhost:5000/uploads/${user.image}`}
                                alt={user.name}
                                className="rounded-circle border user-image"
                                style={{ width: "60px", height: "60px", objectFit: "cover" }}
                            />

                            {/* USER INFO */}
                            <div className="flex-grow-1">
                                {editingId === user.id ? (
                                    <>
                                        <input
                                            className="form-control mb-2"
                                            name="name"
                                            value={editData.name}
                                            onChange={handleChange}
                                        />

                                        <input
                                            className="form-control"
                                            name="email"
                                            value={editData.email}
                                            onChange={handleChange}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <h6 className="mb-1 fw-semibold">{user.name}</h6>
                                        <small className="text-muted">{user.email}</small>
                                    </>
                                )}
                            </div>

                            {/* ACTION BUTTONS */}
                            <div className="d-flex gap-2">
                                {editingId === user.id ? (
                                    <button
                                        onClick={() => handleUpdate(user.id)}
                                        className="btn btn-success btn-sm"
                                        disabled={updateLoadingId === user.id}
                                    >
                                        {updateLoadingId === user.id ? (
                                            <Spinner size="sm" animation="border" />
                                        ) : (
                                            "Update"
                                        )}
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleEdit(user)}
                                        className="btn btn-outline-secondary btn-sm"
                                        disabled={editLoadingId === user.id}
                                    >
                                        {editLoadingId === user.id ? (
                                            <Spinner size="sm" animation="border" />
                                        ) : (
                                            "Edit"
                                        )}
                                    </button>
                                )}
                                <button
                                    onClick={() => handleDelete(user.id)}
                                    className="btn btn-outline-danger btn-sm"
                                    disabled={deleteLoadingId === user.id}
                                >
                                    {deleteLoadingId === user.id ? (
                                        <Spinner size="sm" animation="border" />
                                    ) : (
                                        "Delete"
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
        {totalPages > 1 && (
            <Pagination className="justify-content-center mt-4">
                <Pagination.Prev
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                />
                {[...Array(totalPages)].map((_, index) => (
                    <Pagination.Item
                        key={index + 1}
                        active={index + 1 === currentPage}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                />
            </Pagination>
        )}
    </div>
    );
};

export default UsersTable;