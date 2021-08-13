import React from 'react'
import {
    DocumentCard,
    DocumentCardActivity,
    DocumentCardTitle,
    DocumentCardDetails,
    DocumentCardImage,
    IDocumentCardStyles,
    IDocumentCardActivityPerson,
  } from '@fluentui/react/lib/DocumentCard';
  import { IIconProps } from '@fluentui/react/lib/Icon';
import "./Card.css"
import { ImageFit } from '@fluentui/react';

const people: IDocumentCardActivityPerson[] = [
    { name: 'Roko Kolar', profileImageSrc: '', initials: 'RK' },
    { name: 'Christian Bergqvist', profileImageSrc: '', initials: 'CB' },
  ];

const oneNoteIconProps: IIconProps = {
    iconName: 'OneNoteLogo',
    styles: { root: { color: '#813a7c', fontSize: '120px', width: '120px', height: '120px' } },
  };


function Card() {
    const cardStyles: IDocumentCardStyles = {
        root: { display: 'inline-block', marginRight: 20, marginBottom: 20, width: 320 },
      };

    return (
        <DocumentCard
        aria-label={
          'Document Card with icon. How to make a good design. ' +
          'Last modified by Christian Bergqvist in January 1, 2019.'
        }
        styles={cardStyles}
        onClickHref="https://crowdx.azurewebsites.net"
      >
        <DocumentCardImage height={150} imageFit={ImageFit.cover} iconProps={oneNoteIconProps} />
        <DocumentCardDetails>
          <DocumentCardTitle title="How to make a good design" shouldTruncate />
        </DocumentCardDetails>
        <DocumentCardActivity activity="Modified January 1, 2019" people={[people[1]]} />
      </DocumentCard>
    )
}

export default Card
