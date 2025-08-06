import { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import data from "./data.json";

function App() {
    const [filteredList, setFilteredList] = useState(data);

    const filterBySearch = (event: any) => {
        const query = event.target.value;
        let updatedList = [...data];

        updatedList = updatedList.filter((gear) => {
            return gear["Name"].toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });

        setFilteredList(updatedList);
    };

    return (
        <>
            <header>
                <h1>gears-catalog</h1>

                <Form role="search">
                    <Form.Control placeholder="Search..." onChange={filterBySearch} />
                </Form>
            </header>

            <main>
                {filteredList.map((gear) => {
                    return (
                        <Card key={gear["AssetId"]} style={{ width: "18rem", height: "30rem" }}>
                            <Card.Img variant="top" src={`images/${gear["AssetId"]}.png`} />
                            <Card.Body>
                                <Card.Title>
                                    <a href={`https://www.roblox.com/catalog/${gear["AssetId"]}`}>
                                        {gear["Name"]}
                                    </a>
                                </Card.Title>
                                <Card.Text>ID: {gear["AssetId"]}</Card.Text>
                                <Button
                                    variant="primary"
                                    onClick={() => {
                                        navigator.clipboard.writeText(";insert "+gear["AssetId"].toString());
                                    }}
                                >
                                    Copy Id
                                </Button>
                            </Card.Body>
                        </Card>
                    );
                })}
            </main>
        </>
    );
}

export default App;
