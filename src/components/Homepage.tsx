import React from "react";
import PageContainer from "./PageContainer";
import game from "../p5/sketch";
import P5Wrapper from "../p5/wrapper";

export default class Homepage extends React.Component {

    render() {

        return(
            <PageContainer name={"Play"}>

                <P5Wrapper sketch={game}/>

            </PageContainer>
        )

    }

}