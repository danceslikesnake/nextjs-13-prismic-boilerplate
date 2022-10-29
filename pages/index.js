import styles from './index.module.scss';
import Image from 'next/image';
import jwstImage from '../public/images/jwst-pillars.jpg';
import classnames from 'classnames';
import { Box, FlexBox } from '../components/ui';

export default function Home() {
  return (
    <div className={classnames('hero is-fullheight is-relative', styles.hero)}>
      <div className={styles.corners}>
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className={styles.heroImage}>
        <Image
          alt={'JWST Image of the Pillars of Creation'}
          fill
          src={jwstImage}
        />
      </div>
      <div className={styles.heroContent}>
        <FlexBox alignItems={'center'} gap={'m'}>
          <Box setPositionRelative>
            <div className={styles.extraInfo}>V 0.1.0</div>
          </Box>
          <Box setPositionRelative>
            <div className={classnames(styles.extraInfo, styles.nextjs)}>
              NextJS 13.0.0
            </div>
          </Box>
        </FlexBox>
        <h1 className={styles.headline}>NextJS Boilerplate</h1>
        <p className={styles.description}>
          A standalone boilerplate without authentication or an external
          databases/CMS
        </p>
      </div>
    </div>
  );
}
