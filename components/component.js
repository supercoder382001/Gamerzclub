import React from 'react'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
      <div className="app-component-container">
        <span className="app-component-text heading3">{props.text}</span>
        <span className="bodySmall app-component-text1">{props.text1}</span>
      </div>
      <style jsx>
        {`
          .app-component-container {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .app-component-text {
            font-weight: 700;
          }
          @media (max-width: 479px) {
            .app-component-text1 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  text: 'How can I participate in the paid contests?',
  text1:
    'To participate in the paid contests, you need to create an account on our website and then select the desired contest to join.',
}

AppComponent.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default AppComponent
