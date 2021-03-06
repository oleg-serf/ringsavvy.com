import React from 'react';
import { Section } from '../section';
import { Wrapper } from '../wrapper';
import { FlexRow, OneHalf } from '../globals';
import * as Styled from './style';
import bulletPoint from '../../assets/images/bullet-point.svg';

const BulletSection = ({ bulletData, isFlipped }) => {
  const { heading, bullets, img } = bulletData;

  return (
    <Section>
      <Wrapper>
        <FlexRow alignCenter>
          <OneHalf isFirst>
            {isFlipped ? (
              <FlexRow center>
                <Styled.Image src={img} alt={heading} />
              </FlexRow>
            ) : (
              <>
                <h2>{heading}</h2>
                <Styled.UnorderedList>
                  {bullets.map((bullet) => (
                    <Styled.ListItem>
                      <img style={{ marginRight: '20px' }} src={bulletPoint} />
                      {bullet}
                    </Styled.ListItem>
                  ))}
                </Styled.UnorderedList>
              </>
            )}
          </OneHalf>
          <OneHalf>
            {isFlipped ? (
              <>
                <h2>{heading}</h2>
                <Styled.UnorderedList>
                  {bullets.map((bullet) => (
                    <Styled.ListItem>
                      <img style={{ marginRight: '20px' }} src={bulletPoint} />
                      {bullet}
                    </Styled.ListItem>
                  ))}
                </Styled.UnorderedList>
              </>
            ) : (
              <FlexRow center>
                <Styled.Image src={img} alt={heading} />
              </FlexRow>
            )}
          </OneHalf>
        </FlexRow>
      </Wrapper>
    </Section>
  );
};

export default BulletSection;
