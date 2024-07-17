import React from 'react'

import PropTypes from 'prop-types'

const Component2 = (props) => {
  return (
    <>
      <div className="component2-container">
        <span className="component2-text heading3">{props.text}</span>
        <span className="bodySmall">{props.text1}</span>
      </div>
      <style jsx>
        {`
          .component2-container {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .component2-text {
            font-weight: 700;
          }
          @media (max-width: 991px) {
            .component2-text {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

Component2.defaultProps = {
  text: 'What are the payment methods accepted for joining paid contests?',
  text1:
    'We accept payments through various methods such as UPI, Digital Wallets.',
}

Component2.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Component2
