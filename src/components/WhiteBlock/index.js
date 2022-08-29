import classNames from 'classnames';

import './WhiteBlock.scss';

const WhiteBlock = ({children, className}) => (
  <div className={classNames('block', className)}>{children}</div>
)

export default WhiteBlock;