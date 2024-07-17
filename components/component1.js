import React from 'react'

import PropTypes from 'prop-types'

const Component1 = (props) => {
  return (
    <>
      <div className="component1-container">
        <span className="component1-text heading3">{props.text}</span>
        <span className="bodySmall">{props.text1}</span>
      </div>
      <style jsx>
        {`
          .component1-container {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .component1-text {
            font-weight: 700;
          }
          @media (max-width: 991px) {
            .component1-text {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

Component1.defaultProps = {
  text: 'How are the winners determined in the paid contests?',
  text1:
    'The winners in the paid contests are determined based on their performance and scores achieved in the respective game.',
}

Component1.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Component1
