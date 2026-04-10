import { Component } from "react";

class RightSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plan: "",
            name: "",
            contact: "",
            email: "",
            errors: {}
        };
        console.log("Constructor: Initializes state");
    }

    componentDidMount() {
        console.log("componentDidMount : when component render first time");
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.checkValid != this.props.checkValid) {
            console.log("Component props Updates....");
        } else if (prevState != this.state) {
            console.log("Component state Updates....");
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount : components removed");
    }

    validateField = (name, value) => {
        let error = "";

        if (name === "name") {
            const nameRegex = /^[A-Za-z ]+$/;

            if (!value) error = "Username is required";
            else if (!nameRegex.test(value)) error = "Name cannot contain numbers";
            else if (value.length < 3) error = "Minimum 3 characters required";
        }

        if (name === "email") {
            if (!value) error = "Email is required";
            else if (!value.includes("@") || !value.includes(".")) {
                error = "Invalid email";
            }
        }

        if (name === "contact") {
            if (!value) error = "Contact is required";
            else if (value.length < 10 || value.length > 12) {
                error = "Must be 10-12 digits";
            } else if (!/^[6-9]/.test(value)) {
                error = "Must start with 6-9";
            }
        }

        if (name === "plan") {
            if (!value) error = "Please select a plan";
        }

        return error;
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prev => ({
            ...prev,
            [name]: value
        }));
    };

    handleBlur = (e) => {
        const { name, value } = e.target;

        const error = this.validateField(name, value);
        this.setState(prev => ({
            ...prev,
            errors: {
                ...prev.errors,
                [name]: error
            }
        }));
    };

    validate = () => {
        let newErrors = {};
        const { name, email, contact, plan } = this.state;
        const fields = { name, email, contact, plan };

        Object.keys(fields).forEach((field) => {
            const error = this.validateField(field, this.state[field]);
            if (error) newErrors[field] = error;
        });

        this.setState(prev => ({
            ...prev,
            errors: newErrors
        }));

        return Object.keys(newErrors).length === 0;
    };

    handleForm = (e) => {
        e.preventDefault();

        if (this.validate()) {
            // alert()
            this.props.checkValid(true);
        }
    };

    render() {
        return (
            <div className="right-section">
                <form action="#" onSubmit={this.handleForm}>
                    <div className="mb-4">
                        <label>Select Plan</label>
                        <div className="plan-wrap">
                            <div>
                                <input type="radio" name="plan" id="basic" value="basic" onChange={this.handleChange} />
                                <label htmlFor="basic">Basic</label>
                            </div>
                            <div>
                                <input type="radio" name="plan" id="silver" value="silver" onChange={this.handleChange} />
                                <label htmlFor="silver">Silver</label>
                            </div>
                            <div>
                                <input type="radio" name="plan" id="gold" value="gold" onChange={this.handleChange} />
                                <label htmlFor="gold">Gold</label>
                            </div>
                        </div>
                        {this.state.errors.plan && <p className="error">{this.state.errors.plan}</p>}
                    </div>
                    <div className="my-4">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Full Name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                        />
                        {this.state.errors.name && <p className="error">{this.state.errors.name}</p>}
                    </div>
                    <div className="my-4">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email Id"
                            value={this.state.email}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                        />
                        {this.state.errors.email && <p className="error">{this.state.errors.email}</p>}
                    </div>
                    <div className="my-4">
                        <label>Phone No.</label>
                        <input
                            type="number"
                            name="contact"
                            placeholder="Enter Your Contact No."
                            value={this.state.contact}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                        />
                        {this.state.errors.contact && <p className="error" id="contact-error">{this.state.errors.contact}</p>}
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default RightSection;