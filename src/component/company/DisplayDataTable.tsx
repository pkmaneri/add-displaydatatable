import React from "react"

interface DisplayDataTableProps {
    collegeIdInputed: string;
    collegeNameInputed: string;
  }

function DisplayDataTable(displayDataTableProps: DisplayDataTableProps) {
    var tableStyle = {
        width: "100%",
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
                <tr >
                    <td>
                        {displayDataTableProps.collegeNameInputed}
                    </td>
                    <td>
                        {displayDataTableProps.collegeIdInputed}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default DisplayDataTable