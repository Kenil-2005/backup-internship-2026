import React from 'react';
import BreadCrumb from '../BreadCrumb';
import TeamDetails from './TeamDetails';
import FactCheck from '../FactSection/FactCheck';


const Team = () => {
    return (
        <>
            <BreadCrumb title={"Out Team"} desc={"Team"} />
            <FactCheck />
            <TeamDetails />
        </>
    );
};

export default Team;