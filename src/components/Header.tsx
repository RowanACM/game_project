import React from "react";
import {Navbar} from "react-bootstrap";
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

            <Navbar bg={"dark"}>
                <NavbarText>{this.name}</NavbarText>
            </Navbar>

        );

    }

}
