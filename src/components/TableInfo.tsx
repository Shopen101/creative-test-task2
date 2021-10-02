import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Iflat } from './Flat'

export const TableInfo: React.FC<Iflat> = ({ flatInfo }: Iflat): React.ReactElement => {
    const { area, unit } = flatInfo.attributes
    const {
        attributes: { first_name, last_name, middle_name },
    } = flatInfo.relationships

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 150 }} size="small" aria-label="a dense table">
                <TableBody>
                    <>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                Название:
                            </TableCell>
                            <TableCell align="right">{flatInfo.attributes.title}</TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                Адрес:
                            </TableCell>
                            <TableCell align="right">
                                {Object.values(flatInfo.attributes.address).join(', ')}
                            </TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                Размер:
                            </TableCell>
                            <TableCell align="right">
                                {area} {unit}
                            </TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                Владелец:
                            </TableCell>
                            <TableCell align="right">
                                {first_name} {last_name} {middle_name}
                            </TableCell>
                        </TableRow>
                    </>
                </TableBody>
            </Table>
        </TableContainer>
    )
}
