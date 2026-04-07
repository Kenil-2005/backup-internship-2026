import React from 'react';
import BreadCrumb from '../BreadCrumb';
import TeamDetails from './TeamDetails';


const Team = () => {
    return (
        <>
            <BreadCrumb title={"Out Team"} desc={"Team"} />
            <TeamDetails />
        </>
    );
};

export default Team;