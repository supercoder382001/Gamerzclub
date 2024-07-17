import React from 'react'

import PropTypes from 'prop-types'

const Component5 = (props) => {
  return (
    <>
      <div className="component5-container">
        <span className="component5-text heading3">{props.text}</span>
        <span className="bodySmall">{props.text1}</span>
      </div>
      <style jsx>
        {`
          .component5-container {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .component5-text {
            font-weight: 700;
          }
          @media (max-width: 479px) {
            .component5-text {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

Component5.defaultProps = {
  text1:
    'Currently, we organize paid contests for BGMI (Battlegrounds Mobile India), Freefire, and Call of Duty.',
  text: 'What are the supported games for paid contests?',
}

Component5.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default Component5
