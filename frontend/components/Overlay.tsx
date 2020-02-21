import React from "react";

export default class Overlay extends React.Component {

    render() {

        return (
            <div id={"overlay"}>
             
               
                <h1 style={{color: "white", position: "relative"}}>Sign In:</h1>
                <form>
                    Username:
                    <input type = "text" name = "username"></input>
                    <br></br>

                    Password:   
                    <input type = "password" name = "password"></input>
                    <br></br>
                    <input type = "submit" name = "submit"></input>
                </form>

                

            </div>

        );

    }

}