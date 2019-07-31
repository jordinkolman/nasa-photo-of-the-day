import React from 'react'
import { Segment, Image } from 'semantic-ui-react'

export default function PhotoCard({ data }) {
    const getMedia = () => {
        if(data.media_type === 'image') {
            return <Image src={data.url} alt='temp' />
        }
        else if (data.media_type === 'video') {
            return <iframe src={data.url} width='500' height = '300' title='temp' />
        }
    }
    return (
        <Segment className = 'photo-card'>
            {getMedia()}
        </Segment>
    )
}