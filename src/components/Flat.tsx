import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import { TableInfo } from './TableInfo'
import { IFlatsState } from '../api'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

import flat1 from '../assets/img/1.jpg'

export interface Iflat {
    flatInfo: IFlatsState
}

interface IFlatComponent extends Iflat {
    setAllFlats: React.Dispatch<React.SetStateAction<IFlatsState[] | null>>
    allFlats: null | IFlatsState[]
}

export const Flat: React.FC<IFlatComponent> = ({
    flatInfo,
    setAllFlats,
    allFlats,
}: IFlatComponent): React.ReactElement => {
    const handleLikeClick = (id: number) => {
        const flats = allFlats?.map(item => {
            if (item.id === id) {
                item.isLiked = !item.isLiked
                return item
            } else {
                return item
            }
        })

        setAllFlats(flats ?? null)
    }
    
    return (
        <Card
            sx={{
                maxWidth: 345,
                height: 550,
                display: 'flex',
                flexFlow: 'column wrap',
                justifyContent: 'space-between',
                margin: '3rem auto 1rem',
            }}>
            <CardActionArea>
                <CardMedia component="img" height="140" image={flat1} alt="common flat" />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {flatInfo.attributes.title}
                    </Typography>
                    <TableInfo flatInfo={flatInfo} />
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={() => handleLikeClick(flatInfo.id)} size="small" color="primary">
                    Like
                </Button>
                {flatInfo.isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </CardActions>
        </Card>
    )
}
