import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Container, Header, Icon } from 'semantic-ui-react'
import DateSelector from './DateSelector.js'
import PhotoCard from './PhotoCard.js'
import PhotoCaption from './PhotoCaption.js'

export default function PhotoGrid() {
    const [photoData, setPhotoData] = useState([])
    const [date, setDate] = useState()


    useEffect(() => {
        const getData = async () => {
        return await axios
            .get (`https://api.nasa.gov/planetary/apod`, {
                params: {
                    date: date,
                    api_key: 'UttC42JeTEKmPG409NUpS1UG0tmeUv81EvJtcDuf'
                }
            })
        }

        getData()
            .then(response => {
                setPhotoData(response.data)
            })
            .catch(error => {
                console.log('ERROR: ', error)
            })
    }, [date])

    const handleChange = event => {
        setDate(event.target.value)
    }

    if (!photoData) {
        return (
            <Container text textAlign ='center'>
                <Header size='huge' block>
                    <div>
                        <Icon loading name='spinner' />
                        <Header.content>Loading...</Header.content>
                    </div>
                </Header>
            </Container>
        )
    }
     return (
        <Container text textAlign='center'>
            <DateSelector handleChange={handleChange}/>
            <Container class='photo-container' style={{margin: '10px'}}>
                <PhotoCard data={photoData}/>
           </Container>
           <PhotoCaption imgTitle={photoData.title} imgDate={photoData.date} imgExplanation={photoData.explanation} imgCopyright={photoData.copyright} />
        </Container>
        ) 
} 