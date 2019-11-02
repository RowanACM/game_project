import React from "react";
import Header from "./Header";
import Footer from "./Footer";
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
            <div id={"pageContainer"}>
                <Header active={this.name}/>
                <Container className={"mt-5 px-5"}>
                    {this.props.children}
                </Container>
                <Footer/>
            </div>
        )
    }

};
