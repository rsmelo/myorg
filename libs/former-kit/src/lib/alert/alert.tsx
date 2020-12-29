import React from 'react'
import classNames from 'classnames'
import { isNil } from 'ramda'
import {
  element,
  func,
  oneOf,
  shape,
  string,
} from 'prop-types'
import ThemeConsumer from '../ThemeConsumer'

const consumeTheme = ThemeConsumer('UIAlert')

/**
 * The Alert component is used to create alerts of all kinds, such as `errors`, `warnings`, etc.
 */
const Alert = ({
  action,
  children,
  icon,
  onDismiss,
  theme,
  type,
}) => (
  <div className={classNames(theme.alert, theme[type])}>
    {!isNil(icon) && (
      <div className={theme.icon}>
        {icon}
      </div>
    )}
    <div
      aria-live="polite"
      className={theme.content}
      role="status"
    >
      {children}
      {(!isNil(action) && !isNil(onDismiss)) && (
        <h1>
          {action}
        </h1>
      )}
    </div>
  </div>
)

Alert.propTypes = {
  /**
   * The action text.
   */
  action: string,
  /**
   * The children element. It should contain a React element.
   */
  children: element.isRequired,
  /**
   * The alert icon. It must contain a React element.
   */
  icon: element,
  /**
   * The action callback.
   */
  onDismiss: func,
  /**
   * @see [ThemeProvider](#themeprovider) - Theme received from `consumeTheme` wrapper.
   */
  theme: shape({
    alert: string,
    content: string,
    error: string,
    icon: string,
    info: string,
    success: string,
    warning: string,
  }),
  /**
   * The types the alert can have. The background color
   * of the icon box changes based on the class related to the defined type.
   */
  type: oneOf([
    'error',
    'info',
    'success',
    'warning',
  ]).isRequired,
}

Alert.defaultProps = {
  action: null,
  icon: null,
  onDismiss: null,
  theme: {},
}

export default consumeTheme(Alert)
