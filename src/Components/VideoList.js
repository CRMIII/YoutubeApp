import React from 'react';
import VideoTile from './VideoTile';

const VideoList = (props) => {
        

        const mapVideos = props.videos.map((video, index) => {
        const finalArray = []
            console.log(video)
            finalArray.push(<VideoTile name={video.snippet.title} key={index} id={video.id.videoId}/>)
            return finalArray
        }

        )
        console.log(mapVideos)
        return (
                <div style={{ marginTop: '55px' }}>{mapVideos}</div>
        
        )

}

export default VideoList;