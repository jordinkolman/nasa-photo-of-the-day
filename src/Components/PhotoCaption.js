import React from 'react'
import {Segment, Header, Container} from 'semantic-ui-react'

export default function PhotoCaption({ imgTitle, imgDate, imgExplanation, imgCopyright }) {
    return (
        <Container className = 'photo-caption' 
        style={{
            display: 'flex', 
            flexFlow: 'column', 
            alignItems: 'center', 
            justifyContent: 'space-around', 
            margin: '10px'
        }}>
            <Header 
            style={{
                fontSize: '2rem', 
                margin: '10px',
                color: 'white'
            }}>
                {imgTitle}
            </Header>
            <Header 
            style={{
                fontSize: '1.5rem', 
                marginBottom: '10px',
                color: 'white'
            }}>
                Date: {imgDate}
            </Header>
            <Segment 
            style={{
                width: '1000px', 
                marginBottom: '10px',
                color: 'white'
            }}>
                {imgExplanation}
            </Segment>
            <Segment 
            style={{
                color: 'gray', 
                fontSize: '0.8rem', 
                marginBottom: '10px', 
                marginTop: '40px',
            }}
                >Copyright: {imgCopyright}
            </Segment>
        </Container>
    )
}