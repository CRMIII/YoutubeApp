import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const VideoList = props => {
  return (
    <Card.Group itemsPerRow={3} stackable>
      {props.videos.map(video => {
        const {
          snippet: { channelTitle, title, thumbnails },
        } = video;
        return (
          <Card>
            <Image src={thumbnails.medium.url} fluid />
            <Card.Content>
              <Card.Header>{title}</Card.Header>
              <Card.Meta>
                <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
                  {channelTitle}
                </a>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
                <Icon name="video" />
                {title}
              </a>
            </Card.Content>
          </Card>
        );
      })}
    </Card.Group>
  );
};

export default VideoList;
