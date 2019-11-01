import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import NavbarText from "react-bootstrap/Navbar";

interface Props {
    name: string
}

export default class Header extends React.Component<Props> {

    private name: string;

    constructor(props: Props) {
        super(props);

        this.name = props.name;

    }

    render() {

        return (

            <Navbar bg={"dark"} variant={"dark"}>
                <Navbar.Brand href="#home">
                    <h1>Home</h1>
                </Navbar.Brand>
                <Nav>
                    <NavbarText>{this.name}</NavbarText>
                </Nav>
            </Navbar>

        );

    }

}
