import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import './App.css'

import Container from '@mui/material/Container'

import { Flat } from './components/Flat'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { flatsApi, IFlatsState } from './api'

const useStyles = makeStyles({
    centerCircle: {
        margin: '70px auto',
    },
})

function App() {
    const classes = useStyles()
    const [allFlats, setAllFlats] = useState<null | IFlatsState[]>(null)

    const fetchFlatsHandler = async () => {
        const flats = await flatsApi.fetchFlats()
        setAllFlats(flats)
    }

    useEffect(() => {
        fetchFlatsHandler()
    }, [])

    return (
        <div className="App">
            <Container maxWidth="lg">
                <Grid container >
                    {allFlats ? (
                        allFlats.map((flat, index) => {
                            return (
                                <>
                                    <Grid key={flat.attributes.title + index} item xl={4} lg={4} md={6} sm={12} xs={12}>
                                        <Flat flatInfo={flat} setAllFlats={setAllFlats} allFlats={allFlats} />
                                    </Grid>
                                </>
                            )
                        })
                    ) : (
                        <Box className={classes.centerCircle}>
                            <CircularProgress />
                        </Box>
                    )}
                </Grid>
            </Container>
        </div>
    )
}

export default App
