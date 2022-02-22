import React from "react";
import { useDispatch } from "react-redux";
import "./List.scss";
const List = ({ dataList, modal, setModal }) => {
    const dispatch = useDispatch();
    console.log("list", dataList);

    return (
        <div className="list">
            <div className="list__header">
                <h2 className="list__title">Some lists</h2>
                <button
                    onClick={() => {
                        setModal(!modal);
                    }}
                    type="button"
                    className="list__btn btn btn-info"
                >
                    ADD PERSON
                </button>
            </div>
            <div className="list__object">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">firstName</th>
                            <th scope="col">lastName</th>
                            <th scope="col">email</th>
                            <th scope="col">gender</th>
                            <th scope="col">developer</th>
                            <th scope="col">phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataList.map((item, index) => {
                            const {
                                id,
                                firstName,
                                lastName,
                                email,
                                gender,
                                developer,
                                phone,
                            } = item;
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{firstName}</td>
                                    <td>{lastName}</td>
                                    <td>{email}</td>
                                    <td>{gender}</td>
                                    <td>{developer}</td>
                                    <td>{phone}</td>
                                    <td>
                                        <button
                                            className="btn btn-outline-info"
                                            onClick={() => {
                                                dispatch({
                                                    type: "EDIT_POST",
                                                    payload: id,
                                                });
                                                setModal(true);
                                            }}
                                        >
                                            edit
                                        </button>
                                        <button
                                            className="btn btn-outline-danger ms-3"
                                            onClick={() => {
                                                dispatch({
                                                    type: "DELETE_POST",
                                                    payload: id,
                                                });
                                            }}
                                        >
                                            delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;
