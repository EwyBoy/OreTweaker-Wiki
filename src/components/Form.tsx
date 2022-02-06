import React from "react";
import {IPeople} from "../App";

interface IProps {
    people: IPeople["people"];
    setPeople: React.Dispatch<React.SetStateAction<IPeople["people"]>>;
}


const Form: React.FC<IProps> = ({ people, setPeople }) => {

    const [input, setInput] = React.useState({
        name: "",
        age: 0
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInput({
            ...input,
            [name]: value
        });
    };

    const handleSubmit = (): void => {
        if (!input.name || !input.age) {
            return;
        }

        setPeople([
            ...people,
            {
                name: input.name,
                age: input.age
            }
        ]
        );

    };

    return (
        <div>
            <input
                type="text"
                placeholder="name"
                value={input.name}
                onChange={handleChange}
                name="name"
            />
            <br />
            <input
                type="number"
                placeholder="age"
                value={input.age}
                onChange={handleChange}
                name="age"
            />
            <button onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
}


export default Form;