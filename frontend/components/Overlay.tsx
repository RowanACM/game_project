import React from "react";

export default class Overlay extends React.Component {

    render() {

        return (
            <div id={"overlay"}>

                <div class="d-flex justify-content-center">
                    <h1 style={{color: "white", position: "relative"}}>Sign In:</h1>
		        </div>

		        <div class="d-flex justify-content-center">
                    <form>
                        <div class = "form-group">
                            <label for = "username">Username:</label>
                            <input type = "username" class = "form-group" placeholder = "enter username" id = "username"></input>
                        </div>

                        <div class = "form-group">
                            <label for = "password">Password:</label>
                            <input type = "password" class = "form-group" placeholder = "enter password" id = "password"></input>
		                    
		                </div>
		        
                <div class="d-flex justify-content-center">
                    <button type = "submit" class = "btn btn-primary">Submit</button>
                </div>
		


                </form>
		</div>
            </div>

        );

    }

}