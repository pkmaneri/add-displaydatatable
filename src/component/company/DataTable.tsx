import React, { useState } from "react"
import DisplayDataTable from "./DisplayDataTable"
function DataTable() {

    var tableStyle = {
        width: "100%",
        color: "red"
    }
    var tdStyle = {
        width: "50%",
        color: "blue"
    }
    var [collegeNameInputed, setCollegeName] = useState("")
    var [collegeIdInputed, setCollegeId] = useState("")

    function collegeName(e: any) {
        setCollegeName(e.target.value)

    }
    function collegeId(e: any) {
        setCollegeId(e.target.value);

    }
    return (
        <>
        <table style={tableStyle} >
            <tbody>
                <tr>
                    <td style={tdStyle}>
                        College Name
                </td >
                    <td style={tdStyle}>
                        <input type="text" onChange={collegeName} value={collegeNameInputed}></input>
                    </td>
                </tr>
                <tr>
                    <td style={tdStyle}>
                        College Id
            </td >
                    <td style={tdStyle}>
                        <input type="text" onChange={collegeId} value={collegeIdInputed}></input>
                    </td>
                </tr>
            </tbody>
        </table>
        {collegeIdInputed} {collegeNameInputed}
        <hr/>
        <DisplayDataTable collegeIdInputed={collegeIdInputed} collegeNameInputed={collegeNameInputed}/>
        </>
    )

}
export default DataTable