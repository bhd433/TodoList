import React from "react";
export default function TodoTable(props) {


    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Tehtävä</th>
                        <th>Päivämäärä</th>
                    </tr>
                    {props.props.todo.map((todoItem, index) => (
                        <tr key={index}>
                            <td>{todoItem.teksti}</td>
                            <td>{todoItem.pvm}</td>
                            <td>
                                <button onClick={() => props.props.poistaTehtava(index)}>Poista</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}