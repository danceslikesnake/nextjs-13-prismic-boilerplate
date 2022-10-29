import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import { useDetectMobile } from '../../../utils/hooks/useDetectMobile';
import { useIsOverflow } from '../../../utils/hooks/useIsOverflow';
import Box from '../Box';
import FlexBox from '../FlexBox';
import IconFontAwesome from '../IconFontAwesome';
import styles from './SlideoutPanel.module.scss';

function SlideoutPanel({
  reveal,
  children,
  closeButtonOnClick,
  closeOnClickOutside,
  title,
}) {
  const { height } = useDetectMobile();
  const content = useRef();
  const isOverflow = useIsOverflow(content);
  const [addTopShadow, setAddTopShadow] = useState(false);
  const [addBottomShadow, setAddBottomShadow] = useState(false);
  const [initialOverflowCheck, setInitialOverflowCheck] = useState(true);

  const onScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = content.current;

    if (isOverflow && scrollTop > 0 && !addTopShadow) setAddTopShadow(true);
    else if (isOverflow && scrollTop === 0 && addTopShadow)
      setAddTopShadow(false);

    if (isOverflow && scrollTop + clientHeight === scrollHeight) {
      if (addBottomShadow) setAddBottomShadow(false);
    } else if (!addBottomShadow) setAddBottomShadow(true);
  };

  useEffect(() => {
    if (initialOverflowCheck && isOverflow) {
      setAddBottomShadow(true);
      setInitialOverflowCheck(false);
    }
  }, [isOverflow]);

  useEffect(() => {
    const body = document.querySelector('body');
    const scrollY = document.body.style.top;

    body.style.top = reveal ? `-${window.scrollY}px` : '';
    body.style.position = reveal ? 'fixed' : '';
    body.style.width = reveal ? '100%' : '';
    if (!reveal) {
      window.scrollTo(0, Number.parseInt(scrollY || '0') * -1);
    }
  }, [reveal]);

  return (
    <>
      {closeOnClickOutside && (
        <Box
          role='button'
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.code === 'Escape') closeButtonOnClick();
          }}
          onClick={closeButtonOnClick}
          className={classnames(styles.overlay, {
            [styles.reveal]: reveal,
          })}
        />
      )}
      <FlexBox
        flexDirection='column'
        style={{ height }}
        className={classnames(styles.panel, {
          [styles.reveal]: reveal,
        })}
      >
        <FlexBox flexDirection='column' className={styles.contentWrapper}>
          {addTopShadow && <Box className={styles.contentTopShadow} />}
          {addBottomShadow && <Box className={styles.contentBottomShadow} />}
          <FlexBox
            paddingVertical='xxs'
            justifyContent='space-between'
            alignItems='center'
            className={styles.header}
            gap='s'
          >
            <Box className={styles.header__text}>{title}</Box>
            <Box>
              <button
                type='button'
                onClick={closeButtonOnClick}
                className={styles.closeButton}
              >
                <IconFontAwesome name='Times' />
              </button>
            </Box>
          </FlexBox>
          <div ref={content} onScroll={onScroll} className={styles.content}>
            {children}
          </div>
        </FlexBox>
      </FlexBox>
    </>
  );
}

SlideoutPanel.propTypes = {
  reveal: PropTypes.bool,
  children: PropTypes.any,
  closeButtonOnClick: PropTypes.func,
  closeOnClickOutside: PropTypes.bool,
  title: PropTypes.string,
};

SlideoutPanel.defaultProps = {
  closeOnClickOutside: true,
};

export default SlideoutPanel;
