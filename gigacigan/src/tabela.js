import React, { Fragment } from "react";
import classes from './tabela.module.css';

const Tabela = props => {
    return(
        <Fragment>
            <h1>{props.text}</h1>
            <table className={classes.table}>
                <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
            </tr>
        </table>
        </Fragment>
    );
}

export default Tabela;