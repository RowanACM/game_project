import React from "react";
import Header from "./Header";
import {Container} from "react-bootstrap";

interface Props {
    name : string
}

export default class PageContainer extends React.Component<Props> {

    private name: string;

    constructor(props: Props) {
        super(props);
        this.name = props.name;
        document.title = "React Game - " + this.name; // TODO: Store strings somewhere
    }

    render() {
        return (
            <div>
                <Header active={this.name}/>
                <Container>
                    {this.props.children}
                </Container>
            </div>
        )
    }

};
