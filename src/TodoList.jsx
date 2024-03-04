import React from "react";
export default function TodoList(props){


    return (
        <form onSubmit={props.props.lisaus}>
        <input type="text" name="teksti" value={props.props.kentta.teksti} onChange={props.props.kenttaMuuttui} placeholder="Tehtävä" />
        <input type="text" name="pvm" value={props.props.kentta.pvm} onChange={props.props.kenttaMuuttui} placeholder="Päivämäärä" />
        <button type="submit">Lisää</button>
        </form>
    )
}