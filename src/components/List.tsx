import React from "react";
import {IPeople} from "../App";

const List: React.FC<IPeople> = ({ people }) => {

    const renderList = (): JSX.Element[] => {
        return people.map(person => {
            return (
                <li>
                    <p>{person.name}'s name</p>
                    <p>{person.age} years old</p>
                </li>
            )
        });
    }

    return (
        <ul>
            {renderList()}
        </ul>
    );
};

export default List;
