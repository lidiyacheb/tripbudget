import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
import { useTutorInfoStyles } from '@mui-treasury/styles/info/tutor';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { makeStyles } from '@material-ui/core/styles';
import './SearchResult.css';
const useStyles = makeStyles(() => ({
    action: {
        backgroundColor: '#fff',
        boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
    },
}));
const ImageLoader = ({ venueId }) => {
    const [imageUrl, setImageUrl] = useState('');
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };
        fetch(
            `https://api.foursquare.com/v2/venues/${venueId}/photos?client_id=MZO1E0505RYUUT1PIVIJAFFNWFNG124D4DUBFKX2TOM4I2ET&client_secret=5YHRS3XALKL12RMB2Y5HGDI0Z45EUQALO3DCZLNTWKEYI4EV&v=20190425&group=venue&limit=10`,
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                console.log(
                    result.response.photos.items[0].prefix +
                        '100' +
                        result.response.photos.items[0].suffix
                );
                setImageUrl(
                    result.response.photos.items[0].prefix +
                        '100' +
                        result.response.photos.items[0].suffix
                );
            })

            .catch((error) => console.log('error', error));
    }, []);
    return <img src={imageUrl} />;
};

const PlacesList = ({ venues, toggle }) => {
    const styles = useStyles();
    const iconBtnStyles = useSizedIconButtonStyles({ padding: 6 });
    const avatarStyles = useDynamicAvatarStyles({
        radius: 12,
        size: 100,
    });
    return (
        <div>
            {venues.map((p, idx) => {
                return (
                    <Row
                        p={1.5}
                        gap={2}
                        bgcolor={'#f5f5f5'}
                        borderRadius={16}
                        borderBottom={1}
                    >
                        <Item>
                            {true ? (
                                <ImageLoader venueId={p.id} />
                            ) : (
                                <Avatar
                                    classes={avatarStyles}
                                    style={{ backgroundColor: 'lightblue' }}
                                    src={
                                        p.categories[0].icon.prefix +
                                        '100' +
                                        p.categories[0].icon.suffix
                                    }
                                />
                            )}
                        </Item>
                        <Info
                            position={'middle'}
                            useStyles={useTutorInfoStyles}
                        >
                            <InfoTitle>{p.name}</InfoTitle>
                            <InfoSubtitle>
                                {p.location.address}, {p.location.city}
                            </InfoSubtitle>
                        </Info>
                        <Item ml={1} position={'middle'}>
                            <IconButton
                                className={styles.action}
                                classes={iconBtnStyles}
                                onClick={() => toggle(idx)}
                                style={
                                    p.favorite
                                        ? { backgroundColor: '#e64e6a' }
                                        : {}
                                }
                            >
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Item>
                    </Row>
                );
            })}
        </div>
    );
};

export default PlacesList;
