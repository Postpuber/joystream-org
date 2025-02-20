import React from 'react';
import { string, func, number, bool, oneOf, oneOfType } from 'prop-types';
import cn from 'classnames';

import Link from '../Link';

import { ReactComponent as PeopleIcon } from '../../assets/svg/people.svg';

import { linkPropTypes } from '../../propTypes';

import './style.scss';

const propTypes = {
  ...linkPropTypes,
  image: func.isRequired,
  title: string.isRequired,
  count: oneOfType([string, number]),
  className: string,
  hasLabel: bool,
  type: oneOf(['current', 'migration', 'most']),
};

const defaultProps = {
  count: null,
  className: '',
  hasLabel: false,
  type: 'current',
};

const numberWrapper = number => {
  return <span className="RoleCard__counter">{number || '-'}</span>;
};

const contentTypes = {
  migration: number => <>At migration, {numberWrapper(number)} (max) had this role</>,
  current: number => <>{numberWrapper(number)} run this role on Babylon</>,
  most: number => <>At most, {numberWrapper(number)} users occupied this role</>,
};

const RoleCard = ({ image: Image, title, count, type, className, hasLabel, oldTestnet, ...props }) => {
  const classes = cn('RoleCard', className, {
    'RoleCard--labeled': hasLabel,
    'RoleCard--small': !count,
  });
  return (
    <Link className={classes} {...props}>
      <Image className="RoleCard__image" />
      <div className="RoleCard__content">
        <p className="RoleCard__title">{title}</p>
        {(!oldTestnet && count) && (
          <p className="RoleCard__info">
            <PeopleIcon className="RoleCard__icon" />
            {contentTypes[type](count)}
          </p>
        )}
      </div>
    </Link>
  );
};

RoleCard.propTypes = propTypes;
RoleCard.defaultProps = defaultProps;

export default RoleCard;
