// import React from 'react';
// import './Search.css';
// import SearchIcon from '@material-ui/icons/Search';
// import StarsIcon from '@material-ui/icons/Stars';

// export default function Search() {
//     return (
//         <>
//             <div class="search">
//                 <input
//                     type="text"
//                     class="searchTerm"
//                     placeholder="What are you looking for?"
//                 />
//                 <button type="submit" class="searchButton">
//                     {<SearchIcon />}
//                 </button>
//             </div>
//             <div className="card">
//                 <div class="card-img">
//                     <img
//                         src="https://images.unsplash.com/photo-1558024160-4bcccd62f54c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//                         alt="Card image"
//                     />
//                 </div>
//                 <div class="card-body">
//                     <div>
//                         <h4 class="card-title">Card title</h4>
//                         <span>{<StarsIcon />}</span>
//                         <p class="card-text">
//                             Some amazing content lorem ipsum dolor sit amet,
//                             consectetur adipiscing elit.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="card">
//                 <div class="card-img">
//                     <img
//                         src="https://images.unsplash.com/photo-1558024160-4bcccd62f54c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//                         alt="Card image"
//                     />
//                 </div>
//                 <div class="card-body">
//                     <h4 class="card-title">Card title</h4>
//                     <p class="card-text">
//                         Some amazing content lorem ipsum dolor sit amet,
//                         consectetur adipiscing elit.
//                     </p>
//                 </div>
//             </div>
//             <div className="card">
//                 <div class="card-img">
//                     <img
//                         src="https://images.unsplash.com/photo-1558024160-4bcccd62f54c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//                         alt="Card image"
//                     />
//                 </div>
//                 <div class="card-body">
//                     <h4 class="card-title">Card title</h4>
//                     <p class="card-text">
//                         Some amazing content lorem ipsum dolor sit amet,
//                         consectetur adipiscing elit.
//                     </p>
//                 </div>
//             </div>
//         </>
//     );
// }

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
import { useTutorInfoStyles } from '@mui-treasury/styles/info/tutor';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './SearchResult.css';
import SearchBar from './SearchBar';

const useStyles = makeStyles(() => ({
    action: {
        backgroundColor: '#fff',
        boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
        '&:hover': {
            backgroundColor: '#f50057',
            color: '#000',
        },
    },
}));

export default function SearchResult(props) {
    const styles = useStyles();
    const iconBtnStyles = useSizedIconButtonStyles({ padding: 6 });
    const avatarStyles = useDynamicAvatarStyles({ radius: 12, size: 100 });
    return (
        <>
            <SearchBar
                onSubmit={props.handleSubmit}
                type="text"
                value={props.value}
                onChange={props.handleChange}
            />
            {props.place &&
                props.place.map((p) => {
                    return (
                        <Row
                            p={1.5}
                            gap={2}
                            bgcolor={'#f5f5f5'}
                            borderRadius={16}
                            borderBottom={1}
                        >
                            <Item>
                                <Avatar
                                    classes={avatarStyles}
                                    src={'img111.jpg'}
                                />
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
                                >
                                    <FavoriteBorderIcon />
                                </IconButton>
                            </Item>
                        </Row>
                    );
                })}
        </>
    );
}
