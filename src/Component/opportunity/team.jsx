
import React, { useEffect, useState } from "react";
import TeamMember from "../Modals/teammodal";
import ChangeTeamName from "../Modals/changeTeamName";

const Team = () => {
    const [paymentData, setpaymentData] = useState([]);
    console.log(paymentData);
    const [Team, setTeam] = useState([]);
    const [Name, setName] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('TeamMember_data'));
        if (items) {
            setTeam(items);
        }
    }, []);

    const handleAddTeam = (newTeam) => {
        setTeam((preTeam) => [...preTeam, newTeam]);
        console.log(newTeam, Team);
        localStorage.setItem('TeamMember_data', JSON.stringify([...Team, newTeam]));
    };
    
    const deleteTeam = (id) => {
        let updatedTeam = Team.filter(member => member.id !== id);
        console.log(updatedTeam, Team);
        setTeam(updatedTeam);
        localStorage.setItem('TeamMember_data', JSON.stringify(updatedTeam));
    };

    const storedData = JSON.parse(localStorage.getItem('paymentData'));
    useEffect(()=>{
        setpaymentData(storedData);
        // console.log(storedData.name);
    },[])

    const ChangeName = (storedData)=>{
        setpaymentData(storedData);
    }
    
    

    return (
        <>
            <div className=" px-3">
                <div className="d-flex justify-content-between mt-4 mb-4">
                    <h5 className=" ">
                        Team: {paymentData.teamname}
                    </h5>
                    <div>
                        <button className=" btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@mdo"> Add Team Member </button>&nbsp;&nbsp;&nbsp;
                        <TeamMember onAddTeam={handleAddTeam} />
                        <button className=" btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalName" data-bs-whatever="@mdo"> Change Team Name  </button>
                        <ChangeTeamName ChangeName={ChangeName}/>
                    </div>
                </div>
                <div className="border p-3">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Roll</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        {Team.map((New) => (
                            <tbody>
                                <tr className="">
                                    <th scope="row"> {paymentData.teamname}</th>
                                    <td> {New.email}</td>
                                    <td> <button className="border px-4">{New.role}</button></td>
                                    <td> </td>
                                    <td className=" btn" onClick={() => deleteTeam(New.id)}> Delete Account</td>
                                </tr>
                                <tr className="">
                                    <th scope="row"></th>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td className=" " key={New.id}><p className="account"></p></td>
                                </tr>


                            </tbody>
                        ))}

                    </table>
                </div>
            </div>
        </>
    )
}
export default Team;

