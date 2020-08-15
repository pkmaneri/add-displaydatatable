import React, { useState } from "react"
import DisplayDataTable from "./DisplayDataTable"
import { College } from "../../shared/util";

function DataTable() {

    var tableStyle = {
        width: "100%",
        color: "red"
    }
    var tdStyle = {
        width: "50%",
        color: "blue"
    }


    var intialDataArr: College[] = [];

    var [dataArr, setDataArr] = useState(intialDataArr)
    var [collegeNameInputed, setCollegeName] = useState("")
    var [collegeIdInputed, setCollegeId] = useState("")

    function collegeName(e: any) {
        setCollegeName(e.target.value)

    }
    function collegeId(e: any) {
        setCollegeId(e.target.value);

    }
    function handleOnClick() {
        // dataArr.push(collegeNameInputed);
        let colObj = {
            "name" : collegeNameInputed,
            "id": collegeIdInputed,
        }
        setDataArr([...dataArr, colObj])

        //reset form data
        setCollegeName("");
        setCollegeId("");

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
                    <tr>
                        <td>

                        </td>
                        <td>
                            <button onClick={handleOnClick}>Add</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <DisplayDataTable dataArr={dataArr} />
        </>
    )

}
export default DataTable