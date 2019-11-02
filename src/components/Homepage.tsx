import React from "react";
import PageContainer from "./PageContainer";
import * as p5 from 'p5'
import game from "../p5/sketch";
import P5Wrapper from "../p5/wrapper";

export default class Homepage extends React.Component {

    render() {

        return(
            <PageContainer name={"Play"}>

                <h1>This is the homepage</h1>
                <P5Wrapper sketch={game} onP5Changed={this.onP5Changed}/>

            </PageContainer>
        )

    }

    private onP5Changed = (p: p5) => {
        // tslint:disable:no-console
        console.log(p5)
    }

}