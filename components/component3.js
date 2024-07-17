import React from 'react'

import PropTypes from 'prop-types'

const Component3 = (props) => {
  return (
    <>
      <div className="component3-container">
        <span className="component3-text heading3">{props.text}</span>
        <span className="bodySmall">{props.text1}</span>
      </div>
      <style jsx>
        {`
          .component3-container {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .component3-text {
            font-weight: 700;
          }
          @media (max-width: 991px) {
            .component3-text {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

Component3.defaultProps = {
  text: 'Are there any age restrictions for participating in the paid contests?',
  text1:
    'Yes, participants must be at least 18 years old to join the paid contests.',
}

Component3.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Component3
