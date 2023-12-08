import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { memo } from 'react';

const IMAGE_SIZE = 300;

interface ProfileCardProps {
  imgSrc: string;
  imgAlt: string;
  personName: string;
  occupation: string;
  description?: string;
  href: string;
}

const ProfileCard = memo(
  ({
    imgSrc,
    imgAlt,
    personName,
    occupation,
    description,
    href,
  }: ProfileCardProps) => {
    return (
      <Card sx={{ maxWidth: IMAGE_SIZE }} raised>
        <CardActionArea href={href}>
          <CardMedia
            sx={{ height: IMAGE_SIZE }}
            image={imgSrc}
            title={imgAlt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {personName}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              {occupation}
            </Typography>
            {description && (
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    );
  },
);

export default ProfileCard;
