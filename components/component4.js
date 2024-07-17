import React from 'react'

import PropTypes from 'prop-types'

const Component4 = (props) => {
  return (
    <>
      <div className="component4-container">
        <span className="component4-text heading3">{props.text}</span>
        <span className="bodySmall component4-text1">{props.text1}</span>
      </div>
      <style jsx>
        {`
          .component4-container {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .component4-text {
            font-weight: 700;
          }
          @media (max-width: 479px) {
            .component4-text {
              text-align: left;
            }
            .component4-text1 {
              text-align: justify;
            }
          }
        `}
      </style>
    </>
  )
}

Component4.defaultProps = {
  text1:
    'To participate in the paid contests, you need to create an account on our website and then select the desired contest to join.',
  text: 'How can I participate in the paid contests?',
}

Component4.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default Component4
