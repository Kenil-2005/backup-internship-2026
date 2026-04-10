import React from "react";
import FactCheck from "../FactSection/FactCheck";
import BreadCrumb from "../BreadCrumb";
import ContactDetails from "./ContactDetails";

const Contact = () => {
    return (
        <>
            <BreadCrumb title={"Contact Us"} desc={"Contact"} />
            <FactCheck />
            <ContactDetails />
        </>

    );
};

export default Contact;
