import { IconButton } from '@chakra-ui/react';
import { Component, Fragment } from 'react';
import {
  FaTwitter,
  FaYoutube,
  FaReddit,
  FaFacebook,
  FaTwitch,
} from 'react-icons/all';

import ProfileCard from '../../components/cards/profile-card/profile-card';
import ProfileSection from '../../components/cards/profile-card/profile-section';
import StatusCarrousel from '../../components/carrousel/status-carrousel/StatusCarrousel';

import Header from '../../components/layout/header/header';

export default class Profile extends Component {
  render() {
    return (
      <Fragment>
        <Header ghost />
        <ProfileCard
          displayName="Sammwy"
          bio="Me gustan los gatitos que dicen Nya."
        />
        <div className="container">
          <ProfileSection title="👤 My social networks">
            <IconButton mx={1} icon={<FaTwitter />} />
            <IconButton mx={1} icon={<FaReddit />} />
            <IconButton mx={1} icon={<FaYoutube />} />
            <IconButton mx={1} icon={<FaFacebook />} />
            <IconButton mx={1} icon={<FaTwitch />} />
          </ProfileSection>

          <ProfileSection title="🎵 My favorite song">
            <iframe
              title="Spotify"
              src="https://open.spotify.com/embed/track/7ritPWOWvsthxFDxOz1OjH"
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              style={{ borderRadius: '20px' }}
            ></iframe>
          </ProfileSection>

          <ProfileSection title="📷 My stories">
            <StatusCarrousel />
          </ProfileSection>
        </div>
      </Fragment>
    );
  }
}
