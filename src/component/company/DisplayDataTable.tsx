import React from "react"
import { College } from "../../shared/util";


interface DisplayDataTableProps {
    dataArr: College[];
}

function DisplayDataTable(displayDataTableProps: DisplayDataTableProps) {
    var tableStyle = {
        width: "100%",
        display: displayDataTableProps.dataArr.length === 0 ? 'none' : 'table'
    }
    var tdStyle = {
        width: "50%"
    }

    return (
        <table style={tableStyle}>
            <tbody>
                <tr>
                    <td style={tdStyle}>
                        College Name
                    </td>
                    <td style={tdStyle}>
                        College Id
                    </td>
                </tr>
                {displayDataTableProps.dataArr.map((object, index) => {
                    let collegeIdInputed = object.id;
                    let collegeNameInputed = object.name;

                    return (
                        <tr key={index}>
                            <td>
                                {collegeNameInputed}
                            </td>
                            <td>
                                {collegeIdInputed}
                            </td>
                        </tr>
                    )

                })}
            </tbody>
        </table>

    )
}

export default DisplayDataTable