import React from "react";
import "./login.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
        }
    }
    handleChange = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields: fields
        });
        this.validateForm();
    }
    submituserRegistrationForm = (e) => {
        e.preventDefault();
        console.log("submituserRegistrationForm")
        if (this.validateForm()) {
            let fields = {};
            fields["username"] = "";
            fields["emailid"] = "";
            fields["dateofbirth"] = "";
            fields["mobileno"] = "";
            fields["password"] = "";

            this.setState({ fields: fields });
            alert("Form submitted");
        }

    }
    validateForm = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;


        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "*Please enter your username.";
        } else if (typeof fields["username"] !== "undefined") {
            if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["username"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";

        } else if (typeof fields["emailid"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailid"])) {
                formIsValid = false;
                errors["emailid"] = "*Please enter valid email-ID.";
            }
        }

        if (!fields["dateofbirth"]) {
            formIsValid = false;
            errors["dateofbirth"] = "*Please enter your date of birth .";
        }

        if (!fields["mobileno"]) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter your mobile no.";
        } else if (typeof fields["mobileno"] !== "undefined") {
            if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["mobileno"] = "*Please enter valid mobile no.";
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }


        // if (typeof fields["password"] !== "undefined") {
        //     if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        //         formIsValid = false;
        //         errors["password"] = "*Please enter secure and strong password.";
        //     }
        // }

        this.setState({
            errors: errors
        });
        return formIsValid;
    }
    render() {
        console.log(this.state.fields, "fields!!")
        return (
            <div id="login" className="login_wapper">
                <div className="login_container">
                    <h3>Registration </h3>
                    <form action="" method="post" name="userRegistrationForm" onSubmit={(e) => this.submituserRegistrationForm(e)}>
                        <input
                            type="text"
                            name="username"
                            value={this.state.fields.username}
                            onChange={(e) => this.handleChange(e)}
                            placeholder="enter your name"
                        />
                        <div className="errorMsg">{this.state.errors.username}</div>
                        <input
                            type="email"
                            name="emailid"
                            value={this.state.fields.emailid}
                            onChange={(e) => this.handleChange(e)}
                            placeholder="enter your email id"
                        />
                        <div className="errorMsg">{this.state.errors.emailid}</div>
                        <input
                            type="date"
                            name="dateofbirth"
                            value={this.state.fields.dateofbirth}
                            onChange={(e) => this.handleChange(e)}
                           
                        />
                        <div className="errorMsg">{this.state.errors.dateofbirth}</div>
                        <input
                            type="text"
                            name="mobileno"
                            value={this.state.fields.mobileno}
                            onChange={(e) => this.handleChange(e)}
                            placeholder="mobile no"
                        />
                        <div className="errorMsg">{this.state.errors.mobileno}</div>
                        <input
                            type="password"
                            name="password"
                            value={this.state.fields.password}
                            onChange={(e) => this.handleChange(e)}
                            placeholder="enter your password"
                        />
                        <div className="errorMsg">{this.state.errors.password}</div>
                        <input
                            type="submit"
                            className="button"
                            value="Register"
                        />
                    </form>

                </div>
            </div>
        )
    }
}


export default Login;
